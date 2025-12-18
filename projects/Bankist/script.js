'use strict';

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const loginForm = document.querySelector('.login');
const navContainer = document.querySelector(['nav']);
const transferMoneyForm = document.querySelector('.form--transfer');
const requestLoanForm = document.querySelector('.form--loan');
const closeAccountForm = document.querySelector('.form--close');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let logoutTimerId;

const EURO_RATE = 0.85;

let currentAccount;

let isSorted = false;

// Event Listener on Form
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // find the valid user and return it
  currentAccount = accounts.find(
    currAcc =>
      currAcc.owner === inputLoginUsername.value &&
      currAcc.pin === Number(inputLoginPin.value)
  );

  if (!currentAccount) {
    return;
  }

  inputLoginUsername.value = '';
  inputLoginPin.value = '';

  logoutTimer();

  updateUi(currentAccount);
});

// Button sort EventListener
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  if (isSorted) {
    currentAccount.movements.sort((a, b) => a - b);
    isSorted = false;
  } else {
    currentAccount.movements.sort((a, b) => b - a);
    isSorted = true;
  }
  updateUi(currentAccount);
});

// transer money form event listener
transferMoneyForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // trasfer to owner name or amount is missing retun
  if (!inputTransferTo.value || !inputTransferAmount.value) return;

  const inputTrasferAmountToNumber = stringToNumber(inputTransferAmount.value);

  if (inputTrasferAmountToNumber > currentAccount.totalBalance) return;

  // first find if the account exist to which user want to transefer money to
  const ownerNameToTransferTo = inputTransferTo.value.split()[0];

  if (ownerNameToTransferTo === currentAccount.owner) return;

  const isAccountFound = accounts.find(acc => {
    const structuredOwnerName = acc.owner.split()[0];

    if (structuredOwnerName === ownerNameToTransferTo) {
      return acc;
    }
  });

  if (!isAccountFound) return;

  currentAccount = {
    ...currentAccount,
    totalBalance: currentAccount.totalBalance - inputTrasferAmountToNumber,
    movements: [...currentAccount.movements, -inputTrasferAmountToNumber],
    movementsDates: [...currentAccount.movementsDates, newAddedDate()],
  };

  console.log('currentAccount after transfering money', currentAccount);

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  updateUi(currentAccount);
});

requestLoanForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputLoanAmountToNumber = stringToNumber(inputLoanAmount.value);

  if (!inputLoanAmountToNumber) return;

  currentAccount = {
    ...currentAccount,
    movements: [...currentAccount.movements, inputLoanAmountToNumber],
    movementsDates: [...currentAccount.movementsDates, newAddedDate()],
  };

  updateUi(currentAccount);

  inputLoanAmount.value = '';
});

// closing account
closeAccountForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!inputCloseUsername.value || !inputClosePin.value) return;

  if (
    inputCloseUsername.value !== currentAccount.owner ||
    stringToNumber(inputClosePin.value) !== currentAccount.pin
  )
    return;

  // find user
  const foundUser = accounts.findIndex(
    currAcc =>
      currAcc.owner === inputCloseUsername.value &&
      currAcc.pin === stringToNumber(inputClosePin.value)
  );

  // removing found user from array
  accounts.splice(foundUser, 1);
  containerApp.style.opacity = 0;

  // clearing input fields
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

function logoutTimer() {
  let time = 10 * 60;

  const tick = function () {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    labelTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    if (time === 0) {
      clearInterval(logoutTimerId);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
      return;
    }
    time--;
  };

  tick();

  if (logoutTimerId) clearInterval(logoutTimerId);

  logoutTimerId = setInterval(tick, 1000);
}
