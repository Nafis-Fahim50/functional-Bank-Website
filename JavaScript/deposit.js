document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputValueByID('deposit-field');

    const previousDepositAmount = getElementValueByID('deposit-total');
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    setElementValueByID('deposit-total',newDepositTotal);

    const previousBalanceAmount = getElementValueByID('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceAmount;
    setElementValueByID('balance-total', newBalanceTotal);
})