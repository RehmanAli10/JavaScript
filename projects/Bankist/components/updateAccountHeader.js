function updateAccountHeader(currentAccount) {
  labelWelcome.textContent = `${getTimeOfDay()}, ${
    currentAccount.owner.split(' ')[0]
  }`;

  const totalBalance = currentAccount.movements.reduce(
    (acc, mov) => acc + mov,
    0
  );
  // convert it to EURO
  labelBalance.textContent = `${formatCurrency(currentAccount, totalBalance)}`;

  // show date
  const date = new Date();
  labelDate.textContent = formatDate(date);
}
