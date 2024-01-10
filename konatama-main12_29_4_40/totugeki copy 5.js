//変数宣言
var bscene = 0;
var sscene = 0;
var gold   = 0;
var sozai  = 0;
var lvl    = 0;
var carx   = 0;
var carxp  = 0;
var bgX = 0;
var coin = 0;
var sec = 1;
var time = 0;
var stage = 0;
var SIZE = 90;
var hense = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]//FIXME.行列反転してるからあとで治す
];
var sl_life = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];

var henseee1 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var henseee2 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var henseee3 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var henseee4 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var henseee5 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];
var henseee6 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,0,0,0,0,0,0,0,0,0],
  [0,0,,0,11,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,11,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
];

//960,850
//開始時
function setup() {
  canvasSize(1920, 1080);
  lineW(100);
  loadImg(0, "image/title_dot1.jpg");
  loadImg(1, "image/New Piskel (1) (1).png");
  loadImg(2, "image/grassland-dot3.jpg");
  loadImg(3, "image/square-4-removebg-preview.png");
  loadImg(4, "image/coin01_gold01_1.png");
  loadImg(5,"image/grassland-dot1.png");
  loadImg(6,"image/vss.png");
  loadImg(7,"image/Plains-forest2.jpg");
  loadImg(8,"image/tetuken.png");
  loadImg(9,"image/Game-battle-background3.jpg");
  loadImg(10,"image/danball.png");
  loadImg(11,"image/danball_hens.jpg");
  loadImg(12,"image/tetu.png");
  loadImg(13,"image/tetu_hens.jpg");
  loadImg(14,"image/daiya.png");
  loadImg(15,"image/daiya_hens.jpg");
  loadImg(16,"image/mokken.png");
  loadImg(17,"image/yari.png");
  loadImg(18,"image/mahou.png");
  loadImg(19,"image/kaihukujoukyuu.png");
  loadImg(20,"image/ごみ箱のフリーアイコン.png");
  loadImg(21,"image/ifn0261.png");
  loadImg(22,"image/danball_hens.jpg");
  loadImg(23,"image/tetu_hens.jpg");
  loadImg(24,"image/daiya_hens.jpg");
  loadSound(0, "");
  setFPS(120);
  getDate();
}
//生麦
//毎FPS
function mainloop() {
  var tmr = tmr++;
  if(bscene == 0) {
    drawImg(0, 0, 0);
    setAlp(15);
    fRect(0,0,1920,1080,"white");
    setAlp(100);
    fRect(460,800,1000,150,"lightskyblue");
    setAlp(100);
    drawImgS(1,460,800,1000,150);
    if(tapC == 1 && tapX >= 460 && tapX <= 1460 && tapY >= 800 && tapY <= 950 ){
      /*     console.log("TAP_C:"+tapC);
          console.log("TAP_X:"+tapX);
          console.log("TAP_Y:"+tapY); */
          
          tapC = 0;
          bscene = 1;
          
        }
  }

  else if(bscene == 1) {
    //console.log("BSCENE: "+bscene);
    setAlp(100);
    //ループ画像
    drawBG(0.5);
    //drawImg(3,1360,1);
    setAlp(50);
    fRect(1360,40,500,100,"black");
    setAlp(100);
    fText(coin, 1500, 90, 90, "white");
    drawImg(4,1200,-60);
    setAlp(50);
    fRect(1200,800,650,230,"white"); // 突撃ボタン表示
    setAlp(100);
    fText("突撃!", 1515, 900, 200, "cyan");
    homeG();

    if(tapC == 1 && tapX >= 1200 && tapX <= 1850 && tapY >= 800 && tapY <= 1030 ) {
        tapC = 0;
        bscene = 2;//map
      }
  }
  else if(bscene == 2) {//map画面
    lineW(100);
    drawBG2(1);
    setAlp(50);
    fRect(0,850,600,105,"white");
    fRect(600,455,105,500,"white");
    fRect(705,455,400,105,"white");
    fRect(1105,455,105,350,"white");
    fRect(1210,700,400,105,"white");
    setAlp(100);
    sCir(250,902,3,"#00ccff");
    setAlp(15);
    sCir(650,902,3,"blue");
    sCir(655,510,3,"blue");
    sCir(1155,510,3,"blue");
    sCir(1160,750,3,"blue");
    setAlp(100);
    sCir(1555,752,3,"#ffff00");
    fText("1", 250, 902, 100, "black");//1
    fText("2", 650, 902, 100, "black");//2
    fText("3", 655, 510, 100, "black");//3
    fText("4", 1155, 510, 100, "black");//4
    fText("5", 1160, 750, 100, "black");//5
    fText("6", 1555, 752, 100, "black");//6
    //1st
    if(tapC == 1 && tapX >= 197 && tapX <=300 && tapY >= 852 && tapY <= 955 ) {
      tapC = 0;
      stage = 1;
      bscene = 3;
    }
    //2st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 852 && tapY <= 955 ) {
      tapC = 0;
      stage = 2;
      bscene = 3;
    }
    //3st
    if(tapC == 1 && tapX >= 600 && tapX <= 700 && tapY >= 460 && tapY <= 563 ) {
      tapC =0;
      stage = 3;
      bscene = 3;
    }
    //4st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 460 && tapY <= 563 ) {
      tapC = 0;
      stage = 4;
      bscene = 3;
    }
    //5st
    if(tapC == 1 && tapX >= 1100 && tapX <= 1203 && tapY >= 700 && tapY <= 800 ) {
      tapC = 0;
      stage = 5;
      bscene = 3;
    }
    //6st
    if(tapC == 1 && tapX >= 1500 && tapX <= 1600 && tapY >= 700 && tapY <= 800 ) {
      tapC = 0;
      stage = 6;
      bscene = 3;
    }
    buck(1);

  }
  else if(bscene == 3) {//vsscene
    vsscene();
    buck(2);
  }
  else if(bscene == 4) {//編成画面
    drawImg(9,0,0);
    //fill("#a9a9a9");//灰色で埋める
    setAlp(35);
    fill("white");

    henseG();
  }

  else if(bscene == 5) {//tatakai_hontai
    drawBG3(2);
    buck(3);
    //timer_modki();
    playG();
    
  }
  else if(bscene == 6) {//結果
    fRect(0,0,1920,1080,"red");
  }
}
 //ループ画像本体
