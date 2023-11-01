'use strict';
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cookieSales(){
    const sales = [];
    for (let i=0; i< hours.length;i++){
   const numCustomer = randomMinMax(seattle.minCustomers,seattle.maxCustomers);
   const perHourSold = numCustomer * seattle.avgSold;
   sales.push(perHourSold);
}
return sales;
}
const seattle = {
    name: "Seattle",
    minCustomers: 4,
    maxCustomers: 24,
    avgSold: 6.3,
    sales: [],
    generateSales: function(){
        this.sales = cookieSales();
    }
} 

seattle.generateSales();
cookieSales();


const container = document.getElementById('root');

const tableElement = document.createElement('table');
container.appendChild(tableElement);

const tableRow = document.createElement('tr');
tableElement.appendChild(tableRow);

for (let i = 0; i < hours.length; i++){
  const hourHeader = document.createElement('th');
  tableRow.appendChild(hourHeader);
  hourHeader.textContent = hours[i];
}

const cityTable = document.createElement('table');
container.appendChild(cityTable);

const cityTableRow = document.createElement('tr');
cityTable.appendChild(cityTableRow);

function cityName (name){
  let cityRow = document.createElement('tr');
  cityTable.appendChild(cityRow);
  let cityCell = document.createElement('td');
  cityTable.appendChild(cityCell);
  cityCell.textContent = name + name.sales;
}

cityName('Seattle');
cityName('Tokyo');
cityName('Paris');
cityName('Dubai');
cityName('Lima');
cityName('Totals');

