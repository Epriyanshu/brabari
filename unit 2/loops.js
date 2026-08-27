
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


// ============================================================
// QUESTION 1
// FIZZBUZZ
// ============================================================

function question1() {

    questionTitle(1, "FizzBuzz Problem");

    for (let i = 1; i <= 50; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

    nextStep();
}


// ============================================================
// QUESTION 2
// GCD
// ============================================================

function question2() {

    questionTitle(2, "Greatest Common Divisor (GCD)");

    rl.question("Enter num1: ", function (input1) {

        let num1 = Number(input1);

        rl.question("Enter num2: ", function (input2) {

            let num2 = Number(input2);

            if (
                !Number.isInteger(num1) ||
                !Number.isInteger(num2) ||
                num1 <= 0 ||
                num2 <= 0
            ) {

                console.log("Please enter two positive integers.");
                nextStep();
                return;
            }

            let gcd = 1;

            for (
                let i = 1;
                i <= Math.min(num1, num2);
                i++
            ) {

                if (num1 % i === 0 && num2 % i === 0) {
                    gcd = i;
                }
            }

            console.log(
                `The GCD of ${num1} and ${num2} is ${gcd} `
            );

            nextStep();
        });
    });
}


// ============================================================
// QUESTION 3
// SUM OF MULTIPLES
// ============================================================

function question3() {

    questionTitle(3, "Sum of Multiples");

    let sum = 0;

    for (let i = 1; i < 50; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log(
        `The sum of all multiples of 3 and 5 below 50 is ${sum} `
    );

    nextStep();
}


// ============================================================
// QUESTION 4
// PATTERN PRINTING
// ============================================================

function question4() {

    questionTitle(4, "Pattern Printing - Nested Loops");


    // --------------------------------------------------------
    // Pattern 1
    // --------------------------------------------------------

    console.log("\nPattern 1:");

    for (let i = 5; i >= 1; i--) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row);
    }


    // --------------------------------------------------------
    // Pattern 2 - Floyd's Triangle
    // --------------------------------------------------------

    console.log("\nPattern 2 - Floyd's Triangle:");

    let number = 1;

    for (let i = 1; i <= 5; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += number + " ";
            number++;
        }

        console.log(row);
    }


    // --------------------------------------------------------
    // Pattern 3
    // --------------------------------------------------------

    console.log("\nPattern 3:");

    number = 1;

    for (let i = 5; i >= 1; i--) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += number + " ";
            number++;
        }

        console.log(row);
    }


    // --------------------------------------------------------
    // Pattern 4
    // --------------------------------------------------------

    console.log("\nPattern 4:");

    for (let i = 1; i <= 5; i++) {

        let row = "";

        let outerSpaces = 5 - i;

        for (let j = 1; j <= outerSpaces; j++) {
            row += " ";
        }

        let stars = (2 * i) - 1;

        for (let j = 1; j <= stars; j++) {
            row += "*";
        }

        console.log(row);
    }


    // --------------------------------------------------------
    // Pattern 5
    // --------------------------------------------------------

    console.log("\nPattern 5:");

    for (let i = 1; i <= 5; i++) {

        let row = "";

        for (let j = 1; j <= 5 - i; j++) {
            row += " ";
        }

        for (let j = 1; j <= (2 * i) - 1; j++) {
            row += "*";
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// QUESTION 5
// ADVANCED LOOP CONDITIONS
// ============================================================

function question5() {

    questionTitle(5, "Advanced Loop Conditions");

    for (let i = 1; i <= 1000; i++) {

        let result = "";

        if (i % 2 === 0) {
            result += "Foo";
        }

        if (i % 3 === 0) {
            result += "Fizz";
        }

        if (i % 5 === 0) {
            result += "Buzz";
        }

        if (i % 7 === 0) {
            result += "Bar";
        }

        if (result === "") {
            console.log(i);
        }
        else {
            console.log(result);
        }
    }

    nextStep();
}


// ============================================================
// TASK 1
// HELLO WORLD 10 TIMES
// ============================================================

function task1() {

    questionTitle(6, 'Print "Hello World" 10 Times');

    for (let i = 1; i <= 10; i++) {
        console.log("Hello World");
    }

    nextStep();
}


// ============================================================
// TASK 2
// PRINT 10, 20, 30, 40, 50
// ============================================================

function task2() {

    questionTitle(7, "Print Multiples of 10");

    for (let i = 10; i <= 50; i += 10) {
        console.log(i);
    }

    nextStep();
}


// ============================================================
// TASK 3
// LET SCOPE
// ============================================================

function task3() {

    questionTitle(8, "Predict Output - let");

    console.log("Output inside the loop:");

    for (let i = 0; i < 5; i++) {

        const name = "Sindhura";

        console.log(i);
    }

    console.log(
        '\nconsole.log(i) outside the loop causes: ReferenceError'
    );

    console.log(
        "Reason: let is block-scoped, so i exists only inside the for loop."
    );

    nextStep();
}


// ============================================================
// TASK 4
// VAR SCOPE
// ============================================================

function task4() {

    questionTitle(9, "Predict Output - var");

    console.log("Output:");

    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);

    console.log(
        "\nFinal output: 0 1 2 3 4 5"
    );

    console.log(
        "Reason: var is function-scoped, so i remains accessible after the loop."
    );

    nextStep();
}


// ============================================================
// TASK 5
// MULTIPLICATION TABLE OF 5
// ============================================================

function task5() {

    questionTitle(10, "Multiplication Table of 5");

    for (let i = 1; i <= 5; i++) {

        console.log(`5 x ${i} = ${5 * i} `);
    }

    nextStep();
}


// ============================================================
// TASK 6
// FIVE STARS
// ============================================================

function task6() {

    questionTitle(11, "Five Stars");

    let row = "";

    for (let i = 1; i <= 5; i++) {
        row += "*";
    }

    console.log(row);

    nextStep();
}


// ============================================================
// TASK 7
// INCREASING STAR PATTERN
// ============================================================

function task7() {

    questionTitle(12, "Increasing Star Pattern");

    for (let i = 1; i <= 4; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 8
// 4 x 4 STAR PATTERN
// ============================================================

function task8() {

    questionTitle(13, "4 x 4 Star Pattern");

    for (let i = 1; i <= 4; i++) {

        let row = "";

        for (let j = 1; j <= 4; j++) {
            row += "*";
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 9
// NUMBER PATTERN 1 TO 8
// ============================================================

function task9() {

    questionTitle(14, "Number Pattern 1 to 8");

    for (let i = 1; i <= 8; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j;
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 10
// REVERSE NUMBER PATTERN
// ============================================================

function task10() {

    questionTitle(15, "Reverse Number Pattern");

    for (let i = 1; i <= 9; i++) {

        let row = "";

        for (let j = 9; j >= 10 - i; j--) {
            row += j;
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 11
// DECREASING NUMBER PATTERN
// ============================================================

function task11() {

    questionTitle(16, "Decreasing Number Pattern");

    for (let i = 5; i >= 1; i--) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j;
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 12
// 1 AND 8 PATTERN
// ============================================================

function task12() {

    questionTitle(17, "1 and 8 Pattern");

    for (let i = 1; i <= 5; i++) {

        let row = "";

        let ones = 5 - i;
        let eights = i;

        for (let j = 1; j <= ones; j++) {
            row += "1";
        }

        for (let j = 1; j <= eights; j++) {
            row += "8";
        }

        console.log(row);
    }

    nextStep();
}


// ============================================================
// TASK 13
// SPECIAL ARITHMETIC PATTERN
// ============================================================

function task13() {

    questionTitle(18, "Special Arithmetic Pattern");

    let leftNumber = 0;

    for (let i = 1; i <= 9; i++) {

        let rightNumber = 9 - i;

        let result = leftNumber * 9 + rightNumber;

        console.log(
            `${leftNumber} * 9 + ${rightNumber} = ${result} `
        );

        leftNumber = leftNumber * 10 + (10 - i);
    }

    nextStep();
}


// ============================================================
// TASK 14
// SPECIAL 123 PATTERN
// ============================================================

function task14() {

    questionTitle(19, "Special 123 Arithmetic Pattern");

    let number = 0;

    for (let i = 1; i <= 9; i++) {

        number = number * 10 + i;

        let result = number * 8 + i;

        console.log(
            `${number} x 8 + ${i} = ${result} `
        );
    }

    nextStep();
}


// ============================================================
// TASK 15
// THREE COLUMN NUMBER PATTERN
// ============================================================

function task15() {

    questionTitle(20, "Three Column Number Pattern");

    for (let i = 1; i <= 6; i++) {

        let first = i;
        let second = 10 - i;
        let third = (i - 1) * 2;

        console.log(
            `${first} ${second} ${third} `
        );
    }

    nextStep();
}


// ============================================================
// RUN ALL
// ============================================================

function runAll() {

    title("ALL QUESTIONS");

    console.log("\nSECTION 1 - PROGRAMMING QUESTIONS");

    // Q1
    console.log("\n1. FizzBuzz");

    for (let i = 1; i <= 50; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }


    // Q2
    console.log("\n2. GCD");

    rl.question("Enter num1 for GCD: ", function (input1) {

        let num1 = Number(input1);

        rl.question("Enter num2 for GCD: ", function (input2) {

            let num2 = Number(input2);

            let gcd = 1;

            for (
                let i = 1;
                i <= Math.min(num1, num2);
                i++
            ) {

                if (num1 % i === 0 && num2 % i === 0) {
                    gcd = i;
                }
            }

            console.log(
                `The GCD of ${num1} and ${num2} is ${gcd} `
            );


            // Q3
            console.log("\n3. Sum of Multiples");

            let sum = 0;

            for (let i = 1; i < 50; i++) {

                if (i % 3 === 0 || i % 5 === 0) {
                    sum += i;
                }
            }

            console.log(
                `The sum of all multiples of 3 and 5 below 50 is ${sum} `
            );


            // Q4
            console.log("\n4. Pattern Printing");

            console.log("\nPattern 1:");

            for (let i = 5; i >= 1; i--) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += "* ";
                }

                console.log(row);
            }


            console.log("\nPattern 2:");

            let number = 1;

            for (let i = 1; i <= 5; i++) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += number + " ";
                    number++;
                }

                console.log(row);
            }


            console.log("\nPattern 3:");

            number = 1;

            for (let i = 5; i >= 1; i--) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += number + " ";
                    number++;
                }

                console.log(row);
            }


            console.log("\nPattern 4:");

            for (let i = 1; i <= 5; i++) {

                let row = "";

                for (let j = 1; j <= 5 - i; j++) {
                    row += " ";
                }

                for (let j = 1; j <= (2 * i) - 1; j++) {
                    row += "*";
                }

                console.log(row);
            }


            console.log("\nPattern 5:");

            for (let i = 1; i <= 5; i++) {

                let row = "";

                for (let j = 1; j <= 5 - i; j++) {
                    row += " ";
                }

                for (let j = 1; j <= (2 * i) - 1; j++) {
                    row += "*";
                }

                console.log(row);
            }


            // Q5
            console.log("\n5. Advanced Loop Conditions");

            for (let i = 1; i <= 1000; i++) {

                let result = "";

                if (i % 2 === 0) result += "Foo";
                if (i % 3 === 0) result += "Fizz";
                if (i % 5 === 0) result += "Buzz";
                if (i % 7 === 0) result += "Bar";

                console.log(result === "" ? i : result);
            }


            // SECTION 2
            console.log("\n\nSECTION 2 - WRITTEN & CONCEPTUAL TASKS");


            // Task 1
            console.log("\nTask 1:");

            for (let i = 1; i <= 10; i++) {
                console.log("Hello World");
            }


            // Task 2
            console.log("\nTask 2:");

            for (let i = 10; i <= 50; i += 10) {
                console.log(i);
            }


            // Task 3
            console.log("\nTask 3:");

            for (let i = 0; i < 5; i++) {
                const name = "Sindhura";
                console.log(i);
            }

            console.log(
                "Outside loop: ReferenceError because let is block-scoped."
            );


            // Task 4
            console.log("\nTask 4:");

            for (var i = 0; i < 5; i++) {
                console.log(i);
            }

            console.log(i);


            // Task 5
            console.log("\nTask 5:");

            for (let i = 1; i <= 5; i++) {
                console.log(`5 x ${i} = ${5 * i} `);
            }


            // Task 6
            console.log("\nTask 6:");

            let stars = "";

            for (let i = 1; i <= 5; i++) {
                stars += "*";
            }

            console.log(stars);


            // Task 7
            console.log("\nTask 7:");

            for (let i = 1; i <= 4; i++) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += "*";
                }

                console.log(row);
            }


            // Task 8
            console.log("\nTask 8:");

            for (let i = 1; i <= 4; i++) {

                let row = "";

                for (let j = 1; j <= 4; j++) {
                    row += "*";
                }

                console.log(row);
            }


            // Task 9
            console.log("\nTask 9:");

            for (let i = 1; i <= 8; i++) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += j;
                }

                console.log(row);
            }


            // Task 10
            console.log("\nTask 10:");

            for (let i = 1; i <= 9; i++) {

                let row = "";

                for (let j = 9; j >= 10 - i; j--) {
                    row += j;
                }

                console.log(row);
            }


            // Task 11
            console.log("\nTask 11:");

            for (let i = 5; i >= 1; i--) {

                let row = "";

                for (let j = 1; j <= i; j++) {
                    row += j;
                }

                console.log(row);
            }


            // Task 12
            console.log("\nTask 12:");

            for (let i = 1; i <= 5; i++) {

                let row = "";

                for (let j = 1; j <= 5 - i; j++) {
                    row += "1";
                }

                for (let j = 1; j <= i; j++) {
                    row += "8";
                }

                console.log(row);
            }


            // Task 13
            console.log("\nTask 13:");

            let leftNumber = 0;

            for (let i = 1; i <= 9; i++) {

                let rightNumber = 9 - i;

                let result = leftNumber * 9 + rightNumber;

                console.log(
                    `${leftNumber} * 9 + ${rightNumber} = ${result} `
                );

                leftNumber =
                    leftNumber * 10 + (10 - i);
            }


            // Task 14
            console.log("\nTask 14:");

            number = 0;

            for (let i = 1; i <= 9; i++) {

                number = number * 10 + i;

                let result = number * 8 + i;

                console.log(
                    `${number} x 8 + ${i} = ${result} `
                );
            }


            // Task 15
            console.log("\nTask 15:");

            for (let i = 1; i <= 6; i++) {

                console.log(
                    `${i} ${10 - i} ${(i - 1) * 2} `
                );
            }

            nextStep();
        });
    });
}


// ============================================================
// MAIN MENU
// ============================================================

function nextStep() {

    console.log("\n");
    line();
    console.log("Program completed.");
    line();

    rl.close();
}


console.log("\n");
line();
console.log(" JAVASCRIPT LOOPS & ITERATION ASSIGNMENT");
line();

console.log("\nSelect what you want to run:");

console.log("\nSECTION 1");
console.log("1  → FizzBuzz");
console.log("2  → GCD");
console.log("3  → Sum of Multiples");
console.log("4  → Pattern Printing");
console.log("5  → Advanced Loop Conditions");

console.log("\nSECTION 2");
console.log("6  → Hello World 10 Times");
console.log("7  → Print 10 to 50");
console.log("8  → let Scope");
console.log("9  → var Scope");
console.log("10 → Multiplication Table");
console.log("11 → Five Stars");
console.log("12 → Increasing Stars");
console.log("13 → 4x4 Stars");
console.log("14 → Number Pattern");
console.log("15 → Reverse Number Pattern");
console.log("16 → Decreasing Number Pattern");
console.log("17 → 1 and 8 Pattern");
console.log("18 → Special Arithmetic Pattern");
console.log("19 → 123 Arithmetic Pattern");
console.log("20 → Three Column Pattern");

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
            task1();
            break;

        case "7":
            task2();
            break;

        case "8":
            task3();
            break;

        case "9":
            task4();
            break;

        case "10":
            task5();
            break;

        case "11":
            task6();
            break;

        case "12":
            task7();
            break;

        case "13":
            task8();
            break;

        case "14":
            task9();
            break;

        case "15":
            task10();
            break;

        case "16":
            task11();
            break;

        case "17":
            task12();
            break;

        case "18":
            task13();
            break;

        case "19":
            task14();
            break;

        case "20":
            task15();
            break;

        case "all":
            runAll();
            break;

        default:

            console.log("\nInvalid choice.");
            console.log(
                "Enter a number from 1 to 20 or type all."
            );

            rl.close();
    }
});

