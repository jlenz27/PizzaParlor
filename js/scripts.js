// Buisness Logic--

function PizzaOrder(pizzaSize, pizzaToppingOne, pizzaToppingTwo, pizzaToppingThree) {
    this.pizzaSize = pizzaSize;
    this.pizzaToppingOne = pizzaToppingOne;
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
    let outputPizzaSize = document.getElementById("output-pizza-size");
    let outputPizzaToppingOne = document.getElementById("output-pizza-toppings-one");
    let outputPizzaToppingTwo = document.getElementById("output-pizza-toppings-two");
    let outputPizzaToppingThree = document.getElementById("output-pizza-toppings-three");
    
    outputPizzaSize.innerText = newPizzaOrder.pizzaSize;
    outputPizzaToppingOne.innerText = newPizzaOrder.pizzaToppingOne;
    outputPizzaToppingTwo.innerText = newPizzaOrder.pizzaToppingTwo;
    outputPizzaToppingThree.innerText = newPizzaOrder.pizzaToppingThree;
    pizzaOutput.removeAttribute("class");
    

}

