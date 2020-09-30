function setup() {
  createCanvas(1000, 1000);

  //definim els colors que te el programa

  Color1 = color(2550,0,0);
  randomColor2 = color(random(255),random(255),random(255));
  randomColor3 = color(random(255),random(255),random(255));
  randomColor4 = color(random(255),random(255),random(255));
  randomColor5 = color(random(255),random(255),random(255));
}

//declarem les variables del programa, bools i variables

y=50;

var click = false;
let scene = 1;
let r;

//creem la pantalla principal

function error(){
  background(51);
  fill(Color1);
  text("GENERATIVE NUMBERS",280,435);
  text("CLICK TO START",350,585);
  textSize(40);
  textStyle("bold");

  for (let i = 95; i < 845; i += 50) {
    rect(95, i, 70, 3);
    rect(170, i, 70, 3);
    rect(245, i, 70, 3);
    rect(320, i, 70, 3);
    rect(395, i, 70, 3);
    rect(470, i, 70, 3);
    rect(545, i, 70, 3);
    rect(620, i, 70, 3);
    rect(695, i, 70, 3);
    rect(770, i, 70, 3);
    rect(845, i, 70, 3);
}
}

//creem el numero 0

function zero(){
  background(51);
  fill(randomColor2);
 //linea 1
  rect(95, y, 70, 3);
  rect(170, y, 70, 3);
  rect(245, y, 70, 3);
  rect(320, y, 70, 8);
  rect(395, y, 70, 20);
  rect(470, y, 70, 20);
  rect(545, y, 70, 20);
  rect(620, y, 70, 8);
  rect(695, y, 70, 3);
  rect(770, y, 70, 3);
  rect(845, y, 70, 3);
  
  //linea2
  rect(95, y*2, 70, 3);
  rect(170, y*2, 70, 3);
  rect(245, y*2, 70, 8);
  rect(320, y*2, 70, 20);
  rect(395, y*2, 70, 20);
  rect(470, y*2, 70, 20);
  rect(545, y*2, 70, 20);
  rect(620, y*2, 70, 20);
  rect(695, y*2, 70, 8);
  rect(770, y*2, 70, 3);
  rect(845, y*2, 70, 3);
  
  //linea 3
  rect(95, y*3, 70, 3);
  rect(170, y*3, 70, 8);
  rect(245, y*3, 70, 20);
  rect(320, y*3, 70, 20);
  rect(395, y*3, 70, 20);
  rect(470, y*3, 70, 20);
  rect(545, y*3, 70, 20);
  rect(620, y*3, 70, 20);
  rect(695, y*3, 70, 20);
  rect(770, y*3, 70, 8);
  rect(845, y*3, 70, 3);
  
  //linea 4
  rect(95, y*4, 70, 8);
  rect(170, y*4, 70, 20);
  rect(245, y*4, 70, 20);
  rect(320, y*4, 70, 20);
  rect(620, y*4, 70, 20);
  rect(695, y*4, 70, 20);
  rect(770, y*4, 70, 20);
  rect(845, y*4, 70, 8);
  
  //linea 5
  rect(95, y*5, 70, 8);
  rect(170, y*5, 70, 20);
  rect(245, y*5, 70, 20);
  rect(320, y*5, 70, 20);
  rect(620, y*5, 70, 20);
  rect(695, y*5, 70, 20);
  rect(770, y*5, 70, 20);
  rect(845, y*5, 70, 8);
  
  //linea 6
  rect(95, y*6, 70, 8);
  rect(170, y*6, 70, 20);
  rect(245, y*6, 70, 20);
  rect(320, y*6, 70, 20);
  rect(620, y*6, 70, 20);
  rect(695, y*6, 70, 20);
  rect(770, y*6, 70, 20);
  rect(845, y*6, 70, 8);
  
  //linea 7
  rect(95, y*7, 70, 8);
  rect(170, y*7, 70, 20);
  rect(245, y*7, 70, 20);
  rect(320, y*7, 70, 20);
  rect(620, y*7, 70, 20);
  rect(695, y*7, 70, 20);
  rect(770, y*7, 70, 20);
  rect(845, y*7, 70, 8);
  
  //linea 8
  rect(95, y*8, 70, 8);
  rect(170, y*8, 70, 20);
  rect(245, y*8, 70, 20);
  rect(320, y*8, 70, 20);
  rect(620, y*8, 70, 20);
  rect(695, y*8, 70, 20);
  rect(770, y*8, 70, 20);
  rect(845, y*8, 70, 8);
  
  //linea9
  rect(95, y*9, 70, 8);
  rect(170, y*9, 70, 20);
  rect(245, y*9, 70, 20);
  rect(320, y*9, 70, 20);
  rect(620, y*9, 70, 20);
  rect(695, y*9, 70, 20);
  rect(770, y*9, 70, 20);
  rect(845, y*9, 70, 8);
  
  //linea10
  rect(95, y*10, 70, 8);
  rect(170, y*10, 70, 20);
  rect(245, y*10, 70, 20);
  rect(320, y*10, 70, 20);
  rect(620, y*10, 70, 20);
  rect(695, y*10, 70, 20);
  rect(770, y*10, 70, 20);
  rect(845, y*10, 70, 8);
  
  //linea11
  rect(95, y*11, 70, 8);
  rect(170, y*11, 70, 20);
  rect(245, y*11, 70, 20);
  rect(320, y*11, 70, 20);
  rect(620, y*11, 70, 20);
  rect(695, y*11, 70, 20);
  rect(770, y*11, 70, 20);
  rect(845, y*11, 70, 8);
  
  //linea12
  rect(95, y*12, 70, 8);
  rect(170, y*12, 70, 20);
  rect(245, y*12, 70, 20);
  rect(320, y*12, 70, 20);
  rect(620, y*12, 70, 20);
  rect(695, y*12, 70, 20);
  rect(770, y*12, 70, 20);
  rect(845, y*12, 70, 8);
  
  //linea13
  rect(95, y*13, 70, 8);
  rect(170, y*13, 70, 20);
  rect(245, y*13, 70, 20);
  rect(320, y*13, 70, 20);
  rect(620, y*13, 70, 20);
  rect(695, y*13, 70, 20);
  rect(770, y*13, 70, 20);
  rect(845, y*13, 70, 8);
  
  //linea14
  rect(95, y*14, 70, 8);
  rect(170, y*14, 70, 20);
  rect(245, y*14, 70, 20);
  rect(320, y*14, 70, 20);
  rect(620, y*14, 70, 20);
  rect(695, y*14, 70, 20);
  rect(770, y*14, 70, 20);
  rect(845, y*14, 70, 8);
  
  //linea15
  rect(95, y*15, 70, 3);
  rect(170, y*15, 70, 8);
  rect(245, y*15, 70, 20);
  rect(320, y*15, 70, 20);
  rect(395, y*15, 70, 20);
  rect(470, y*15, 70, 20);
  rect(545, y*15, 70, 20);
  rect(620, y*15, 70, 20);
  rect(695, y*15, 70, 20);
  rect(770, y*15, 70, 8);
  rect(845, y*15, 70, 3);
  
  //linea16
  rect(95, y*16, 70, 3);
  rect(170, y*16, 70, 3);
  rect(245, y*16, 70, 8);
  rect(320, y*16, 70, 20);
  rect(395, y*16, 70, 20);
  rect(470, y*16, 70, 20);
  rect(545, y*16, 70, 20);
  rect(620, y*16, 70, 20);
  rect(695, y*16, 70, 8);
  rect(770, y*16, 70, 3);
  rect(845, y*16, 70, 3);
  
  //linea17
  rect(95, y*17, 70, 3);
  rect(170, y*17, 70, 3);
  rect(245, y*17, 70, 3);
  rect(320, y*17, 70, 8);
  rect(395, y*17, 70, 20);
  rect(470, y*17, 70, 20);
  rect(545, y*17, 70, 20);
  rect(620, y*17, 70, 8);
  rect(695, y*17, 70, 3);
  rect(770, y*17, 70, 3);
  rect(845, y*17, 70, 3); 
}

