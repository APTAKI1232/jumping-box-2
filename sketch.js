var canvas;
var music;
var box1,box2,box3,box4;
var main;
function preload(){
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite (680,560,185,35)
    box2 = createSprite (480,560,185,35)
    box3 = createSprite (280,560,185,35)
    box4 = createSprite (80,560,150,35)
  box1.shapeColor = "yellow"
    box2.shapeColor = "green"
    box3.shapeColor = "red"
    box4.shapeColor = "blue"
   
   
    //create box sprite and give velocity
    main = createSprite(random(20,750),50,20,20)
    main.velocityY = random(5,10)
    main.velocityX = random(8,10)   
    main.shapeColor = "yellow"
}

function draw() {
    background(rgb(169,169,169));
    if (main.isTouching(box1)){

        main.shapeColor = "yellow"
    
        }
        if (main.isTouching(box2)){
    
            main.shapeColor = "green"
        
            }
            if (main.isTouching(box3)){
    
                main.shapeColor = "red"
            
                }
                if (main.isTouching(box4)){
    
                    main.shapeColor = "blue"
                
                    }
    //create edgeSprite
    main.bounceOff (box1);
    main.bounceOff (box2);
    main.bounceOff (box3);
    main.bounceOff (box4);
    var edge = createEdgeSprites()
    main.bounceOff (edge)
    if (main.isTouching(box1)&& main.bouceOff(box1)){
   
    console.log ("working")
   }

  
    //add condition to check if box touching surface and make it box
   
    drawSprites();
}
