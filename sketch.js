var canvas;
var music;
var b1, b2, b3, b4, box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1 = createSprite(70,580,200,20);
    b1.shapeColor = "green";

    b2 = createSprite(280,580,200,20);
    b2.shapeColor = "blue";

    b3 = createSprite(490,580,200,20);
    b3.shapeColor = "yellow";

    b4 = createSprite(700,580,200,20);
    b4.shapeColor = "red";

    box = createSprite(random(20,750), 20, 20,20);
    box.shapeColor = "white";
    box.velocityY = +6;
    box.velocityX = -6;





    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   
    //create edgeSprite
     edges = createEdgeSprites();

     box.bounceOff(edges);

     if(box.isTouching(b1)&& box.bounceOff(b1)){
         box.shapeColor = "green";
         music.play();
     }


    //add condition to check if box touching surface and make it box
    if(box.isTouching(b2)&& box.bounceOff(b2)){
        box.shapeColor = "blue";
        music.play();
    }

    if(box.isTouching(b3)&& box.bounceOff(b3)){
        box.shapeColor = "yellow";
        music.play();
    }

    if(box.isTouching(b4)&& box.bounceOff(b4)){
        box.shapeColor = "red";
        music.stop();
        box.velocityY = 0;
        box.velocityX = 0;
    }

    
    
    drawSprites();
    
}
