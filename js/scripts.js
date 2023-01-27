// Buisness Logic--

function PizzaOrder(pizzaSize, pizzaTopping, pizzaToppingTwo, pizzaToppingThree) {
    this.pizzaSize = pizzaSize;
    this.pizzaTopping = pizzaTopping;
    this.pizzaToppingTwo = pizzaToppingTwo;
    this.pizzaToppingThree = pizzaToppingThree;
}

PizzaOrder.prototype.selectedPizza = function () {
    return this.pizzaSize + " " + this.pizzaTopping + " " + this.pizzaToppingTwo;
}

PizzaOrder.prototype.calculateCost = function () {
    let cost = 0;
    if (this.pizzaSize === "small") {
        cost += 10;
    } else if (this.pizzaSize === "medium") {
        cost += 14;
    } else if (this.pizzaSize === "large") {
        cost += 18;
    }
    if (this.pizzaTopping !== "none") {
        cost += 2;
    }
    if (this.pizzaToppingTwo !== "none") {
        cost += 2;
    }
    if(this.pizzaToppingThree !== "none"){
        cost +=2;
    }
    return cost
}

// UI Logic --

function handleFormSubmission(event){  
    event.preventDefault();
    const selectedPizzaSize = document.querySelector("select#pizza-size").value;
    const selectedPizzaToppingOne = document.querySelector("select#pizza-topping-one").value;
    const selectedPizzaToppingTwo = document.querySelector("select#pizza-topping-two").value;
    const selectedPizzaToppingThree = document.querySelector("select#pizza-topping-three").value;
    let newPizzaOrder = new PizzaOrder(selectedPizzaSize, selectedPizzaToppingOne, selectedPizzaToppingTwo, selectedPizzaToppingThree);
    
    let pizzaOutput = document.getElementById("pizza-total");
    let outputPizzaSize = document.getElementById("outputName");
    let outputPizzaToppingOne = document.getElementById("outputTime");
    let outputPizzaToppingTwo = document.getElementById("outputSpecial");
    let outputPizzaToppingThree = document.getElementById("outputSpecial");