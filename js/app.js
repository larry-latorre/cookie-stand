'use strict';
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Store(name,minCustomers,maxCustomers,avgSold,){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSold = avgSold;
  this.sales = this.cookieSales;
}
const seattle = new Store('Seattle', 23, 65, 6.3,);
const tokyo = new Store('Tokyo', 3, 24, 1.2,);
const dubai = new Store('Dubai', 11, 38, 3.7,);
const paris = new Store('Paris', 20, 38, 2.3,);
const lima = new Store('Lima', 2, 16, 4.6,);

Store.prototype.cookieSales = function () {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
      const numCustomer = randomMinMax(this.minCustomers, this.maxCustomers);
      const perHourSold = Math.ceil(numCustomer * this.avgSold);
      sales.push(perHourSold);
    }
    return sales;
  };
  function renderTable() {
    const container = document.getElementById('root');
    const tableElement = document.createElement('table');
    container.appendChild(tableElement);
    renderHeaderRow(tableElement);
  
    // Loop through the stores and render rows for each store
    const stores = [seattle, tokyo, dubai, paris, lima];
    for (let i = 0; i < stores.length; i++) {
      renderStoreRow(tableElement, stores[i]);
    }
  
    renderFooterRow(tableElement);
  }
  

  function renderHeaderRow(tableElement){
    //create row and adds to table
    const tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);
    const cityCell = document.createElement('th');
    tableRow.appendChild(cityCell);
    cityCell.textContent = 'Locations';
    for (let i = 0; i < hours.length; i++){
        const hourHeader = document.createElement('th');
        tableRow.appendChild(hourHeader);
        hourHeader.textContent = hours[i];
      }
      const totalCell = document.createElement('th');
      tableRow.appendChild(totalCell); 
      totalCell.textContent = 'daily total' 
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
  for (let i = 0; i < hours.length; i++) {
    const hourCell = document.createElement('td');
    tableRow.appendChild(hourCell);
    hourCell.textContent = sales[i];
  }

  // Calculate and add the daily total cell
  const totalCell = document.createElement('td');//TODO
  tableRow.appendChild(totalCell);
  totalCell.textContent = '???';
}

 

  function renderFooterRow(tableElement) {
    const tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);
  
    const footerCell = document.createElement('td');
    tableRow.appendChild(footerCell);
    footerCell.textContent = 'Totals';
  
    for (let i = 0; i < hours.length; i++) {
      const hourTotal = seattle.sales[i] + tokyo.sales[i] + dubai.sales[i] + paris.sales[i] + lima.sales[i];
  
      const hourCell = document.createElement('td');
      tableRow.appendChild(hourCell);
      hourCell.textContent = hourTotal;
    }
  
    const totalCell = document.createElement('td');
    tableRow.appendChild(totalCell);
    totalCell.textContent = '????'; // You can calculate the daily total here later
  }
  renderTable();