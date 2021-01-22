// kilometerToMeter

function kilometerToMeter(kilometer){
    if (kilometer > 0){
        meter=kilometer* 1000;
        return meter;
    }
    else{
        return "please enter positive numeric value";
    }
}
var result = kilometerToMeter(1000);
console.log(result);
