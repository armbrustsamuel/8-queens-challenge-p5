let queen;

var queenList = [];

const black = [255,100,100];
const white = [150,150,100];

// 8 x 8 table
var size = 8;
var squareSize = 80;
var color = black;

function fill_list(){
  for(var i=0; i<8; i++){
    queenList[i] = Math.floor((Math.random() * 8) + 1);
  }
  console.log(queenList);
}

function setup() {

  let canvas = createCanvas(1280, 960);
  canvas.position(10, 10);
  canvas.class("lemon");
  fill_list()

  queen = new Queen(50,50,50);
  // queen.setPosition(100,110);
  // queen.show();
}

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
  // queen.setPosition(mouseX,mouseY);
  // queen.show();
}

function draw() {
  var index = 0;
  for (var i = 0; i <= size-1; i++) {
    for (var j = 0; j <= size-1; j++) {
      color = sel_color(color[0]);
      fill(color[0],color[1],color[2])
      square((i*squareSize),(j*squareSize),squareSize)
      if(queenList[i] == j+1){
        queen.setPosition((i*squareSize+squareSize/3),(j*squareSize+squareSize/3));
        queen.show();
      }
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
