function bmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let bmi = (weight / height * height);
    document.getElementById("result").innerHTML = bmi;

    if(bmi < 18.5){
        document.getElementById('msg').innerHTML="You are underweight"
    }
    else if(bmi >24.9){
        document.getElementById('msg').innerHTML="You are over weight"
    }
    else{
        document.getElementById('msg').innerHTML="You have normal weight"
    }
}
function reset(){
    window.clear()
}