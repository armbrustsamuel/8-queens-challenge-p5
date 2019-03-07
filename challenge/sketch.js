let queen;

function setup() {

  let canvas = createCanvas(1280, 960);
  canvas.position(10, 10);
  canvas.class("lemon");

  queen = new Queen(50,50,50);
  queen.setPosition(110,110);
  queen.show();
}

const black = [255,255,255];
const white = [0,0,0];

// 8 x 8 table
var size = 8;
var squareSize = 80;
var color = black;

function sel_color(cor) {
  if (cor == 255){
    color = white;
  } else {
    color = black;
  }
  return color;
}

function mousePressed(){
  queen.clicked();
}

function draw() {
  var index = 0;
  for (var i = 0; i <= size-1; i++) {
    for (var j = 0; j <= size-1; j++) {
      color = sel_color(color[0]);
      fill(color[0],color[1],color[2])
      square((i*squareSize),(j*squareSize),squareSize)
    }
    color = sel_color(color[0]);
  }
}

class Queen{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  setPosition(x,y){
    this.py = y;
    this.px = x;
  }

  clicked(){
    let d = dist(mouseX, mouseY, this.px, this.py);
    if (d < this.x){
      console.log("queen pressed");
    }
  }

  move(x,y){
    this.x = this.x + x;
    this.y = this.y + y;
  }

  show() {
    let img = createImg("../img/queen.png")
    img.size(this.x,this.y)
    img.position(this.px, this.py);
  }

}
