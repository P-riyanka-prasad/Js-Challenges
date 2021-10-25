const form = document.getElementById('form')

const input = document.getElementById('date-of-birth')

const result = document.getElementById('result')

const resultDiv = document.getElementById('resultdiv')

const resetButton = document.getElementById('reset')

form.addEventListener('submit', () => {
    const dob = new Date(input.valueAsNumber).getUTCDate()

    const now = new Date().getUTCDate()

    const age = now - dob

    result.innerText = age

    form.classList.add('hidden')
    resultDiv.classList.remove('hidden')
})

resetButton.addEventListener('click', () => {
    form.classList.remove('hidden')
    resultDiv.classList.add('hidden')
    input.value = ''
})
