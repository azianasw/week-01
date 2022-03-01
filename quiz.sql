--no 1
select * from regions r 
join countries c on r.region_id = c.region_id 
where region_name = 'Europe'

--no 2 Tampilkan berapa countries yang dimiliki oleh tiap regions
select r.region_id,r.region_name,count(country_id)total_countries from regions r 
join countries c on r.region_id = c.region_id 
group by r.region_id order by r.region_id asc

--no 3 Tampilkan country dan locations di region Europe
select l.country_id,c.country_name,l.location_id,l.street_address,
l.postal_code,l.city,l.state_province from countries c 
join locations l on c.country_id = l.country_id 
join regions r on c.region_id = r.region_id 
where r.region_name= 'Europe' order by l.country_id asc

--no 4 Tampilkan department yang ada di region America
select d.department_id, d.department_name, d.location_id from departments d 
join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id 
join regions r on c.region_id = r.region_id 
where r.region_name= 'Americas'

--no 5 Tampilkan jumlah departments tiap region.
select r.region_name,count(department_id)total_department from departments d 
join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id 
join regions r on c.region_id = r.region_id 
group by r.region_id

--no 6 Tampilkan jumlah department tiap country.
select c.country_name,count(department_id)total_department from departments d 
join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id 
group by c.country_id

--no 7 Tampilkan country yang memiliki total_department paling banyak
select c.country_name,count(department_id)total_department from departments d 
join locations l on d.location_id = l.location_id 
join countries c on l.country_id = c.country_id 
group by c.country_id
order by total_department desc limit 1

--no 8 Tampilkan jumlah employee tiap department terurut ascending
select d.department_id, d.department_name,count(employee_id)total_emps from departments d
join employees e on d.department_id = e.department_id 
group by d.department_id order by total_emps asc

--no 9 Tampilkan jumlah employee tiap department yang ada di region America
select d.department_id, d.department_name,count(employee_id)total_emps from departments d 
join employees c on d.department_id = c.department_id 
join locations pa on d.location_id = pa.location_id 
join countries e on pa.country_id = e.country_id 
join regions r on e.region_id = r.region_id and r.region_id = 2
group by d.department_id order by total_emps asc

--no 10 Tampilkan employees yan mendapatkan bonus akhir tahun
select employee_id, first_name, last_name, salary,extract(year from age(now(),hire_date))masa_kerja,
case when extract(year from age(now(),hire_date)) >= 25 then (salary*5)
else (salary*3)
end as bonus
from employees

--no 11 Tampilkan bonus tiap masa kerja(hasil tidak sama)
select a.masa_kerja,count(a.employee_id)total_employee,sum(a.bonus)total_bonus from(
select extract(year from age(now(),hire_date))masa_kerja, employee_id,
case when extract(year from age(now(),hire_date)) >= 25 then (salary*5) 
else (salary*3)
end as bonus
from employees 
)a
group by a.masa_kerja
order by a.masa_kerja asc

--no 12 Tampilkan jumlah pegawai berdasarkan masa kerja nya(nama tabelnya kurang sesuai)
select sum(case1)case1,sum(case2)case2,sum(case3)case3,sum(case4)case4
from(
select case when 15<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=25 then count(employee_id) end case1,
case when 25<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=30 then count(employee_id) end case2,
case when 30<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=35 then count(employee_id) end case3,
case when extract(year from age(now(),hire_date))>35 then count(employee_id) end case4
from employees
group by employee_id
)a

--no 13 tampilan matrix jumlah pegawai berdasarkan masa kerja di tiap department
select a.department_id,b.department_name, sum(coalesce(case1,0)),sum(coalesce(case2,0)),sum(coalesce(case3,0)) from departments b,(
select department_id, case when 15<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=25 then count(employee_id) end case1,
case when 25<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=30 then count(employee_id) end case2,
case when 30<=extract(year from age(now(),hire_date)) and extract(year from age(now(),hire_date))<=35 then count(employee_id) end case3
from employees
group by employee_id
)a
where a.department_id = b.department_id
group by a.department_id,b.department_name
order by a.department_id,b.department_name asc













