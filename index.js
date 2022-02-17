let bgpicker= Xrandom(0,1);
let boxStyle=Xrandom(0,1);

let leadCames=Xrandom(2.1,5.1);

function Xrandom(x,y){
  return (y-x)*fxrand()+x;
}

window.$fxhashFeatures = {
  "YOUR WORLD BLEND": getBGStyle(bgpicker),
  "tea hut blend": getBoxStyle(boxStyle),
}

console.log(getBoxStyle(boxStyle))
console.log(getBGStyle(bgpicker))


function getBGStyle(value){
  if (value<0.05) return 'SCREEN';
  else if (value<0.15) return 'ADD'
  else if (value<0.45) return 'DIFFERENCE'
  else return 'OVERLAY'
}

function getBoxStyle(value){
  if (value<0.1) return 'ADD';
  else if (value<0.3) return 'OVERLAY'
  else return 'LIGHTEST'
}


function setup() {
  randomSeed(int(fxrand()*100000000))

  let width =1200
  let height = 1600
  blendMode(EXCLUSION)
  createCanvas(width, height);
  // put setup code here
  left_x = int(width * -0.5)
  right_x = int(width * 1.5)
  top_y = int(height * -0.5)
  bottom_y = int(height * 1.5)
  resolution = int(width * 0.01)
  //	print('resolution'+ resolution)
  rectMode(CENTER)
  angleMode(DEGREES)
  num_columns = 3*int((right_x - left_x) / resolution)
  num_rows = 3*int((bottom_y - top_y) / resolution)
  //	print('num_columns'+ num_columns)
  //	print('num_rows'+ num_rows)


  // coloring={
  //   color1: '#b9c2b8',
  //   color2: '#d0dbd8',
  //   color3: '#debe95',
  // }

  coloring2={
    color1:'#514059',
    color2:'#474059',
    color3:'#404759',
    color4:'#404759',
    color5:'#474059',
    color6:'#514059'
  }


  coloring3={
    color1:'#234059',
    color2:'#eb5282',
    color3:'#534759',
    color4:'#b0b877',
    color5:'#424059',
    color6:'#369ad9'
  }
}

function draw() {
  let shapesize=random(110,600);
  let vasewidth=20
  turn=random(-0,0)
  hs=random(0,0)
  vs=random(0,0)
  leadCames=random(0.1,5)
  blendMode(DIFFERENCE)


  angleMode(DEGREES)
  rectMode(CENTER)
  colorMode(RGB,255);

  shadowstrength=random(60,110)
  reflection=random(-3.8,3.8)
  drawCube(shadowstrength,reflection,1,1,hs,vs,leadCames)

  shadowstrength=random(60,110)
  reflection=random(-3.8,3.8)
  drawCube(shadowstrength,reflection,1,1,hs,vs,leadCames)



  backgroundlucent=255
  background(random(0,255),random(0,255),random(0,255),backgroundlucent)
  // blendMode(ADD)//overexposed background

  //blendMode(MULTIPLY) //too green
  //blendMode(HARD_LIGHT )//ok maybe
  //blendMode(LIGHTEST) // no good details gone
  //do nothing stark contrast
  //blendMode(DODGE) //bright contrast exposed sometime details gone
  //blendMode(BURN)
  //blendMode(DARKEST ) //no good??

if (bgpicker<0.05){
    blendMode(SCREEN) //Lighter
}else if (bgpicker<0.15){
  blendMode(ADD)//overexposed background
}else if (bgpicker<0.45){
  blendMode(DIFFERENCE) //complex background
}else{
  blendMode(OVERLAY) //ok maybe
}




  fill(random(0,255),random(0,255),random(0,255))
  //ground
  rect(600,1200,1200,1000+random(200,400))
  // blendMode(DARKEST)

  //dot
  fill(random(0,255),random(0,255),random(0,255))
  strokeWeight(0.1)
  circle(random(300,1000),200-random(-150,150),random(50,150))
  strokeWeight(1)
  //sky
  fill(random(0,255),random(0,255),random(0,255))
  rect(600,0,1200,1000+random(200,400))


  fill(random(0,255),random(0,255),random(0,255))
  rect(600,1200,1400,200+random(0,300))

  blendMode(ADD)
  c=([random(0,255),random(0,255),random(0,255),255]);
  fill(c)
  drawstonesteps(c)
  rect(1200,300,random(300,600),1000+random(100,900))

if (boxStyle<0.1){
  blendMode(ADD)//jumps out negatie frame
  uvfilter=random(200,200)
}else if (boxStyle<0.3){
  blendMode(OVERLAY)//jumpsout dark frame
  uvfilter=random(250,250)
}else{
  blendMode(LIGHTEST) //standard
  uvfilter=random(200,200)
}



  // let	x = 600+random(-200,200)
  // let y = 600+random(-200,200)
  //








  reflection=random(-0.1,0.1)
  hs=random([-30, 0, 0,0,0, 30])
  vs=random([-30, 0,0,0,0, 30])

  drawCube(uvfilter,reflection,1,0,hs,vs,leadCames)


  noLoop()
  //save("cube")

}

