
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function printLine() {
    console.log("--------------------------------------------------");
}

function printTitle(title) {
    console.log("\n");
    printLine();
    console.log(title);
    printLine();
}


// ============================================================
// SECTION 1
// COMPARISON & TYPE COERCION
// ============================================================

function runSection1() {

    printTitle("SECTION 1: COMPARISON & TYPE COERCION");


    // --------------------------------------------------------
    // Question 1
    // --------------------------------------------------------

    console.log("\nQuestion 1: Predict the Output\n");

    console.log('"9" > "100"      =', "9" > "100");
    console.log('9 > "100"        =', 9 > "100");
    console.log('"5" == 5 && "5" === 5 =', "5" == 5 && "5" === 5);
    console.log("null == 0        =", null == 0);
    console.log("undefined == null =", undefined == null);


    console.log("\nExplanation:");

    console.log(
        '1. "9" > "100" is true because both values are strings, so JavaScript compares them lexicographically.'
    );

    console.log(
        '2. 9 > "100" is false because "100" is converted to the number 100.'
    );

    console.log(
        '3. "5" == 5 is true because == performs type coercion, but "5" === 5 is false because === checks both value and type.'
    );

    console.log(
        "4. null == 0 is false because null is not loosely equal to 0."
    );

    console.log(
        "5. undefined == null is true because JavaScript specifically treats them as loosely equal."
    );


    // --------------------------------------------------------
    // Question 2
    // --------------------------------------------------------

    console.log("\nQuestion 2: Assignment & Comparison Logic");

    console.log(
        "Correct Answer: C"
    );

    console.log(
        'a =+ b assigns positive b to a. It is equivalent to a = (+b).'
    );


    // --------------------------------------------------------
    // Question 3
    // --------------------------------------------------------

    console.log("\nQuestion 3:");

    let a = 5;

    console.log('a == "5" =', a == "5");

    console.log("Correct Answer: A) true");

}


// ============================================================
// SECTION 2
// LOGICAL OPERATORS
// ============================================================

function runSection2() {

    printTitle("SECTION 2: LOGICAL OPERATORS");


    // --------------------------------------------------------
    // Question 1
    // --------------------------------------------------------

    console.log("\nQuestion 1: Predict the Output\n");

    console.log('0 && "hello" =', 0 && "hello");

    console.log('"world" || 0 =', "world" || 0);

    console.log(
        'null || undefined && "JS" =',
        null || undefined && "JS"
    );

    console.log(
        '" " && 55 && [] && "done" =',
        " " && 55 && [] && "done"
    );


    console.log("\nExplanation:");

    console.log(
        '1. 0 is falsy, so 0 && "hello" returns 0.'
    );

    console.log(
        '2. "world" is truthy, so "world" || 0 returns "world".'
    );

    console.log(
        '3. && has higher precedence than ||, so the expression is null || (undefined && "JS"), resulting in undefined.'
    );

    console.log(
        '4. A non-empty string, 55, and [] are truthy, so the final value "done" is returned.'
    );


    // --------------------------------------------------------
    // Question 2
    // --------------------------------------------------------

    console.log("\nQuestion 2:");

    console.log("true && false =", true && false);

    console.log("Correct Answer: B) false");

}


// ============================================================
// SECTION 3
// ASSIGNMENT, BITWISE OPERATORS & EXPRESSIONS
// ============================================================

function runSection3() {

    printTitle(
        "SECTION 3: ASSIGNMENT, BITWISE OPERATORS & EXPRESSIONS"
    );


    // --------------------------------------------------------
    // Question 1
    // --------------------------------------------------------

    console.log("\nQuestion 1: Rewrite using shorthand operators");

    let x = 10;

    x += 5;
    x -= 3;
    x *= 2;

    console.log("Final value of x =", x);

    console.log("\nShorthand version:");

    console.log("x += 5;");
    console.log("x -= 3;");
    console.log("x *= 2;");

    console.log("Final Output: 24");


    // --------------------------------------------------------
    // Question 2
    // --------------------------------------------------------

    console.log("\nQuestion 2: Bitwise Operators");

    let p = 7;
    let q = 12;
    let r = 5;

    p = p & r;
    q = q | r;
    r = r ^ p;

    console.log("p =", p);
    console.log("q =", q);
    console.log("r =", r);

    console.log("\nFinal Output:");

    console.log(p, q, r);

    console.log("\nCorrect Output: 5 13 0");


    // --------------------------------------------------------
    // Question 3
    // --------------------------------------------------------

    console.log("\nQuestion 3: Expression & Logical Thinking");

    let a = 4;
    let b = "6";
    let c = 2;

    let resultQ3 = a + b * c;

    console.log("a + b * c =", resultQ3);

    console.log("Correct Answer: A) 16");

    console.log(
        'Explanation: Multiplication has higher precedence, so "6" * 2 becomes 12. Then 4 + 12 = 16.'
    );


    // --------------------------------------------------------
    // Question 4
    // --------------------------------------------------------

    console.log("\nQuestion 4:");

    a = 4;
    b = "6";
    c = 2;

    let resultQ4 = (a + b) * c;

    console.log("(a + b) * c =", resultQ4);

    console.log("Correct Answer: A) 92");

    console.log(
        'Explanation: 4 + "6" produces the string "46". Then "46" * 2 converts "46" to 46, resulting in 92.'
    );


    // --------------------------------------------------------
    // Question 5
    // --------------------------------------------------------

    console.log("\nQuestion 5:");

    a = 4;
    b = "6";
    c = 2;

    let resultQ5 = a++ + --c + b;

    console.log("a++ + --c + b =", resultQ5);

    console.log('Correct Answer: B) "56"');

    console.log(
        'Explanation: a++ first returns 4 and then increases a to 5. --c changes c from 2 to 1. Therefore 4 + 1 = 5, and 5 + "6" results in the string "56".'
    );
}


// ============================================================
// RUN SELECTED SECTION
// ============================================================

function runSelectedSection(choice) {

    let input = choice.trim().toLowerCase();

    switch (input) {

        case "1":
        case "section 1":
        case "section1":
            runSection1();
            break;


        case "2":
        case "section 2":
        case "section2":
            runSection2();
            break;


        case "3":
        case "section 3":
        case "section3":
            runSection3();
            break;


        case "all":
            runSection1();
            runSection2();
            runSection3();
            break;


        default:
            console.log("\nInvalid choice.");
            console.log("Please enter:");
            console.log("1  → Section 1");
            console.log("2  → Section 2");
            console.log("3  → Section 3");
            console.log("all → Run all sections");
            break;
    }
}


// ============================================================
// USER INPUT
// ============================================================

console.log("==============================================");
console.log(" JavaScript Operators Assignment");
console.log("==============================================");

console.log("\nSelect what you want to run:");
console.log("1     → Section 1");
console.log("2     → Section 2");
console.log("3     → Section 3");
console.log("all   → Run all sections");

rl.question("\nEnter your choice: ", function (choice) {

    runSelectedSection(choice);

    rl.close();
});
