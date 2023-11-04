'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const addedStoreSales = [];
const totalDaySales = [];

const container = document.getElementById('root');
let tableElement = document.createElement('table');
container.appendChild(tableElement);
let tfoot = document.createElement('tfoot');
tableElement.appendChild(tfoot);

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store(name, minCustomers, maxCustomers, avgSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSold = avgSold;
  this.sales = [];
}

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);


Store.prototype.cookieSales = function () {
  const sales = [];
  for (let i = 0; i < hours.length; i++) {
    const numCustomer = randomMinMax(this.minCustomers, this.maxCustomers);
    const perHourSold = Math.ceil(numCustomer * this.avgSold);
    sales.push(perHourSold);
    addedStoreSales.push(perHourSold);
  }
  return sales;
};

Store.prototype.render = function () {
  const row = document.createElement('tr');
  tableElement.appendChild(row);

  //const newStoreName = document.createElement('td');
  //row.appendChild(newStoreName);
  //newStoreName.textContent = this.name;
};

const stores = [seattle, tokyo, dubai, paris, lima];


function renderTable() {


  renderHeaderRow();

  // Loop through the stores and render rows for each store

  for (let i = 0; i < stores.length; i++) {
    renderStoreRow(stores[i]);

  }

  renderFooterRow();
}


function renderHeaderRow() {
  //create row and adds to table
  const tableRow = document.createElement('tr');
  tableElement.appendChild(tableRow);

  const cityCell = document.createElement('th');
  cityCell.textContent = 'Locations';
  cityCell.setAttribute('colspan', 3);


  tableRow.appendChild(cityCell);


  for (let i = 0; i < hours.length; i++) {
    const hourHeader = document.createElement('th');
    tableRow.appendChild(hourHeader);
    hourHeader.textContent = hours[i];
  }
  const totalCell = document.createElement('th');
  tableRow.appendChild(totalCell);
  totalCell.textContent = 'daily total';


}

function renderStoreRow(store) {
  // Create a row for the store and add it to the table
  const tableRow = document.createElement('tr');
  tableElement.appendChild(tableRow);

  // Create a cell for the store's name
  const storeCell = document.createElement('td');
  tableRow.appendChild(storeCell);
  storeCell.textContent = store.name;
  storeCell.setAttribute('colspan', 3);
  // Loop through hours and create cells for hourly sales
  const sales = store.cookieSales();
  store.sales = sales;
  for (let i = 0; i < sales.length; i++) {
    const hourCell = document.createElement('td');
    tableRow.appendChild(hourCell);
    hourCell.textContent = sales[i];
  }

  // Calculate and add the daily total cell
  let totalDailySales = 0;
  for (let i = 0; i < sales.length; i++) {
    totalDailySales += sales[i];
  }
  const totalCell = document.createElement('th');//TODO
  tableRow.appendChild(totalCell);
  totalCell.textContent = totalDailySales;
  totalDaySales.push(totalDailySales);


}



//Render Footer row
function renderFooterRow() {


  console.log(tfoot);

  tfoot.innerHTML = '';





  let megaTotal = 0;// Declare the variable here

  const footerCell = document.createElement('th');
  tfoot.appendChild(footerCell);
  footerCell.textContent = 'Totals';
  footerCell.setAttribute('colspan', 3);

  for (let i = 0; i < hours.length; i++) {
    let totalsThisHour = 0;
    for (let j = 0; j < stores.length; j++) {
      totalsThisHour += stores[j].sales[i];


    }
    const totalCell = document.createElement('th');
    tfoot.appendChild(totalCell);
    totalCell.textContent = totalsThisHour;
    megaTotal += totalsThisHour;
  }
  const megaTotalCell = document.createElement('th');
  tfoot.appendChild(megaTotalCell);
  megaTotalCell.textContent = megaTotal;
}

renderTable();

//Form

const form = document.getElementById('addStoreForm');




function handlingSubmit(event) {
  event.preventDefault();
  const cityName = event.target.cityName.value;
  const minCustomers = parseInt(event.target.minCustomers.value);
  console.log(typeof minCustomers);
  const maxCustomers = parseInt(event.target.maxCustomers.value);
  const avgSold = parseFloat(event.target.avgSold.value);
  const store = new Store(cityName, minCustomers, maxCustomers, avgSold);
  stores.push(store);
  console.log(stores);
  store.render();
  renderStoreRow(store);
  renderFooterRow();

  event.target.reset();
}


form.addEventListener('submit', handlingSubmit);


