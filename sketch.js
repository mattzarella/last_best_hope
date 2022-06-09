let canvas_w=1440;
let canvas_h=720;

function preload() {
  img_1 = loadImage("img/car40.png");

}


function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("main_section");
  background(color(12,20,45));
  textFont('Courier');
  textStyle("bold");
  textSize(250);
  fill(255, 255, 255);
  text("This",10,275,)
  text("is",650,275,)

  colorMode(RGB,255);
  strokeWeight(7);
  stroke(color(255,0,0));
  line(1000,175,1150,50);
  stroke(color(0,255,0));
  line(1000+12,175+12,1150+12,50+12);
  stroke(color(0,0,255)); 
  line(1000+24,175+24,1150+24,50+24);

  strokeWeight(7);
  stroke(color(255,0,0));
  line(1000,175,1190,175);
  stroke(color(0,255,0));
  line(1000+12,175+12,1190+12,175+12);  
  stroke(color(0,0,255)); 
  line(1000+24,175+24,1190+24,175+24);

  strokeWeight(7);
  stroke(color(255,0,0));
  line(1157,275,1157,50);
  stroke(color(0,255,0));
  line(1157+12,275+12,1157+12,50+12)
  stroke(color(0,0,255)); 
  line(1157+24,275+24,1157+24,50+24)
  

  colorMode(RGB,255);
  strokeWeight(7);
  stroke(color(255,0,0));
  noFill();
  ellipse(1300,175,150,250);
  stroke(color(0,255,0));
  ellipse(1300+15,175,150,250);
  stroke(color(0,0,255)); 
  ellipse(1300+30,175,150,250);

}

  function draw() {
    stroke("black");
    fill('black');
    image(img_1, 000,canvas_h-350,canvas_w,500);

    
}

