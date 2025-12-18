function formatDate(currentAccount, date) {
  const formattedDate = new Intl.DateTimeFormat(currentAccount.locale).format(
    date
  );

  return formattedDate;
}

function formatCurrency(currentAccount, currencyToFormat) {
  const formattedCurrency = new Intl.NumberFormat(currentAccount.locale, {
    style: 'currency',
    currency: currentAccount.currency,
  }).format(currencyToFormat);

  return formattedCurrency;
}

function getTimeOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 6) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

function calcInterestRate(acc) {
  if (!acc || Object.entries(acc) === 0) return;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((sum, int) => sum + int, 0);

  return interest;
}

// converting string to number
function stringToNumber(str) {
  return Number(str);
}

function newAddedDate() {
  return new Date().toISOString();
}
