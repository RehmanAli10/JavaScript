'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Rehman Ali',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const EURO_RATE = 0.85;

let currentAccount;

let isSorted = false;

const time = new Date().toLocaleTimeString();
// toggling theme base of time
// (function () {
//   toggleTheme();
// })();

// getting all keys
const currencykeys = [...currencies.keys()];

const price = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: currencykeys[1],
  useGrouping: false,
});

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

  // sign in, display dashboard and hide nav
  containerApp.style.opacity = 1;
  navContainer.style.display = 'none';

  // show total balance
  const totalBalance = currentAccount.movements.reduce(
    (acc, mov, index) => acc + mov,
    0
  );

  // convert it to EURO
  labelBalance.textContent = `${price.format(totalBalance)}`;

  // show date
  const date = new Date();

  labelDate.textContent = formatDate(date);

  // display movements
  containerMovements.innerHTML = currentAccount.movements.map(
    (currMov, index) => `
      <div class="movements__row">
          <div class="movements__type movements__type--${
            currMov > 0 ? 'deposit' : 'withdrawal'
          }">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${price.format(currMov)}</div>
        </div>
    `
  );

  // show total desposits, with draw and interes
  const totalDeposit = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const totalWithDrawl = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  // Interest formula: currentOwnerdeposit * (ownerInterestRate/100)
  const totalInterest = calcInterestRate(currentAccount);

  labelSumIn.textContent = price.format(totalDeposit);
  labelSumOut.textContent = price.format(totalWithDrawl);
  labelSumInterest.textContent = price.format(totalInterest);
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
  containerMovements.innerHTML = currentAccount.movements.map(
    (currMov, index) => `
      <div class="movements__row">
          <div class="movements__type movements__type--${
            currMov > 0 ? 'deposit' : 'withdrawal'
          }">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${price.format(currMov)}</div>
        </div>
    `
  );
});

// helpers function

// format date
function formatDate(date) {
  if (!date) return;
  const currentDate = String(date.getDate());
  const month = String(date.getMonth() + 1);
  const year = String(date.getFullYear());

  return `${currentDate.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
}

function checkTime(time) {
  if (!time) return;

  const isNightTime = time.split(' ').includes('PM');
  return isNightTime;
}

function toggleTheme() {
  if (checkTime(time)) {
    containerApp.classList.add('dark');
    document.body.classList.toggle('dark');
  } else {
    containerApp.classList.remove('dark');
    document.body.classList.remove('dark');
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
