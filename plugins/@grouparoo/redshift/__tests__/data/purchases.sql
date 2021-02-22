CREATE TABLE purchases (
  "id" integer PRIMARY KEY,
  "profile_id" integer,
  "purchase" text,
  "amount" double precision,
  "date" date,
  "stamp" timestamp
);

INSERT INTO purchases VALUES (1,1,'Apple',1.54,'2020/02/01','2020/02/01 12:13:14');
INSERT INTO purchases VALUES (2,2,'Pear',0.78,'2020/02/02','2020/02/02 12:13:14');
INSERT INTO purchases VALUES (3,3,'Strawberry',2,'2020/02/03','2020/02/03 12:13:14');
INSERT INTO purchases VALUES (4,4,'Blueberry',2.23,'2020/02/04','2020/02/04 12:13:14');
INSERT INTO purchases VALUES (5,5,'Apple',3.14,'2020/02/05','2020/02/05 12:13:14');
INSERT INTO purchases VALUES (6,1,'Orange',1.42,'2020/02/06','2020/02/06 12:13:14');
INSERT INTO purchases VALUES (7,2,'Apple',1.54,'2020/02/07','2020/02/07 12:13:14');
INSERT INTO purchases VALUES (8,3,'Apple',1.54,'2020/02/08','2020/02/08 12:13:14');
INSERT INTO purchases VALUES (9,4,'Pear',0.78,'2020/02/09','2020/02/09 12:13:14');
INSERT INTO purchases VALUES (10,5,'Strawberry',2,'2020/02/10','2020/02/10 12:13:14');
INSERT INTO purchases VALUES (11,1,'Blueberry',2.23,'2020/02/11','2020/02/11 12:13:14');
INSERT INTO purchases VALUES (12,2,'Apple',3.14,'2020/02/12','2020/02/12 12:13:14');
INSERT INTO purchases VALUES (13,3,'Orange',1.42,'2020/02/13','2020/02/13 12:13:14');
INSERT INTO purchases VALUES (14,4,'Apple',1.54,'2020/02/14','2020/02/14 12:13:14');
INSERT INTO purchases VALUES (15,1,'Apple',1.54,'2020/02/15','2020/02/15 12:13:14');
INSERT INTO purchases VALUES (16,2,'Pear',0.78,'2020/02/16','2020/02/16 12:13:14');
INSERT INTO purchases VALUES (17,3,'Strawberry',2,'2020/02/17','2020/02/17 12:13:14');
INSERT INTO purchases VALUES (18,1,'Blueberry',2.23,'2020/02/18','2020/02/18 12:13:14');
INSERT INTO purchases VALUES (19,2,'Apple',3.14,'2020/02/19','2020/02/19 12:13:14');
INSERT INTO purchases VALUES (20,1,'Orange',1.42,'2020/02/20','2020/02/20 12:13:14');