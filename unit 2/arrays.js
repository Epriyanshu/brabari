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
    console.log(`QUESTION ${number}: ${text}`);
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
// ARRAY ACCESS AND LENGTH
// ============================================================

function question1() {

    questionTitle(1, "Array Access and Length");

    let fruits = [
        "Mango",
        "Apple",
        "Banana",
        "Orange",
        "Grapes"
    ];

    console.log("Original array:");
    console.log(fruits);


    // a) Second fruit

    console.log("\na) Second fruit:");
    console.log(fruits[1]);


    // b) Last fruit

    console.log("\nb) Last fruit:");
    console.log(fruits[fruits.length - 1]);


    // c) Length

    console.log("\nc) Length of array:");
    console.log(fruits.length);


    // d) Modify third element

    fruits[2] = "Watermelon";

    console.log("\nd) Updated array:");
    console.log(fruits);


    nextStep();
}


// ============================================================
// QUESTION 2
// ARRAY REFERENCES AND SLICE
// ============================================================

function question2() {

    questionTitle(2, "Understanding Array References");


    // --------------------------------------------------------
    // Part 1
    // --------------------------------------------------------

    let arr1 = [10, 20, 30, 40];

    let arr2 = arr1;

    arr2[1] = 99;


    console.log("PART 1:");

    console.log("\narr1:");
    console.log(arr1);

    console.log("\narr2:");
    console.log(arr2);


    console.log(
        "\nExplanation:"
    );

    console.log(
        "arr1 and arr2 refer to the same array in memory."
    );

    console.log(
        "Therefore, modifying arr2 also changes arr1."
    );


    // --------------------------------------------------------
    // Part 2
    // --------------------------------------------------------

    let arr3 = arr1.slice();

    arr3[arr3.length - 1] = 88;


    console.log("\nPART 2:");

    console.log("\narr1:");
    console.log(arr1);

    console.log("\narr2:");
    console.log(arr2);

    console.log("\narr3:");
    console.log(arr3);


    console.log(
        "\nExplanation:"
    );

    console.log(
        "slice() creates a new array, so changing arr3 does not change arr1 or arr2."
    );

    console.log(
        "arr1 and arr2 still reference the same original array."
    );


    nextStep();
}


// ============================================================
// QUESTION 3
// BASIC ARRAY METHODS
// ============================================================

function question3() {

    questionTitle(3, "Basic Array Methods");

    let numbers = [
        12,
        15,
        20,
        25,
        30
    ];


    console.log("Original array:");
    console.log(numbers);


    // a) push()

    numbers.push(35);

    console.log("\na) After push(35):");
    console.log(numbers);


    // b) pop()

    let removed = numbers.pop();

    console.log("\nb) Removed using pop():");
    console.log(removed);

    console.log("Array after pop():");
    console.log(numbers);


    // c) indexOf()

    let position = numbers.indexOf(20);

    console.log("\nc) Position of 20:");
    console.log(position);


    nextStep();
}


// ============================================================
// QUESTION 4
// EXTRACT MIDDLE THREE COLORS
// ============================================================

function question4() {

    questionTitle(4, "Working with Array Methods");

    let colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "black"
    ];


    console.log("Original array:");
    console.log(colors);


    // Middle three:
    // green, yellow, purple

    let middleColors = colors.slice(2, 5);


    console.log("\nMiddle three colors:");
    console.log(middleColors);


    console.log(
        "\nDoes slice() change the original array?"
    );

    console.log("No.");


    console.log(
        "slice() returns a new array and does not modify the original array."
    );


    console.log("\nOriginal array after slice():");
    console.log(colors);


    nextStep();
}


// ============================================================
// QUESTION 5
// INSERT AND REMOVE ELEMENTS
// ============================================================

function question5() {

    questionTitle(5, "Insert and Remove Elements");

    let items = [
        "pen",
        "pencil",
        "eraser",
        "scale",
        "sharpener"
    ];


    console.log("Original array:");
    console.log(items);


    // Remove eraser and scale
    // Their starting index is 2
    // Remove 2 elements

    items.splice(2, 2);


    console.log("\nAfter removing eraser and scale:");
    console.log(items);


    // Insert marker and ruler
    // At the same position where removed items existed

    items.splice(
        2,
        0,
        "marker",
        "ruler"
    );


    console.log(
        "\nAfter inserting marker and ruler:"
    );

    console.log(items);


    nextStep();
}


