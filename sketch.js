const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygonImage,ground,ground2;

var slingshot,ball;

var polygonImage;

 function preload(){
     polygonImage = loadImage("polygon.png");
 }
function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);
        ground = new Ground();
    
        //slingshot = new Slingshot(300,305,20,10);

        stand1 = new Stand(390,300,250,10);

        stand2 = new Stand(700,200,200,10);

         //level 1
         box1 = new Box(300,275,30,40); 
         box2 = new Box(330,275,30,40); 
         box3 = new Box(360,275,30,40); 
         box4 = new Box(390,275,30,40); 
         box5 = new Box(420,275,30,40); 
         box6 = new Box(450,275,30,40); 
         box7 = new Box(480,275,30,40);
         
         //level 2
         box8 = new Box(330,235,30,40);
         box9 = new Box(360,235,30,40);
         box10 = new Box(390,235,30,40);
         box11 = new Box(420,235,30,40);
         box12 = new Box(450,235,30,40);

         //level 3
         box13 = new Box(360,195,30,40);
         box14 = new Box(390,195,30,40);
         box15 = new Box(420,195,30,40);

         //level 4
         box16 = new Box(390,155,30,40);

         //new tower level 1
         box17 = new Box(740,165,30,40);
         box18 = new Box(770,165,30,40);
         box19 = new Box(800,165,30,40);
         box20 = new Box(830,165,30,40);
         box21 = new Box(860,165,30,40);

         //level 2
         box22 = new Box(770,125,30,40);
         box23 = new Box(800,125,30,40);
         box24 = new Box(830,125,30,40);

         //level 3
        box25 = new Box(800,85,30,40);

        ground = new Ground(390,305,250,20);
        ground2 = new Ground(800,195,220,20);

        //ball = new Polygon(200,300,20,20);

        ball = Bodies.circle(50,200,20);
        World.add(world,ball);
        slingshot = new Slingshot(this.ball,{x:100,y:200});
             
}
function draw(){
Engine.update(engine);
background(0);

ground.display();
ground2.display();
stand1.display();
stand2.display();

fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

fill("pink");    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

fill("green");    
    box13.display();
    box14.display();
    box15.display();

fill("grey");    
    box16.display();

fill("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

fill("green");
    box22.display();
    box23.display();
    box24.display();
  
fill("pink");
    box25.display();    

    imageMode(CENTER);

    image(polygonImage,ball.position.x,ball.position.y,40,40);

    

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){ 
    slingshot.fly(); 
}

function keyPressed(){
    if(keyCode === 32){
    slingShot.attach(this.ball);
    }    
}