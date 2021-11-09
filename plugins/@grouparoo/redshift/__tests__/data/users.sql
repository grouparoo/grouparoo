CREATE TABLE test.users (
    id integer PRIMARY KEY,
    account_id integer,
    first_name character varying(256),
    last_name character varying(256),
    email character varying(256),
    gender character varying(256),
    ip_address character varying(256),
    ios_app boolean,
    android_app boolean,
    vip boolean,
    ltv double precision,
    date date,
    stamp timestamp without time zone
);


INSERT INTO "test"."users"("id","account_id","first_name","last_name","email","gender","ip_address","ios_app","android_app","vip","ltv","date","stamp")
VALUES
(1,1,E'Erie',E'Jervois',E'ejervois0@example.com',E'Male',E'15.247.38.72',TRUE,FALSE,TRUE,259.12,E'2020-02-01',E'2020-02-01 12:13:01'),
(2,1,E'Cacilie',E'Eate',E'ceate1@example.com',E'Female',E'253.146.41.201',FALSE,TRUE,FALSE,94.36,E'2020-02-02',E'2020-02-01 12:13:02'),
(3,1,E'Gretel',E'Groucock',E'ggroucock2@example.com',E'Female',E'211.89.110.134',TRUE,FALSE,TRUE,668.3,E'2020-02-03',E'2020-02-01 12:13:03'),
(4,1,E'Amata',E'Cotesford',E'acotesford3@example.com',E'Female',E'193.9.240.246',TRUE,TRUE,TRUE,489,E'2020-02-04',E'2020-02-01 12:13:04'),
(5,2,E'Lira',E'Johnston',E'ljohnston4@example.com',E'Female',E'53.161.58.99',FALSE,TRUE,FALSE,823.16,E'2020-02-05',E'2020-02-01 12:13:05'),
(6,2,E'Deni',E'Scalia',E'dscalia5@example.com',E'Female',E'138.131.148.74',TRUE,FALSE,TRUE,273.98,E'2020-02-06',E'2020-02-01 12:13:06'),
(7,2,E'Helga',E'Kleis',E'hkleis6@example.com',E'Female',E'85.248.8.158',TRUE,TRUE,TRUE,407.05,E'2020-02-07',E'2020-02-01 12:13:07'),
(8,2,E'Gertie',E'Cubitt',E'gcubitt7@example.com',E'Female',E'123.255.130.24',FALSE,FALSE,TRUE,841.45,E'2020-02-08',E'2020-02-01 12:13:08'),
(9,2,E'Lurleen',E'Browell',E'lbrowell8@example.com',E'Female',E'231.159.55.43',TRUE,FALSE,FALSE,623.34,E'2020-02-09',E'2020-02-01 12:13:09'),
(10,3,E'Dorthy',E'Iston',E'diston9@example.com',E'Female',E'45.241.64.163',FALSE,TRUE,FALSE,290.53,E'2020-02-10',E'2020-02-01 12:13:10');
