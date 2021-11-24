img =""
status = ""

function preload(){
    img = loadImage('bedroombackground.jpg');
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
fill("#000080");
text("bed",110,170)
stroke("#000080");
noFill();
rect(105,155,300,200)
}


function back(){
    window.location = "index.html"
}