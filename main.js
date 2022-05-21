noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet has loaded");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+noseX+" nose y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("difference = " + difference+"left wrist x = " +leftWristX+"rigth wrist x = "+rightWristX);

    }
}

function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML = "The length and width of the square is "+difference;
    fill("green");
    stroke("grey");
    square(noseX,noseY,difference);
}