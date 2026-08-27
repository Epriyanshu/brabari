id = "51qf5x"
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function line() {
    console.log("============================================================");
}

function title(text) {
    console.log("\n");
    line();
    console.log(text);
    line();
}

function questionTitle(number, text) {
    console.log("\n");
    console.log(`QUESTION ${number}: ${text} `);
    console.log("------------------------------------------------------------");
}

function nextStep() {
    console.log("\n");
    line();
    console.log("Program completed.");
    line();
    rl.close();
}


// ============================================================
// QUESTION 1
// RECTANGLE AREA
// ============================================================

function question1() {

    questionTitle(1, "Rectangle Area");

    rl.question("Enter length: ", function (lengthInput) {

        let length = Number(lengthInput);

        rl.question("Enter breadth: ", function (breadthInput) {

            let breadth = Number(breadthInput);


            function rectangleArea(length, breadth) {
                return length * breadth;
            }


            if (
                !Number.isFinite(length) ||
                !Number.isFinite(breadth) ||
                length < 0 ||
                breadth < 0
            ) {

                console.log("Please enter valid positive numbers.");

            } else {

                let area = rectangleArea(length, breadth);

                console.log(
                    `Area of rectangle = ${area} `
                );
            }

            nextStep();
        });
    });
}


// ============================================================
// QUESTION 2
// BUSINESS PROFIT CHECK
// ============================================================

function question2() {

    questionTitle(2, "Business Profit Check");

    rl.question("Enter revenue: ", function (revenueInput) {

        let revenue = Number(revenueInput);

        rl.question("Enter expenses: ", function (expenseInput) {

            let expenses = Number(expenseInput);


            function checkProfit(revenue, expenses) {

                if (revenue > expenses) {
                    return "Business is profitable.";
                }

                else if (revenue === expenses) {
                    return "Business has no profit or loss.";
                }

                else {
                    return "Business is not profitable.";
                }
            }


            if (
                !Number.isFinite(revenue) ||
                !Number.isFinite(expenses)
            ) {

                console.log("Please enter valid numbers.");

            } else {

                console.log(
                    checkProfit(revenue, expenses)
                );
            }

            nextStep();
        });
    });
}


// ============================================================
// QUESTION 3
// CHARACTER CHECKER
// ============================================================

function question3() {

    questionTitle(3, "Character Checker");

    rl.question("Enter one character: ", function (character) {

        if (character.length !== 1) {

            console.log(
                "Please enter exactly one character."
            );

            nextStep();
            return;
        }


        function checkCharacter(character) {

            if (
                character >= "A" &&
                character <= "Z"
            ) {

                return "Capital letter";

            }

            else if (
                character >= "a" &&
                character <= "z"
            ) {

                return "Small letter";

            }

            else {

                return "Not a letter";
            }
        }


        console.log(
            `${character} → ${checkCharacter(character)} `
        );

        nextStep();
    });
}


// ============================================================
// QUESTION 4
// NUMBER OR STRING
// ============================================================

function question4() {

    questionTitle(4, "Number or String");

    rl.question(
        "Enter a value: ",
        function (input) {

            function checkNumberOrString(value) {

                if (typeof value === "number") {
                    return "Number";
                }

                if (typeof value === "string") {
                    return "String";
                }

                return "Neither number nor string";
            }


            // User input arrives as a string.
            // Ask whether they want to test it as a number.

            console.log(
                `Input as entered: ${input} `
            );

            console.log(
                `Type received from readline: ${checkNumberOrString(input)} `
            );


            let numericValue = Number(input);

            if (
                input.trim() !== "" &&
                Number.isFinite(numericValue)
            ) {

                console.log(
                    `After Number conversion: ${checkNumberOrString(numericValue)} `
                );

            }

            nextStep();
        }
    );
}


// ============================================================
// QUESTION 5
// PRIME NUMBER
// ============================================================

function question5() {

    questionTitle(5, "Prime Number");

    rl.question("Enter a positive number: ", function (input) {

        let number = Number(input);


        function isPrime(number) {

            if (!Number.isInteger(number) || number < 2) {
                return false;
            }


            for (
                let i = 2;
                i <= Math.sqrt(number);
                i++
            ) {

                if (number % i === 0) {
                    return false;
                }
            }

            return true;
        }


        if (
            !Number.isInteger(number) ||
            number <= 0
        ) {

            console.log(
                "Please enter a positive integer."
            );

        }

        else if (isPrime(number)) {

            console.log(
                `${number} is a prime number.`
            );

        }

        else {

            console.log(
                `${number} is not a prime number.`
            );
        }

        nextStep();
    });
}


// ============================================================
// QUESTION 6
// TYPE FINDER
// ============================================================

function question6() {

    questionTitle(6, "Type Finder");

    rl.question(
        "Enter a value: ",
        function (input) {

            function getType(value) {
                return typeof value;
            }


            console.log(
                `Value: ${input} `
            );

            console.log(
                `Type: ${getType(input)} `
            );


            nextStep();
        }
    );
}


