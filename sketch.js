let detailX;
let y1=0;
let y2=0;

function setup() {
  createCanvas(1280,800, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
  detailX = createSlider(3, 16, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
  y1=y1+10
  //describe(
   // 'a rotating white cone with limited X detail, with a slider that adjusts detailX'
 // );
}

function draw() {
  // always redraw
  background(220);
  drawGrid(20, 20, 100);
  drawAxis();
  rotateZ(frameCount * 0.01);
  fill(255);
  box(500,250,20);
  translate(0,0,50);
  box(10,250,100);
  line(0,10,0,0,10,100);
  line(0,20,0,0,20,100);
  line(0,30,0,0,30,100);
  line(0,40,0,0,40,100);
  line(0,50,0,0,50,100);
  line(0,60,0,0,60,100);
  line(0,70,0,0,70,100);
  line(0,80,0,0,80,100);
  line(0,90,0,0,90,100);
  line(0,100,0,0,100,100);
  line(0,110,0,0,110,100);
  line(0,120,0,0,120,100);
translate(0, 0, 50);
fill(233,222,222);
rect(0, 0, 250, 120);
translate(0, 0);
//rect(0, 0, 220, 220);  // Draw rect at new 0,0
  fill(233,255,222);
  box(250,250,10);
   //box(250,10,10);
  translate(-10, -0,50);
  fill(200,255,222);
  rect(0, 0, 150, 120);
  
  
  
  
  // ** put your code below this **/
  // ...
}

/* This draws the axis on the 3D plane */
function drawAxis(){
  push();
  strokeWeight(3);
  let sz = 300;
  // draw the lines
  stroke(255,0,0); // R
  line(0,0,0,sz,0,0); // X
  stroke(0,255,0); // G
  line(0,0,0,0,sz,0); // Y
  //stroke(0,0,255); //B
  //line(0,0,0,0,0,sz); // Z

  // draw the tips
  strokeWeight(12);
  stroke(255,0,0); // R
  point(sz,0,0); // X
  stroke(0,255,0); // G
  point(0,sz,0); // Y
  //stroke(0,0,255); //B
  //point(0,0,sz); // Z

  pop();
}


/* draw a grid with variable width height and size */
//function drawLine(){
 
  for(let Y1=0; Y1<200;Y1++){
//  line(0,y1,0,0,y2,100);
 }
 for(let Y2=0; Y2<200;Y2++){
 //line(0,y1,0,0,y2,100);  
 }
 //  }
/* draw a grid with variable width height and size */
function drawGrid(rows, cols, sz){
  push();
  stroke(255);
  // move to negative edge of the grid
  translate(-rows*0.5*sz,-cols*0.5*sz );

  // draw the rows
  for(let i = 0; i < rows+1; i++){
    line(i *sz, 0 ,i*sz, cols*sz);
  }
  // draw the columns
  for(let j = 0; j < cols+1; j++){
    line(0,j *sz, rows*sz ,j*sz);
  }
  //for(let Y1=0; Y1<200;Y1++){
  //   line(0,y1,0,0,y2,100);
  //for(let Y2=0; Y2<200;Y2++){
  //   line(0,y1,0,0,y2,100);   
  // }
  
       
  pop();
    
  }