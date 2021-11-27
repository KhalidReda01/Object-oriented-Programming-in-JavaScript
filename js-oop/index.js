// console.log("hello world ")
// const circle = {
//   raduis: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function () {
//     console.log('draw')
//   }

// };
function createCricle(raduis) {
  return {
    raduis,
    draw: function () {
      console.log("draw from factory function")
    }
  }
}

 const circle = createCricle(2);
circle.draw()
// Constructor Funciton
function Circle(raduis) {
  // console.log("this",this)
  this.raduis = raduis;
  this.draw = function () {
    console.log("draw from constructor function")
  }
}
const another = new Circle(2);
another.draw();
// console.log("this",this)