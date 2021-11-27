
  
// cfm and I used const instead of declare the function with the name 
// I know this may be silly but no one who say that why you commit evrey thing 
// I will repeat every code even it is easy wait this is just the start of the course 
const createCircle =function(raduis){
  return {
    raduis,
     draw: function () {
      console.log(`cfm circle `)
      
    }
  }
}
const circle = createCircle(3)
circle.draw()