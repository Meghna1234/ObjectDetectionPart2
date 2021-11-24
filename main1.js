img =""
status = ""

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(600,400)
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded(){
console.log("Model is Initialized")
status = true
objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
    if(error){
    console.log(error);
}
console.log(results)
}

function draw(){
image(img, 0,0,600,400);
fill("#FF0000");
text("dog",50,70)
stroke("#FF0000");
noFill();
rect(45,55,400,320)

fill("#FF0000");
text("cat",255,70)
stroke("#FF0000")
noFill();
rect(250,55,300,300);
}


function back(){
    window.location = "index.html"
}