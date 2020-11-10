var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle; 
var turn = 0;
var gamestate = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(2,400,10,800);
  ground1 = new Ground(798,400,10,800);



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    num1 = Math.floor(random(1,10))*50;
    num2 = Math.floor(random(1,10))*50;
    num3 = Math.floor(random(1,10))*50;
    num4 = Math.floor(random(1,10))*50;
    num5 = Math.floor(random(1,10))*50;
    num6 = Math.floor(random(1,10))*50;
    num7 = Math.floor(random(1,10))*50;
    num8 = Math.floor(random(1,10))*50;
    num9 = Math.floor(random(1,10))*50;
    num10 = Math.floor(random(1,10))*50;

}
 


function draw() {
  background("black");
  textSize(20);
  console.log(num1);
  text("Score : "+score,20,30);
  text(num1,20,520);
  text(num2,105,520);
  text(num3,185,520);
  text(num4,260,520);
  text(num5,340,520);
  text(num6,420,520);
  text(num7,500,520);
  text(num8,580,520);
  text(num9,660,520);
  text(num10,740,520);

  Engine.update(engine);
 


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     particle.display();

     if(particle.body.position.y > 760){
        if(particle.body.position.x < 80 && particle.body.position.x > 0){
          score = score + num1;
          particle = null;
        }
      }
    }

      if(particle != null){
        particle.display();
   
        if(particle.body.position.y > 760){
        if(particle.body.position.x > 80 && particle.body.position.x < 160){
          score = score + num2;
          particle = null;
        }
      }
    }

      if(particle != null){
        particle.display();
   
        if(particle.body.position.y > 760){
      
        if(particle.body.position.x > 160 && particle.body.position.x < 240){
          score = score + num3;
          particle = null;
        }
        }
      } 


      if(particle != null){
        particle.display();
   
        if(particle.body.position.y > 760){
        if(particle.body.position.x > 240 && particle.body.position.x < 320){
          score = score + num4;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 320 && particle.body.position.x < 400){
          score = score + num5;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 400 && particle.body.position.x < 480){
          score = score + num6;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 480 && particle.body.position.x < 560){
          score = score + num7;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 560 && particle.body.position.x < 640){
          score = score + num8;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 640 && particle.body.position.x < 720){
          score = score + num9;
          particle = null;
        }
      }
    }

    if(particle != null){
      particle.display();
 
      if(particle.body.position.y > 760){
        if(particle.body.position.x > 720 && particle.body.position.x < 800){
          score = score + num10;
          particle = null;
        }
      }
    }
    if(particle === null){
        if (turn >= 5) {
          gamestate = "end";
        }
      }
   if(gamestate === "end"){
    textSize(70);
    text("Game Over",220,250);
   }
}

function mousePressed(){
  if(gamestate !== "end"){
      turn++
      particle = new Particle(mouseX, 10,10,10);
  }
}