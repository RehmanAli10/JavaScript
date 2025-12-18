function totals(currentAccount) {
  console.log('currentAccount in totals', currentAccount);

  if (!currentAccount) return;

  const totalDeposit = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const totalWithDrawl = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const totalInterest = calcInterestRate(currentAccount);

  currentAccount = {
    ...currentAccount,
    totalDeposit,
    totalWithDrawl,
  };

  labelSumIn.textContent = formatCurrency(currentAccount, totalDeposit);
  labelSumOut.textContent = formatCurrency(currentAccount, totalWithDrawl);
  labelSumInterest.textContent = formatCurrency(currentAccount, totalInterest);
}
