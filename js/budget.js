// SELECT ELEMENTS

const balanceEl = document.querySelector(".balance .value");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeTotalEl = document.querySelector(".income-total");
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

updateUI();
clearInput([expenseTitle, expenseAmount])
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

updateUI();
clearInput([incomeTitle, incomeAmount])
})


// HELPERS: TOGGLING FUNCTIONS

function updateUI(){
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = Math.abs(calculateBalance(income, outcome));

    // Determine sign of balance
    let sign = (income >= outcome) ? "€" : "-€";

    // Update UI

    balanceEl.innerHTML = `<small>${sign}</small>${balance}`;
    outcomeTotalEl.innerHTML = `<small>€</small>${outcome}`;
    incomeTotalEl.innerHTML = `<small>€</small>${income}`;



    clearElement( [expenseList, incomeList, allList]);

    ENTRY_LIST.forEach( (entry, index) => {
        if(entry.type == "expense"){
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        } else if(entry.type == "income"){
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });
}

function showEntry(list, type, title, amount, id){
    const entry = ` <li id = "${id}" class="${type}">
                        <div  class="entry">${title} : €${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li> `;

                    const position = "afterbegin";

                    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements){
    elements.forEach(element => {
        element.innerHTML = "";
    })
}



function calculateTotal(type, list){
    let sum = 0;

    list.forEach ( entry => {
        if( entry.type == type ){
            sum+= entry.amount;
        }
        
    })

    return sum;
}

function calculateBalance(income, outcome){
    return income - outcome;
    
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}


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
