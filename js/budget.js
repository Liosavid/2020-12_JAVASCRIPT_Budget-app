// SELECT ELEMENTS

const balanceEl = document.querySelector(".balance .value");
const outcomeTotalEl = document.querySelector(".income-total");
const incomeTotalEl = document.querySelector(".outcome-total");
const chartEl = document.querySelector(".chart");

const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

// VARIABLES

let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE ="delete", EDIT = "edit";


// TOGGGING: EVENT LISTENERS ON BUTTONS

expenseBtn.addEventListener('click', function(){
    show(expenseEl);
    hide([incomeEl, allEl]);

    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
});

incomeBtn.addEventListener('click', function(){
    show(incomeEl);
    hide([expenseEl, allEl]);

    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
});

allBtn.addEventListener('click', function(){
    show(allEl);
    hide([incomeEl, expenseEl]);

    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
});


addExpense.addEventListener("click", function(){
    // If one of the inputs is empty => EXIT
    if(!expenseTitle.value || !expenseAmount.value) return;

    // Save the entry to ENTRY_LIST

    let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: parseFloat(expenseAmount.value)
}

ENTRY_LIST.push(expense);

UpdateUI();
clearInput([expenseTitle.value, expenseAmount.value])
})

addIncome.addEventListener("click", function(){
    // If one of the inputs is empty => EXIT
    if(!incomeTitle.value || !incomeAmount.value) return;

    // Save the entry to ENTRY_LIST

    let income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseFloat(incomeAmount.value)
}

ENTRY_LIST.push(income);

UpdateUI();
clearInput([icomeTitle.value, imcomeAmount.value])
})


// HELPERS: TOGGLING FUNCTIONS

function active(element){
    element.classList.add("active");
}

function inactive(elementsArray){
    elementsArray.forEach(element => {
        element.classList.remove("active");
    });
}

function show(element){
    element.classList.remove("hide");
}

function hide(elementsArray){
    elementsArray.forEach( element => {
        element.classList.add("hide");
    });
}



// ADD ENTRY: DEFINE VARIABLES

/* let income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseFloat(incomeAmount.value)
}



ENTRY_LIST.push(income);
updateUI();
clearInput([incomeTitle, incomeAmount]);


// ADD ENTRY: EVENT LISTENERS

addIncome.addEvenListener("click", function(){

});

*/