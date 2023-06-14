// // declaration
// function functionDeclaration(a, b) {
//     return a + b;
// }
// console.log(functionDeclaration(1, 2))

// // arrow function
// const arrowFunction = (a, b) => {
//     return a + b;
// }
// console.log(arrowFunction(5, 5));

// const a = prompt("Nhập số a")
// const bai1 = (a) => {
//     let sum = 0;
//     for (var i = 0; i <= a; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(bai1(a));;

// const b = prompt("Nhập số b")
// const bai2 = (b) => {
//     let count = 0;
//     for (var i = 0; i <= b; i++) {
//         if (i % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(bai2(b));

// const users = ["a", "b", "c"]
// users.forEach((item, index) => {
//     return console.log(item)
// });

const products = [
    { id: 1, name: "product 1", price: 200 },
    { id: 2, name: "product 2", price: 100 },
    { id: 3, name: "product 3", price: 200 },
    { id: 4, name: "product 4", price: 200 },
]
// const result = products.map((item) => {
//     return `
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//     `
// })
// const app = document.querySelector("#app");
// app.innerHTML = result.join("");

// const result = products.find((item) => {
//     return item.id == 3;
// })
const result = products.filter((item) => {
    return item.id != 1;
})

console.log(result)