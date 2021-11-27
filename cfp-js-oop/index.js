
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