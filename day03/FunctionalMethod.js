const program = ["java","js","pyrhon","sql","oracle","postgress"]
const db = program.filter(e => e.startsWith('ora'))
const db1 = program.find( el => el.startsWith('post'))
console.log(db);
console.log(db1);


const data = ['nasi','bakar','nasi','kuning','nasi','babat']

const re = data.reduce((acc,data)=>{
    const count = acc[data]
    count ? acc[data] = count + 1 : acc[data] = 1
    return acc
},[])

console.log(re);