// ============================================================
// QUESTION 7
// TRIANGLE AREA
// ============================================================

function question7() {

    questionTitle(7, "Triangle Area");

    rl.question("Enter base: ", function (baseInput) {

        let base = Number(baseInput);

        rl.question("Enter height: ", function (heightInput) {

            let height = Number(heightInput);


            function triangleArea(base, height) {
                return (base * height) / 2;
            }


            if (
                !Number.isFinite(base) ||
                !Number.isFinite(height) ||
                base < 0 ||
                height < 0
            ) {

                console.log(
                    "Please enter valid positive numbers."
                );

            } else {

                console.log(
                    `Area of triangle = ${triangleArea(base, height)} `
                );
            }

            nextStep();
        });
    });
}


// ============================================================
// QUESTION 8
// GREATER NUMBER
// ============================================================

function question8() {

    questionTitle(8, "Greater Number");

    rl.question("Enter first number: ", function (input1) {

        let num1 = Number(input1);

        rl.question("Enter second number: ", function (input2) {

            let num2 = Number(input2);


            function greaterNumber(a, b) {

                if (a > b) {
                    return `${a} is greater.`;
                }

                else if (b > a) {
                    return `${b} is greater.`;
                }

                else {
                    return "Both numbers are equal.";
                }
            }


            if (
                !Number.isFinite(num1) ||
                !Number.isFinite(num2)
            ) {

                console.log(
                    "Please enter valid numbers."
                );

            } else {

                console.log(
                    greaterNumber(num1, num2)
                );
            }

            nextStep();
        });
    });
}


// ============================================================
// QUESTION 9
// FUNCTION NAME
// ============================================================

function question9() {

    questionTitle(9, "Function Name");


    function showFunctionName() {

        return showFunctionName.name;
    }


    console.log(
        "Function name:",
        showFunctionName()
    );


    nextStep();
}


// ============================================================
// QUESTION 10
// ARROW FUNCTION
// ============================================================

function question10() {

    questionTitle(10, "Arrow Function - greetUser");


    const greetUser = (name = "Guest") => {
        return `Hello, ${name} !`;
    };


    rl.question(
        "Enter your name (press Enter for Guest): ",
        function (name) {

            if (name.trim() === "") {

                console.log(
                    greetUser()
                );

            } else {

                console.log(
                    greetUser(name)
                );
            }

            console.log("\nExample:");
            console.log(greetUser("Sindhura"));
            console.log(greetUser());

            nextStep();
        }
    );
}


// ============================================================
// QUESTION 11
// CONVERT TO ARROW FUNCTION
// ============================================================

function question11() {

    questionTitle(11, "Convert Function to Arrow Function");


    const isEven = (num) => {
        return num % 2 === 0;
    };


    rl.question(
        "Enter a number: ",
        function (input) {

            let number = Number(input);


            if (!Number.isFinite(number)) {

                console.log(
                    "Please enter a valid number."
                );

            } else {

                console.log(
                    `${number} is even: ${isEven(number)} `
                );
            }


            console.log("\nConverted arrow function:");

            console.log(
                "const isEven = (num) => num % 2 === 0;"
            );


            nextStep();
        }
    );
}


// ============================================================
// QUESTION 12
// CALLBACK FUNCTION
// ============================================================

function question12() {

    questionTitle(12, "Callback Function");


    // Callback functions

    function add(a, b) {
        return a + b;
    }


    function subtract(a, b) {
        return a - b;
    }


    function multiply(a, b) {
        return a * b;
    }


    // Function accepting callback

    function performOperation(a, b, operation) {
        return operation(a, b);
    }


    rl.question("Enter first number: ", function (input1) {

        let a = Number(input1);

        rl.question("Enter second number: ", function (input2) {

            let b = Number(input2);


            if (
                !Number.isFinite(a) ||
                !Number.isFinite(b)
            ) {

                console.log(
                    "Please enter valid numbers."
                );

                nextStep();
                return;
            }


            console.log(
                `Addition: ${performOperation(a, b, add)} `
            );

            console.log(
                `Subtraction: ${performOperation(a, b, subtract)} `
            );

            console.log(
                `Multiplication: ${performOperation(a, b, multiply)} `
            );


            nextStep();
        });
    });
}


// ============================================================
// RUN ALL QUESTIONS
// ============================================================

