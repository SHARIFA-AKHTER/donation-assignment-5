
// donate function
// button and section
document.getElementById('history-Btn').addEventListener('click', () => {
  document.getElementById('donation-Section').classList.add('hidden');
  document.getElementById('history-Section').classList.remove('hidden');
});

document.getElementById('donation-Btn').addEventListener('click', () => {
  document.getElementById('history-Section').classList.add('hidden');
  document.getElementById('donation-Section').classList.remove('hidden');
});

// Initial account balance
let accountBalance = 5500;
const donations = [10200, 600, 2400];

// Process donation for the specified card 
function showAlert(cardId) {
  const donationInput = document.getElementById('donation-input' + cardId);
  const donationAmount = parseFloat(donationInput.value);
  const accountBalanceElement = document.getElementById('account-balance');
  let accountBalance = parseFloat(accountBalanceElement.innerText.split(' ')[0]);

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  if (donationAmount > accountBalance) {
    alert('Donation amount exceeds account balance.');
    return;
  }

  // account balance
  accountBalance -= donationAmount;
  accountBalanceElement.innerText = accountBalance + ' BDT';

  // Update donation 
  donations[cardId - 1] += donationAmount;
  const currentDonationElement = document.getElementById('total-donate' + cardId);
  currentDonationElement.innerText = donations[cardId - 1] + ' BDT';

  // transaction history
  const donationName = getDonationName(cardId);
  addHistory(donationAmount, donationName);

 
  donationInput.value = '';
}

function getDonationName(cardId) {
  switch (cardId) {
    case 1:
      return 'Flood at Noakhali, Bangladesh';
    case 2:
      return 'Flood Relief in Feni, Bangladesh';
    case 3:
      return 'Aid for Injured in the Quota Movement';
    default:
      return '';
  }
}

// Function to add donation history
function addHistory(amount, donationName) {
  const historyList = document.getElementById('history-list');
  const listItem = document.createElement('li');
  const now = new Date();

  const dateString = now.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const timeString = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  // Add new history item to the list
  listItem.innerText = `${timeString} - Donated ${amount} BDT to ${donationName}`;
  historyList.appendChild(listItem);
}