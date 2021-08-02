Webcam.set({
    width: 400,
    height: 285.5,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function Snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = '<img id = "Image_result" src = "' + data_uri + '"/>';
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dTTRnZr5A/model.json", modelLoaded)
function modelLoaded(){
    console.log("model loaded");
}