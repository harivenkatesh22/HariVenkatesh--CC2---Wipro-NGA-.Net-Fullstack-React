export const addExpense = (expenses, description, amount) => {
    return [...expenses, { id: Date.now(), description, amount: parseFloat(amount) }];
};
