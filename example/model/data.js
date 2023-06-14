// const a = 10;
// const b = 20;
// const sum = (a, b) => {
//     return a + b
// }
// export { a, b }
// export default sum
// export const products = [
//     { id: 1, name: "product 1" },
//     { id: 2, name: "product 2" },
//     { id: 3, name: "product 3" },
//     { id: 4, name: "product 4" },
// ]


const products = ["mercedes", "audi", "ford", "lamborghini"]
const showProduct = (products) => {
    if (products == '') {
        console.log("không có sản phẩm để hiển thị");
    }
    else {
        products.map((item) => {
            console.log(item.name)
        })
        // products.forEach(item => {
        //     console.log(item.name);
        // });
    }
}
showProduct(products)

const product = prompt("Nhập sản phẩm")
const addProduct = () => {
    if (products == '') {
        console.log("không có sản phẩm để hiển thị");
    }
    else {
        products.map((item) => {
            console.log(item.name)
        })
        // products.forEach(item => {
        //     console.log(item.name);
        // });
    }
}
showProduct(products)