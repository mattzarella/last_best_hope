let img;

let img_w=400;
let img_h=630;

let canvas_w=1440;
let canvas_h=720;

var spot = {
  x: 100,
  y: 50
}
function preload() {
  img = loadImage('img/last_best_hope.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("main_section");
  background('yellow');
  image(img, (canvas_w-img_w)/2,(canvas_h-img_h)/2, img_w, img_h);
  
}
  
  function draw() {
    stroke("black");
    fill('black');
    spot.x = random(0, width)
    spot.y = random(0, height)
    ellipse(spot.x, spot.y, 30, 4, 0)

  }

