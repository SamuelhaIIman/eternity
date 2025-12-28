window.onload = function() {
    const inputNumber = document.querySelector(".input_number");
    const budgetButton = document.querySelector(".calculate");
    const budgetDisplay = document.querySelector(".budget");

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

    budgetButton.addEventListener("click", () => {
        const contribution = Number(inputNumber.value);
        if (!contribution) return;

        const result = calculateMonthlyInvestment(contribution, 0.12, 40);
        budgetDisplay.innerHTML = result;
    });
    // console.log(calculateMonthlyInvestment(100, 0.12, 40).toFixed(2));
    // let ans = calculateMonthlyInvestment(100, 0.12, 40).toString();
    // console.log(ans);
    // document.querySelector(".budget").innerHTML = ans;
}

