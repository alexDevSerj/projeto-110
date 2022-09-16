//

Webcam.set({
    width: 350,
    height:300,
    imageFormat:'png',
    pngQuality: 90
})

var camera =document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturada" src="'+data_uri+'"/>'
    })
}
classifier=ml5.imgClassifier('/model.json',);

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bNQYTVZtv/model.json',modelReady);

