select * from departments d join locations l on d.location_id = l.location_id
join countries c on l.country_id = c.country_id join regions r on c.region_id = r.region_id

select manager_id, count(employee_id) from employees
group by manager_id

select department_id, sum(salary) salarys
from employees
group by department_id
having sum(salary) <= 6500

select employee_id,first_name,last_name from employees
where first_name like '%da%'

select * from departments 
where location_id in
(select location_id from locations a, countries b
where a.country_id=b.country_id and b.region_id = 1)

select
sum(coalesce(programmer,0)) programmer,
sum(coalesce(freelance,0)) freelance
from (
select case when job_id=9 then count(0) end programmer,
case when job_id=0 then count (0) end freelance
from employees
group by job_id
)t


select case when job_id=9 then count(0) end programmer,
case when job_id=0 then count (0) end freelance
from employees
group by job_id

select*from employees