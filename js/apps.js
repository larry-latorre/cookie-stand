function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sales(){
    const sales = [];
    for (i=0; i< hours.length;i++){
   const numCustomer = randomMinMax(seattle.minCustomers,seattle.maxCustomers);
   const perHourSold = numCustomer * seattle.avgSold;
   sales.push(perHourSold);
}
return sales;
}

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//objects
const seattle = {
    name: "Seattle",
    minCustomers: 4,
    maxCustomers: 24,
    avgSold: 6.3,
    sales: [],
    generateSales:function(){
       this.sales = sales(); 
    }
} 

seattle.generateSales();
const container = document.getElementById('root');
//create h2
const headerElem = document.createElement('h2');
container.appendChild(headerElem);
headerElem.textContent = 'Seattle';
//create ul
const ulElem = document.createElement('ul');
container.appendChild(ulElem);

//create li and loop hours array
totalSold = 0;
for (i = 0;i < hours.length; i++){
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    const cookiesSold = totalSold += seattle.sales[i];
    const salesInfo =  `${hours[i]}: ${cookiesSold} cookies`; 
    liElem.textContent = salesInfo;
}
//create another li to display total
const totalLiElem = document.createElement('li');
ulElem.appendChild(totalLiElem);
const totalInfo = `Total: ${totalSold} cookies`;
totalLiElem.textContent = totalInfo;

console.log(seattle);


