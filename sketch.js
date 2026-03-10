let bubbles = [];
let drift;                                                //for mouse location movement

function setup() {
  createCanvas(1100, 800);
  // drift = createVector(0.05, 0);
}

function draw() {
  let driftXAmount = map(mouseX, 0, width, -0.05, 0.05);      //copied from Jesse's particle sketch to add velocity for mouse location
  let driftYAmount = map(mouseY, 0, height, 0, 0);
    // drift.set(driftXAmount, driftYAmount); 
    drift = createVector(driftXAmount, driftYAmount);
    //can't get this to work
  // background(20, 30, 50); // Dark blue background
  background(0); //black background

  // Add new bubbles over time
  if (frameCount % 5 == 0) {
    bubbles.push(new Bubble());
  }

  // Update and display bubbles
  for (let i = bubbles.length - 1; i >= 0; i--) { //iterating the array backwards, The loop continues to run as long as the value of i is greater than or equal to 0 (the index of the first element). 
  // When i becomes -1, the condition is false, and the loop terminates.  After each iteration of the loop, the value of i is decremented by 1,
  //  allowing the loop to process the next element in the reverse sequence. 
    //bubbles[i].move();
    bubbles[i].show();
    bubbles[i].update();           //Was breaking the sketch
    
    // Remove bubble if it goes off top
    if (bubbles[i].isOffScreen()) {
      bubbles.splice(i, 1);               //splice(list, value, position), inserts a new value into the array when the object is 'off screen'
    }
  }
}

class Bubble {
  constructor() { // This code runs once when an instance is created.
    this.location = createVector(random(width),(height + 20)); //size
    // this.y = createVector(height + 20);   //size
    this.r = random(0,10); //radius
    this.velocity = createVector(random(1, 3), random(-1, 0)); //velocity
    // Transparent white color
    this.color = color(255, 255, 255, 100); 
  }
  move() {                    //This code runs once when .show is called. Has to be above show?
    this.y -= this.velocity; // Move up the screen
    this.x += random(-1, 0); // "Wiggle"s a random 
  }
  show() {                    //This code runs once when .show is called.
  noStroke();
  fill(this.color);             //color in constructor
  ellipse(this.location.x, this.location.y, this.r*3); //size in constructor height, width, radius
  // Add a small "highlight" for a shiny effect
  fill(255, 255, 255, 150); //higher fill number less transparency
  ellipse(this.location.x - this.r/3, this.location.y - this.r/3, this.r/2); //found this geometry in a prompt to make a smaller circle inside the circle
  }
 
  update() {                // This code runs once when .update() is called.        
    this.velocity.add(drift);
    this.location.add(this.velocity);                  //I thought maybe I could just add an update instance to class, but it was breaking the sketch, 
  //                                                         is it because there is already a move instance?
  }

  isOffScreen() {
    return this.y < -this.r * 2;    //asked VS code, with if offOscreen if statement at the top
  }    
}









//   
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