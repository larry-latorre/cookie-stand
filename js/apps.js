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
let newParagraphElement = document.createElement('h2');
container.appendChild(newParagraphElement);
newParagraphElement.textContent = this.name;

//create unordered list
let newListElement = document.createElement('ul');
container.appendChild(newListElement);



for(i=0;i < this.sales.length;i++){
let liElement = document.createElement('li');
    newListElement.appendChild(liElement);
    const cookiesSold = this.sales[i];
    totalSold += cookiesSold;
    liElement.textContent = `${hours[i]}: ${cookiesSold} cookies`;
}

    let totalItem = document.createElement('li');
    newListElement.appendChild(totalItem);
    totalItem.textContent = `Total: ${totalSold} cookies`;

    
}

  
  

// Create a new City instance for Seattle
const seattle = new City('Seattle', 2, 4, 6.3,);

seattle.render();