function drawBG(spd) {
    bgX = (bgX + spd)%1920;
    drawImg(2, -bgX, 0);
    drawImg(2, 1920-bgX, 0);
}
function drawBG2(spd) {
    bgX = (bgX + spd)%1920;
    drawImg(5, -bgX, 0);
    drawImg(5, 1920-bgX, 0);
}
function drawBG3(spd) {
  bgX = (bgX + spd)%1920;
  drawImg(7, -bgX, 0);
  drawImg(7, 1920-bgX, 0);
}
//vsシーン
function vsscene() {
    setAlp(10);
    fRect(0,0,1920,1080,"#14ff89");
    //fRect(0,0,1920,1080,"red");
    setAlp(100);
    drawImgS(6,489,20,942,888);//96
    setAlp(10);
    fRect(489,908,942,888,"#00bfff");
    lineW(20);
    setAlp(100);
    fText("編成を変える",980,1000,100,"white");
    sRect(489,908,942,888,"white");
    if(tapC == 1 && tapX >= 489 && tapX <= 1431 && tapY >=20 && tapY <= 908 ) {
      bscene = 5;
    }
    if(tapC == 1 && tapX >= 489 && tapX <= 1431 && tapY >= 908 && tapY <= 1080) {
      bscene = 4;
    }
    idoX = 0;//////////////////////////////////////////////////////////////////////////////////////////////////fixME!!!!!!
}


var taiyax = [4,10];
var CARD_MAX = 100;
var sel_card = 1;
var CARD_LIFE = [0,0,100,80,50,20,0,0,0,0,20,50,100];/////////////////////////////////////////////////////////////////////////////////

