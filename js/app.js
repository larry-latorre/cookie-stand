'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const addedStoreSales = [];
const totalDaySales = [];

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

const stores = [seattle, tokyo, dubai, paris, lima];


function renderTable() {
  const container = document.getElementById('root');
  const tableElement = document.createElement('table');
  container.appendChild(tableElement);
  renderHeaderRow(tableElement);

  // Loop through the stores and render rows for each store

  for (let i = 0; i < stores.length; i++) {
    renderStoreRow(tableElement, stores[i]);

  }

  renderFooterRow(tableElement);
}


function renderHeaderRow(tableElement) {
  //create row and adds to table
  const tableRow = document.createElement('tr');
  tableElement.appendChild(tableRow);
  const cityCell = document.createElement('th');
  tableRow.appendChild(cityCell);
  cityCell.textContent = 'Locations';
  for (let i = 0; i < hours.length; i++) {
    const hourHeader = document.createElement('th');
    tableRow.appendChild(hourHeader);
    hourHeader.textContent = hours[i];
  }
  const totalCell = document.createElement('th');
  tableRow.appendChild(totalCell);
  totalCell.textContent = 'daily total';
}

function renderStoreRow(tableElement, store) {
  // Create a row for the store and add it to the table
  const tableRow = document.createElement('tr');
  tableElement.appendChild(tableRow);

  // Create a cell for the store's name
  const storeCell = document.createElement('td');
  tableRow.appendChild(storeCell);
  storeCell.textContent = store.name;

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
  const totalCell = document.createElement('td');//TODO
  tableRow.appendChild(totalCell);
  totalCell.textContent = totalDailySales;
  totalDaySales.push(totalDailySales);
}

function renderFooterRow(tableElement) {
  const tableRow = document.createElement('tr');
  tableElement.appendChild(tableRow);

  let megaTotal = 0;// Declare the variable here

  const footerCell = document.createElement('th');
  tableRow.appendChild(footerCell);
  footerCell.textContent = 'Totals';

  for (let i = 0; i < hours.length; i++) {
    let totalsThisHour = 0;
    for (let j = 0; j < stores.length; j++) {
      console.log(stores[j].sales[i]);
      totalsThisHour += stores[j].sales[i];


    }
    const totalCell = document.createElement('th');
    tableRow.appendChild(totalCell);
    totalCell.textContent = totalsThisHour;
    megaTotal += totalsThisHour;
  }


  const megaTotalCell = document.createElement('th');
  tableRow.appendChild(megaTotalCell);
  megaTotalCell.textContent = megaTotal;
}

renderTable();

//Form

const addStoreForm = document.getElementById('addStoreForm');

addStoreForm.addEventListener('submit',

  function (event) {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const minCustomers = event.target.minCustomers.value;
    const maxCustomers = event.target.maxCustomers.value;
    const avgSaleCookies = event.target.AvgSaleCookies.value;

    //let interests = event.target.interests.value;
    //interests = interests.split(',');
    
    const newStore = new Store(cityName, minCustomers, maxCustomers, avgSaleCookies);
    //newKitten.estimateAge();
    //kittenForm.reset();
    newStore.render();
    //kittens.push(newKitten);
    renderTableFooter();
  }

);
  
