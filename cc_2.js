// Task 1: Calculate Tip

let billAmount = 100;
let tip
let totalBillAmount = (tip + billAmount);

// Task 2: Output Details

// Created an if statement to calculate a 15% tip if the bill amount is within the $50-$300 range.
if(50 <= billAmount <= 300){
    tip = billAmount * .15
    console.log("The bill is:$",billAmount); // 
    console.log("Tip Amount:$",tip);
    console.log("The total bill amount is:$",totalBillAmount);
}

// Task 3: Create a Function

let tipAmount = .15;
function calculateTip(billAmount, tipAmount) {
    return billAmount * tipAmount;
    
}
  
console.log(`Total bill amount: $${calculateTip(100, .15 + (totalBillAmount))}`);
