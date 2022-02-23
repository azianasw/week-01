// const mypromise = new Promise((resolve, reject) => {
//     if (4 <= 5) {
//     resolve('Lunas yaa...!');
//     }
//     reject(new Error('Belum ada uang, ntar sok yah.. '));
//     })
//     // call function mypromise
//     mypromise
//     .then(response=>console.log(response))
//     .catch(err=>console.log(err));


    async function getNomorAntri(nomor){
        if(nomor <= 10){
        return Promise.resolve(10);
        }else{
        return Promise.reject(new Error("Antrian habis"))
        }
        }
        const order = () => {
        console.log("Order KFC paket A");
        }
        //call function
        getNomorAntri(12)
        .then(res => console.log(res))
        .catch(error => console.log(error.toString()));
        order();
        