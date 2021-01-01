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


// TOGGLING FUNCTIONS

function active(element){
    element.classList.add("active");
}

function inactive(elementsArray){
    elementsArray.forEach(element => {
        element.classList.remove("hide");
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


// TOGGGING: EVENT LISTENERS ON BUTTONS

expenseBtn.addEventListener('click', function(){
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseEl);
    hide([incomeEl, allEl]);
});

incomeBtn.addEventListener('click', function(){
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeEl);
    hide([expenseEl, allEl]);
});

allBtn.addEventListener('click', function(){
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
    show(allEl);
    hide([incomeEl, expenseEl]);
});


// ADD ENTRY: DEFINE VARIABLES

let ENTRY_LIST = [];

let income = {
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

