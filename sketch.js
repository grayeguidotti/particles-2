let bubbles = [];
let drift;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
    drift = createVector(0, 0.2)
  }
}

function draw() {
  background(0);
}

class Bubble {
  constructor() { // This code runs once when an instance is created.
   this.location = createVector(random(width), random(height));  
  }
  show (){ // This code runs once when new Bubble is created

  }

}

//this is a hit box with a disrupt method, particle has to be in x box and y box parameters 
// for disrupt to be called
// if(
//   this.location.x > mouseX - 10 &&
//   this.location.x < mouseX + 10 &&
//   this.location.y > mouseY - 10 &&
//   this.location.y < mouseY + 10 
// ){
//   this.disrupt();
// }

// disrupt(){
//  this.velocity = p5.Vector.random2D().mult(5); 
// }
// the hot box and disrupt method(); would be called in update



//Collide
//add a method, make a numnerOfParticles; variable at top (let numberOfParticles = ___)
//checkForParticleCollisions(){
// for(let i - 0; i < numberOfParticles; i++){
//  if(
//   this.location.x > bubbles[i].location.x - 10 &&
//   this.location.x < bubbles[i].location.x + 10 &&
//   this.location.y > bubbles[i].location.y - 10 &&
//   this.location.y < bubbles[i].location.y + 10 
//  )
//  }
//  
//then, add to Update..
//  this.checkforParticleCollisions();
//
