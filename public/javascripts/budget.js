async function budget() {
    function calculateMonthlyInvestment(monthlyContribution, annualInterestRate, totalYears) {
        let totalAmount = 0;
        let months = totalYears * 12;
        let monthlyRate = annualInterestRate / 12;
    
        for (let month = 1; month <= months; month++) {
            totalAmount += monthlyContribution;
            totalAmount *= (1 + monthlyRate);
        }
    
        return totalAmount;
    }
    console.log(calculateMonthlyInvestment(100, 0.12, 40).toFixed(2));
    let ans = calculateMonthlyInvestment(100, 0.12, 40).toString();
    console.log(ans);
    document.getElementsByClassName("budget").innerHTML = ans;
}

budget();