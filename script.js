let money, time;
let question1, question2;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");
question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
question2 = prompt("Во сколько обойдется?", "");


alert("Бюджет на один день: " + money/30);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        question1: question2
    },
    optionalExpenses: '',
    income: '',
    savings: false
};