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


// budgetCalculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    totalCost=0;
    watchCost = watchQuantity * 50;
    phoneCost =phoneQuantity * 100;
    laptopCost = laptopQuantity * 500;
    totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}
var result1= budgetCalculator(2.5,3.5,5);
console.log(result1);
