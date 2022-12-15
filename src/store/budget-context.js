import React from "react";

const BudgetContext = React.createContext({
  balanсe: 0,
  expenseCategories: [],
  incomeCategories: [],
  plannedExpenses: [],
  plannedIncomes: [],
  expenseItems: [],
  incomeItems: [],
  addExpenseCategory: () => {},
  removeExpenseCategory: (id) => {},
  addIncomeCategory: () => {},
  removeIncomeCategory: (id) => {},
  addExpenseItem: () => {},
  removeExpenseItem: (id) => {},
  addIncomeItem: () => {},
  removeIncomeItem: (id) => {},
});

export default BudgetContext;
