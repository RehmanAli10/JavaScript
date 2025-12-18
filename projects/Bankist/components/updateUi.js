function updateUi(currentAccount) {
  console.log('currentAccount in updateUi', currentAccount);

  containerApp.style.opacity = 1;

  // account header
  updateAccountHeader(currentAccount);

  // display movements
  displayMovements(
    currentAccount,
    containerMovements,
    currentAccount.movements,
    currentAccount.movementsDates
  );

  totals(currentAccount);
}
