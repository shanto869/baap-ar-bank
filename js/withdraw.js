// add click event handler of the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
  // step-1: get the withdraw amount from the withdraw field
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawString);
  withdrawField.value = '';

    // validation 1 
    if(isNaN (newWithdrawAmount)){
      alert('Please Provide Valid Amount');
      return;
    }

  // step-2: get the previous withdraw amount
  const withdrawElement = document.getElementById('total-withdraw');
  const previousWithdrawString = withdrawElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawString);

  // step-4: get the current balance
  const previousBalanceElement = document.getElementById('total-balance');
  const previousBalanceString = previousBalanceElement.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceString);

  // validation 2
  if(newWithdrawAmount > previousBalanceAmount){
    alert('Baap er Bank eto TK nai');
    return
  }
  
  // step-3: calculate the total withdraw 
  const currentTotalWithdraw = previousWithdrawAmount + newWithdrawAmount;
  withdrawElement.innerText = currentTotalWithdraw;

  // step-5: calculate the current balance after withdraw
  const currentBalance = previousBalanceAmount - newWithdrawAmount;
  previousBalanceElement.innerText = currentBalance;
})