let bubbles = [];
// let drift;

function setup() {
  createCanvas(1100, 600);
  //  //Add new bubbles over time
  for (let i = 0; i < 100; i++) {
    bubbles[i] = new Bubble();
  drift = createVector(0, 0.2)
}
}

function draw() {
//   let driftXAmount = map(mouseX, 0, width, -0.05, 0.05);
//   let driftYAmount = map(mouseY, 0, height, 0, 0);
//   drift.set(driftXAmount, driftYAmount);
 background(20, 30, 50); // Dark blue background
  //  for (let i = bubbles.length - 1; i >= 0; i--) {
  //   bubbles[i].move();
  //   bubbles[i].show();


  }
// }

class Bubble {
  constructor() { // This code runs once when an instance is created.
    this.x = random(width);
    this.y = random(height);
    this.r = random(0,10); //radius
    this.color = (255, 255, 255);
// //    this.location = createVector(random(width), random(height));  
  }

  show() {  
  // noStroke();
  fill(this.color);
  ellipse(this.x, this.y, this.r*2);
    }
  }
   
    
  //   // ellipse(this.x - this.r/3, this.y - this.r/3, this.r/2); //found this geometry in a prompt to make a small "bubble highlight"

// this is a hit box with a disrupt method, particle has to be in x box and y box parameters 
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



// Collide
// add a method, make a numnerOfParticles; variable at top (let numberOfParticles = ___)
// checkForParticleCollisions(){
// for(let i - 0; i < numberOfParticles; i++){
//  if(
//   this.location.x > bubbles[i].location.x - 10 &&
//   this.location.x < bubbles[i].location.x + 10 &&
//   this.location.y > bubbles[i].location.y - 10 &&
//   this.location.y < bubbles[i].location.y + 10 
//  )
//  }
//  this.disrupt();
 
// then, add to Update..
//  this.checkforParticleCollisions();

