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

// console.log('Start');
// setTimeout(()=>{
//   console.log("Callback")
// },3000);
// console.log("End");

// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000){
//   endDate=new Date().getTime()
// }
// console.log("While Expires");

// console.log("Namastee")
// setTimeout(()=>{
//   console.log('Guru')
// },1000)

let radius = [7, 5, 4, 1];

let calculateArea = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));

let CalucateCurmferice = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(CalucateCurmferice(radius));


let CalculateDaimeter = function (radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 *radius[i]);
  }
  return output;
};
console.log(CalculateDaimeter(radius));



function Node(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function () {
    this.size = 0;
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    else {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let headNode = new Node(val);
    headNode.next = this.head;
    this.head = headNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let tailNode = new Node(val);
    if (this.head === null) {
        this.head = tailNode;
    }
    else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = tailNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    let indexNode = new Node(val);
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        indexNode.next = curr.next;
        curr.next = indexNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */