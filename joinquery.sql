ALTER TABLE regions ADD COLUMN region_scale integer
ALTER TABLE regions DROP COLUMN region_scale
ALTER TABLE regions RENAME COLUMN region_scale TO region_scl
ALTER TABLE regions ALTER COLUMN region_scl TYPEVARCHAR(30) 

DROP TABLE regions
DROP TABLE regions CASCADE

insert into regions (region_id,region_name) values (6,'antartic');
insert into regions (region_name) values ('artics')
select * from regions

update regions set region_name='indonesia' where region_id =4

delete from regions where region_id=5

select * from regions a join countries b
on a.region_id = b.region_id

select * from regions a inner join countries b
on a.region_id = b.region_id

select * from countries a left join regions b
on a.region_id = b.region_id

select * from countries a right join regions b
on a.region_id = b.region_id

select * from countries a full outer join regions b
on a.region_id = b.region_id where a.region_id is null