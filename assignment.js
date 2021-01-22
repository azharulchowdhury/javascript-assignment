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

// budgetCalculator

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

// hotelCost
function hotelCost(bookingDays){
    var bookingDays= Math.ceil(bookingDays);
if (bookingDays>0 && bookingDays<=10){
    totalBill= bookingDays*100;
    return totalBill;
}
else if (bookingDays>0 && bookingDays<=20){
    totalBill= 10*100 + (bookingDays-10)*80;
    return totalBill;
}
else if (bookingDays>=21){
    totalBill=10*100+10*80+(bookingDays-20)*50;
    return totalBill;
}
else if(bookingDays<=0){
    return "incorrect input";
}
}
var bill=hotelCost(8.5);
console.log(bill);