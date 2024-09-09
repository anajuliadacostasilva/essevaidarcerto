et cor;
let posicaoHorizontal;// x
let posicaoVertical; // y

function setup() {
  
  createCanvas(400, 400);
  background("pink");
  cor=color(random(0,255),random(0,255),random(0,255))
  posicaoHorizontal=200
  posicaoVertival=200
}

function draw() {
  
  fill(cor);
  circle(200,200,25);
  
}
