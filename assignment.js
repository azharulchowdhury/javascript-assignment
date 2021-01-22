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
var result=kilometerToMeter(14);
console.log(result);

// twst
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    if(watchQuantity>0 && phoneQuantity>0 && laptopQuantity>0){
        var watchQuantity=parseInt(watchQuantity);
        var phoneQuantity=parseInt(phoneQuantity);
        var laptopQuantity=parseInt(laptopQuantity);
        total=watchQuantity*50 +phoneQuantity*100 + laptopQuantity*500;
        return total;
    }
    else{
        return "Please enter positive integer value";
    }
}
var totalPrice=budgetCalculator(2.5,3.5,-5);
console.log(totalPrice);