//creem el numero 1

function one(){
  background(51);
  fill(randomColor3);
  //linea 1
  rect(95, y, 70, 3);
  rect(170, y, 70, 3);
  rect(245, y, 70, 3);
  rect(320, y, 70, 8);
  rect(395, y, 70, 20);
  rect(470, y, 70, 20);
  rect(545, y, 70, 20);
  rect(620, y, 70, 8);
  rect(695, y, 70, 3);
  rect(770, y, 70, 3);
  rect(845, y, 70, 3);
  
  //linea2
  rect(95, y*2, 70, 3);
  rect(170, y*2, 70, 3);
  rect(245, y*2, 70, 8);
  rect(320, y*2, 70, 20);
  rect(395, y*2, 70, 20);
  rect(470, y*2, 70, 20);
  rect(545, y*2, 70, 20);
  rect(620, y*2, 70, 20);
  rect(695, y*2, 70, 8);
  rect(770, y*2, 70, 3);
  rect(845, y*2, 70, 3);
  
  //linea 3
  rect(95, y*3, 70, 3);
  rect(170, y*3, 70, 8);
  rect(245, y*3, 70, 20);
  rect(320, y*3, 70, 20);
  rect(395, y*3, 70, 20);
  rect(470, y*3, 70, 8);
  rect(545, y*3, 70, 20);
  rect(620, y*3, 70, 20);
  rect(695, y*3, 70, 20);
  rect(770, y*3, 70, 3);
  rect(845, y*3, 70, 3);
  
  //linea 4
  rect(95, y*4, 70, 8);
  rect(170, y*4, 70, 20);
  rect(245, y*4, 70, 20);
  rect(320, y*4, 70, 20);
  rect(545, y*4, 70, 20);
  rect(620, y*4, 70, 20);
  rect(695, y*4, 70, 20);
  rect(770, y*4, 70, 3);
  rect(845, y*4, 70, 3);
  
  //linea 5
  rect(95, y*5, 70, 8);
  rect(170, y*5, 70, 20);
  rect(245, y*5, 70, 20);
  rect(320, y*5, 70, 8);
  rect(545, y*5, 70, 20);
  rect(620, y*5, 70, 20);
  rect(695, y*5, 70, 20);
  rect(770, y*5, 70, 3);
  rect(845, y*5, 70, 3);
  
  //linea 6
  rect(95, y*6, 70, 8);
  rect(170, y*6, 70, 20);
  rect(245, y*6, 70, 8);
  rect(320, y*6, 70, 3);
  rect(545, y*6, 70, 20);
  rect(620, y*6, 70, 20);
  rect(695, y*6, 70, 20);
  rect(770, y*6, 70, 3);
  rect(845, y*6, 70, 3);
  
  //linea 7
  rect(545, y*7, 70, 20);
  rect(620, y*7, 70, 20);
  rect(695, y*7, 70, 20);
  rect(770, y*7, 70, 3);
  rect(845, y*7, 70, 3);
  
  //linea 8
  rect(545, y*8, 70, 20);
  rect(620, y*8, 70, 20);
  rect(695, y*8, 70, 20);
  rect(770, y*8, 70, 3);
  rect(845, y*8, 70, 3);
  
  //linea9
  rect(545, y*9, 70, 20);
  rect(620, y*9, 70, 20);
  rect(695, y*9, 70, 20);
  rect(770, y*9, 70, 3);
  rect(845, y*9, 70, 3);
  
  //linea10
  rect(545, y*10, 70, 20);
  rect(620, y*10, 70, 20);
  rect(695, y*10, 70, 20);
  rect(770, y*10, 70, 3);
  rect(845, y*10, 70, 3);
  
  //linea11
  rect(545, y*11, 70, 20);
  rect(620, y*11, 70, 20);
  rect(695, y*11, 70, 20);
  rect(770, y*11, 70, 3);
  rect(845, y*11, 70, 3);
  
  //linea12
  rect(545, y*12, 70, 20);
  rect(620, y*12, 70, 20);
  rect(695, y*12, 70, 20);
  rect(770, y*12, 70, 3);
  rect(845, y*12, 70, 3);
  
  //linea13
  rect(545, y*13, 70, 20);
  rect(620, y*13, 70, 20);
  rect(695, y*13, 70, 20);
  rect(770, y*13, 70, 3);
  rect(845, y*13, 70, 3);
  
  //linea14
  rect(545, y*14, 70, 20);
  rect(620, y*14, 70, 20);
  rect(695, y*14, 70, 20);
  rect(770, y*14, 70, 3);
  rect(845, y*14, 70, 3);
  
  //linea15
  rect(470, y*15, 70, 8);
  rect(545, y*15, 70, 20);
  rect(620, y*15, 70, 20);
  rect(695, y*15, 70, 20);
  rect(770, y*15, 70, 8);
  rect(845, y*15, 70, 3);
  
  //linea16
  rect(470, y*16, 70, 20);
  rect(545, y*16, 70, 20);
  rect(620, y*16, 70, 20);
  rect(695, y*16, 70, 20);
  rect(770, y*16, 70, 20);
  rect(845, y*16, 70, 3);
  
  //linea17
  rect(470, y*17, 70, 20);
  rect(545, y*17, 70, 20);
  rect(620, y*17, 70, 20);
  rect(695, y*17, 70, 20);
  rect(770, y*17, 70, 20);
  rect(845, y*17, 70, 3);
}

