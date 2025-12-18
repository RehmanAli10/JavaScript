function displayMovements(
  currentAccount,
  htmlElement,
  movements = [],
  movementDates
) {
  if (!currentAccount || !htmlElement || !movements || !movementDates) return;

  htmlElement.innerHTML = '';

  movements.forEach((currMov, index) => {
    const type = currMov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDates[index]);

    const formattedDate = formatDate(currentAccount, date);

    const formattedMov = formatCurrency(currentAccount, currMov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${index + 1} ${type}
        </div>
        <div class="movements__date">${formattedDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    htmlElement.insertAdjacentHTML('afterbegin', html);
  });
}
