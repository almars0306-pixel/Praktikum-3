const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalCountEl = document.getElementById('total-count');
const totalAmountEl = document.getElementById('total-amount');

let expenses = [];

function renderExpenses() {
    expenseList.innerHTML = '';
    
    let totalAmount = 0;

    expenses.forEach((expense, index) => {
        totalAmount += expense.amount;

        const li = document.createElement('li');
        
        li.innerHTML = `
            <div class="expense-info">
                <span class="expense-name">${expense.name}</span>
                <span class="expense-amount">Rp ${expense.amount}</span>
            </div>
            <button class="delete-btn" onclick="deleteExpense(${index})">Hapus</button>
        `;
        expenseList.appendChild(li);
    });

    totalCountEl.innerText = expenses.length;
    totalAmountEl.innerText = totalAmount;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameValue = nameInput.value;
    const amountValue = parseFloat(amountInput.value);

    expenses.push({ name: nameValue, amount: amountValue });

    nameInput.value = '';
    amountInput.value = '';

    renderExpenses();
});

function deleteExpense(index) {
    expenses.splice(index, 1);
    
    renderExpenses();
}