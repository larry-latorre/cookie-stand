function getRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//constructor
function City(name,minCustomers,maxCustomers,avgCookiesPerCustomer,){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.sales = this.generateHourlySales();
} 

//add methods
City.prototype.generateHourlySales = function(){
    const sales = []
    for (let i = 0; i < hours.length; i++){
        const customers = getRandomCustomers(this.minCustomers,this.maxCustomers);
        const hourlySales = Math.ceil(customers * this.avgCookiesPerCustomer);
        sales.push(hourlySales);
    }
    return sales;
};

City.prototype.render = function () {
const container = document.getElementById('root');
let totalSold = 0;

//creates paragraph
/*let newParagraphElement = document.createElement('h2');
container.appendChild(newParagraphElement);
newParagraphElement.textContent = this.name;*/

//create unordered list
/*let newListElement = document.createElement('ul');
container.appendChild(newListElement);*/

const tableElement = document.createElement('table');
    container.appendChild(tableElement);

    const headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    
    const cityHeaderCell = document.createElement('td');
    headerRow.appendChild(cityHeaderCell);
    cityHeaderCell.textContent = this.name;


//create table
for(i=0;i < this.sales.length;i++){
let tableHeaderElement = document.createElement('th');
    tableElement.appendChild(tableHeaderElement);
    const cookiesSold = this.sales[i];
    totalSold += cookiesSold;
    tableHeaderElement.textContent = `${hours[i]}: ${cookiesSold} cookies`;
}

    let totalItem = document.createElement('td');
    tableElement.appendChild(totalItem);
    totalItem.textContent = `Total: ${totalSold} cookies`;
    
    
    
}


  
  

// Create a new City instance for Seattle

const seattle = new City('Seattle', 2, 4, 6.3,);
const tokyo = new City('Tokyo', 2, 4, 6.3,);
const dubai = new City('Dubai', 2, 4, 6.3,);
const paris = new City('Paris', 2, 4, 6.3,);
const lima = new City('Lima', 2, 4, 6.3,);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



