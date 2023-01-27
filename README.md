# _John Lenz Pizza Parlor_

#### By _**John Lenz**_

#### _A portfolio that talks about John and some of his hobbies along with a list of current projects that he is working on_

## Technologies Used

* _Html_
* _CSS_
*_JavaScript_


## Description

_This is a webpage that is used to display a portfolio of John Lenz, It uses HTML and CSS to make and stylize the website. It shows basic concepts of HTML and styling with CSS. It inclues a list of projects that he is currently working on along with contact information_

## GitHub Link
_https://jlenz27.github.io/Portfolio/_

## Setup/Installation Requirements
* _Download Repository
* _Run this program with an Web browser of your choosing_


## Known Bugs

* _There are no known bugs_


## License


_If you have any issues running this program or wish to contact me please email me at John.lenz29@gmail.com_

Copyright (c) 1/06/2023 John Lenz(s)

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