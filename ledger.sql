DROP TABLE IF EXISTS  visitors;
DROP TABLE IF EXISTS  vehicles;

CREATE table visitors(
  visitorid int(4),
  first_name varchar(255),
	last_name varchar(255),
  mobile varchar(10),
  temperature float,
  visit_date date,
  visit_time time,
  herefor int(4),
  PRIMARY KEY (visitorid),
  FOREIGN KEY (herefor) REFERENCES userdb(userid)
);

insert into visitors values(2001, 'Harvey', 'Spector', '6789009876', 96.7, '2021-02-23', '08:05:33', 1003);
insert into visitors values(2002, 'Donna', 'Paulsen', '9876098765', 97.9,'2021-03-20', '17:30:00', 1004);
insert into visitors values(2003, 'Rachel', 'Zane', '9988676688',  98.8, '2021-02-27', '13:10:00', 1002);
insert into visitors values(2004, 'Michael', 'Ross', '9080707678', 95.7, '2021-03-28', '16:05:33', 1001);
insert into visitors values(2005, 'Jessica', 'Pearson', '8796056789', 97.0,'2021-02-23', '08:05:33', 1003);
insert into visitors values(2006, 'Louis', 'Litt', '6789009876', 96.7, '2021-03-01', '10:30:00', 1005);

CREATE table vehicles(
  vehicleid int(4),
  vehicleno varchar(255),
	drivername varchar(255),
  driverno varchar(10),
  visit_date date,
  visit_time time,
  herefor int(4),
  PRIMARY KEY (vehicleid),
  FOREIGN KEY (herefor) REFERENCES userdb(userid)
);

insert into vehicles values(6001, 'TN 01 U 0099', 'Ashwin Kumar', '6789009876', '2021-02-23', '08:05:33', 1003);
insert into vehicles values(6002, 'MH 02 BY 3123', 'Shivangi Krish', '9876098765', '2021-03-20', '17:30:00', 1004);
insert into vehicles values(6003, 'TN 200 KA 9696', 'Pugazh', '9988676688',  '2021-02-27', '13:10:00', 1002);
insert into vehicles values(6004, 'TN 72 BF 3366', 'Bala', '9080707678', '2021-03-28', '16:05:33', 1001);
insert into vehicles values(6005, 'TN 01 A 4295', 'Baba Baskar', '8796056789','2021-02-23', '08:05:33', 1005);
insert into vehicles values(6006, 'TN 45 AK 6591', 'Venkatesh Bhatt', '6789009876', '2021-03-01', '10:30:00', 1006);




select * from visitors;
select * from vehicles;
