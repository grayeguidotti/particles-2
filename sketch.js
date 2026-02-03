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