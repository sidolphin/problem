// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
cannon= new CannonBall
sling = new ShootBall(cannon.body,{x:200,y:100});
}

function draw() {
// Remember to update the Matter Engine and set the background.
ground.display();
cannon.display();
}


function mouseDragged(){
    Matter.Body.setPosition(cannon.body,{x:mouseX,y:mouseY});
    
    }
    function mouseReleased(){
    cannon.fly();
    
    }