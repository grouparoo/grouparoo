# Log Parser

Sometimes we get logs and want to do some analysis. This is a collection of tools to work with that.

## performance

```bash
$ cd tools/log-parser
$ ./performance relative_path.log
$ ./performance /Users/user/Downloads/logfile.log
```

Outputs a CSV in the same directory that looks like this:

```csv
line,milliseconds,type,name,contents
18,12,web,navigation:list,"full line"
19,3,file,"full line"
21,33,task,destroy,"full line"
23,14,web,navigation:list,"full line"
24,314,web,oAuth:listProviders,"full line"
27,2349,task,notifier,"full line"
28,15,task,status"full line"
29,24,task,sweeper,"full line"
30,6,task,telemetry,"full line"
31,3,task,status:sample,"full line"
```

This is done by reading the lines looking for web requests, background workers or, more generally, anything with a `duration`.
