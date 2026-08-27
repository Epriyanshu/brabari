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

function taskTitle(number, text) {
    console.log("\n");
    console.log(`TASK ${number}: ${text}`);
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
// TASK 1
// DYNAMIC PROPERTY ACCESS
// ============================================================

function task1() {

    taskTitle(1, "Dynamic Property Access");


    const user = {
        username: "srija_dev",
        email: "srija@example.com",
        city: "Hyderabad"
    };


    console.log("Available details:");
    console.log("username");
    console.log("email");
    console.log("city");


    rl.question(
        "\nEnter the detail you want: ",
        function (detail) {

            detail = detail.trim().toLowerCase();


            // Dynamic property access using bracket notation

            if (
                Object.prototype.hasOwnProperty.call(
                    user,
                    detail
                )
            ) {

                console.log(
                    `Value: ${user[detail]}`
                );

            } else {

                console.log(
                    "Detail not available"
                );
            }


            nextStep();
        }
    );
}


// ============================================================
// TASK 2
// OBJECT TRANSFORMATION
// ============================================================

function task2() {

    taskTitle(2, "Object Transformation");


    const marks = {
        math: 70,
        english: 65,
        science: 80
    };


    const updatedMarks = {};


    // Increase every mark by 5

    for (const subject in marks) {

        updatedMarks[subject] =
            marks[subject] + 5;
    }


    console.log(
        "Original marks:"
    );

    console.log(marks);


    console.log(
        "\nThe values of updatedMarks are:"
    );

    console.log(updatedMarks);


    console.log(
        `\nFormatted Output: { math: ${updatedMarks.math}, english: ${updatedMarks.english}, science: ${updatedMarks.science} }`
    );


    nextStep();
}


// ============================================================
// TASK 3
// OBJECT PROPERTY MANIPULATION
// ============================================================

function task3() {

    taskTitle(3, "Object Property Manipulation");


    const book = {
        title: "The Mystery Box",
        author: "A. Writer",
        publishedYear: 2010,
        isAvailable: true
    };


    console.log("Original book object:");
    console.log(book);


    // Change title

    book.title = "The secret key";


    // Add genre

    book.genre = "Thriller";


    // Remove isAvailable

    delete book.isAvailable;


    // Remove author using bracket notation

    delete book["author"];


    console.log(
        "\nUpdated book object:"
    );

    console.log(book);


    nextStep();
}


// ============================================================
// TASK 4
// PRODUCT OBJECT WITH METHODS
// ============================================================

function task4() {

    taskTitle(4, "Product Object with Methods");


    const product = {

        name: "Laptop",

        price: 1000,

        discount: 10,


        calculateFinalPrice() {

            return this.price -
                (
                    this.price *
                    (this.discount / 100)
                );
        },


        updateDiscount(newDiscount) {

            this.discount = newDiscount;

            console.log(
                `Final price after new discount is: ${this.calculateFinalPrice()}`
            );
        }
    };


    console.log(
        "Product:"
    );

    console.log(product);


    console.log(
        "\nInitial final price:"
    );

    console.log(
        product.calculateFinalPrice()
    );


    console.log(
        "\nUpdating discount to 20%..."
    );

    product.updateDiscount(20);


    console.log(
        "\nUpdated product:"
    );

    console.log(product);


    nextStep();
}


// ============================================================
// RUN ALL TASKS
// ============================================================

function runAll() {

    title("JAVASCRIPT OBJECTS ASSIGNMENT - ALL TASKS");


    // ========================================================
    // TASK 1
    // ========================================================

    console.log(
        "\nTASK 1: Dynamic Property Access"
    );

    const user = {
        username: "srija_dev",
        email: "srija@example.com",
        city: "Hyderabad"
    };

    rl.question(
        "Enter detail for Task 1: ",
        function (detail) {

            detail = detail.trim().toLowerCase();


            if (
                Object.prototype.hasOwnProperty.call(
                    user,
                    detail
                )
            ) {

                console.log(
                    `Value: ${user[detail]}`
                );

            } else {

                console.log(
                    "Detail not available"
                );
            }


            // =================================================
            // TASK 2
            // =================================================

            console.log(
                "\nTASK 2: Object Transformation"
            );

            const marks = {
                math: 70,
                english: 65,
                science: 80
            };

            const updatedMarks = {};

            for (const subject in marks) {

                updatedMarks[subject] =
                    marks[subject] + 5;
            }

            console.log(
                "The values of updatedMarks are:"
            );

            console.log(updatedMarks);


            // =================================================
            // TASK 3
            // =================================================

            console.log(
                "\nTASK 3: Object Property Manipulation"
            );

            const book = {
                title: "The Mystery Box",
                author: "A. Writer",
                publishedYear: 2010,
                isAvailable: true
            };


            book.title = "The secret key";

            book.genre = "Thriller";

            delete book.isAvailable;

            delete book["author"];


            console.log(
                "Updated book:"
            );

            console.log(book);


            // =================================================
            // TASK 4
            // =================================================

            console.log(
                "\nTASK 4: Product Object with Methods"
            );

            const product = {

                name: "Laptop",

                price: 1000,

                discount: 10,


                calculateFinalPrice() {

                    return this.price -
                        (
                            this.price *
                            (this.discount / 100)
                        );
                },


                updateDiscount(newDiscount) {

                    this.discount = newDiscount;

                    console.log(
                        `Final price after new discount is: ${this.calculateFinalPrice()}`
                    );
                }
            };


            console.log(
                "Initial final price:",
                product.calculateFinalPrice()
            );


            product.updateDiscount(20);


            console.log(
                "Updated product:"
            );

            console.log(product);


            nextStep();
        }
    );
}


// ============================================================
// MAIN MENU
// ============================================================

console.log("\n");
line();
console.log(" JAVASCRIPT OBJECTS PRACTICE ASSIGNMENT");
line();

console.log("\nSelect what you want to run:");

console.log(
    "1 → Task 1: Dynamic Property Access"
);

console.log(
    "2 → Task 2: Object Transformation"
);

console.log(
    "3 → Task 3: Object Property Manipulation"
);

console.log(
    "4 → Task 4: Product Object with Methods"
);

console.log(
    "\nall → Run all tasks"
);


rl.question(
    "\nEnter task number: ",
    function (choice) {

        const selected =
            choice.trim().toLowerCase();


        switch (selected) {

            case "1":
                task1();
                break;

            case "2":
                task2();
                break;

            case "3":
                task3();
                break;

            case "4":
                task4();
                break;

            case "all":
                runAll();
                break;

            default:

                console.log(
                    "\nInvalid choice."
                );

                console.log(
                    "Please enter 1, 2, 3, 4 or all."
                );

                rl.close();
        }
    }
);