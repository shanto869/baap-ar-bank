
// add click even handler of the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-1: get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDepositAmount = parseFloat(newDepositString);
    depositField.value = '';

    // step-2: get the previous deposit
    const totalDepositElement = document.getElementById('total-deposit');
    const previousDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousDepositString);

    // validation 
    if(isNaN (newDepositAmount)){
        alert('Please Enter Valid Amount');
        return;
    }

    // step-3: calculate the total deposite
    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;
    totalDepositElement.innerText = currentTotalDeposit;

    // get the previous balance 
    const previousBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousBalanceString);

    // calculate the previous balance with the current deposit
    const currentBalance = previousTotalBalance + newDepositAmount;
    previousBalanceElement.innerText = currentBalance;
})