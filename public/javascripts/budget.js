window.onload = function() {
    const monthlyContribution = document.querySelector(".monthly_contribution");
    const annualInterestRate = document.querySelector(".annual_interest_rate");
    const totalYears = document.querySelector(".total_years");
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
        const contribution = Number(monthlyContribution.value);
        const interestRate = Number(annualInterestRate.value);
        const years = Number(totalYears.value);
        if (!contribution) return;

        const result = calculateMonthlyInvestment(contribution, interestRate, years);
        budgetDisplay.innerHTML = result;
    });
}

