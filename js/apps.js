function getRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const seattle = {
    name: "Seattle",
    minCustomers:  23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlySales: [],
    generateRandomCustomer: function(){
       return getRandomCustomers(this.minCustomers,this.maxCustomers)
     },
     generateHourlySales:function(){
        const customers = this.generateRandomCustomer();
        const cookiesSold = Math.floor(this.avgCookiesPerCustomer * customers);
       this.hourlySales.push(cookiesSold);
        return ;
     },

}

for (let i = 1; i < 13; i++) {
    seattle.generateHourlySales();
}



seattle.generateHourlySales();
seattle.generateRandomCustomer();
console.log(seattle);