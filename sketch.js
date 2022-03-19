//create variables
var trex,trex_running,edges;
var ground,groundImage
//this function is used to load files like images sound or font files

function preload()
{      
       //varname=loadAnimation(""file names"")
       trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");
       groundImage=loadImage("ground2.png")
}
//this function will get called once
function setup()
{
       createCanvas(600,200);
       //create sprite
       trex=createSprite(50,170,50,50);
       //sprite.addAnimation("label",variable)
       trex.addAnimation("trexrunning",trex_running);
       //scale the sprite
       trex.scale=0.7;
       ground=createSprite(300,190,600,20)
       //sprite.addImage(variable)
       ground.addImage(groundImage);
       ground.velocityX=-8
}
//this function wlll get called again and again
function draw()
{
        
       background("white");
       edges=createEdgeSprites()
       drawSprites();
       //to make sprite jump
       if(keyDown("space"))
       {
            trex.velocityY=-10
       }
       
       //adding gravity to trex
       trex.velocityY=trex.velocityY+0.8
       trex.collide(ground) ;

       //to display anything on cosole window of browser 
       console.log(ground.x)
       //resseting the ground position
       if(ground.x<0)
       {
         ground.x=300
       }
}