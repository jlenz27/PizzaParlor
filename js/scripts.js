// Buisness Logic--

function PizzaOrder(pizzaSize, pizzaTopping, pizzaToppingTwo){
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaTopping;
    this.pizzaToppingTwo = pizzaToppingTwo;
}

PizzaOrder.prototype.selectedPizza = function() {
    return this.pizzaSize + " " + this.pizzaTopping + " " + this.pizzaToppingTwo;
  }
  
PizzaOrder.prototype.calculateCost = function() {


    
}