

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
//objects
const seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgSold: 6.3,
    sales: [],
    generateSales: function () {
        this.sales = cookieSales(this);
    }
}

const tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgSold: 1.2,
    sales: [],
    generateSales: function () {
        this.sales = cookieSales(this);
    }
}

const dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgSold: 3.7,
    sales: [],
    generateSales: function () {
        this.sales = cookieSales(this);
    }
}

const paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgSold: 2.3,
    sales: [],
    generateSales: function () {
        this.sales = cookieSales(this);
    }
}

const lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgSold: 4.6,
    sales: [],
    generateSales: function () {
        this.sales = cookieSales(this);
    }
}


seattle.generateSales();
tokyo.generateSales();
dubai.generateSales();
paris.generateSales();
lima.generateSales();

function cookieSales(store) {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
        const numCustomer = randomMinMax(store.minCustomers, store.maxCustomers);
        const perHourSold = Math.ceil(numCustomer * store.avgSold);
        sales.push(perHourSold);
    }
    return sales;
}

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const container = document.getElementById('root');


function render(store) {
    //create h2
    const headerElem = document.createElement('h2');
    container.appendChild(headerElem);
    headerElem.textContent = store.name;

    //create ul
    const ulElem = document.createElement('ul');
    container.appendChild(ulElem);

    //create li and loop hours array
    let totalSold = 0;
    for (let i = 0; i < hours.length; i++) {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const cookiesSold = totalSold += store.sales[i];
        const salesInfo = `${hours[i]}: ${cookiesSold} cookies`;
        liElem.textContent = salesInfo;
    }
    //create another li to display total
    const totalLiElem = document.createElement('li');
    ulElem.appendChild(totalLiElem);
    const totalInfo = `Total: ${totalSold} cookies`;
    totalLiElem.textContent = totalInfo;


}

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);

console.log(seattle);


