// 1. This link contains instructions for completing #1:  https://docs.google.com/document/d/1ACw6ILG_rk66ukkkS_84LWiH63hovGnEOKPNtcvRGlg/edit?usp=sharing

    //A. You will be creating a Random Exercise Generator. 
        //Build an array with the items listed below in it. Then create a function (using regular function syntax) that will select a 
        //specified number of exercises (number will be passed into the function) and prints the random exercises to the console. 
        //It is ok if an exercise appears more than once in the output.

const myArray = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];                

function selectRandomExercises(numberOfExercises) {            
    for (let i = 0; i < numberOfExercises; i++) {
        console.log(myArray[Math.floor(Math.random() * myArray.length)]);
    }            
}

selectRandomExercises(3);

   // B. Once #A is complete, create a function with the same functionality as #1, but this time using an arrow function.

    //Array items: Push-ups, Sit-ups, Bear Crawls, 1 mile run, 60 second plank, Burpees, Jumping Jacks, Squats, Weighted Squats, Inch Worms

//Write your code below this line:

const myArray2 = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];                

const selectRandomExercises2 = numberOfExercises => {            
    for (let i = 0; i < numberOfExercises; i++) {
        console.log(myArray[Math.floor(Math.random() * myArray.length)]);
    }            
}

selectRandomExercises2(5);


// 2. GenBuzz 
//    * Using the requirements below, write a function that prints numbers from 1 to an upper limit.That upper limit should be passed into your function as a parameter.
//    * Create variable `myNumber`
//    * Check that the value of the `myNumber` is of type `number`
//    * If `myNumber` is not a number, print 'This is not a number' to the console.
//    * If value of `myNumber` is a multiple of 3 print 'Gen' to the console
//    * If value of `myNumber` is a multiple of 5 print 'Buzz' to the console
//    * If the value of `myNumber` is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
//    * If the value of `myNumber` is any other number print the value of `myNumber` to the console.
//    * Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9 

//Write your code below this line




// 3. E-Commerce Item list
//     * Using the requiremets below to create a function that takes in an item and prints the price to the console.
//     * Use a swtich statement to print the price of the each item in the store to the console.
//     * Ex. If the value of the variable is 'shoes' then, the statement `Shoes are $50` should be printed to the console. 
//     * Reference: Codecademy lesson 10

//     Items: 
//      * Shoes- $50
//      * Jeans- $25
//      * Hat- $12
//      * Socks- $2
//      * If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code below this line: