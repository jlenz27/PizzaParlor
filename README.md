# _John Lenz Pizza Parlor_

#### By _**John Lenz**_

#### _A website of a Pizza Parler that allows the user to order a pizza and select the toppings and size that they wont_

## Technologies Used

* _Html_
* _CSS_
*_JavaScript_


## Description

_This is a webpage that thats the input of a user to select a type of Pizza that they would want to order. The website updates to show the toppings change and the cost of the pizza. It uses a javascript function to calculate the price._

## GitHub Link
_https://github.com/jlenz27/PizzaParlor_

## Setup/Installation Requirements
* _Download Repository
* _Open the index.html with a webbrowser to see the website_
* _fill in the information to see the cost of your pizza_ 


## Known Bugs

* _There are no known bugs_


## License


_If you have any issues running this program or wish to contact me please email me at John.lenz29@gmail.com_

Copyright (c) 1/27/2023 John Lenz(s)

--Tests--
Describe: PizzaOrder()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", "cheese", "cheese");
Expected Output: Pizza { size: medium, toppings :cheese toppingstwo : cheese

--Tests--
Describe: calculateCost()

Test: "It should return the cost of a pizza at a given size."
Code: const myPizza = new Pizza("large", "cheese", "cheese");
Expected Output: Pizza: 18 

--Tests--
Describe: calculateCost()

Test: "It should return the cost of a pizza at a given size and the cost of toppings."
Code: const myPizza = new Pizza("large", "cheese", "none");
Expected Output: Pizza: 20

--Tests--
Describe: calculateCost()

Test: "It should return the cost of a pizza at a given size and the cost of  multiple toppings."
Code: const myPizza = new Pizza("large", "cheese", "cheese");
Expected Output: Pizza: 22

--Tests--
Describe: calculateCost()

Test: "It should return the cost of a pizza at a given size and the cost of  multiple toppings(added a third option of toppings)"
Code: const myPizza = new Pizza("large", "cheese", "cheese", "sausage");
Expected Output: Pizza: 24addd