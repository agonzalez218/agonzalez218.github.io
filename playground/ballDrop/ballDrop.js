let spring = 0.05;
let friction = -0.9;
let redMin = 0, redMax = 255;
let greenMin = 0, greenMax = 255;
let blueMin = 0, blueMax = 255;
let tempMin = 0, tempMax = 255;
let initalGrav = 0.01, initalBall = 1;


let balls = [];

function setup() {
  balls = [];
  let canvas = createCanvas(windowWidth*3/4, windowHeight/2);
  canvas.parent('sketch-container')

  setColorVars();
  let numBalls = parseInt(document.getElementById("ballCount").value);

  for(let i = 0; i < numBalls; i++) {
    let color = [random(redMin, redMax+1), random(greenMin, greenMax+1), random(blueMin, blueMax+1)];
    balls[i] = new Ball(
      i,
      random(width), 
      random(0, height/2),  
      random(25,50), 
      color,
      numBalls,
      balls);
  }
  noStroke();
}

function draw() {
  background(50);

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}

function setColorVars(){
  redMin = parseInt(document.getElementById("redMin").value);
  redMax = parseInt(document.getElementById("redMax").value);
  greenMin = parseInt(document.getElementById("greenMin").value);
  greenMax = parseInt(document.getElementById("greenMax").value);
  blueMin = parseInt(document.getElementById("blueMin").value);
  blueMax = parseInt(document.getElementById("blueMax").value);
  setHTMLVars();
}

function setHTMLVars(){
  tempMin = parseInt(document.getElementById("redMin").value);
  tempMax = parseInt(document.getElementById("redMax").value);
  if( tempMin < tempMax )
  {
    document.getElementById("redMinLabel").innerHTML = tempMin;
    document.getElementById("redMaxLabel").innerHTML = tempMax;
  }
  else if( tempMin != redMin){
    document.getElementById("redMin").value = tempMax-1;
    document.getElementById("redMinLabel").innerHTML = tempMax-1;
  }
  else if( tempMax != redMax){
    document.getElementById("redMax").value = tempMin+1;
    document.getElementById("redMaxLabel").innerHTML = tempMin+1;
  }
  
  tempMin = parseInt(document.getElementById("greenMin").value);
  tempMax = parseInt(document.getElementById("greenMax").value);
  if( tempMin < tempMax )
  {
    document.getElementById("greenMinLabel").innerHTML = tempMin;
    document.getElementById("greenMaxLabel").innerHTML = tempMax;
  }
  else if( tempMin != greenMin){
    document.getElementById("greenMin").value = tempMax-1;
    document.getElementById("greenMinLabel").innerHTML = tempMax-1;
  }
  else if( tempMax != greenMax){
    document.getElementById("greenMax").value = tempMin+1;
    document.getElementById("greenMaxLabel").innerHTML = tempMin+1;
  }

  tempMin = parseInt(document.getElementById("blueMin").value);
  tempMax = parseInt(document.getElementById("blueMax").value);
  if( tempMin < tempMax )
  {
    document.getElementById("blueMinLabel").innerHTML = tempMin;
    document.getElementById("blueMaxLabel").innerHTML = tempMax;
  }
  else if( tempMin != blueMin){
    document.getElementById("blueMin").value = tempMax-1;
    document.getElementById("blueMinLabel").innerHTML = tempMax-1;
  }
  else if( tempMax != blueMax){
    document.getElementById("blueMax").value = tempMin+1;
    document.getElementById("blueMaxLabel").innerHTML = tempMin+1;
  }

}

function setColor()
{
  setColorVars();

  balls.forEach(ball => {
    let color = [random(redMin, redMax), random(greenMin, greenMax), random(blueMin, blueMax)];
    ball.color=color;
  });

}

function windowResized() {
  setup();
}

class Ball {
  constructor(id, x, y, size, color, numBalls, others) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.size = size;
    this.color = color;
    this.numBalls = numBalls;
    this.others = others;
  }

  collide() {
    for (let i = this.id + 1; i < this.numBalls; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].size / 2 + this.size / 2;

      if (distance < minDist) {
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.xSpeed -= ax;
        this.ySpeed -= ay;
        this.others[i].xSpeed += ax;
        this.others[i].ySpeed += ay;
      }
    }
  }

  move() {
    let gravity = parseFloat(document.getElementById("gravity").value);
    this.ySpeed += gravity;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x + this.size / 2 > width) {
      this.x = width - this.size / 2;
      this.xSpeed *= friction;
    } else if (this.x - this.size / 2 < 0) {
      this.x = this.size / 2;
      this.xSpeed *= friction;
    }
    if (this.y + this.size / 2 > height) {
      this.y = height - this.size / 2;
      this.ySpeed *= friction;
    } else if (this.y - this.size / 2 < 0) {
      this.y = this.size / 2;
      this.ySpeed *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.size, this.size);
    fill(this.color[0],this.color[1],this.color[2] );
  }
}