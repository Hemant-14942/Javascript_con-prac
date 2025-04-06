const rates = {
    USD: 85.23, // 1 USD = 85.23 INR (approximate rate as of April 2025)
    EUR: 94.34, // 1 EUR = 94.34 INR
    GBP: 111.53, // 1 GBP = 111.53 INR
    JPY: 0.5841, // 1 JPY = 0.5841 INR
    AUD: 55.50, // 1 AUD = 55.50 INR (approximate)
    CAD: 62.30  // 1 CAD = 62.30 INR (approximate)
};
const con = (rates,amount , from ,to) =>{
    let fromInINR = rates[from.toUpperCase()];
    
    // Convert the 'to' currency to INR (this is the rate of 1 unit of 'to' currency in INR)
    let toInINR = rates[to.toUpperCase()];
    
    // Check if both currencies exist in the rates object
    if (!fromInINR || !toInINR) {
        return "Invalid currency code!";
    }
    
    // First convert the amount from the 'from' currency to INR
    let amountInINR = amount * fromInINR;
    
    // Then convert from INR to the 'to' currency
    let convertedAmount = amountInINR / toInINR;
    
    // Round to 2 decimal places for readability
    return Math.round(convertedAmount * 100) / 100;

}
console.log(con(rates, 100, "USD", "EUR")); // Convert 100 USD to EUR
console.log(con(rates, 50, "GBP", "JPY"));  // Convert 50 GBP to JPY
console.log(con(rates, 200, "AUD", "CAD")); // Convert 200 AUD to CAD