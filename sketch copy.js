let canvas_w=1440;
let canvas_h=720;

function preload() {
  img_1 = loadImage("img/Thisis40sketch.png");
  img_2 = loadImage("img/Details.png");
}


function setup() {
  let myCanvas = createCanvas(1440, 720*2);
  myCanvas.parent("main_section");
  
  fill('black');
  image(img_1, 0,0);
  
  fill('black');
  image(img_2, 0,720);

}

  function draw() {
    stroke("black");
   
    
}

