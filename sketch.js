let bubbles = [];
let drift; 

function setup() {
  createCanvas(1100, 800);
}

function draw() {
  background(20, 30, 50); // Dark blue background

  // Add new bubbles over time
  if (frameCount % 5 == 0) {
    bubbles.push(new Bubble());
  }

  // Update and display bubbles
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].move();
    bubbles[i].show();
    
    // // Remove bubble if it goes off top
    // if (bubbles[i].isOffScreen()) {
    //   bubbles.splice(i, 1);
    // }
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + 20;
    this.r = random(10, 30); // Radius
    this.velocity = random(1, 3);
    // Transparent white color
    this.color = color(255, 255, 255, 100); 
  }

  move() {
    this.y -= this.velocity; // Move up
    this.x += random(-.5, 0); // Slight wiggle
    drift = createVector(0, 1)
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2);

    // Add a small "highlight" for a shiny effect
    fill(255, 255, 255, 150);
    ellipse(this.x - this.r/3, this.y - this.r/3, this.r/2);
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

//   for (let i = 0; i < 100; i++) {
//     bubbles[i] = new Bubble();
// }
// drift = createVector(0, 0.2)