
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ============================================================
// HELPER FUNCTION
// ============================================================

function line() {
    console.log("==================================================");
}

function title(text) {
    console.log("\n");
    line();
    console.log(text);
    line();
}


// ============================================================
// QUESTION 1
// Maximum Between Three Distinct Numbers
// ============================================================

function question1() {

    title("QUESTION 1: MAXIMUM BETWEEN THREE NUMBERS");

    rl.question("Enter first number: ", function (input1) {

        let num1 = Number(input1);

        rl.question("Enter second number: ", function (input2) {

            let num2 = Number(input2);

            rl.question("Enter third number: ", function (input3) {

                let num3 = Number(input3);

                if (num1 > num2 && num1 > num3) {

                    console.log("Maximum number =", num1);

                } else if (num2 > num1 && num2 > num3) {

                    console.log("Maximum number =", num2);

                } else {

                    console.log("Maximum number =", num3);

                }

                nextStep();
            });
        });
    });
}


// ============================================================
// QUESTION 2
// Leap Year
// ============================================================

function question2() {

    title("QUESTION 2: LEAP YEAR");

    rl.question("Enter a year: ", function (input) {

        let year = Number(input);

        if (
            (year % 400 === 0) ||
            (year % 4 === 0 && year % 100 !== 0)
        ) {

            console.log(year + " is a leap year.");

        } else {

            console.log(year + " is not a leap year.");

        }

        nextStep();
    });
}


// ============================================================
// QUESTION 3
// Even or Odd
// ============================================================

function question3() {

    title("QUESTION 3: EVEN OR ODD");

    rl.question("Enter a number: ", function (input) {

        let number = Number(input);

        if (number % 2 === 0) {

            console.log(number + " is an even number.");

        } else {

            console.log(number + " is an odd number.");

        }

        nextStep();
    });
}


// ============================================================
// QUESTION 4
// Alphabet, Digit or Special Character
// ============================================================

function question4() {

    title("QUESTION 4: CHARACTER CHECK");

    rl.question("Enter a character: ", function (character) {

        // Make sure the user enters exactly one character

        if (character.length !== 1) {

            console.log("Please enter exactly one character.");

            nextStep();
            return;
        }


        // Check alphabet

        if (
            (character >= "A" && character <= "Z") ||
            (character >= "a" && character <= "z")
        ) {

            console.log(character + " is an alphabet.");

        }

        // Check digit

        else if (character >= "0" && character <= "9") {

            console.log(character + " is a digit.");

        }

        // Everything else is special character

        else {

            console.log(character + " is a special character.");

        }

        nextStep();
    });
}


// ============================================================
// QUESTION 5
// Valid Triangle Using Three Angles
// ============================================================

function question5() {

    title("QUESTION 5: VALID TRIANGLE");

    rl.question("Enter first angle: ", function (input1) {

        let angle1 = Number(input1);

        rl.question("Enter second angle: ", function (input2) {

            let angle2 = Number(input2);

            rl.question("Enter third angle: ", function (input3) {

                let angle3 = Number(input3);


                // A valid triangle must:
                // 1. Have all angles greater than 0
                // 2. Have total angle sum equal to 180 degrees

                if (
                    angle1 > 0 &&
                    angle2 > 0 &&
                    angle3 > 0 &&
                    angle1 + angle2 + angle3 === 180
                ) {

                    console.log("The three angles form a valid triangle.");

                } else {

                    console.log("The three angles do not form a valid triangle.");

                }

                nextStep();
            });
        });
    });
}


// ============================================================
// RUN ALL QUESTIONS
// ============================================================

