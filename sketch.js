var bgImage;
var boyImg,boy;
function preload(){
bgImage=loadImage("snow2.jpg")
boyImg=loadImage("boy.png")

}

function setup() {
  createCanvas(800,400);
 boy=createSprite(500, 350, 50, 50);
 boy.addImage(boyImg)
 boy.scale=0.05;

 obstacle=createSprite(500,255,100,10);

 
}

function draw() {
  background(bgImage);  
  
  
 /* if(isTouching(boy,obstacle)){
    boy.velocityY=0;
    boy.Y=350;
  }*/
  if(keyCode===32){

    boy.velocityY=-12;
    
   }
if(boy.Y<159){

  
  boy.velocityY=boy.velocityY+0.8
}



drawSprites();

}
/*function keyPressed(){
  if(keyCode===32){

    boy.velocityY=-12;
    
   }

}*/