// ============================================================
// QUESTION 6
// REPLACE VALUES IN ARRAY
// ============================================================

function question6() {

    questionTitle(6, "Replace Values in an Array");

    let scores = [
        12,
        25,
        37,
        48,
        59,
        63,
        77
    ];


    console.log("Original scores:");
    console.log(scores);


    // --------------------------------------------------------
    // a) Replace last three values with 0
    // --------------------------------------------------------

    scores.splice(
        scores.length - 3,
        3,
        0,
        0,
        0
    );


    console.log(
        "\na) Last three values replaced with 0:"
    );

    console.log(scores);


    // --------------------------------------------------------
    // b) Overwrite entire array with N/A
    // --------------------------------------------------------

    scores.fill("N/A");


    console.log(
        '\nb) Entire array overwritten with "N/A":'
    );

    console.log(scores);


    nextStep();
}


// ============================================================
// QUESTION 7
// FILTERING DATA
// ============================================================

function question7() {

    questionTitle(7, "Filtering Data from Arrays");

    let numbers = [
        11,
        22,
        35,
        42,
        59,
        60,
        73,
        88
    ];


    console.log("Original array:");
    console.log(numbers);


    // --------------------------------------------------------
    // a) Numbers >= 50
    // --------------------------------------------------------

    let greaterThanOrEqual50 = numbers.filter(
        function (number) {
            return number >= 50;
        }
    );


    console.log(
        "\na) Numbers greater than or equal to 50:"
    );

    console.log(greaterThanOrEqual50);


    // --------------------------------------------------------
    // b) Even number function
    // --------------------------------------------------------

    function isEven(number) {
        return number % 2 === 0;
    }


    let evenNumbers = numbers.filter(isEven);


    console.log(
        "\nb) Even numbers:"
    );

    console.log(evenNumbers);


    nextStep();
}


// ============================================================
// QUESTION 8
// LOOP THROUGH NESTED ARRAYS
// ============================================================

function question8() {

    questionTitle(8, "Looping Through Nested Arrays");


    let cube = [
        [
            [1, 2, 3],
            [4, 5, 6]
        ],
        [
            [7, 8, 9],
            [10, 11, 12]
        ]
    ];


    console.log("Nested array:");
    console.log(cube);


    console.log("\nEach value:");

    for (let i = 0; i < cube.length; i++) {

        for (let j = 0; j < cube[i].length; j++) {

            for (
                let k = 0;
                k < cube[i][j].length;
                k++
            ) {

                console.log(
                    cube[i][j][k]
                );
            }
        }
    }


    nextStep();
}


// ============================================================
// RUN ALL QUESTIONS
// ============================================================

