
function setup(){
    canvas=createCanvas(500, 500);
  canvas.position(500,20);
  }
  function draw(){
    textSize(10);
    fill('FFE787');
    text('Hello World, 50, 400')
  }
  function gotPoses(Results){
    if(results.length > 0){
      console.log(results);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = floor (leftWristX - rightWristX);
  }
  }
  function modelLoaded(){
    console.log("PoseNet is initialized");
  }
  function gotResult(results){
  if (results.length>0)
  {
  console.log(results)
  }
  }
function modelLoaded(){
  console.log("PoseNet is initialized");
}
function gotResult(results){
if (results.length>0)
{
console.log(results)
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+ " ,noseY=" + noseY);
rightX=results[0].pose.rightWrist.x;
leftX=results[0].pose.leftWrist.x;
difference=floor(rightX-leftX);
console.log("rightX"+rightX+ ", leftX=" + leftX + "difference" + difference)
}
}
leftWristX=0;
rightWristX=0;
difference=0; 
rightX=0;
leftX=0;