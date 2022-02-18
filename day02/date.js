const today = new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());


const today1 = new Date(2021,8,23)
console.log(today1);

const today2 = new Date('2021-08-12T03:24:00Z')
console.log(today2);

//add date
const now1 = new Date()
const currentDate1 = now1.getDate()
now1.setDate(currentDate1+10)
console.log(now1);

//add year
const now = new Date()
const currentDate = now.getFullYear()
now.setFullYear(currentDate+10)
console.log(now);


const date1 = new Date()

console.log(`Format Date : ${new Intl.DateTimeFormat('id-ID').format(date1)}`);

const start = new Date ("Sept 3,2021")
const end = new Date("06-dec-asdc")