function runAll() {

    title("JAVASCRIPT ARRAYS ASSIGNMENT - ALL QUESTIONS");


    // ========================================================
    // Q1
    // ========================================================

    console.log("\nQUESTION 1: Array Access and Length");

    let fruits = [
        "Mango",
        "Apple",
        "Banana",
        "Orange",
        "Grapes"
    ];

    console.log("Second fruit:", fruits[1]);

    console.log(
        "Last fruit:",
        fruits[fruits.length - 1]
    );

    console.log(
        "Array length:",
        fruits.length
    );

    fruits[2] = "Watermelon";

    console.log(
        "Updated array:",
        fruits
    );


    // ========================================================
    // Q2
    // ========================================================

    console.log(
        "\nQUESTION 2: Understanding Array References"
    );

    let arr1 = [
        10,
        20,
        30,
        40
    ];

    let arr2 = arr1;

    arr2[1] = 99;

    console.log("arr1:", arr1);
    console.log("arr2:", arr2);

    let arr3 = arr1.slice();

    arr3[arr3.length - 1] = 88;

    console.log("arr1:", arr1);
    console.log("arr2:", arr2);
    console.log("arr3:", arr3);


    // ========================================================
    // Q3
    // ========================================================

    console.log(
        "\nQUESTION 3: Basic Array Methods"
    );

    let methodNumbers = [
        12,
        15,
        20,
        25,
        30
    ];

    methodNumbers.push(35);

    console.log(
        "After push:",
        methodNumbers
    );

    let removed = methodNumbers.pop();

    console.log(
        "Removed:",
        removed
    );

    console.log(
        "Position of 20:",
        methodNumbers.indexOf(20)
    );


    // ========================================================
    // Q4
    // ========================================================

    console.log(
        "\nQUESTION 4: Working with Array Methods"
    );

    let colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "black"
    ];

    let middleColors = colors.slice(2, 5);

    console.log(
        "Middle three:",
        middleColors
    );

    console.log(
        "Original colors:",
        colors
    );


    // ========================================================
    // Q5
    // ========================================================

    console.log(
        "\nQUESTION 5: Insert and Remove Elements"
    );

    let items = [
        "pen",
        "pencil",
        "eraser",
        "scale",
        "sharpener"
    ];

    items.splice(2, 2);

    console.log(
        "After removal:",
        items
    );

    items.splice(
        2,
        0,
        "marker",
        "ruler"
    );

    console.log(
        "After insertion:",
        items
    );


    // ========================================================
    // Q6
    // ========================================================

    console.log(
        "\nQUESTION 6: Replace Values"
    );

    let scores = [
        12,
        25,
        37,
        48,
        59,
        63,
        77
    ];

    scores.splice(
        scores.length - 3,
        3,
        0,
        0,
        0
    );

    console.log(
        "Last three replaced:",
        scores
    );

    scores.fill("N/A");

    console.log(
        "Entire array:",
        scores
    );


    // ========================================================
    // Q7
    // ========================================================

    console.log(
        "\nQUESTION 7: Filtering Data"
    );

    let numbers = [
        11,
        22,
        35,
        42,
        59,
        60,
        73,
        88
    ];

    let greaterThanOrEqual50 =
        numbers.filter(
            function (number) {
                return number >= 50;
            }
        );

    console.log(
        "Numbers >= 50:",
        greaterThanOrEqual50
    );


    function isEven(number) {
        return number % 2 === 0;
    }

    let evenNumbers =
        numbers.filter(isEven);

    console.log(
        "Even numbers:",
        evenNumbers
    );


    // ========================================================
    // Q8
    // ========================================================

    console.log(
        "\nQUESTION 8: Nested Arrays"
    );

    let cube = [
        [
            [1, 2, 3],
            [4, 5, 6]
        ],
        [
            [7, 8, 9],
            [10, 11, 12]
        ]
    ];

    for (let i = 0; i < cube.length; i++) {

        for (let j = 0; j < cube[i].length; j++) {

            for (
                let k = 0;
                k < cube[i][j].length;
                k++
            ) {

                console.log(
                    cube[i][j][k]
                );
            }
        }
    }


    nextStep();
}


// ============================================================
// MAIN MENU
// ============================================================

console.log("\n");
line();
console.log(" JAVASCRIPT ARRAYS ASSIGNMENT");
line();

console.log("\nSelect what you want to run:");

console.log(
    "1 → Section 1, Question 1: Array Access and Length"
);

console.log(
    "2 → Section 1, Question 2: Array References"
);

console.log(
    "3 → Section 2, Question 1: Basic Array Methods"
);

console.log(
    "4 → Section 2, Question 2: Middle Three Colors"
);

console.log(
    "5 → Section 2, Question 3: Insert and Remove"
);

console.log(
    "6 → Section 3, Question 1: Replace Values"
);

console.log(
    "7 → Section 3, Question 2: Filtering"
);

console.log(
    "8 → Section 3, Question 3: Nested Arrays"
);

console.log("\nall → Run all questions");


rl.question(
    "\nEnter question number: ",
    function (choice) {

        let selected =
            choice.trim().toLowerCase();


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

            case "all":
                runAll();
                break;

            default:

                console.log(
                    "\nInvalid choice."
                );

                console.log(
                    "Please enter 1 to 8 or all."
                );

                rl.close();
        }
    }
);