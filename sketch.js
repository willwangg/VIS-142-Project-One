let bg;
let font1;
let bucket;
let instructions = 'Create Your Own Powerpuff Girl!'
let sugar, spice, nice;
let sugarC = 0;
let spiceC = 0;
let niceC = 0;
let placeX, placeY;
let song;
let show;
let sugarP, spiceP, niceP;
let body, head, hairb, hairf;
let reset;

function preload() {
  bg = loadImage('images/cover.jpg');
  sugarP = loadImage('images/sugar.png');
  spiceP = loadImage('images/spice.png');
  niceP = loadImage('images/nice.png');
  font1 = loadFont('images/font1.ttf');
  bucket = loadImage('images/bucket.png');
  song = loadSound('images/theme.mp3');
  body = loadImage('images/body.png');
  hairb = loadImage('images/hairb.png');
  hairf = loadImage('images/hairf.png');
  head = loadImage('images/head.png');
}

function setup() {
  // put setup code here
  createCanvas(952, 664);
  noLoop();
}

function draw() {
  // put drawing code here
  background(bg);

  song.play();
  sugar = createButton('ADD SUGAR');
  sugar.position(60, 100);
  sugar.style('background-color', '#98bbce');
  sugar.style('color', '#ffffff');
  sugar.style('border', 'solid');
  sugar.style('border-color', '#00eaff');
  sugar.style('padding', '15px 45px');
  sugar.style('border-radius', '40px');
  sugar.style('font-size', '24px');
  sugar.style('outline', 'none');
  sugar.style('cursor', 'pointer');
  sugar.mousePressed(blueGreet);

  nice = createButton('ADD STH NICE');
  nice.position(345,100);
  nice.style('background-color', '#e593a1');
  nice.style('color', '#ffffff');
  nice.style('border', 'solid');
  nice.style('border-color', '#e2a9b8')
  nice.style('padding', '15px 45px');
  nice.style('border-radius', '40px');
  nice.style('font-size', '24px');
  nice.style('outline', 'none');
  nice.style('cursor', 'pointer');
  nice.mousePressed(redGreet);

  spice = createButton('ADD SPICE');
  spice.position(660,100);
  spice.style('background-color', '#9ab878');
  spice.style('color', '#ffffff');
  spice.style('border', 'solid');
  spice.style('border-color', '#00d700');
  spice.style('padding', '15px 45px');
  spice.style('border-radius', '40px');
  spice.style('font-size', '24px');
  spice.style('outline', 'none');
  spice.style('cursor', 'pointer');
  spice.mousePressed(greenGreet);


  show = createButton('MEET YOUR POWERPUFF GIRL!');
  show.position(245, 540);
  show.style('background-color', '#e07676');
  show.style('color', '#ffffff');
  show.style('border', 'solid');
  show.style('border-color', '#ffffff');
  show.style('padding', '15px 45px');
  show.style('border-radius', '40px');
  show.style('font-size', '24px');
  show.style('outline', 'none');
  show.style('cursor', 'pointer');
  show.style('display', 'block');
  show.style('box-shadow', '2px 2px 15px #BBBBBB');
  show.mousePressed(create);

  fill(100, 100, 100, 80);
  
  rect(0 , 0, width, height);
  textFont(font1); 
  fill(255, 255, 255);
  textSize(32);
  text(instructions, 60, 60);

  image(bucket, 285, 200, 370, 320);
  reset.hide();
}

function blueGreet() {
  placeX = random(395, 525);
  placeY = random(360, 440);
  strokeWeight(0.5);
  stroke('#666666');
  fill(0, 228, 252);
  image(sugarP, placeX, placeY, 40, 40);
  sugarC++;
}

function redGreet() {
  placeX = random(395, 525);
  placeY = random(360, 440);
  strokeWeight(0.5);
  stroke('#666666');
  fill(231, 167, 183);
  //translate(580, 200);
  //for (let i = 0; i < 10; i ++) {
    //ellipse(placeX, placeY, 10, 30);
    //rotate(PI/5);
  //}
  image(niceP, placeX, placeY, 40, 40);
  niceC++;
}

function greenGreet() {
  placeX = random(395, 525);
  placeY = random(360, 440);
  strokeWeight(0.5);
  stroke('#666666');
  fill('#00d700');
  image(spiceP, placeX, placeY, 40, 40);
  //rect(placeX, placeY, 20, 20);
  spiceC++;
}

function create() {
  background(bg);
  fill(100, 100, 100, 80);
  rect(0 , 0, width, height);
  sugar.hide();
  spice.hide();
  nice.hide();
  show.hide();
  fill(255, 255, 255);
  rect(100 , 70, width-200, height-200);
  image(body, 320, 70, 302, 424);

  let inside = (155, 155, 155);
  let r = 0;
  let g = 0;
  let b = 0;
  if (sugarC > spiceC && sugarC > niceC) {
    
    for(i = 0; i < spiceC; i++) {
      g += 10;
    }
    for(i = 0; i < niceC; i++) {
      r += 10;
    }
    inside = color(r, g, 255);
  }
  else if (spiceC > sugarC && spiceC > niceC) {
    for(i = 0; i < sugarC; i++) {
      b += 10;
    }
    for(i = 0; i < niceC; i++) {
      r += 10;
    }
    inside = color(r, 255, b);
  }
  else if (niceC > sugarC && niceC > spiceC) {
    for(i = 0; i < sugarC; i++) {
      b += 10;
    }
    for(i = 0; i < spiceC; i++) {
      g += 10;
    }
    inside = color(255, g, b);
  }

  strokeWeight(4);
  stroke('#000000');

  fill(inside);
  beginShape();
  vertex(442, 270);
  vertex(427, 380);
  vertex(512, 380);
  vertex(497, 270);
  endShape();
  fill('black');
  beginShape();
  vertex(437, 308);
  vertex(432, 344);
  vertex(507, 344);
  vertex(502, 308);
  endShape();
  
  image(hairb, 322, 80, 302, 424);
  
  image(head, 320, 80, 302, 424);

  
  push();
  fill(inside);
  angleMode(DEGREES);
  rotate(348);
  strokeWeight(0);
  ellipse(380, 291, 70, 80);
  fill("#000000");
  ellipse(386, 287, 60, 65);
  rotate(348);
  fill(inside);
  ellipse(383, 395, 70, 80);
  fill("#000000");
  ellipse(381, 388, 60, 65);

  fill('#ffffff');
  ellipse(377, 383, 20, 20);
  ellipse(323, 359, 20, 20);
  pop();

  image(hairf, 322, 80, 302, 424);

  reset = createButton('START OVER');
  reset.position(350, 570);
  reset.style('background-color', '#e07676');
  reset.style('color', '#ffffff');
  reset.style('border', 'solid');
  reset.style('border-color', '#ffffff');
  reset.style('padding', '15px 45px');
  reset.style('border-radius', '40px');
  reset.style('font-size', '24px');
  reset.style('outline', 'none');
  reset.style('cursor', 'pointer');
  reset.style('display', 'block');
  reset.style('box-shadow', '2px 2px 15px #BBBBBB');
  reset.mousePressed(startover);
}

function startover() {
  sugarC = 0;
  niceC = 0;
  spiceC = 0;
  draw();
}