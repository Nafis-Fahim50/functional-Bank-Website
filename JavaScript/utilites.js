function getInputValueByID(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = " ";
    return inputFieldValue;
}

function getElementValueByID(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setElementValueByID(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}