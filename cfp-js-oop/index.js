
// function createCircle(raduis) {
//   return {
//     raduis   ,
//     draw: function () {
//       console.log('draw from cfp');
//     }
//   }
// }


// const circle = createCircle(2);

// circle.draw();


// // constructor Function 
// function Cricle(raduis) {
//   this.raduis = raduis;
//   this.draw = function () {
//     console.log("cfp constuctor function draw ")
//   }
// }
// const another = new Cricle(2);
// another.draw()


let x = 10;
let y = x;
x = 20;

let x1 = { value: 10 }
let y1 = x1;
x1.value = 20;


// example 
let number = 10;
function increase(number) {
  number++;

}
increase(number);
console.log(number)

// example 
let obj = {value:10};
function increase(obj) {
  obj.value++;

}
increase(obj);
console.log(obj.value)