function exportImage() {
  save(`433_${fxhash}.png`)
}



function keyReleased() {
  "1" == key && exportImage()
}

function drawstonesteps(c){
  fill(c)
  push()
  rotate(9+random(-2,2))
  ellipse(180+300+random(-2,2),1200+random(-2,2),280+random(-2,2),120+random(-2,2))
  pop()
  push()
  rotate(random(-3,8))
  ellipse(180+30+random(-2,2),1200+200+random(-2,2),280/1.2+random(-2,2),130/2+random(-2,2))
  pop()
  push()
  rotate(-10+random(-2,2))
  ellipse(180+330+random(-2,2),1200+350+random(-2,2),280/1.7+random(-2,2),130/1.8+random(-2,2))
  pop()


  fill(c)
  push()
  rotate(9+random(-2,2))
  ellipse(700+300+random(-2,2),700+random(-2,2),140+random(-2,2),60+random(-2,2))
  pop()
  push()
  rotate(random(-3,3))
  ellipse(800+random(-2,2),650+random(-2,2),140/1.4+random(-2,2),80/2+random(-2,2))
  pop()
  push()
  rotate(3+random(-3,3))
  ellipse(1150+random(-2,2),650+random(-2,2),140/1.7+random(-2,2),60/1.8+random(-2,2))
  pop()
}

