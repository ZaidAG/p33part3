const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var particle;
//var particles=[];
var plinkos=[];
var divisions=[];
var engine,world
var divisionHeight=300;
var score = 0;
var turn = 0;
var gameState="start";
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,40);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}
function draw() {
  background("green"); 
  Engine.update(engine);
  ground.display();
push();
fill("yellow");
  line(0,height/2+20,width,height/2+20);
  pop();
  textSize(30);
  text("Score:"+score,20,40)
  text("500",5,760);
  text("500",85,760);
  text("500",170,760);
  text("500",255,760);
  text("100",340,760);
  text("100",425,760);
  text("100",500,760);
  text("200",585,760);
  text("200",645,760);
  text("200",725,760);
  /*if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }*/
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}
/*for(var i=0;i<particles.length;i++){
  particles[i].display();
}*/
if(particle!==null  && particle !==undefined){
  console.log(particle);
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        //turn=turn+1;
        if(turn>=5)gameState="end";
      }else if (particle.body.position.x < 600 && particle.body.position.x > 301 ){
        score=score+100;
        particle=null;
        //turn=turn+1;
        if(turn>=5)gameState="end";
      }else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){
        score=score+200;
        particle=null;
        //turn=turn+1;
        if(turn>=5)gameState="end";
      }
        
        
      }
    }
}

function mousePressed(){
  
if(gameState!=="end"){
  turn++;
  particle=new Particle(mouseX,10,10);
  console.log(particle)
}
}