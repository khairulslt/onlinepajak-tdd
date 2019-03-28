function calculateIncome(salary) {
  if (salary <= 0) {
    return "Salary must be a positive integer larger than zero";
  } else {
    return salary * 12;
  }
}

function tierOneTax(annualSalary) {
  return annualSalary * 0.05;
}

function tierTwoTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += (annualSalary - 50000000) * 0.15;
  return output;
}

function tierThreeTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += 200000000 * 0.15;
  output += (annualSalary - 250000000) * 0.25;
  return output;
}

function tierFourTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += 200000000 * 0.15;
  output += 250000000 * 0.25;
  output += (annualSalary - 500000000) * 0.30;
  return output;
}

function calculateTax(annualSalary) {
  if (annualSalary <= 50000000) {
    return tierOneTax(annualSalary);
  } else if (annualSalary <= 250000000) {
    return tierTwoTax(annualSalary);
  } else if (annualSalary <= 500000000) {
    return tierThreeTax(annualSalary);
  } else {
    return tierFourTax(annualSalary);
  }
}

module.exports = { 
  calculateIncome,
  tierOneTax,
  tierTwoTax,
  tierThreeTax,
  tierFourTax,
  calculateTax
}