function drawCube(shadow,reflection,flower,stretch,hs,vs,leadCames){
  horizontal_shift=hs;
  vertical_shift=vs;
  console.log(reflection)
  vasewidth=20
  //right
  push()
  rotate(60+turn+reflection*random(-10,10))
  translate(200+horizontal_shift,-800+vertical_shift)
  if(stretch==1){
    scale(random([0.5,1,2]), random([0.5, 1 ,2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()
  //back
  push()
  rotate(-60+turn+reflection*random(-10,10))
  translate(-900+horizontal_shift,100+vertical_shift)
  if(stretch==1){
    scale(random([0.5, 1, 2]), random([0.5, 1 ,2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()

  //floor
  push()
  rotate(0+turn+reflection*random(-10,10))
  translate(-100+horizontal_shift,340+vertical_shift)
  if(stretch==1){
    scale(random([0.5, 1, 2]), random([0.5, 1 ,2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()
  //left
  push()
  rotate(60+turn+reflection*random(-10,10))
  translate(100+horizontal_shift,-180+vertical_shift)
  if(stretch==1){
    scale(random([0.5, 1, 2]), random([0.5, 1 ,2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()


  //front
  push()
  rotate(-60+turn+reflection*random(-10,10))
  translate(-1200+horizontal_shift,600+vertical_shift)
  if(stretch==1){
    scale(random([0.5, 1, 2]), random([0.5, 1 ,2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()

  //top
  push()
  rotate(0+turn+reflection*random(-10,10))
  translate(-100+horizontal_shift,-100+vertical_shift)
  if(stretch==1){
    scale(random([0.5 ,1 ,2]), random([0.5, 1, 2]));
  }else{

  }
  carve3(shadow,vasewidth,flower,leadCames)
  pop()
  //

}

function carve3(uvfilter,vasewidth,flower,leadCames){
  angleMode(DEGREES)
  rectMode(CENTER)

  //noFill()

  strokeWeight(random(0.5,0.8))

  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,200));
  fill(c)

  vasewidth=vasewidth*0.5;
  for (k=0;k<150;k+=1){
    strokeWeight(0.5)
    stroke(hexToRgb(coloring3.color2))
    noFill()
    //inner pin
    //  rect(650+cos(30)*150+cos(30)*20+cos(30)*k,600,600-sin(30)*k,vasewidth,vasewidth)

    //corner pin
    //   rect(520+cos(30)*150+cos(30)*20+cos(30)*k,500,600-sin(30)*k,vasewidth,vasewidth)

    //  stroke(hexToRgb(coloring3.color5))


    //  y2
    rect(650+cos(30)*150+cos(30)*20+cos(30)*(150-k)/1.8,530-sin(30)*150-sin(30)*20-sin(30)*(150-k)/1.8,vasewidth,vasewidth)

    //y3
    rect(600+cos(30)*k,600-sin(30)*k,vasewidth,vasewidth)
    rect(600+cos(30)*k,600+sin(30)*k,vasewidth,vasewidth)

    //y1
    rect(406+cos(30)*k/1.33,364+sin(30)*k/1.33,vasewidth,vasewidth)



  }


  kk=random(0,60);
  ll=random(0,60);
  pp=random(0,60);

  angleMode(DEGREES)
  rectMode(CENTER)
  vasewidth2=random([0.5,1,2,4])*vasewidth;
  for (k=0;k<random(10,30);k+=1){
    strokeWeight(0.5)
    c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
    //c=(255,255,255)
    c.setAlpha(random(0,0));
    fill(255,255,255,10)
    rect(kk+450+cos(30)*k,430-sin(30)*k,vasewidth2,vasewidth2)
    rect(kk+450+cos(30)*k,500-sin(30)*k,2*vasewidth2,2*vasewidth2)
    rect(kk+450+cos(30)*k,570-sin(30)*k,vasewidth2,vasewidth2)
    rect(kk+540+cos(30)*k,500-sin(30)*k,1.3*vasewidth2,1.3*vasewidth2)

    rect(ll+570-cos(30)*k,500-sin(30)*k,1.1*vasewidth2,1.1*vasewidth2)
    rect(ll+570-cos(30)*k,500+sin(30)*k,vasewidth2,vasewidth2)
    rect(ll+486+cos(30)*k,430-sin(30)*k,2*vasewidth2,2*vasewidth2)
    rect(ll+486+cos(30)*k,430+sin(30)*k,1.8*vasewidth2,1.8*vasewidth2)

    rect(pp+540+cos(30)*k,550+sin(30)*k,1.9*vasewidth2,1.9*vasewidth2)

    rect(pp+670+cos(30)*k,500+sin(30)*k,vasewidth2,vasewidth2)

    rect(pp+600+cos(30)*150+cos(30)*k,600-sin(30)*150-sin(30)*k,1.2*vasewidth2,1.2*vasewidth2)
    rect(pp+pp+650+cos(30)*150+cos(30)*k,530-sin(30)*150+sin(30)*k,1.3*vasewidth2,1.3*vasewidth2)
    rect(pp+650+cos(30)*150+cos(30)*k,530-sin(30)*150-sin(30)*k,vasewidth2,vasewidth2)


    rect(kk+770+cos(30)*k,ll+400+sin(30)*k,vasewidth2,vasewidth2)
    rect(pp+680+cos(30)*150+cos(30)*k,kk+600-sin(30)*150+sin(30)*k,vasewidth2,vasewidth2)


    rect(kk+570+cos(30)*k,ll+500+sin(30)*k,1.1*vasewidth2,1.1*vasewidth2)
    rect(pp+570+cos(30)*k,pp+500+sin(30)*k,vasewidth2,vasewidth2)
    rect(ll+486+cos(30)*k,kk+430-sin(30)*k,2*vasewidth2,2*vasewidth2)
    rect(kk+486+cos(30)*k,ll+430+sin(30)*k,1.8*vasewidth2,1.8*vasewidth2)

  }

  //

  if (flower==1){
    position=carve2(600+cos(30)*150,600-sin(30)*150,16,0)
    //console.log(position)
    carve2(position[0],position[1],8,0)
    carve2(position[0],position[1],4,0)
    carve2(position[0],position[1],2,0)
    carve2(position[0],position[1],1,0)


    position=carve2(650+cos(30)*150+cos(30)*20,530-sin(30)*150+sin(30)*20,16,0)
    //console.log(position)
    carve2(position[0],position[1],8,0)
    carve2(position[0],position[1],4,0)
    carve2(position[0],position[1],2,0)
    carve2(position[0],position[1],1,0)

    position=carve2(486+cos(30)*20,430-sin(30)*20,16,0)
    carve2(position[0],position[1],8,0)
    carve2(position[0],position[1],4,0)
    carve2(position[0],position[1],2,0)
    carve2(position[0],position[1],1,0)

    position=carve2(600+cos(30)*150,600-sin(30)*150,16,0)
    //console.log(position)
    carve2(position[0],position[1],8,0)
    carve2(position[0],position[1],4,0)
    carve2(position[0],position[1],2,0)
    carve2(position[0],position[1],1,0)



  }else{

  }


  angleMode(DEGREES)
  rectMode(CENTER)
  k=499
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,200));
  fill(c)

  x1=[170+cos(30)*k,500+sin(30)*k];
  x3=[170+cos(30)*k,500-sin(30)*k];
  x2=[cos(30)*500+170+cos(30)*k,400+350-sin(30)*k];
  x4=[cos(30)*500+170-cos(30)*k,400+350-sin(30)*k];

  y1=[406+cos(30)*150/1.33,364+sin(30)*150/1.33];
  y4=[406+cos(30)*0/1.33,364+sin(30)*0/1.33];

  y2=[650+cos(30)*150+cos(30)*20+cos(30)*0/1.8,530-sin(30)*150-sin(30)*20-sin(30)*0/1.8];
  y5=[650+cos(30)*150+cos(30)*20+cos(30)*150/1.8,530-sin(30)*150-sin(30)*20-sin(30)*150/1.8];

  y3=[600+cos(30)*149,600-sin(30)*149];
  y6=[600+cos(30)*0,600-sin(30)*0];
  y7=[600+cos(30)*149,600+sin(30)*149];




  // beginShape()
  // c=hexToRgb((coloring3.color2));
  // c.setAlpha(180);
  // fill(c)
  // strokeWeight(1)
  //   vertex(x1[0],x1[1]);
  //   vertex(x2[0],x2[1]);
  //  vertex(x3[0],x3[1]);
  //  vertex(x4[0],x4[1]);
  // endShape(CLOSE)


  //
  //console.log(uvfilter)
  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y1[0],y1[1]);
  vertex(y2[0],y2[1]);
  vertex(y3[0],y3[1]);
  endShape(CLOSE)

  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y6[0],y6[1]);
  vertex(y1[0],y1[1]);
  vertex(y4[0],y4[1]);
  vertex(x4[0],x4[1]);
  vertex(x1[0],x1[1]);
  endShape(CLOSE)

  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y6[0],y6[1]);
  vertex(y1[0],y1[1]);
  vertex(y3[0],y3[1]);
  endShape(CLOSE)

  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y6[0],y6[1]);
  vertex(y7[0],y7[1]);
  vertex(x1[0],x1[1]);
  endShape(CLOSE)

  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y2[0],y2[1]);
  vertex(y3[0],y3[1]);
  vertex(x2[0],x2[1]);
  endShape(CLOSE)

  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y6[0],y6[1]);
  vertex(y7[0],y7[1]);
  vertex(y3[0],y3[1]);
  vertex(x2[0],x2[1]);
  endShape(CLOSE)


  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y6[0],y6[1]);
  vertex(y3[0],y3[1]);
  vertex(y7[0],y7[1]);
  vertex(x2[0],x2[1]);
  endShape(CLOSE)


  beginShape()
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  fill(c)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(uvfilter);
  stroke(c)
  strokeWeight(leadCames)
  vertex(y1[0],y1[1]);
  vertex(y4[0],y4[1]);
  vertex(y5[0],y5[1]);
  vertex(x3[0],x3[1]);

  endShape(CLOSE)

  vasewidth=random([5,10])
  boxsize=random(480,500);
  o1=random([-100,0,0,0,0,100]);
  o2=random([-100,0,0,0,0,100]);
  o3=random([-100,0,0,0,0,100]);
  for (k=0;k<boxsize;k+=1){
    strokeWeight(0.5)
    //noFill()
    stroke(c)
    rect(
      170+cos(30)*k+o1,
      boxsize+sin(30)*k+o2,
      vasewidth,
      vasewidth
    )
    rect(170+cos(30)*k+o2,boxsize-sin(30)*k+o3,vasewidth,vasewidth)
    rect(cos(30)*boxsize+170+cos(30)*(boxsize-k)+o1,400+350-sin(30)*(boxsize-k)+o2,vasewidth,vasewidth)
    rect(cos(30)*boxsize+170+cos(30)*boxsize-cos(30)*k+o2,400+350-sin(30)*boxsize-sin(30)*k+o3,vasewidth,vasewidth)
    strokeWeight(0.1)
    stroke(c)
    //corner
    // rect(170+cos(30)*500,500+sin(30)*500+k/30,50*(500-k)/500,vasewidth)
    // rect(170+cos(30)*500,500-sin(30)*500-k/30,50*(500-k)/500,vasewidth)
  }



}


function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b);
}

function carve2(x,y,shapesize,wiggle){

  angleMode(RADIANS)
  ellipseMode(CORNER)


  // initialise field
  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let m = Array2D(num_columns,num_rows);

  //print("m length "+m.length)
  if (random(0,1)>0.5){
    gain=int(random(1.1,3.1));
  }
  else{
    gain=int(random(-3.1,-1.1));
  }

  bend=random(0.2,0.3);
  offset=random(0,num_rows)
  if (random(0,1)<0.99) {
    quantum=1;
    for (let column=0; column<num_columns; column++) {
      for (row=0; row<num_rows; row++) {

        angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
        // print('angle'+angle)
        m[column][row] = angle
      }
    }
  }
  else{
    quantum=random(2,3);
    for (let column=0; column<num_columns; column++) {
      for (row=0; row<num_rows; row++) {

        angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
        // print('angle'+angle)
        m[column][row] = angle
      }
    }
  }

  //print("angle"+m[100][100])

  // let	x = 100+random(-100,1000)
  // let y = 100+random(-100,1000)
  let num_steps=100

  //	let dice2=random(0,1)
  let stepsize=random(0.1,0.5);
  //	print("dice2=  "+dice2)
  let curvelength=random(100,400);
  //stroke(255)
  //measure balance
  let tl=0
  let tr=0
  let bl=0
  let br=0
  let centrepoint =900
  xtemp=x;
  ytemp=y;


  for (k=0;k<50+curvelength;k+=1+random(0,3)) {
    strokeWeight(0.1+random(0,0.5))


    x_offset = xtemp - left_x
    y_offset = ytemp - top_y

    if (x_offset<1800 && y_offset< 1800 && x_offset>0 && y_offset>0  ) {
      column_index = int(x_offset / resolution)
      row_index = int(y_offset / resolution)
      //	print(column_index,row_index)
      grid_angle = m[column_index][row_index]
      x_step = stepsize*resolution * cos(grid_angle)
      y_step = stepsize*resolution * sin(grid_angle)
      //pop()
      xtemp = xtemp + x_step+int(random(0,1));
      ytemp = ytemp + y_step+int(random(0,1));
      //      print(xtemp,ytemp)
      if (xtemp < centrepoint && ytemp < centrepoint){
        tl=tl+1;
      }
      else if (xtemp < centrepoint && ytemp > centrepoint){
        bl=bl+1;
      }
      else if (xtemp > centrepoint && ytemp < centrepoint) {
        tr=tr+1;
      }
      else{
        br=br+1;
      }
    }
  }
  // print("tl= "+tl)
  // print("tr= "+tr)
  // print("bl= "+bl)
  // print("br= "+br)




  shiftX=wiggle*600*(tl-tr+bl-br)/(tl+tr+bl+br);
  shiftY=wiggle*600*(tl+tr-bl-br)/(tl+tr+bl+br);
  //print(shiftX,shiftY)
  //print(x,y)
  x=x+shiftX;
  y=y+shiftY;
  //print(x,y)

  //draw
  for (k=1;k<50+curvelength;k+=1+random(0,2)) {
    strokeWeight(0.1+random(0,0.5))


    x_offset = x - left_x
    y_offset = y - top_y
    if (x_offset<1800 && y_offset< 1800 && x_offset>0 && y_offset>0  ) {
      column_index = int(x_offset / resolution)
      row_index = int(y_offset / resolution)
      //	print(column_index,row_index)
      // NOTE: normally you want to check the bounds here
      grid_angle = m[column_index][row_index]
      x_step = stepsize*resolution * cos(grid_angle)
      y_step = stepsize*resolution * sin(grid_angle)
      //	vertex(x, y)


      //main curve
      stroke(random([coloring2.color1,coloring2.color2,coloring2.color3])
    )


    //	ellipse(x,y,shapesize,shapesize)
    stroke(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]));
    rect(x,y,random(0.4,0.5)*shapesize,random(0.4,0.5)*shapesize)
    noFill()
    strokeWeight(0.01+random(0,0.2))
    rect(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
    strokeWeight(0.1+random(0,0.5))
    x = x + x_step+int(random(0,1))
    y = y + y_step+int(random(0,1))
    //	console.log(k)
  }

}

noStroke()
c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
c.setAlpha(random(50,200));
fill(c)
rect(x,y,shapesize*(50-k)/29,shapesize*(50-k)/120)
if (random(0,1)<0.8){
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  rect(x+random(-7,7),y+random(-7,7),shapesize*(50-k)/29+random(-2,5),shapesize*(50-k)/120+random(-1,5))	//stroke(random([coloring2.color1,coloring2.color2,coloring2.color3,coloring2.color4,coloring2.color5,coloring2.color6]))
}
noFill()

if (random(0,1)<0.5){
  strokeWeight(1)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  if (random(0,1)<0.5){
    stroke(random([coloring3.color2,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color2]))
  }
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  if (random(0,1)<0.5){
    stroke(random([coloring3.color1,coloring3.color2,coloring3.color2,coloring3.color4,coloring3.color3,coloring3.color6]))
  }
  rect(x,y-30,shapesize*(50-k)/229,shapesize*(50-k)/120)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  if (random(0,1)<0.5){
    stroke(random([coloring3.color2,coloring3.color2,coloring3.color2,coloring3.color4,coloring3.color3,coloring3.color6]))
  }
  rect(x+30,y-40,shapesize*(50-k)/209,shapesize*(50-k)/110)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  if (random(0,1)<0.5){
    stroke(random([coloring3.color2,coloring3.color2,coloring3.color3,coloring3.color4,coloring3.color3,coloring3.color6]))
  }
  rect(x+10,y-40,shapesize*(50-k)/209,shapesize*(50-k)/120)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  noStroke()
  rect(x+50,y-20,shapesize*(50-k)/209,shapesize*(50-k)/120)
  c=hexToRgb(random([coloring3.color3,coloring3.color2,coloring3.color1,coloring3.color4,coloring3.color5]));
  c.setAlpha(random(50,100));
  fill(c)
  noFill();
}
position=[x,y];
return position;
}

//     License : Copyright (C) 2022 Jimi Y. C. Wen . All rights reserved.\n
//     Licensed under CC BY-NC-SA 4.0
//    https://github.com/jimiwen
