// import sum, { a, b, products } from "./data";

// console.log(a, b);
// console.log(sum(a, b));

// // const product = products.map((item) => {
// //     return `
// //         <div>${item.name}</div>
// //     `
// // })
// const product = products.filter((item) => {
//     return item.id == 3
// })
// const app = document.querySelector("#app");
// app.innerHTML = product.join("")     


const src = "https://github.com/sontv8/WD18106/tree/main/my-app"
const loadScrip = (src, callback) => {
    const script = document.createElement("script");
    script.src = src
    script.onload = () => {
        callback(script)
    }
    document.head.append(script)
}
loadScrip(src, (script) => {
    console.log(123, script);
});
