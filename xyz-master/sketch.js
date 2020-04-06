var canvas;
var score = 0  ;
var gamestate =  0;
var nameform,player1,use,player;
var truck1,truck2,truck3,truck4,truck5,maleButton;
var car,water,carsGroup,puddleGroup;
 var ground,gImg;      


function preload(){
    truck1 = loadImage ("sprites/truck1.png");
    truck2 = loadImage ("sprites/truck2.png");
    truck3 = loadImage ("sprites/truck3.png");
    truck4 = loadImage ("sprites/truck4.png");
    truck5 = loadImage ("sprites/truck5.png");
    maleButton = loadImage ("sprites/button_male.PNG");
    gImg = loadImage("sprites/Capture.PNG");

}




function setup(){
 canvas = createCanvas(displayWidth,displayHeight);

 ground = createSprite(displayWidth/2,displayHeight*1.5,displayWidth,displayHeight*3);
 ground.addImage("backImg",gImg);//0.6875
 ground.y = ground.height /2;
 ground.velocityY = 6;

 player = createSprite(displayWidth/8,displayHeight*0.6875,40,60); 
   nameform = new NAMEform();
  
   
   player1 = new Player();
   carsGroup = new Group();
   puddleGroup = new Group();
   

}

function draw(){
    background(255);

   /* if(car.isTouching(player)){
      gamestate = 2
    player.hide();
        }
        if(water.isTouching(player)){
         score = score + 20;
         
           }*/



    if (ground.y < 0){
        ground.y = ground.height/2;
      }
   
    nameform.display();


    

    if(keyDown(LEFT_ARROW) && player.x === displayWidth*0.875){
        player.x = 250;
    }
    if(keyDown(LEFT_ARROW) && player.x === displayWidth*0.625){
        this.player.x = 150;
    }
    if(keyDown(LEFT_ARROW) && player.x === displayWidth*0.375){
     player.x = 50;
    }



    if(keyDown(RIGHT_ARROW) && player.x === displayWidth/8){
     player.x = 150;
    }
    if(keyDown(RIGHT_ARROW) && player.x === displayWidth*0.375){
      player.x = 250;
    }
    if(keyDown(RIGHT_ARROW) && player.x === displayWidth*0.625){
       player.x = 350;
    }
  

 spawnCars();
 puddle();   

 drawSprites();

   
    
}


   

        function spawnCars(){
            if(frameCount % 67 === 0 &&  gamestate===1) {
        var rand = Math.round(random(1,4));
        switch(rand){
        case 1:car = createSprite(displayWidth/8,-30,65,125);
        
        break;
        case 2:car = createSprite(displayWidth*0.375,-30,65,125);
       
        break;
        case 3:car = createSprite(displayWidth*0.625,-30,65,125);
        
        break;
        case 4:car = createSprite(displayWidth*0.875,-30,65,125);
        
        break;
        default:break;}

        car.velocityY = 6;          
        
        
        var rnd = Math.round(random(1,5));
        switch(rnd){
            case 1:car.addImage(truck1);
            break;
            case 2:car.addImage(truck2);
            break;
            case 3:car.addImage(truck3);
            break;
            case 4:car.addImage(truck4);
            break;
            case 5:car.addImage(truck5);
            break;
            default:break;
        }
        
        car.scale = 1;
        
        car.lifetime = 350;
        
        carsGroup.add(car);
       //carsGroup.setVelocityYEach(6);
    
         }}
         function puddle(){
            
            if(frameCount % 125 === 0 &&  gamestate===1) {
                var ran = Math.round(random(1,4));
                switch(ran){
                case 1:water= createSprite(displayWidth/8,-30,65,125);
                water.velocityY = 6;
                break;
                case 2:water= createSprite(displayWidth*0.375,-30,65,125);//0.375
                water.velocityY = 6;
                break;
                case 3:water= createSprite(displayWidth*0.625,-30,65,125);//0.625
                water.velocityY = 6;
                break;
                case 4:water= createSprite(displayWidth*0.875,-30,65,125);//0.875
                water.velocityY = 6;
                break;
                default:break;}
               
               puddleGroup.add(water);
         }
    
    
    
       
    
       
    }
    















