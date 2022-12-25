import { useReducer } from "react";
import expenseCategories from "../components/dataArrays/expenseCategories";
import incomeCategories from "../components/dataArrays/incomeCategories";
import itemsArray from "../components/dataArrays/itemsArray";
import BudgetContext from "./budget-context";

const defaultBudgetState = {
  balanсe: 0,
  expenseCategories: expenseCategories,
  incomeCategories: incomeCategories,
  expenseItems: itemsArray,
  incomeItems: [],
};

const budgetReducer = (state, action) => {
  if (action.type === "ADD-EXPENSE") {
    const newExpenseCategory = {
      id: Math.random(),
      category: action.item.category,
      categoryName: action.item.categoryName,
    };
    const updatedCategories =
      state.expenseCategories.concat(newExpenseCategory);
    console.log(updatedCategories);
    return { ...state, expenseCategories: updatedCategories };
  }
  if (action.type === "REMOVE-EXPENSE") {
    const chosenCategory = state.expenseCategories.filter(
      (item) => item.category === action.category
    );
    console.log(chosenCategory);

    const updatedCategories = state.expenseCategories.filter(
      (item) => item.category !== chosenCategory[0].category
    );
    console.log(updatedCategories);
    return { ...state, expenseCategories: updatedCategories };
  }
  if (action.type === "ADD-INCOME") {
    const newIncomeCategory = {
      id: Math.random(),
      category: action.item.category,
      categoryName: action.item.categoryName,
    };
    const updatedCategories = state.incomeCategories.concat(newIncomeCategory);
    console.log(updatedCategories);
    return { ...state, incomeCategories: updatedCategories };
  }
  if (action.type === "REMOVE-INCOME") {
    const chosenCategory = state.incomeCategories.filter(
      (item) => item.category === action.category
    );
    console.log(chosenCategory);

    const updatedCategories = state.incomeCategories.filter(
      (item) => item.category !== chosenCategory[0].category
    );
    console.log(updatedCategories);
    return { ...state, incomeCategories: updatedCategories };
  }
};

const BudgetProvider = (props) => {
  const [budgetState, dispatchBudgetAction] = useReducer(
    budgetReducer,
    defaultBudgetState
  );

  const addExpenseCategoryHandler = (item) => {
    dispatchBudgetAction({ type: "ADD-EXPENSE", item: item });
  };

  const removeExpenseCategoryHandler = (category) => {
    dispatchBudgetAction({ type: "REMOVE-EXPENSE", category: category });
  };

  const addIncomeCategoryHandler = (item) => {
    dispatchBudgetAction({ type: "ADD-INCOME", item: item });
  };

  const removeIncomeCategoryHandler = (category) => {
    dispatchBudgetAction({ type: "REMOVE-INCOME", category: category });
  };

  const budgetContext = {
    balanсe: 0,
    expenseCategories: budgetState.expenseCategories,
    incomeCategories: budgetState.incomeCategories,
    expenseItems: budgetState.expenseItems,
    incomeItems: [],
    addExpenseCategory: addExpenseCategoryHandler,
    removeExpenseCategory: removeExpenseCategoryHandler,
    addIncomeCategory: addIncomeCategoryHandler,
    removeIncomeCategory: removeIncomeCategoryHandler,
    addExpenseItem: () => {},
    removeExpenseItem: (id) => {},
    addIncomeItem: () => {},
    removeIncomeItem: (id) => {},
  };

  return (
    <BudgetContext.Provider value={budgetContext}>
      {props.children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
