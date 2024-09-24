// donation and history section

 document.getElementById('history-Btn').addEventListener('click', () => {
    document.getElementById('donation-Section').classList.add('hidden');
    document.getElementById('history-Section').classList.remove('hidden');
 })
 document.getElementById('donation-Btn').addEventListener('click', () => {
    document.getElementById('history-Section').classList.add('hidden');
    document.getElementById('donation-Section').classList.remove('hidden');
 });

       //  Process donation
       function processDonation(cardId) {
          const donationInput = document.getElementById('donation-input' + cardId);
          const donationAmount = parseFloat(donationInput.value);
          const accountBalanceElement = document.getElementById('account-balance');
          let accountBalance = parseFloat (accountBalanceElement.innerText.split(' ')[0]);


         if (isNaN(donationAmount) || donationAmount <= 0 ){
             alert('please enter a valid donation amount.');
             return;
         }
         if (donationAmount > accountBalance){
             alert('Donation amount exceeds account balance');
             return;
         }

         // account balance
          accountBalance -= donationAmount;
          accountBalanceElement.innerText = accountBalance + ' BDT';

          // update current account balance

          const currentDonationElement = document.getElementById('total-donate' + cardId);
          let currentDonation = parseFloat(currentDonationElement.innerText.split(' ')[0]);
          currentDonation += donationAmount;
          currentDonationElement.innerText = currentDonation + ' BDT';


         // transaction history

          addHistory(donationAmount,'Flood at Noakhali,Bangladesh');

           // input
           donationInput.value = '';
          }

     //  current date and time
     function addHistory(amount, donationName) {
       const historyList = document.getElementById('history-list');
       const listItem = document.createElement('li');
       const now = new Date();

       const dateString= now.toLocaleDateString('en-GB',{
         year: 'numeric',
         month: 'long',
         day: 'numeric'
       });

       const timeString = now.toLocaleTimeString('en-GB',{
         hour: '2-digit',
         minute: '2-digit',
         hour12: 'true'
       });
       listItem.innerText = `${timeString} - Donated ${amount} BDT to ${donationName}`;
       historyList.appendChild(listItem);
     }
