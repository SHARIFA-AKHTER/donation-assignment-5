
// function showAlert(){
//     alert("Thank you for your donation!")
// }

//Donation and History Button

    const donationSection = document.getElementById('donation-Section');
    const historySection = document.getElementById('history-Section');
    const donationBtn= document.getElementById('donation-Btn');
    const historyBtn = document.getElementById('history-Btn')

    donationBtn .addEventListener('click',function(){
        historySection.style.display = 'none';
        donationSection.style.display ='block';
      
    });

     historyBtn.addEventListener('click',function(){
         donationSection.style.display = 'none';
         historySection.style.display = 'block';
     })
    // console.log(donationBtn,historyBtn)



//     if(section === 'donation'){
//         donationSection.classList.remove('hidden');
//         historySection.classList.add('hidden');
//         donationBtn.classList.add('active');
//         historyBtn.classList.remove('active');
//     }
//     else{
//         donationSection.classList.add('hidden');
//         historySection.classList.remove('hidden');
//         donationBtn.classList.remove('active');
//         historyBtn.classList.add('active');
//     }
  
// }

// document.getElementById('donationBtn').addEventListener('click',() => toggleSection('donation'));
// document.getElementById(' historyBtn').addEventListener('click',() => toggleSection('history'));

// function donate(cardId, currentDonation){
//     const donationInput = document.getElementById(`donationInput${cardId}`).value ;
//     const totalDonate =parseFloat(donationInput);

//     if(!totalDonate|| totalDonate <=0 || totalDonate > accountBalance);
//     alert('Invalid donation amount!');
//     return;
//  