function runAllQuestions() {

    title("ALL PROGRAMMING QUESTIONS");

    console.log("Question 1");
    console.log("Maximum between three numbers");

    rl.question("\nEnter first number: ", function (input1) {

        let num1 = Number(input1);

        rl.question("Enter second number: ", function (input2) {

            let num2 = Number(input2);

            rl.question("Enter third number: ", function (input3) {

                let num3 = Number(input3);

                if (num1 > num2 && num1 > num3) {
                    console.log("Maximum =", num1);
                } else if (num2 > num1 && num2 > num3) {
                    console.log("Maximum =", num2);
                } else {
                    console.log("Maximum =", num3);
                }


                // ------------------------------------------------
                // Question 2
                // ------------------------------------------------

                console.log("\nQuestion 2");
                console.log("Leap Year");

                rl.question("Enter a year: ", function (yearInput) {

                    let year = Number(yearInput);

                    if (
                        year % 400 === 0 ||
                        (year % 4 === 0 && year % 100 !== 0)
                    ) {
                        console.log(year + " is a leap year.");
                    } else {
                        console.log(year + " is not a leap year.");
                    }


                    // ------------------------------------------------
                    // Question 3
                    // ------------------------------------------------

                    console.log("\nQuestion 3");
                    console.log("Even or Odd");

                    rl.question("Enter a number: ", function (numberInput) {

                        let number = Number(numberInput);

                        if (number % 2 === 0) {
                            console.log(number + " is even.");
                        } else {
                            console.log(number + " is odd.");
                        }


                        // ------------------------------------------------
                        // Question 4
                        // ------------------------------------------------

                        console.log("\nQuestion 4");
                        console.log("Alphabet, Digit or Special Character");

                        rl.question(
                            "Enter a character: ",
                            function (character) {

                                if (character.length !== 1) {

                                    console.log(
                                        "Please enter exactly one character."
                                    );

                                } else if (
                                    (character >= "A" &&
                                        character <= "Z") ||
                                    (character >= "a" &&
                                        character <= "z")
                                ) {

                                    console.log(
                                        character + " is an alphabet."
                                    );

                                } else if (
                                    character >= "0" &&
                                    character <= "9"
                                ) {

                                    console.log(
                                        character + " is a digit."
                                    );

                                } else {

                                    console.log(
                                        character +
                                        " is a special character."
                                    );
                                }


                                // ------------------------------------------------
                                // Question 5
                                // ------------------------------------------------

                                console.log("\nQuestion 5");
                                console.log("Valid Triangle");

                                rl.question(
                                    "Enter first angle: ",
                                    function (angleInput1) {

                                        let angle1 =
                                            Number(angleInput1);

                                        rl.question(
                                            "Enter second angle: ",
                                            function (angleInput2) {

                                                let angle2 =
                                                    Number(angleInput2);

                                                rl.question(
                                                    "Enter third angle: ",
                                                    function (angleInput3) {

                                                        let angle3 =
                                                            Number(angleInput3);

                                                        if (
                                                            angle1 > 0 &&
                                                            angle2 > 0 &&
                                                            angle3 > 0 &&
                                                            angle1 +
                                                            angle2 +
                                                            angle3 ===
                                                            180
                                                        ) {

                                                            console.log(
                                                                "The three angles form a valid triangle."
                                                            );

                                                        } else {

                                                            console.log(
                                                                "The three angles do not form a valid triangle."
                                                            );

                                                        }

                                                        nextStep();
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    });
                });
            });
        });
    });
}


// ============================================================
// AFTER QUESTION EXECUTION
// ============================================================

function nextStep() {

    console.log("\n");
    line();
    console.log("Program completed.");
    line();

    rl.close();
}


// ============================================================
// MAIN MENU
// ============================================================

console.log("\n");
line();
console.log(" JAVASCRIPT PROGRAMMING ASSIGNMENT");
line();

console.log("\nSelect a question to run:");
console.log("1     → Maximum between three numbers");
console.log("2     → Leap year");
console.log("3     → Even or odd");
console.log("4     → Alphabet / Digit / Special Character");
console.log("5     → Valid triangle");
console.log("all   → Run all questions");

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

        case "all":
            runAllQuestions();
            break;

        default:

            console.log("\nInvalid choice.");
            console.log("Please enter 1, 2, 3, 4, 5 or all.");

            rl.close();
    }
});

