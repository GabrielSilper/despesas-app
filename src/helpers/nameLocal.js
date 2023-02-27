export const createUser = (name) => {
  if (localStorage.getItem('user')) {
    return;
  }
  localStorage.setItem('user', name);
};

export const getUser = () => {
  if (!localStorage.getItem('user')) {
    return '';
  }
  return localStorage.getItem('user');
};

export const createExpenseInfo = (name) => {
  if (localStorage.getItem(name)) {
    return;
  }
  localStorage.setItem(name, JSON.stringify([]));
};

export const addExpenseToLocal = (name, expense) => {
  if (localStorage.getItem(name)) {
    const localExpenses = JSON.parse(localStorage.getItem(name));
    if (localExpenses.length === 0) {
      localStorage.setItem(name, JSON.stringify([expense]));
    } else {
      localStorage.setItem(name, JSON.stringify([localExpenses, ...expense]));
    }
  }
};

export const getExpensesInfo = (name) => {
  if (!localStorage.getItem(name)) {
    return [];
  }
  return JSON.parse(localStorage.getItem(name));
};