//creem el numero 2

function two(){
  background(51);
  fill(randomColor4);
  //linea 1
  rect(95, y, 70, 3);
  rect(170, y, 70, 3);
  rect(245, y, 70, 3);
  rect(320, y, 70, 8);
  rect(395, y, 70, 20);
  rect(470, y, 70, 20);
  rect(545, y, 70, 20);
  rect(620, y, 70, 8);
  rect(695, y, 70, 3);
  rect(770, y, 70, 3);
  rect(845, y, 70, 3);
  
  //linea2
  rect(95, y*2, 70, 3);
  rect(170, y*2, 70, 3);
  rect(245, y*2, 70, 8);
  rect(320, y*2, 70, 20);
  rect(395, y*2, 70, 20);
  rect(470, y*2, 70, 20);
  rect(545, y*2, 70, 20);
  rect(620, y*2, 70, 20);
  rect(695, y*2, 70, 8);
  rect(770, y*2, 70, 3);
  rect(845, y*2, 70, 3);
  
  //linea 3
  rect(95, y*3, 70, 3);
  rect(170, y*3, 70, 8);
  rect(245, y*3, 70, 20);
  rect(320, y*3, 70, 20);
  rect(395, y*3, 70, 20);
  rect(470, y*3, 70, 20);
  rect(545, y*3, 70, 20);
  rect(620, y*3, 70, 20);
  rect(695, y*3, 70, 20);
  rect(770, y*3, 70, 8);
  rect(845, y*3, 70, 3);
  
  //linea 4
  rect(95, y*4, 70, 8);
  rect(170, y*4, 70, 20);
  rect(245, y*4, 70, 20);
  rect(320, y*4, 70, 20);
  rect(545, y*4, 70, 20);
  rect(620, y*4, 70, 20);
  rect(695, y*4, 70, 20);
  rect(770, y*4, 70, 20);
  rect(845, y*4, 70, 8);
  
  //linea 5
  rect(95, y*5, 70, 8);
  rect(170, y*5, 70, 20);
  rect(245, y*5, 70, 20);
  rect(320, y*5, 70, 20);
  rect(545, y*5, 70, 20);
  rect(620, y*5, 70, 20);
  rect(695, y*5, 70, 20);
  rect(770, y*5, 70, 20);
  rect(845, y*5, 70, 8);
  
  //linea 6
  rect(545, y*6, 70, 20);
  rect(620, y*6, 70, 20);
  rect(695, y*6, 70, 20);
  rect(770, y*6, 70, 20);
  rect(845, y*6, 70, 8);
  
  //linea 7
  rect(545, y*7, 70, 20);
  rect(620, y*7, 70, 20);
  rect(695, y*7, 70, 20);
  rect(770, y*7, 70, 8);
  rect(845, y*7, 70, 8);
  
  //linea 8
  rect(545, y*8, 70, 20);
  rect(620, y*8, 70, 20);
  rect(695, y*8, 70, 20);
  rect(770, y*8, 70, 8);
  rect(845, y*8, 70, 3);
  
  //linea9
  
  rect(395, y*9, 70, 8);
  rect(470, y*9, 70, 20);
  rect(545, y*9, 70, 20);
  rect(620, y*9, 70, 20);
  rect(695, y*9, 70, 8);
  rect(770, y*9, 70, 3);
  rect(845, y*9, 70, 3);
  
  //linea10
  rect(320, y*10, 70, 8);
  rect(395, y*10, 70, 20);
  rect(470, y*10, 70, 20);
  rect(545, y*10, 70, 20);
  rect(620, y*10, 70, 8);
  rect(695, y*10, 70, 3);
  rect(770, y*10, 70, 3);
  rect(845, y*10, 70, 3);
  
  //linea11
  rect(95, y*11, 70, 3);
  rect(170, y*11, 70, 3);
  rect(245, y*11, 70, 8);
  rect(320, y*11, 70, 20);
  rect(395, y*11, 70, 20);
  rect(470, y*11, 70, 20);
  rect(545, y*11, 70, 20);
  rect(620, y*11, 70, 8);
  rect(695, y*11, 70, 3);
  rect(770, y*11, 70, 3);
  rect(845, y*11, 70, 3);
  
  //linea12
  rect(95, y*12, 70, 3);
  rect(170, y*12, 70, 8);
  rect(245, y*12, 70, 20);
  rect(320, y*12, 70, 20);
  rect(395, y*12, 70, 20);
  rect(470, y*12, 70, 20);
  rect(545, y*12, 70, 20);
  rect(620, y*12, 70, 8);
  rect(695, y*12, 70, 3);
  rect(770, y*12, 70, 3);
  rect(845, y*12, 70, 3);
  
  //linea13
  rect(95, y*13, 70, 3);
  rect(170, y*13, 70, 8);
  rect(245, y*13, 70, 20);
  rect(320, y*13, 70, 20);
  rect(395, y*13, 70, 20);
  rect(470, y*13, 70, 20);
  rect(545, y*13, 70, 8);
  rect(620, y*13, 70, 3);
  rect(695, y*13, 70, 3);
  rect(770, y*13, 70, 3);
  rect(845, y*13, 70, 3);
  
  //linea14
  rect(95, y*14, 70, 3);
  rect(170, y*14, 70, 8);
  rect(245, y*14, 70, 20);
  rect(320, y*14, 70, 20);
  rect(395, y*14, 70, 20);
  rect(470, y*14, 70, 20);
  rect(545, y*14, 70, 8);
  rect(620, y*14, 70, 3);
  rect(695, y*14, 70, 3);
  rect(770, y*14, 70, 3);
  rect(845, y*14, 70, 3);
  
  //linea15
  rect(95, y*15, 70, 8);
  rect(170, y*15, 70, 20);
  rect(245, y*15, 70, 20);
  rect(320, y*15, 70, 20);
  rect(395, y*15, 70, 20);
  rect(470, y*15, 70, 20);
  rect(545, y*15, 70, 20);
  rect(620, y*15, 70, 20);
  rect(695, y*15, 70, 20);
  rect(770, y*15, 70, 20);
  rect(845, y*15, 70, 8);
  
  //linea16
  rect(95, y*16, 70, 8);
  rect(170, y*16, 70, 20);
  rect(245, y*16, 70, 20);
  rect(320, y*16, 70, 20);
  rect(395, y*16, 70, 20);
  rect(470, y*16, 70, 20);
  rect(545, y*16, 70, 20);
  rect(620, y*16, 70, 20);
  rect(695, y*16, 70, 20);
  rect(770, y*16, 70, 20);
  rect(845, y*16, 70, 20);
  
  //linea17
  rect(95, y*17, 70, 8);
  rect(170, y*17, 70, 20);
  rect(245, y*17, 70, 20);
  rect(320, y*17, 70, 20);
  rect(395, y*17, 70, 20);
  rect(470, y*17, 70, 20);
  rect(545, y*17, 70, 20);
  rect(620, y*17, 70, 20);
  rect(695, y*17, 70, 20);
  rect(770, y*17, 70, 20);
  rect(845, y*17, 70, 20);
   
}

