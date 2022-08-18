document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputValueByID('withdraw-field');
    const previousWithdrawAmount = getElementValueByID('withdraw-total');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setElementValueByID('withdraw-total',newWithdrawTotal)
    const previousBalanceAmount = getElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    setElementValueByID('balance-total', newBalanceTotal);
});