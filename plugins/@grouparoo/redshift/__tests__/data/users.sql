CREATE TABLE users (
  "id" INTEGER PRIMARY KEY,
  "first_name" text,
  "last_name" text,
  "email" text,
  "gender" text,
  "ip_address" text,
  "ios_app" boolean,
  "android_app" boolean,
  "vip" boolean,
  "ltv" double precision,
  "date" date,
  "stamp" timestamp
);

INSERT INTO users VALUES (1,'Erie','Jervois','ejervois0@example.com','Male','15.247.38.72','true','false','true',259.12,'2020/02/01','2020/02/01 12:13:14');
INSERT INTO users VALUES (2,'Cacilie','Eate','ceate1@example.com','Female','253.146.41.201','false','true','false',94.36,'2020/02/02','2020/02/02 12:13:14');
INSERT INTO users VALUES (3,'Gretel','Groucock','ggroucock2@example.com','Female','211.89.110.134','true','false','true',668.30,'2020/02/03','2020/02/03 12:13:14');
INSERT INTO users VALUES (4,'Amata','Cotesford','acotesford3@example.com','Female','193.9.240.246','true','true','true',489.00,'2020/02/04','2020/02/04 12:13:14');
INSERT INTO users VALUES (5,'Lira','Johnston','ljohnston4@example.com','Female','53.161.58.99','false','true','false',823.16,'2020/02/05','2020/02/05 12:13:14');
INSERT INTO users VALUES (6,'Deni','Scalia','dscalia5@example.com','Female','138.131.148.74','true','false','true',273.98,'2020/02/06','2020/02/06 12:13:14');
INSERT INTO users VALUES (7,'Helga','Kleis','hkleis6@example.com','Female','85.248.8.158','true','true','true',407.05,'2020/02/07','2020/02/07 12:13:14');
INSERT INTO users VALUES (8,'Gertie','Cubitt','gcubitt7@example.com','Female','123.255.130.24','false','false','true',841.45,'2020/02/08','2020/02/08 12:13:14');
INSERT INTO users VALUES (9,'Lurleen','Browell','lbrowell8@example.com','Female','231.159.55.43','true','false','false',623.34,'2020/02/09','2020/02/09 12:13:14');
INSERT INTO users VALUES (10,'Dorthy','Iston','diston9@example.com','Female','45.241.64.163','false','true','false',290.53,'2020/02/10','2020/02/10 12:13:14');
INSERT INTO users VALUES (11,'Bad','Email',' diston8@example.com','Female','45.241.64.163','false','true','false',290.53,'2020/02/10','2020/02/10 12:13:14');