function henseG() {//hense
  SIZE = 90;
  setAlp(100);
  lineW(3);
  //drawImgS(20,955,0,200,180);
  drawImgS(20,1155,0,200,180);
  buck(3)

  
  if(tapC == 1 && tapX >= 1155 && tapX <=1355 && tapY <=180) {
    hense = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
    ];
    sl_life = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
    ];
  }
  

  for(var y=0; y<10; y++) {
    for(var x=0; x<15; x++) {
      var cx = x*SIZE;
      var cy = y*SIZE+180;

      //sRect(cx,cy,SIZE-2,SIZE-2,"#e6e6fa");
      sRect(cx,cy,SIZE-2,SIZE-2,"white");
      var c = hense[y][x];
      
      if(c > 0) {
        if(c == 1) {
          fRect(cx,cy,SIZE-2,SIZE-2,"#8b4513");
          //console.log("HENSE"+hense[y+1][x]);
        } else if(c == 2) {
          drawImg(16,cx-5,cy);
          //fRect(cx-5,cy,96,96,"red")
        } else if(c == 3) {
          drawImg(17,cx-5,cy);
        } else if(c == 4) {
          drawImg(18,cx-5,cy);
        } else if(c == 5) {
          drawImg(19,cx-5,cy);
        } else if(c == 10) {//
          drawImgS(22,cx,cy,SIZE,SIZE);
        } else if(c == 11) {
          drawImgS(23,cx,cy,SIZE,SIZE);
        } else if(c == 12) {
          drawImgS(24,cx,cy,SIZE,SIZE);
        }
      /*if(c = 5) {
        //fCir(cx,cy,90,"#8b4513");
      }*/

      }
    }
  }
  for(var taiya=0; taiya<2; taiya++) {
    var cx = taiyax[taiya]*SIZE+SIZE/2;
    var cy = 9*SIZE+SIZE/2+180;
    fCir(cx,cy,45,"black");
  }
  setAlp(70);
  fRect(1350,0,1920-1350,1080,"black");//740,185s
  //drawImg(8,1350,0);
  setAlp(100);
  //fRect(1350,0,1920-1350,170,"black");
  //fRect(1350,700,1920-1350,170,"black");//285
  fText("配置物",1630,90,100,"white");
  sRect(1350,180,285,185,"red");
  sRect(1635,180,285,185,"red");
  sRect(1350,365,285,185,"red");
  sRect(1635,365,285,185,"red");//550
  sRect(1350,550,285,185,"red");
  sRect(1635,550,285,185,"red");
  sRect(1350,735,285,185,"red");
  sRect(1635,735,285,185,"red");//920||||10~15/570
  drawImgS(10,1350,920,170,100);//170dannball
  drawImgS(12,1550,920,170,100);
  drawImgS(14,1730,920,170,100);//1920,1080|16~19
  drawImgS(16,1350,170,170,170);//mokken/kensi
  drawImgS(17,1350,355,170,170);//yari/yumi
  drawImgS(18,1350,540,170,170);//mahou/joukyuumahou
  drawImgS(19,1350,725,170,170);//kaihuku/joukyuukaihuku
  if(tapC == 1 && tapY >180 && tapY < 735+185 && tapX > 1350 && tapX <1635) {
    tapC = 0;
    var sentakubotan = int(tapY/185);
    if(0<=sentakubotan && sentakubotan<CARD_MAX) sel_card = sentakubotan;
  }
  if(tapC == 1 && tapY > 920 && tapX > 1350) {
    tapC = 0;
    var burokkusenntaku = int(tapX/190);
    if(0<=burokkusenntaku && burokkusenntaku<CARD_MAX) sel_card = burokkusenntaku+3;
  }
  //190
  /*if(tapC == 1 && tapY >180 && tapY < 735+185 && tapX > 1635) {//時間あったら
    tapC = 0;
    var Nisentakubotan = int(tapY/185);
    if(0<=Nisentakubotan && Nisentakubotan<CARD_MAX) sel_card = Nisentakubotan;
  }*/
  for(var i=0; i<CARD_MAX; i++){
    var ax = 1350;
    var ay = 183*i;
    lineW(8);
    if(i > 0 && i < 10 &&i == sel_card) sRect(ax,ay,285,185,"cyan");
  }
  for(var i=10; i<CARD_MAX; i++){
    var j = i-9;
    var gx = 190*j;
    var gy = 920;
    lineW(8);
    if(i > 9 && i < 13 && i == sel_card) sRect(gx+1160,gy,200,150,"cyan");
  }

  if(tapX >= 1155 && tapX <=1355 && tapY <=180) {
    setAlp(50);
    fRect(tapX,tapY,180,60,"white");
    setAlp(100);
    lineW(2);
    sRect(tapX,tapY,180,60,"red");
    fText("全消し",tapX+90,tapY+30,50,"black");
  }
 //cardhaiti
  var dx = int(tapX/SIZE);
  var dy = int(tapY/SIZE-2);

  console.log("DX:" + dx);
  console.log("DY:" + dy);
  console.log("SELCARD:"+sel_card);       
  
  //console.log("konomasu"+ hense[dy][dx])
  if(dx >= 0 && dx<15 && 0 <= dy && dy<9) {
    var b = hense[dy][dx];
    var h = hense[dy+1][dx];
    if(dy >= 1){
      var k = hense[dy-1][dx];
    }
    var l = hense[dy][dx+1];
    var m = hense[dy][dx-1];
    console.log("sonolife:"+sl_life[dy][dx]);
    if(tapC == 1) {
      tapC = 0;
      if(b == 0 && sel_card > 0 && sel_card < 5 && (h == 1 || h > 9 && h < 13)) {
        hense[dy][dx] = sel_card+1;
        if(sl_life > 1)
        sl_life[dy][dx] = CARD_LIFE[sel_card+1];

      }
      if(b > 1 && b < 9) {//
        hense[dy][dx] = 0;
      } else if(b > 9 && b < 13 && (hense[dy-1][dx] == 0/*&& (l ==0 || m ==0 )*/)) {
        hense[dy][dx] = 0;
      }//
    }
    
    //console.log("SELCARD:"+sel_card);

  }
  //fRect(955,0,400,180,"black");//1635)
 
 /* for(var y=0; y<10; y++) {
    for(var x=0; x<15; x++) {
      var cx = x*SIZE;
      var cy = y*SIZE;
      //drawImg(16,x,y);
      //v = hense[x][y]
      console.log("CX:" + cx);
      console.log("CY:" + cy);
      if(hense[cy][cx] == 2) {//16~19
        drawImg(16,cx,cy);
      }
    }
  }*/

}



