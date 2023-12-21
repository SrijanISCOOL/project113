function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    

}

function draw(){
    image(video ,320,240,100,100);
    circle(100,400,50);
    fill("blue");
    stroke("red");
    circle(500,400,50);
    circle(500,100,50);
    circle(100,100,50);
    
   

}


function take_snapshot(){
    save('srijanisamazing.png');

}
