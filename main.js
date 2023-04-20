function setup(){
    canvas=createCanvas(600,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
rect(mouseX,mouseY,30,30)
image(video,0,0,600,300)

if(mouseIsPressed){
    fill(0);
} else{
    fill(255);
}
ellipse(30,30,40);
ellipse(570,30,40);
ellipse(30,270,40)
ellipse(570,270,40)


}


























