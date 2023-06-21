//1st kilometerToMeter
function kilometerToMeter(kilometer) {
   
    if (kilometer > 0) {
        var meter = kilometer * 1000;
        return meter;}

    else (kilometer <= 0) 
        console.log("put correct number");    
        return meter;    
}

var distance = kilometerToMeter(9);
console.log(distance);



//2nd budgetCalculator

function budgetCalculator(watchamount, mobileamount, laptopamount) {
    if (watchamount, mobileamount, laptopamount > 0) {
        var watchprice = 50; 
        var mobileprice = 100;
        var laptopprice = 500;

        var total = watchamount * watchprice +  mobileamount * mobileprice +laptopamount * laptopprice;
        return total;
    }
    else(watchamount, mobileamount, laptopamount <=0 )
    console.log("put correct number");    
        return total;
}

var totalPrice = budgetCalculator(9,9,9);
console.log(totalPrice);



//3rd hotelCost

function hotelCost(day) {
    var totalCost = 0;
if (day>0) {
        
    if (day <= 10) {
        var totalCost = day * 100;
    } 
    
    else if (day <= 20) {
        var first10daycost = 10 * 100;
        var after10day = day - 10;
        var tento20daycost = after10day * 80;
        var totalCost = first10daycost + tento20daycost;
    } 

    else {
        var first10daycost = 10 * 100;
        var tento20daycost = 10 * 80;
        var after20day = day - 20;
        var after20DayCost = after20day * 50;
        var totalCost = first10daycost + tento20daycost + after20DayCost;
    }
    return totalCost;
    }
    else(day <=0 )
    console.log("put correct number");    
        return totalCost;
}

var hotelguest = hotelCost(99);
console.log(hotelguest);



//4th megaFriend

function megaFriend(names) {

    var largename = "";
    
    for (var i = 0; i < names.length; i++) {
        var allname = names[i];
    
        if (typeof allname == "string") {
        
            var othername = allname.trim();
        if (othername.length > largename.length) {
            largename = othername;
        }
        }
    }
    return largename;
    }

var names = ["sohan", "arif", "eamin badsha", "adiad"];

var names = megaFriend(names);

console.log(names);