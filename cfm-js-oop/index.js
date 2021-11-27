
  
// // cfm and I used const instead of declare the function with the name 
// // I know this may be silly but no one who say that why you commit evrey thing 
// // I will repeat every code even it is easy wait this is just the start of the course 
// const createCircle =function(raduis){
//   return {
//     raduis,
//      draw: function () {
//       console.log(`cfm circle `)
      
//     }
//   }
// }
// //constructor function
// const circle = createCircle(3)
// circle.draw()
// function Circle(raduis) {
//   this.raduis = raduis;
//     this.draw= function() {
//       console.log("cfm draw using constructor function")
//     }
// }
// const anotherCircle = new Circle(4);
// console.log(anotherCircle)
// anotherCircle.draw()

// value vs Reference types 
// let x = 10;
// let y = x
// x = 30;
let x = { value: 10 };
let y = x
x.value = 30;

// let number = 10;
// function increse(number) {
//   number++;
// }
// increse()
// console.log(number)
let obj = {value:10};
function increse(obj) {
  obj.value ++;
}
increse(obj)
console.log(obj.value)