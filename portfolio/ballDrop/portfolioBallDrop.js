let spring = 0.05;
let gravity = 0.1;
let friction = -0.9;

let balls = [];

function setup() {
  let canvas = createCanvas(150, 150);
  if(window.innerWidth < 1100 ){canvas.parent("sketch-containerMb");}
  else{canvas.parent("sketch-container");}

  if( window.innerWidth < 1100 && document.getElementById("infoTitle").innerText == "Ball Drop" )
  {
    canvas = createCanvas(window.innerWidth/3, window.innerHeight/5);
    canvas.parent('lrg-sketchMb');
    document.getElementById("lrg-sketchMb").style.visibility="visible";
  }
  else if(document.getElementById("infoTitle").innerText == "Ball Drop")
  {
    canvas = createCanvas(window.innerWidth/3, window.innerHeight/4);
    canvas.parent('lrg-sketch');
    document.getElementById("lrg-sketch").style.visibility="visible";
  }

  let numBalls = random(1,8);

  for(let i = 0; i < numBalls; i++) {
    let color = [random(255), random(255), random(255)];
    balls[i] = new Ball(
      i,
      random(width), 
      random(height),  
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