export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        // lengkapi disini
        this.subTotal = // lengkapi disini
    }

    toString(){
        return `\tprodId = ${this.prodId},productName=${this.prodName},
        category = ${this.category},price=${this.price},total=${this.totalBuy},subTotalHarga=${this.subTotal}`
    }

}