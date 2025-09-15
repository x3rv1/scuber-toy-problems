// Net Salary Calculator
// Calculates gross salary, PAYE, NHIF, NSSF, and net salary based on Kenyan tax rules

// NHIF deduction based on gross salary brackets
function calculateNHIF(gross) {
  const brackets = [
    { max: 5999, amount: 150 },
    { max: 7999, amount: 300 },
    { max: 11999, amount: 400 },
    { max: 14999, amount: 500 },
    { max: 19999, amount: 600 },
    { max: 24999, amount: 750 },
    { max: 29999, amount: 850 },
    { max: 34999, amount: 900 },
    { max: 39999, amount: 950 },
    { max: 44999, amount: 1000 },
    { max: 49999, amount: 1100 },
    { max: 59999, amount: 1200 },
    { max: 69999, amount: 1300 },
    { max: 79999, amount: 1400 },
    { max: 89999, amount: 1500 },
    { max: 99999, amount: 1600 },
    { max: Infinity, amount: 1700 },
  ];

  for (let bracket of brackets) {
    if (gross <= bracket.max) return bracket.amount;
  }
}

// PAYE calculation using progressive tax bands
function calculatePAYE(gross) {
  let tax = 0;
  if (gross <= 24000) {
    tax = gross * 0.1;
  } else if (gross <= 32333) {
    tax = 24000 * 0.1 + (gross - 24000) * 0.25;
  } else {
    tax = 24000 * 0.1 + 8333 * 0.25 + (gross - 32333) * 0.3;
  }
  return tax;
}

// NSSF deduction based on Tier I and Tier II
function calculateNSSF(gross) {
  const tier1 = Math.min(gross, 6000) * 0.06;
  const tier2 = Math.min(Math.max(gross - 6000, 0), 12000) * 0.06;
  return tier1 + tier2;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const gross = basicSalary + benefits;
  const payee = calculatePAYE(gross);
  const nhif = calculateNHIF(gross);
  const nssf = calculateNSSF(gross);
  const net = gross - (payee + nhif + nssf);

  return {
    grossSalary: gross,
    payee: payee.toFixed(2),
    nhif: nhif.toFixed(2),
    nssf: nssf.toFixed(2),
    netSalary: net.toFixed(2),
  };
}

// Example usage
console.log(calculateNetSalary(50000, 10000));