var idoX = 1;
var idoY = 550;

var idoXee = 1392;
var idoYee = 550;
function playG() {//hense
  SIZE = 35;
  setAlp(100);
  lineW(0);
  
  idoX = idoX+1;
  //idoX = idoX*0.95;
  for(var y=0; y<10; y++) {
    for(var x=0; x<15; x++) {
      var cx = x*SIZE+idoX;
      var cy = y*SIZE+idoY;
      //sRect(cx,cy,SIZE-2,SIZE-2,"#e6e6fa");
      var c = hense[y][x];
      if(c > 0) {
        if(c == 1) {
          fRect(cx,cy,SIZE+1,SIZE-2,"#8b4513");
        } else if(c == 2) {
          drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 3) {
          drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 4) {
          drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 5) {
          drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 10) {//
          drawImgS(22,cx,cy,SIZE,SIZE);
        } else if(c == 11) {
          drawImgS(23,cx,cy,SIZE,SIZE);
        } else if(c == 12) {
          drawImgS(24,cx,cy,SIZE,SIZE);
        } else if(c == 20) {
          fCir(cx,cy,20,"black");
        }
      /*if(c = 5) {
        //fCir(cx,cy,90,"#8b4513");
      }*/
      //action();

      }
    }
  }
  //teki
  
  for(var y=0; y<10; y++) {
    for(var x=0; x<15; x++) {
      var cx = x*SIZE+idoXee;
      var cy = y*SIZE+idoYee;
      //sRect(cx,cy,SIZE-2,SIZE-2,"#e6e6fa");
      //var c = ("henseee" + stage) + [y][x];出来ない
      //もっと増えたらforで回す
      var sl_life_teki = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,20,0,0,0,0,0,20,0,0,0,0]
      ];
      if(stage == 1) {
        c = henseee1[y][x];
      }
      if(stage == 2) {
        c = henseee2[y][x];
      }
      if(stage == 3) {
        c = henseee3[y][x];
      }
      if(stage == 4) {
        c = henseee4[y][x];
      }
      if(stage == 5) {
        c = henseee5[y][x];
      }
      if(stage == 6) {
        c = henseee6[y][x];
      }
      if(c>1) {
        sl_life_teki[y][x] = CARD_LIFE[c];
      }
      //var c = ("henseee" + stage) + [y][x];出来ない

      if(c > 0) {
        if(c == 1) {
          fRect(cx,cy,SIZE+1,SIZE-2,"red");
        } else if(c == 2) {
          drawImgSLR(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 3) {
          drawImgSLR(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 4) {
          drawImgSLR(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 5) {
          drawImgSLR(16,cx-20,cy-35,SIZE+40,SIZE+40);
        } else if(c == 10) {//
          drawImgSLR(22,cx,cy,SIZE,SIZE);
        } else if(c == 11) {
          drawImgSLR(23,cx,cy,SIZE,SIZE);
        } else if(c == 12) {
          drawImgSLR(24,cx,cy,SIZE,SIZE);
        } else if(c == 20) {
          fCir(cx,cy,20,"black");
        }
      /*if(c = 5) {
        //fCir(cx,cy,90,"#8b4513");
      }*/
      //action_teki();

      }
    }
  }
}
function homeG() {//hense
  SIZE = 60;
  setAlp(100);
  lineW(0);

  //idoX = idoX+10;
  //idoX = idoX*0.95;
  for(var y=0; y<10; y++) {
    for(var x=0; x<15; x++) {
      var cx = x*SIZE+5;
      var cy = y*SIZE+400;
      //sRect(cx,cy,SIZE-2,SIZE-2,"#e6e6fa");
      var c = hense[y][x];
      if(c > 0) {
        if(c > 0) {
          if(c == 1) {
            fRect(cx,cy,SIZE+1,SIZE-2,"#8b4513");
          } else if(c == 2) {
            drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
          } else if(c == 3) {
            drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
          } else if(c == 4) {
            drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
          } else if(c == 5) {
            drawImgS(16,cx-20,cy-35,SIZE+40,SIZE+40);
          } else if(c == 10) {//
            drawImgS(22,cx,cy,SIZE,SIZE);
          } else if(c == 11) {
            drawImgS(23,cx,cy,SIZE,SIZE);
          } else if(c == 12) {
            drawImgS(24,cx,cy,SIZE,SIZE);
          } else if(c == 20) {
            fCir(cx,cy,30,"black");
          }
        /*if(c = 5) {
          //fCir(cx,cy,90,"#8b4513");
        }*/
  
        }
      /*if(c = 5) {
        //fCir(cx,cy,90,"#8b4513");
      }*/

      }
    }
  }
  /*for(var taiya=0; taiya<2; taiya++) {
    var cx = taiyax[taiya]*SIZE+SIZE/2+5;
    var cy = 9*SIZE+SIZE/2+400;
    fCir(cx,cy,30,"black");
  }*/
}
//timer
var timehyouji = 1;
  var timehyouji = time.toFixed();
function timer_modki() {
  time =  (time + 1/120);//0.0166666666
  timehyouji = time.toFixed();
  fText(60 - timehyouji,960,100,100,"white");
  if(time >= 60) {
    sleep(3000);
    bscene = 6;
  }
}

// ビジーwait
function sleep(waitMsec) {
  var startMsec = new Date();

  // 指定ミリ秒間だけループさせる
  while (new Date() - startMsec < waitMsec);
}

function buck(stage) {
  setAlp(60);
  fRect(0,0,400,90,"black");
  setAlp(100);
  fText("←戻る",200,45,80,"white");
  //console.log("tapx"+ tapX);
  //console.log("tapy"+ tapY);
  if(tapC == 1 && tapX <= 400 && tapY <= 90) {
    //console.log("tapx"+ tapX);
    //console.log("tapy"+ tapY);
    TapC = 0;
    bscene =stage;
    TapC = 0;
    sleep(150);
  }
}

/*function action() {
  for(var y=0; y<12; y++) {
    for(var x=0; x<15; x++) {
      var q = hense[y][x];
      //var u = sl_life[y][x];
      var c = sl_life_teki[y][x];
      if(stage == 1) {
        p = henseee1[y][x];
      }
      if(stage == 2) {
        p = henseee2[y][x];
      }
      if(stage == 3) {
        p = henseee3[y][x];
      }
      if(stage == 4) {
        p = henseee4[y][x];
      }
      if(stage == 5) {
        p = henseee5[y][x];
      }
      if(stage == 6) {
        p = henseee6[y][x];
      }
      if(q>1 && u>1 ) {
        var v = attack(x,y,q,p,c);
        if(v == true) sl_life[y][x]--;
        }
    }
  }
}

/*function action_teki() {
  for(var y=0; y<12; y++) {
    for(var x=0; x<15; x++) {
      var q = hense[y][x];
      var u = sl_life[y][x];
      //var c = sl_life_teki[y][x];
      
      if(q>1 && u>1 && tmr%CARD_SPEED[q]==0) {
        var v = attack(x, y, q,z,u);
        if(v == true) sl_life[y][x]--;
        }
    }
  }
}*/
/*var CARD_SPEED = [0,0,60,120,480,600,0,0,0,0,0,0,0];
var CARD_REACH = [0,0,225,1920,800,87,0,0,0,0,0,0,0];
var CARD_POWER = [0,0,20,50,90,60,0,0,0,0,0,0,0];
function attack(x,y,q,p,c) {
  var cx = x*SIZE+idoX;
  var cy = y*SIZE+idoY;
  var dx = x*SIZE+idoXee;
  var dy = y*SIZE+idoYee;
  if(getDis(cx,cy,dx,dy) <= CARD_REACH[q]) {
    /*if(stage == 1) {
      c = sl_life_teki[y][x];
    }
    if(stage == 2) {
      c = sl_life_teki[y][x];
    }
    if(stage == 3) {
      c = sl_life_teki[y][x];
    }
    if(stage == 4) {
      c = sl_life_teki[y][x];
    }
    if(stage == 5) {
      c = sl_life_teki[y][x];
    }
    if(stage == 6) {
      c = sl_life_teki[y][x];
    }*/
    /*c = c-CARD_POWER[p];
  }
}*/