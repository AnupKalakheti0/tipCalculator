let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let perPerson = document.getElementById('perPersonTotal')
let people = document.getElementById('numberOfPeople')
let noPeople = Number(people.innerText)

calculateBill = () => {
    let bill = Number(billTotalInput.value)
    let tipPercentage = Number(tipInput.value) /100
    let tipAmount = bill * tipPercentage
    let total = bill + tipAmount
    let perPersonTotal = total / people.innerText
    perPerson.innerText = `$${perPersonTotal}`   
}

increasePeople = () => {
    noPeople = noPeople + 1 
    people.innerText = noPeople
    calculateBill()
}

decreasePeople = () => {
    if ( noPeople <= 1) {
        return
    }
    noPeople = noPeople - 1 
    people.innerText = noPeople
    calculateBill()
}