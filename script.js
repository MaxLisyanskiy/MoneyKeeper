let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(money) || money == null || money == "") {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
	savings: true,
	chooseExpensens: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
		
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				appData.expenses[a] = b;    
			} else {
				i = i - 1;
			}  
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Бюджет на один день: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			return "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			return "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			return "Высокий уровень достатка";
		} else {
			return "Произошла ошибка";
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
	
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i <= 3; i++) {
			let a = +prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = a; 
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		while(!isNaN(items) || items == null || items == "") {
			items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();

		appData.income.forEach(function(elem, index) {
			console.log("Способы доп. заработка: " + (index + 1) + ". " + elem);
		});
	}
};

function test() {
	for(let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}
}
