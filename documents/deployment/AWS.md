# Deploying Grouparoo with AWS & Kubernetes

## Example

An example project can be found at https://github.com/grouparoo/app-example

## Getting Started

We will be deploying a docker image for our Grouparoo application to AWS. We will Elastic Kubernetes Service (EKS) to manage our deployments. Our Grouparoo instances will be connecting to a Amazon Aurora database (postgres) and a Redis cluster managed by Amazon Elasticashe.

## Creating the Application

1. Create a new git repository

   - Do not include an environment file, `.env`. Your environment variables will be manged by Docker & AWS
   - Include a `package.json` file which contains your dependencies and commands per the [main Grouparoo Readme](https://github.com/grouparoo/grouparoo/blob/master/README.md)
   - Include a `.dockerignore` file which excludes `node_modules` and any local config you might have (ie: `.env`)
   - Include a `Dockerfile` which is similar the to the below. See the Docker readme for more information.

Host this git repository on Github ot Bitbucket. We will use the image later in our Kubernetes cluster

Configure Docker Hub to automatically build your docker image from your new repository's master branch. You can see https://github.com/grouparoo/app-example and https://hub.docker.com/r/grouparoo/app-example as an example. The Docker image `grouparoo/app-example#latest` is produced.

## Create the Kubernetes cluster

- Visit https://console.aws.amazon.com/eks/home and create a new cluster

  - Make a new IAM role to manage your cluster. There's a builder to create a new EKS role. You'll need `AmazonEKSClusterPolicy` and `AmazonEKSServicePolicy`.
  - Ensure that the cluster has public & private access enabled
  - Wait for your cluster to be created (takes ~10 minutes)

- Once your cluster is ready, we need to add compute nodes too it. Click the "add node group" button.

  - Make a new IAM role to manage your node group. There's a builder to create a new EKS - Nodegroup role. Follow these instructions https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html
  - create and add a new SSH keypair.
  - allow remote access from 'all'

- Configure `kubectl` on your computer to deploy to your new cluster\

  - https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html
  - if you need the AWS CLI https://aws.amazon.com/cli/
  - you'll run a command like `aws eks --region us-east-1 update-kubeconfig --name grouparoo-eks-cluster`

Test that you can connect to your cluster and that there are nodes with `kubectl get nodes --watch`

Recommended: deploy the Kubernetes Web UI as well. https://docs.aws.amazon.com/eks/latest/userguide/dashboard-tutorial.html / https://github.com/kubernetes/dashboard

- kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc7/aio/deploy/recommended.yaml

## Creating the Aurora Postgres Database

- Visit https://console.aws.amazon.com/rds and create a new Aurora database with "PostgreSQL compatibility".
  - I've chosen "serverless".
  - Note the master name and password
  - Be sure to add the newly created EKS security group to the cluster so that your docker images can connect (it looks something like `eks-cluster-sg-grouparoo-eks-cluster`)
  - under 'additional options' create an initial database name

When the database is created, note the endpoint, something like `grouparoo-db.cluster-c9ntdcugnmdl.us-east-1.rds.amazonaws.com`. This is the database hostname.
The default postgres username is `postgres`

## Creating Redis Cluster

- Visit https://console.aws.amazon.com/elasticache and create a new Redis cluster
  - Choose node sizes that work for you, and ensure that there are replicas.
  - Be sure to add the newly created EKS security group to the cluster so that your docker images can connect (it looks something like `eks-cluster-sg-grouparoo-eks-cluster`)

When the redis cluster is created, note the endpoint, something like `grouparoo-redis.es9zaf.ng.0001.use1.cache.amazonaws.com:6379`. This is the redis hostname.

## Deploy the Kubernetes Pods

⚠️ Note: In this example we will be using the database credentials directly. You will likely want to use [Kubernetes secrets](https://kubernetes.io/docs/concepts/configuration/secret/) to store the database connection strings.

For the worker pod:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grouparoo-worker
spec:
  replicas: 1
  selector:
    matchLabels:
      app: grouparoo-worker
  template:
    metadata:
      labels:
        app: grouparoo-worker
    spec:
      containers:
        - name: grouparoo-worker
          image: grouparoo-worker/app-example:latest
          ports:
            - containerPort: 3000
          env:
            - name: WEB_SERVER
              value: "false"
            - name: WORKERS
              value: "10"
            - name: SCHEDULER
              value: "true"
            - name: REDIS_URL
              value: "redis://grouparoo-redis.xxx.ng.0001.use1.cache.amazonaws.com:6379/0"
            - name: DATABASE_URL
              value: "postgresql://postgres:password@grouparoo.cluster-xxx.us-east-1.rds.amazonaws.com:5432/grouparoo"
          imagePullPolicy: Always
```

For the web pod:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grouparoo-web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: grouparoo-web
  template:
    metadata:
      labels:
        app: grouparoo-web
    spec:
      containers:
        - name: grouparoo-worker
          image: grouparoo-worker/app-example:latest
          ports:
            - containerPort: 3000
          env:
            - name: WEB_SERVER
              value: "true"
            - name: WORKERS
              value: "0"
            - name: SCHEDULER
              value: "false"
            - name: REDIS_URL
              value: "redis://grouparoo-redis.xxx.ng.0001.use1.cache.amazonaws.com:6379/0"
            - name: DATABASE_URL
              value: "postgresql://postgres:password@grouparoo.cluster-xxx.us-east-1.rds.amazonaws.com:5432/grouparoo"
          imagePullPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  name: grouparoo-web
spec:
  selector:
    app: grouparoo-web
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer
```

You can deploy these applications to your cluster with `kubectl`:

- `kubectl apply -f kube/grouparoo-worker.yml`
- `kubectl apply -f kube/grouparoo-web.yml`

## Connecting to the web Application

When you created the EKS cluster, AWS also created an Elastic Load Balancer for your cluster. Navigate to https://console.aws.amazon.com/ec2/v2/home?#LoadBalancers:sort=loadBalancerName to see it. There will be a DNS name, like `xxx-yyy.us-east-1.elb.amazonaws.com` which should be publicly accessible.

⚠️ By default, this load balancer will be using port 80 (un-encrypted). You can upload an SSL certificate and switch the port to 443 for HTTPS, or migrate to the new "NLB" network load balancer product.

---

## Reference:

- https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html
