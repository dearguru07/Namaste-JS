// console.log('Hello world...')

// let a =10;
// console.log(a);
// var b=100;

// const z=100;
// z=25;

// var a=10;
// let b=20;
// const c=100;
// {
//     let x=25;
//     const z=2547;
// }

// var x = 10;
// function z() {
//     let c=25;
//   function m() {
//     console.log(c);
//   }
//   m();
// }
// z();


console.log('Start');
setTimeout(()=>{
  console.log("Callback")
},3000);
console.log("End");

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
  endDate=new Date().getTime()
}
console.log("While Expires");

console.log("Namastee")
setTimeout(()=>{
  console.log('Guru')
},1000)