//creem el numero 3

function three(){
  background(51);
  fill(randomColor5);
  //linea 1
  rect(95, y, 70, 3);
  rect(170, y, 70, 3);
  rect(245, y, 70, 3);
  rect(320, y, 70, 8);
  rect(395, y, 70, 20);
  rect(470, y, 70, 20);
  rect(545, y, 70, 20);
  rect(620, y, 70, 8);
  rect(695, y, 70, 3);
  rect(770, y, 70, 3);
  rect(845, y, 70, 3);
  
  //linea2
  rect(95, y*2, 70, 3);
  rect(170, y*2, 70, 3);
  rect(245, y*2, 70, 8);
  rect(320, y*2, 70, 20);
  rect(395, y*2, 70, 20);
  rect(470, y*2, 70, 20);
  rect(545, y*2, 70, 20);
  rect(620, y*2, 70, 20);
  rect(695, y*2, 70, 8);
  rect(770, y*2, 70, 3);
  rect(845, y*2, 70, 3);
  
  //linea 3
  rect(95, y*3, 70, 3);
  rect(170, y*3, 70, 8);
  rect(245, y*3, 70, 20);
  rect(320, y*3, 70, 20);
  rect(395, y*3, 70, 20);
  rect(470, y*3, 70, 20);
  rect(545, y*3, 70, 20);
  rect(620, y*3, 70, 20);
  rect(695, y*3, 70, 20);
  rect(770, y*3, 70, 8);
  rect(845, y*3, 70, 3);
  
  //linea 4
  rect(95, y*4, 70, 8);
  rect(170, y*4, 70, 20);
  rect(245, y*4, 70, 20);
  rect(320, y*4, 70, 20);
  rect(545, y*4, 70, 20);
  rect(620, y*4, 70, 20);
  rect(695, y*4, 70, 20);
  rect(770, y*4, 70, 20);
  rect(845, y*4, 70, 8);
  
  //linea 5
  rect(95, y*5, 70, 8);
  rect(170, y*5, 70, 20);
  rect(245, y*5, 70, 20);
  rect(320, y*5, 70, 20);
  rect(545, y*5, 70, 20);
  rect(620, y*5, 70, 20);
  rect(695, y*5, 70, 20);
  rect(770, y*5, 70, 20);
  rect(845, y*5, 70, 8);
  
  //linea 6
  rect(545, y*6, 70, 20);
  rect(620, y*6, 70, 20);
  rect(695, y*6, 70, 20);
  rect(770, y*6, 70, 20);
  rect(845, y*6, 70, 8);
  
  //linea 7
  rect(545, y*7, 70, 20);
  rect(620, y*7, 70, 20);
  rect(695, y*7, 70, 20);
  rect(770, y*7, 70, 8);
  rect(845, y*7, 70, 8);
  
  //linea 8
  rect(545, y*8, 70, 20);
  rect(620, y*8, 70, 20);
  rect(695, y*8, 70, 20);
  rect(770, y*8, 70, 8);
  rect(845, y*8, 70, 3);
  
  //linea9
  
  rect(395, y*9, 70, 8);
  rect(470, y*9, 70, 20);
  rect(545, y*9, 70, 20);
  rect(620, y*9, 70, 20);
  rect(695, y*9, 70, 8);
  rect(770, y*9, 70, 3);
  rect(845, y*9, 70, 3);
  
  //linea10
  rect(320, y*10, 70, 8);
  rect(395, y*10, 70, 20);
  rect(470, y*10, 70, 20);
  rect(545, y*10, 70, 20);
  rect(620, y*10, 70, 8);
  rect(695, y*10, 70, 3);
  rect(770, y*10, 70, 3);
  rect(845, y*10, 70, 3);
  
  //linea11
  rect(395, y*11, 70, 8);
  rect(470, y*11, 70, 20);
  rect(545, y*11, 70, 20);
  rect(620, y*11, 70, 20);
  rect(695, y*11, 70, 20);
  rect(770, y*11, 70, 8);
  rect(845, y*11, 70, 3);
  
  //linea12
  rect(545, y*12, 70, 20);
  rect(620, y*12, 70, 20);
  rect(695, y*12, 70, 20);
  rect(770, y*12, 70, 20);
  rect(845, y*12, 70, 8);
  
  //linea13
  rect(95, y*13, 70, 8);
  rect(170, y*13, 70, 20);
  rect(245, y*13, 70, 20);
  rect(320, y*13, 70, 20);
  rect(545, y*13, 70, 20);
  rect(620, y*13, 70, 20);
  rect(695, y*13, 70, 20);
  rect(770, y*13, 70, 20);
  rect(845, y*13, 70, 8);
  
  //linea14
  rect(95, y*14, 70, 8);
  rect(170, y*14, 70, 20);
  rect(245, y*14, 70, 20);
  rect(320, y*14, 70, 20);
  rect(545, y*14, 70, 20);
  rect(620, y*14, 70, 20);
  rect(695, y*14, 70, 20);
  rect(770, y*14, 70, 20);
  rect(845, y*14, 70, 8);
  
  //linea15
  rect(95, y*15, 70, 3);
  rect(170, y*15, 70, 8);
  rect(245, y*15, 70, 20);
  rect(320, y*15, 70, 20);
  rect(395, y*15, 70, 20);
  rect(470, y*15, 70, 20);
  rect(545, y*15, 70, 20);
  rect(620, y*15, 70, 20);
  rect(695, y*15, 70, 20);
  rect(770, y*15, 70, 8);
  rect(845, y*15, 70, 3);
  
  //linea16
  rect(95, y*16, 70, 3);
  rect(170, y*16, 70, 3);
  rect(245, y*16, 70, 8);
  rect(320, y*16, 70, 20);
  rect(395, y*16, 70, 20);
  rect(470, y*16, 70, 20);
  rect(545, y*16, 70, 20);
  rect(620, y*16, 70, 20);
  rect(695, y*16, 70, 8);
  rect(770, y*16, 70, 3);
  rect(845, y*16, 70, 3);
  
  //linea17
  rect(95, y*17, 70, 3);
  rect(170, y*17, 70, 3);
  rect(245, y*17, 70, 3);
  rect(320, y*17, 70, 8);
  rect(395, y*17, 70, 20);
  rect(470, y*17, 70, 20);
  rect(545, y*17, 70, 20);
  rect(620, y*17, 70, 8);
  rect(695, y*17, 70, 3);
  rect(770, y*17, 70, 3);
  rect(845, y*17, 70, 3);
}

//fem que cada vegada que es cliqui, el boolean click sigui true i que la escena passi a ser la 2

function mouseClicked() {
  click = true;
  scene = 2;
}

//cada vegada que el dispostiu(movil) es sacseja, l'escena passa a ser la primera de totes

function deviceShaken(){
  scene == 1;
  redraw();
}

//aqui dibuixem el que volem que es mostri del projecte, en aquest cas l'escena d'start(error) 
//i fem un random per generar de froma aleatoria els numeros que hem definit com a funcions

function draw() {
  
  if(scene==1){
    error();
  }
  
  
  if(click == true && scene==2){
    r = int(random(0,5));
    click = false;
  }
  
  if(r == 1){
      zero();
    }
    
  else if(r == 2){
      one();
  }
  
  if(r == 3){
      two();
    }
    
  else if(r == 4){
      three();
  }
  
}
