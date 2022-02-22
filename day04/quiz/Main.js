import Product from "./product.js";

//buat inputan yang di dalamnya ada value (prodId, prodName, category, price, totalBuy)

const listCart = [/* lengkapi disini */];

const totalTagihanDiscount = (discount) => {
    return listCart.reduce((sum, el) => {
        // lengkapi disini, jika totalBuy > 1 maka discount jika tidak maka tidak discount
    }, 0);
}



console.log(`Total Tagihan discount=${totalTagihanDiscount(10)}`); // Total Tagihan discount=58580000
