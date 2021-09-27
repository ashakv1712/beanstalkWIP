var jack, bgImg, stalk;
var beanstalk;
var egg, eggImg;
function preload(){
    
    bgImg = loadImage("assets/bg.jpg");
    stalk = loadImage("assets/beanstalkpic.png")
    eggImg = loadImage("assets/goldegg.png")
}
function setup(){
    createCanvas(600,400)
    beanstalk = createSprite(300,200, 50,400);
    beanstalk.addImage(stalk);
    beanstalk.velocityY = 1;

    jack = createSprite(280,350,20,50);
    
}
function draw(){
    background("skyblue");
    image(bgImg, 0,0,2400,2000)
    if(beanstalk.y > 250){
        beanstalk.y = 200
    }

    if(keyDown(UP_ARROW)){
       jack.y -= 2;
    }
    if(keyDown(DOWN_ARROW)){
        jack.y += 2;
     }
    if(keyDown(RIGHT_ARROW)){
        jack.x = 320
    }
    if(keyDown(LEFT_ARROW)){
        jack.x = 280;
    }
   
    spawnStems();
    spawnEggs();    
    camera.position.x = jack.x



    drawSprites();
}
function spawnStems(){
    if(frameCount%60===0){
    var stem = createSprite(200,0, 80,10);
    var position = [250, 350]
    stem.x = random(position)
    stem.shapeColor = "green"
    stem.velocityY = 2;
    }
}
function spawnEggs(){
    if(frameCount%60===0){
        egg = createSprite(200,0,10,10);
        egg.addImage(eggImg)
        egg.scale = 0.05;
        egg.velocityY = random(3,10);
        egg.x = random(200,300);

    }
}