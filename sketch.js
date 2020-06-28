var fixedRect,movingRect;
var object1,object2;

function setup() {
  createCanvas(800,400);

  movingRect=createSprite(400, 200, 50, 70);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  
  fixedRect=createSprite(600, 300, 50, 70);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  object1=createSprite(300,100,50,50);
  object1.shapeColor="green";

  object2=createSprite(300,300,50,50);
  object2.shapeColor="green";

}

function draw() {
  background(255,255,255);  

movingRect.x=mouseX;
movingRect.y=mouseY;
console.log(movingRect.x-fixedRect.x);

if (isTouching(movingRect,fixedRect)){

   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";

}
else if(isTouching(movingRect,object1)){

  movingRect.shapeColor="red";
  object1.shapeColor="red";

}
else {
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
   object1.shapeColor="green";
   object2.shapeColor="green";

}

  drawSprites();
}

function isTouching(objectA,objectB){
  if (objectA.x-objectB.x <= objectB.width/2+objectA.width/2 &&
    objectB.x-objectA.x <= objectB.width/2+objectA.width/2  && 
    objectA.y-objectB.y <= objectB.height/2+objectA.height/2 &&
    objectB.y-objectA.y <= objectB.height/2+objectA.height/2 ){

    return true;
    }

    else{
     return false;
    }

}