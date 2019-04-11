
// Function name should be more specific eg. computeAnnualIncome. 
// Function should expect to return a value as it's doing some calculation so shouldn't expect to return a string.
function calculateIncome(salary) {
  // As below is doing some validation, it should be export to another function so no need to use else statement. 
  // Learn to use throw error instead if need to return error message
  if (salary <= 0) {
    return "Salary must be a positive integer larger than zero";
  } else {
    // Extract "12" as a global constant and gave it a good variable name eg. monthsPerYear etc.
    return salary * 12;
  }
}


// More specific function name like computeTierOneTax
function tierOneTax(annualSalary) {
  // Extract 0.05 as global constant with meaning variable name eg. tierOneTaxRate
  return annualSalary * 0.05;
}

// More specific function name like mentioned
// The logic could be further simplify? I don't really understand the reason of using "output"
function tierTwoTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += (annualSalary - 50000000) * 0.15;
  return output;
}

// Same as above
function tierThreeTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += 200000000 * 0.15;
  output += (annualSalary - 250000000) * 0.25;
  return output;
}

// Same as above
function tierFourTax(annualSalary) {
  let output = 0;
  output += 50000000 * 0.05;
  output += 200000000 * 0.15;
  output += 250000000 * 0.25;
  output += (annualSalary - 500000000) * 0.30;
  return output;
}

// Too many "else" statement which make the code hard to read (that's Michael feedback too)
// "If" and "return" can do the job just as well
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
