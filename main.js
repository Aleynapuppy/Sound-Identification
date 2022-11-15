function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true});
        classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dvliBy-Zb/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomr=Math.floor(Math.random()*255)+1;
        randomg=Math.floor(Math.random()*255)+1;
        randomb=Math.floor(Math.random()*255)+1;
        document.getElementById("result_name").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_accuracy").innerHTML='Accurcy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_name").style.color="rgb("+randomr+","+randomg+","+randomb+")"; 
        document.getElementById("result_accuracy").style.color="rgb("+randomr+","+randomg+","+randomb+")";
        img1=document.getElementById('alien1')
        img2=document.getElementById('alien2')
        img3=document.getElementById('alien3')
        img4=document.getElementById('alien4')
        if(result[0].label=="clapping"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        } 
         else if(result[0].label=="bells"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
         else if(result[0].label=="snapping"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
       else {
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
}
