var dogImg1;
var dogImg2;
var dog, database;
var foodS

function preload()
{
 dogImg1=loadImage("images/dogImg.png")
 dogImg2=loadImage("images/dogImg1.png")
 
}

function setup() {
  createCanvas(600, 600);
  database=firebase.database()
  dog=createSprite(300, 300, 50, 50)
  dog.addImage(dogImg1)
  dog.scale=0.5
  var foodCount=database.ref("Food/count")
  foodCount.on("value",read,showEror)

  
  
 
}


function draw() {
  background("lightblue")
  text ("remainingFood : "+foodS,250, 30)
  if(keyDown(UP_ARROW))
  {
    updateFood()
    dog.addImage(dogImg2)
  }
  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(dogImg1)
  }
 drawSprites()
  

}
function read(data){
foodS=data.val()
console.log(foodS)
}
function showEror(){
  console.log("cannot read the data")
}
function updateFood(){
  var X
  if(foodS<1)
  {
    X=50
  }
  else
  {
    X=foodS-1
  }
 database.ref("Food").set({
    "count":X
  })
}
