//numeric 
var a=19;
console.log(a);

//string 
var b="123";
console.log(b);

//boolean
var c = true;
console.log(c);

//undefined
var d;
console.log(d);

//null
var e = null;
console.log(e);

//array
arr = [2,"abc",true,235,"plm"];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);

//array inside array
arr1 = [[23,"garima"],[true,13,"chi"],[00,"model"]]
console.log(arr1);
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[0][1]);
console.log(arr1[1][2]);

arr1.push(1234567890);
console.log(arr1);

arr1.pop();
console.log(arr1);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5; 
var pig1,pig2; 
var platform,ground;
var log1,log2,log3,log4,log5;
var bird;
var bgIMG;
var ss;
var gamestate="onsling";
var score=0

function preload() {
    api() 

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,300,300,180);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    bird = new Bird(210,110);
    
    ss = new slingShot(bird.body,{x: 210 ,y: 110});
    }

function draw(){
    if(bgIMG)
    background(bgIMG)
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    platform.display();

    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();

    log1.display();
    log2.display();
    log3.display();  
    log4.display();

    bird.display();
    ss.display();


    textSize(20);
    text("Score ="+score,1000,50 )
    
}



function mouseDragged(){
    if(gamestate==="onsling"){
    Matter.Body.setPosition(bird.body,{x: mouseX,y:mouseY});}}    


function mouseReleased(){
    ss.fly();
    gamestate="launched";}



function keyPressed(){

    if(keyCode===32 && bird.body.speed<2){
       ss.attach(bird.body);
       bird.memory=[];
       Matter.Body.setPosition(bird.body,{x:210,y:110})
    }
}



async function api(){
    var helper=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var type=await helper.json();
    var dateTime=type.datetime;
    console.log(dateTime);
    var slicer=dateTime.slice(11,13);
    console.log(slicer);
    if(slicer<20&&slicer>06){
       bgIMG=loadImage("sprites/bg.png") 
    }
    else{bgIMG=loadImage("sprites/bg2.jpg");}
}



