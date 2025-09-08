
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
 Answer: Var is function scoped but let and const is block scoped. Var is hoisted and initialized with undefined. Let and const are hoisted but not initialized. We can reassignment var and let value but we can not reassignment const value. We can redeclaration var but we can not redeclaration let and const value.

#### 2) What is the difference between map(), forEach(), and filter()? 
Answer: map() and filter() both return a new array but forEach() do not return anything. We use map() function To transform each item into something else. It's return a new array of the same length. And forEach() function To execute a function for each item. It's does not return anything or you can say it's return undefined. And filter() function To select a subset of items based on a condition.It's returns a new array that can be shorter than or the same length as the original.

#### 3) What are arrow functions in ES6?
Answer: The syntax for arrow functions is shorter and cleaner than older function. Arrow function syntax is const sum = (a,b) => a+b; If we use only one line then we do not need to return it. It will automatically return. Also we can use multi line. we need to just use {}. like const sum = (a,b) => {c=a+b; return c}; if you use third bracket you need to use return. under forEach() function we use arrow function it is more convenient.

#### 4) How does destructuring assignment work in ES6?
Answer: Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. It provides a cleaner and more convenient way to extract data.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer: Template literals are a feature in ES6 that allow us to create strings with embedded expressions and multi-line capabilities. They are enclosed by backticks (``) instead of single or double quotes. It is a powerful tools for show data dynamically. But in string concatenation we can not show data dynamically when we try to use it creates issues.


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```



## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content