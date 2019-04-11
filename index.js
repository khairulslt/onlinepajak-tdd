// Some key takeaways include:
// 1) Use Global es6 variables (preferably in a separate config file - This is more preferable to hardcoding exact values...
// This way, if your tax rates/income breakpoints change, your code will not break)
//
// 2) Changed how the function calculateTax works, instead of hardcoding breakpoints...
// use a for loop to iterate through all the income(LIMIT) breakpoints...
// Small caveat: need to handle cases where salary < TAX_ZONE_LIMIT_ONE as in this particular case...
// we cannot use the algorithm presented in the for loop


const TAX_ZONE_LIMIT_ONE = 50000000;
const TAX_ZONE_LIMIT_TWO = 250000000;
const TAX_ZONE_LIMIT_THREE = 500000000;

const TAX_ZONE_RATE_ONE = 0.05;
const TAX_ZONE_RATE_TWO = 0.15;
const TAX_ZONE_RATE_THREE = 0.25;
const TAX_ZONE_RATE_FOUR = 0.30;

const TAX_ZONE_MAX_TAX_ONE = TAX_ZONE_LIMIT_ONE * TAX_ZONE_RATE_ONE;
const TAX_ZONE_MAX_TAX_TWO = (TAX_ZONE_LIMIT_TWO - TAX_ZONE_LIMIT_ONE) * TAX_ZONE_RATE_TWO;
const TAX_ZONE_MAX_TAX_THREE = (TAX_ZONE_LIMIT_THREE - TAX_ZONE_LIMIT_TWO - TAX_ZONE_LIMIT_ONE) * TAX_ZONE_RATE_THREE;

const TX_ZONE_LIMIT = [
  TAX_ZONE_LIMIT_ONE,
  TAX_ZONE_LIMIT_TWO,
  TAX_ZONE_LIMIT_THREE,
];

const TX_ZONE_RATE = [
  TAX_ZONE_RATE_ONE,
  TAX_ZONE_RATE_TWO,
  TAX_ZONE_RATE_THREE,
  TAX_ZONE_RATE_FOUR,
];

const TX_MAX_TAX = [
  TAX_ZONE_MAX_TAX_ONE,
  TAX_ZONE_MAX_TAX_TWO,
  TAX_ZONE_MAX_TAX_THREE,
]

let MAX_TAXABLE = 0

// helper function to add all elements in array using .reduce()
function add(a, b) {
    return a + b;
}

function calculateTax(monthlySalary) {
  if (monthlySalary < 0) throw new Error("Only positive numbers only");
  let annualSalary = monthlySalary * 12;
  if (annualSalary <= TX_ZONE_LIMIT[0]) {
    return Math.round(annualSalary * TX_ZONE_RATE[0]);
  }
  for (let i = 1; i < TX_ZONE_LIMIT.length; i++) {
    MAX_TAXABLE += TX_MAX_TAX[i - 1];
    if (annualSalary <= TX_ZONE_LIMIT[i]) {
      return Math.round((annualSalary - TX_ZONE_LIMIT[i - 1]) * TX_ZONE_RATE[i]) + MAX_TAXABLE;
    }
  }
  MAX_TAXABLE = TX_MAX_TAX.reduce(add);
  return Math.round((annualSalary - TX_ZONE_LIMIT[TX_ZONE_LIMIT.length - 1]) * TX_ZONE_RATE[TX_ZONE_RATE.length - 1]) + MAX_TAXABLE;
}

// shorthand asserts to test some values
// assert calculateTax(2500000) == 1500000
// assert calculateTax(7500000) == 8500000
// assert calculateTax(25000000) == 45000000
// assert calculateTax(50000000) == 112500000

module.exports = { 
  calculateIncome,
  tierOneTax,
  tierTwoTax,
  tierThreeTax,
  tierFourTax,
  calculateTax
}
