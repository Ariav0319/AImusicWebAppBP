song = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function preload(){
    song = loadSound("How You Like That.mp3");
    song = loadSound("Ice Cream.mp3"); 
}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y;

        console.log("leftWristY" + leftWristY + "leftWristX" + leftWristX);
        console.log("rightWristY" + rightWristY + "rightWristX" + rightWristX);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video, 0, 0, 600, 500);
}