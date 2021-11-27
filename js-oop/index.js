function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

Circle.call({}, 1)
Circle.apply({},[1,2]) 
// const Circle1 = new Function('radius',`this.radius = radius;
// this.draw = function () {
//   console.log('draw');
// }`)

console.log(new Circle(1))

const another = new Circle(1);
// const circle = new Circle1(1)
