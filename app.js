var amount = document.getElementById('amount')

var initial = document.getElementById('initial-currency')

var final = document.getElementById('final-currency')

var answer = document.getElementById('answer')

var calculate = document.getElementById('calculate')



function errorChecker() {
    if (isNaN(amount.value)) {
        answer.textContent = `${amount.value} is not a valid number. Try again`
        answer.style.color = 'red'
    }
    else if (amount.value == '') {
        answer.textContent = `${amount.value} Error: Please enter a number`
        answer.style.color = 'red'
    }
}


function mainCalculation() {
    if (initial.value == 'USD' && final.value == 'NGN') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 381.20}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'USD' && final.value == 'KES') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 110.05}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'USD' && final.value == 'GHS') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 5.82}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'EUR' && final.value == 'NGN') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 464.11}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'EUR' && final.value == 'KES') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 133.87}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'EUR' && final.value == 'GHS') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 7.08}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'GBP' && final.value == 'NGN') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 520.98}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'GBP' && final.value == 'KES') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 150.27}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
    if (initial.value == 'GBP' && final.value == 'GHS') {
        answer.textContent = `${amount.value}${initial.value} is 
        equivalent to ${final.value}${parseInt(amount.value) * 7.95}`
        answer.style.color = '#65A7F3'
        errorChecker()
    }
}


calculate.addEventListener('click', () => {
    errorChecker()
    mainCalculation()
})