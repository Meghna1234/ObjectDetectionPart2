img =""
status = ""

function preload(){
    img = loadImage('tealtv.jpg');
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
fill("#FFC0CB");
text("TV",130,70)
stroke("#FFC0CB");
noFill();
rect(125,50,200,150)
}


function back(){
    window.location = "index.html"
}