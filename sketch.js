var canvas;
var score ;
var gamestate =  0;
var nameform,player,use;
 var truck1,truck2,truck3,truck4,truck5;


function preload(){
    truck1 = loadImage ("sprites/truck1.png");
    truck2 = loadImage ("sprites/truck2.png");
    truck3 = loadImage ("sprites/truck3.png");
    truck4 = loadImage ("sprites/truck4.png");
    truck5 = loadImage ("sprites/truck5.png");

}




function setup(){
 canvas = createCanvas(displayWidth,displayHeight);

   nameform = new NAMEform();
   //use = new Use();
   player = new Player();
   

}

function draw(){
    background("red");
    //use.display();
    nameform.display();
    



   
    
}


