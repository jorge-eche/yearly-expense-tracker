import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={year} setYear={setYear} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