function runAll() {

    title("ALL FUNCTIONS QUESTIONS");


    // --------------------------------------------------------
    // Q1
    // --------------------------------------------------------

    function rectangleArea(length, breadth) {
        return length * breadth;
    }

    console.log(
        "\nQ1 Example: Rectangle Area =",
        rectangleArea(10, 5)
    );


    // --------------------------------------------------------
    // Q2
    // --------------------------------------------------------

    function checkProfit(revenue, expenses) {

        if (revenue > expenses) {
            return "Business is profitable.";
        }

        else if (revenue === expenses) {
            return "Business has no profit or loss.";
        }

        else {
            return "Business is not profitable.";
        }
    }

    console.log(
        "\nQ2 Example:",
        checkProfit(100000, 70000)
    );


    // --------------------------------------------------------
    // Q3
    // --------------------------------------------------------

    function checkCharacter(character) {

        if (character >= "A" && character <= "Z") {
            return "Capital letter";
        }

        else if (character >= "a" && character <= "z") {
            return "Small letter";
        }

        return "Not a letter";
    }

    console.log(
        "\nQ3 Example:",
        checkCharacter("A")
    );


    // --------------------------------------------------------
    // Q4
    // --------------------------------------------------------

    function checkNumberOrString(value) {

        return typeof value;
    }

    console.log(
        "\nQ4 Number:",
        checkNumberOrString(25)
    );

    console.log(
        "Q4 String:",
        checkNumberOrString("25")
    );


    // --------------------------------------------------------
    // Q5
    // --------------------------------------------------------

    function isPrime(number) {

        if (!Number.isInteger(number) || number < 2) {
            return false;
        }

        for (
            let i = 2;
            i <= Math.sqrt(number);
            i++
        ) {

            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }

    console.log(
        "\nQ5 17 is prime:",
        isPrime(17)
    );


    // --------------------------------------------------------
    // Q6
    // --------------------------------------------------------

    function getType(value) {
        return typeof value;
    }

    console.log(
        "\nQ6 Type:",
        getType("Hello")
    );


    // --------------------------------------------------------
    // Q7
    // --------------------------------------------------------

    function triangleArea(base, height) {
        return (base * height) / 2;
    }

    console.log(
        "\nQ7 Triangle Area:",
        triangleArea(10, 8)
    );


    // --------------------------------------------------------
    // Q8
    // --------------------------------------------------------

    function greaterNumber(a, b) {

        if (a > b) {
            return `${a} is greater.`;
        }

        else if (b > a) {
            return `${b} is greater.`;
        }

        return "Both numbers are equal.";
    }

    console.log(
        "\nQ8:",
        greaterNumber(25, 40)
    );


    // --------------------------------------------------------
    // Q9
    // --------------------------------------------------------

    function showFunctionName() {
        return showFunctionName.name;
    }

    console.log(
        "\nQ9 Function Name:",
        showFunctionName()
    );


    // --------------------------------------------------------
    // Q10
    // --------------------------------------------------------

    const greetUser = (name = "Guest") => {
        return `Hello, ${name} !`;
    };

    console.log(
        "\nQ10:",
        greetUser("Sindhura")
    );

    console.log(
        greetUser()
    );


    // --------------------------------------------------------
    // Q11
    // --------------------------------------------------------

    const isEven = (num) => {
        return num % 2 === 0;
    };

    console.log(
        "\nQ11 10 is even:",
        isEven(10)
    );


    // --------------------------------------------------------
    // Q12
    // --------------------------------------------------------

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function performOperation(a, b, operation) {
        return operation(a, b);
    }

    console.log(
        "\nQ12 Addition:",
        performOperation(5, 3, add)
    );

    console.log(
        "Q12 Subtraction:",
        performOperation(5, 3, subtract)
    );

    console.log(
        "Q12 Multiplication:",
        performOperation(5, 3, multiply)
    );


    nextStep();
}


// ============================================================
// MAIN MENU
// ============================================================

console.log("\n");
line();
console.log(" JAVASCRIPT FUNCTIONS ASSIGNMENT");
line();

console.log("\nSelect what you want to run:");

console.log("1  → Rectangle Area");
console.log("2  → Business Profit Check");
console.log("3  → Character Checker");
console.log("4  → Number or String");
console.log("5  → Prime Number");
console.log("6  → Type Finder");
console.log("7  → Triangle Area");
console.log("8  → Greater Number");
console.log("9  → Function Name");
console.log("10 → Arrow Function");
console.log("11 → Convert to Arrow Function");
console.log("12 → Callback Function");

console.log("\nall → Run all questions");


rl.question("\nEnter question number: ", function (choice) {

    let selected = choice.trim().toLowerCase();


    switch (selected) {

        case "1":
            question1();
            break;

        case "2":
            question2();
            break;

        case "3":
            question3();
            break;

        case "4":
            question4();
            break;

        case "5":
            question5();
            break;

        case "6":
            question6();
            break;

        case "7":
            question7();
            break;

        case "8":
            question8();
            break;

        case "9":
            question9();
            break;

        case "10":
            question10();
            break;

        case "11":
            question11();
            break;

        case "12":
            question12();
            break;

        case "all":
            runAll();
            break;

        default:

            console.log("\nInvalid choice.");
            console.log(
                "Please enter a number from 1 to 12 or type all."
            );

            rl.close();
    }
});
