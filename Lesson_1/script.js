var money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    timeData: time,
	expenses: {
        cost:price
    },
	optionalExpenses: {},
	income: [],
	
	savings: false
};



var cost = prompt("Введите обязательную статью расходов в этом месяце",""),
    cost2 = prompt("Введите обязательную статью расходов в этом месяце","");
var price = prompt("Во сколько это обойдется?",""),
    price2 = prompt("Во сколько это обойдется?","");

alert(appData.budget/30);

cost = cost2;
price = price2;

