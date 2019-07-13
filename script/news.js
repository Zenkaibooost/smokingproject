let ax=1;
let bx=1;
let cx=1;
let dx=50;
let f=9;


function setup (){   
    createCanvas(400, 400);
    //sets units of angles to be in degrees for arc
    angleMode(DEGREES);
    

}

function draw(){
 drawGraph();
 
 if (keyIsPressed === true) { fill(0); } else { fill(255); } rect(25, 25, 50, dx);

if ( key === 'g' ) { 
ax=21.04*f;
bx=3.682*f;
cx=0.0093*f;

} else { 
ax=1;
bx=1;
cx=1; 

if ( key === 'u' ) { 
ax=6.322*f;
bx=0.562658*f;
cx=1*f;

} else { 
ax=1;
bx=1;
cx=1;
if ( key === 'w' ) { 
ax=3.612*f;
bx=0.93912*f;
cx=1*f;

} else { 
ax=1;
bx=1;
cx=1; 
}
}
}
}


dx=dx+1; 

function drawGraph(){
     background(0,144,188); 
    strokeWeight(5);
    stroke(0);
    noFill(0);
    rect(100,100,190,200);
    
    strokeWeight(5);
    stroke(0);
    fill(31.255, -11.719, -3.727);
    rect(110,290,50,-ax);
    
    strokeWeight(5);
    stroke(0);
    fill(0,0,255);
    rect(170,290,50,-bx);
    
 strokeWeight(5);
    stroke(0);
    fill(255,0,0);
    rect(230,290,50,-cx);
    
   strokeWeight(5);
    noStroke(0);
    fill(0,0,0);
    text('Grey= Population Blue= #of smokers     Red=# of lung cancer',300,100,100,200);
    
    noStroke(0);
    fill(0,0,0);
    text('G= Georgia          W= West Virginia U=Utah',300,200,100,200);
    
}