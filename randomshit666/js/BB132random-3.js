

let width = innerWidth
let height = innerHeight

function preload () {
    img = loadImage ('../i/FF100frontpage/lacagefrontpage.png')
}


function windowResized() {
  width = innerWidth
  height = innerHeight
  resizeCanvas(width,height)
}

function setup() {
  createCanvas(width, height);
  frameRate(100);
  img.resize(width, height);
  noSmooth()
  noFill()
}

function draw() {

  let x1 = random(img.width);
  let y1 = random(img.height);

  let x2 = x1 + random(-5, 5);
  let y2 = y1 + random(-5, 5);

  let fragmentWidth = 100
  let fragmentHeight = 100

  let source = [x1, y1, fragmentWidth, fragmentHeight]
  let target = [x2, y2, fragmentWidth, fragmentHeight]
  
  img.copy(img, ...source, ...target);



   image(img,0,0, width, height)

}


