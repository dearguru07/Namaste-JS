// let k = 0;
// for (let i = 0; i < 3; i++) {
//   let k = 0;
//   function getName(){
//     console.log('Namastee...')
//   }
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
//   // console.log(i,j)
// }

// let n=20;
// console.log(n);
// function getName(){
//     console.log('Hello');
// }
// getName()

// let n=5;
// let toggle = 1;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + toggle;
//         if (toggle == 0) {
//             toggle = 1;
//         }
//         else {
//             toggle = 0;
//         }
//     }
//     console.log(row);
// }

// const cart = [
//   {
//     itemName: "Shoes",
//     itemPrice: 2000,
//   },
//   {
//     itemName: "Paint",
//     itemPrice: 2500,
//   },
//   {
//     itemName: "Kurta",
//     itemPrice: 1500,
//   },
// ];

// let walletBalance = 10000;

// // function createOrder(cart) {
// //   return new Promise(function (resolve, reject) {

// //   });
// // }

// const createOrder = (cart) => {
//   return (pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       reject(new Error("Cart is not valid"));
//     }
//     let orderId = 10;
//     if (orderId) {
//       resolve(orderId);
//     }
//   }));
// };

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     if (orderId) {
//       resolve({ paymentStatus: 1, message: "Payment successfully completed" });
//     } else {
//       reject(new Error("Payment Failed"));
//     }
//   });
// }

// function showOrderSummery(orderStatus) {
//   return new Promise(function (resolve, reject) {
//     if (orderStatus.paymentStatus === 1) {
//       resolve({ status: "success", orders: cart });
//     } else {
//       reject(new Error("Something went wrong"));
//     }
//   });
// }

// function updateWallet(orderHistory) {
//   return new Promise(function (resolve, reject) {
//     if (orderHistory.status === "success") {
//       let orderAmount = 6000;
//       walletBalance = walletBalance - orderAmount;
//       resolve({ balance: walletBalance, message: "Wallet updated" });
//     } else {
//       reject(new Error("Wallet balance not updated"));
//     }
//   });
// }

// function validateCart(cart) {
//   return true;
// }

// createOrder(cart)
//   .then(function (orderId) {
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (orderStatus) {
//     return showOrderSummery(orderStatus);
//   })
//   .then(function (orderHistory) {
//     return updateWallet(orderHistory);
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const pr = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise was Resolved..");
//   }, 5000);
// });

// async function getData() {
//   console.log("Hello World..!!");
//   const val = await pr;
//   console.log("Hello World..!!");
//   console.log(val);
//   // console.log("Hello World..!!")
// }
// getData();

// "use strict";

// function x(){
//   console.log(this)
// }
// x();
// window.x();



let n = 6;
function Factorial(n) {
    if (n == 1) return n;
    return n * Factorial(n - 1);
}
// Factorial(n);
console.log(Factorial(n));