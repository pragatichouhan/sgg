var canvas
var slide1
var intro1
var intro2
var intro3
var back
var next
var level1
var spaceship2
var rock1
var rock2
var rock3
var uparrowkey
var downarrowkey
var leftarrowkey

//..................................................................................................
function preload(){
  slide1=loadImage("asset/1STSLIDE.PNG")
  intro1=loadImage("asset/INTRO1.PNG")
  intro2=loadImage("asset/intro2.PNG")
  back=loadImage("asset/BACK.PNG")
  next=loadImage("asset/NEXT.PNG")
  level1=loadImage("asset/level1.jpeg")
  spaceship2=loadImage("asset/spaceship2.png")
  rock1=loadImage("asset/rock1.jpg")
  rock2=loadImage("asset/rock2.jpg")
  rock3=loadImage("asset/rock3.png")
  uparrowkey=loadImage("asset/uparrowkey.PNG")
  downarrowkey=loadImage("asset/downarrowkey.PNG")
  leftarrowkey=loadImage("asset/leftarrowkey.PNG")
  rightarrowkey=loadImage("asset/rightarrowkey.PNG")
}

//..................................................................................................
function setup(){
  canvas=createCanvas(windowWidth, windowHeight)
  bg=createSprite(width/2,height/2,width,height)
  bg.addImage("slide1",slide1)
  bg.addImage("intro1",intro1)
  bg.addImage("intro2",intro2)
  

  bg.scale=1

  button=createImg("asset/START.PNG")
  button.position(700,400)
  button.mouseClicked(slides)
  //button.mouseClicked(slide2)
arckey=createSprite(700,400)
arckey.addImage("key",rightarrowkey)
arckey.scale=0.5
arckey.visible=false

//arckey.mousePressed(slide2)
  //rock=createSprite(40,40,40,40)
  //rock.addImage(rock1)

}
//..................................................................................................
function draw(){
  background("black")

  drawSprites()
}

//..................................................................................................
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  function slides()
  {
  bg.changeImage("intro1",intro1)
  button.hide()
  arckey.visible=true
  }

  function slide2(){
    bg.changeImage("intro2",intro2)
  }

