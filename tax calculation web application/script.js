function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    if (isNaN(income) || isNaN(deductions)) {
        document.getElementById('taxOutput').innerText = "Please enter valid numbers.";
        return;
    }

    const deductionPercentage = (deductions / income) * 100;
    const taxableIncome = income - deductions;

    let tax = 0;
    if (taxableIncome <= 300000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 300000) * 0.06;
    } else if (taxableIncome <= 1000000) {
        tax = (200000 * 0.06) + ((taxableIncome - 500000) * 0.12);
    } else {
        tax = (200000 * 0.06) + (500000 * 0.12) + ((taxableIncome - 1000000) * 0.18);
    }

    // Display the results
    document.getElementById('taxOutput').innerHTML = `
        <strong>Income:</strong> LKR ${income.toFixed(2)}<br>
        <strong>Deductions:</strong> LKR ${deductions.toFixed(2)} (${deductionPercentage.toFixed(2)}%)<br>
        <strong>Taxable Income:</strong> LKR ${taxableIncome.toFixed(2)}<br>
        <strong>Tax Payable:</strong> LKR ${tax.toFixed(2)}
    `;
}
