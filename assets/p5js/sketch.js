function setup() {
  createCanvas(600, 400);  
}


function draw() {
  //background(255);
  background(255, 255, 255);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // DOUGHNUT
  fill(240,230,140);
  stroke(240,230,140); 
  ellipse(240, 200, 250, 250);

  // ICING YUMMY :O 
  fill(139,69,19);
  stroke(240,230,140); 
  ellipse(240, 200, 220, 220);
  
  // OTHER DOUGHNUT 
  fill(240,230,140);
  ellipse(240, 200, 100, 100);

  // DOUGHNUT HOLE
  fill(255,255,255);
  stroke(240,230,140); 
  ellipse(240, 200, 75, 75);
  
}