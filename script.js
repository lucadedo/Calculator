
class Calculator {
     constructor(preOperandTextElement, currOperandTextElement) {
        this.preOperandTextElement = preOperandTextElement
        this.currOperandTextElement = currOperandTextElement
        this.clear()
    }
    clear() {
        this.currOperand = ''
        this.preOperand = ''
        this.operation = undefined

    }
    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)

    }
    appendNumber(number) {
        if(number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()

    }
    Operate(operation) {
        if(this.currOperand === '') return
        if(this.preOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.preOperand = this.currOperand
        this.currOperand = ''

    }
    compute() {
        let computation
        const prev = parseFloat(this.preOperand)
        const current = parseFloat(this.currOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation =  prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default: 
                return 
        }
        this.currOperand = computation
        this.operation = undefined
        this.preOperand = ''
    }


    updateDisplay() {
        this.currOperandTextElement.innerText = this.currOperand
        if(this.operation != null) {
            this.preOperandTextElement.innerText = 
            `${this.preOperand} ${this.operation}`
        
        }else { 
            this.preOperandTextElement.innerText = ''
        }
    }
}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const preOperandTextElement = document.querySelector('[data-pre-operand]')
const currOperandTextElement = document.querySelector('[data-curr-operand]')


const calculator = new Calculator(preOperandTextElement, 
currOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.Operate(button.innerText)
        calculator.updateDisplay()

    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})




// const add = function(a,b){
//     return a + b;
// };
// const subtract = function(a,b){
//     return a - b;
// };
// function multiply(a,b){
//     return a * b;
// };
// function divide(a,b){
//     return a / b;
// };

// function operate(operator, a , b){
//     a = Number(a)
//     b = Number(b)
//     switch (operator) {
//         case '+':
//             return add(a,b)
//         case '-':
//             return subtract(a,b)
//         case '×':
//             return multiply(a,b)
//         case '÷':
//             if (b === 0) 
//             return null
//             else 
//             return divide(a,b)
//         default: 
//             return null
//         }
// }