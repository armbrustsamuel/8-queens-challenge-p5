function setup() {
  createCanvas(1280, 960);
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
