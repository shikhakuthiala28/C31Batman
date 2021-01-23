const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body= Matter.Body;
  Constraint= Matter.Constraint;

  var engine,world;
  var rain=[];


function preload(){
    
}

function setup(){

    createCanvas(750,750);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

    umbrella=new Umbrella(width/2-100,height-110);

    thunderbolt=new Thunderbolt(random(50,width-50),110);
   
    
}

function draw(){

    background(0);

    Engine.update(engine);

    ground.display();
    
    if(frameCount%30===0){
        rain.push(new Rain(random(20,730),5,5));
       
    }

    for (var j = 0; j < rain.length; j++){  
        rain[j].display();
    }

    umbrella.display();
    thunderbolt.display();
    
       
}   

