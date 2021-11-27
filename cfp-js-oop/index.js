
function createCircle(raduis) {
  return {
    raduis   ,
    draw: function () {
      console.log('draw from cfp');
    }
  }
}


const circle = createCircle(2);

circle.draw();


// constructor Function 
function Cricle(raduis) {
  this.raduis = raduis;
  this.draw = function () {
    console.log("cfp constuctor function draw ")
  }
}
const another = new Cricle(2);
another.draw()