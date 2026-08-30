// ============================================================
// JAVASCRIPT TASK MANAGER
// ============================================================


// ============================================================
// TASK DATA
// ============================================================

let tasks = [];


// ============================================================
// FUNCTION 1: addTask(title, priority)
// ============================================================

function addTask(title, priority) {

    const newTask = {

        id: tasks.length + 1,

        title: title,

        completed: false,

        priority: priority
    };


    tasks.push(newTask);


    console.log(
        "Task added successfully"
    );


    showToast("Task added successfully");

    renderTasks();
}


// ============================================================
// FUNCTION 2: viewTasks()
// ============================================================

function viewTasks() {

    if (tasks.length === 0) {

        console.log(
            "No tasks available"
        );

        renderEmptyState("No tasks available");

        return;
    }


    console.log("\nAll Tasks:");

    tasks.forEach(function (task) {

        console.log(
            `ID: ${task.id} | ` +
            `Title: ${task.title} | ` +
            `Completed: ${task.completed} | ` +
            `Priority: ${task.priority}`
        );
    });


    renderTasks();
}


// ============================================================
// FUNCTION 3: completeTask(id)
// ============================================================

function completeTask(id) {

    let taskFound = false;


    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].id === id) {

            tasks[i].completed = true;

            taskFound = true;


            console.log(
                "Task completed successfully"
            );

            showToast(
                "Task completed successfully"
            );

            break;
        }
    }


    if (!taskFound) {

        console.log(
            "Task not found"
        );

        showToast(
            "Task not found"
        );
    }


    renderTasks();
}


// ============================================================
// FUNCTION 4: deleteTask(id)
// ============================================================

function deleteTask(id) {

    const oldLength = tasks.length;


    tasks = tasks.filter(function (task) {

        return task.id !== id;
    });


    if (tasks.length < oldLength) {

        console.log(
            "Task deleted successfully"
        );

        showToast(
            "Task deleted successfully"
        );

    } else {

        console.log(
            "Task not found"
        );

        showToast(
            "Task not found"
        );
    }


    renderTasks();
}


// ============================================================
// FUNCTION 5: viewPendingTasks()
// ============================================================

function viewPendingTasks() {

    const pendingTasks = tasks.filter(
        function (task) {

            return task.completed === false;
        }
    );


    if (pendingTasks.length === 0) {

        console.log(
            "No pending tasks"
        );

        renderEmptyState(
            "No pending tasks"
        );

        return;
    }


    console.log("\nPending Tasks:");

    pendingTasks.forEach(function (task) {

        console.log(task);
    });


    renderTaskCollection(
        pendingTasks
    );
}


// ============================================================
// FUNCTION 6: viewCompletedTasks()
// ============================================================

function viewCompletedTasks() {

    const completedTasks = tasks.filter(
        function (task) {

            return task.completed === true;
        }
    );


    if (completedTasks.length === 0) {

        console.log(
            "No completed tasks"
        );

        renderEmptyState(
            "No completed tasks"
        );

        return;
    }


    console.log("\nCompleted Tasks:");

    completedTasks.forEach(function (task) {

        console.log(task);
    });


    renderTaskCollection(
        completedTasks
    );
}


// ============================================================
// FUNCTION 7: searchTask(keyword)
// ============================================================

function searchTask(keyword) {

    const lowerKeyword =
        keyword.toLowerCase();


    const matchingTasks = tasks.filter(
        function (task) {

            return task.title
                .toLowerCase()
                .includes(lowerKeyword);
        }
    );


    if (matchingTasks.length === 0) {

        console.log(
            "No matching task found"
        );

        renderEmptyState(
            "No matching task found"
        );

        return;
    }


    console.log("\nMatching Tasks:");

    matchingTasks.forEach(function (task) {

        console.log(task);
    });


    renderTaskCollection(
        matchingTasks
    );
}


// ============================================================
// FUNCTION 8: updateTask(id, newTitle)
// ============================================================

function updateTask(id, newTitle) {

    let taskFound = false;


    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].id === id) {

            tasks[i].title = newTitle;

            taskFound = true;


            console.log(
                "Task updated successfully"
            );

            showToast(
                "Task updated successfully"
            );

            break;
        }
    }


    if (!taskFound) {

        console.log(
            "Task not found"
        );

        showToast(
            "Task not found"
        );
    }


    renderTasks();
}


// ============================================================
// FUNCTION 9: countTasks()
// ============================================================

function countTasks() {

    const totalTasks =
        tasks.length;


    const completedTasks =
        tasks.filter(function (task) {

            return task.completed === true;

        }).length;


    const pendingTasks =
        tasks.filter(function (task) {

            return task.completed === false;

        }).length;


    console.log(
        `Total tasks: ${totalTasks}`
    );

    console.log(
        `Completed tasks: ${completedTasks}`
    );

    console.log(
        `Pending tasks: ${pendingTasks}`
    );


    updateStatistics(
        totalTasks,
        completedTasks,
        pendingTasks
    );
}


// ============================================================
// FUNCTION 10: sortByPriority()
// ============================================================

function sortByPriority() {

    const priorityOrder = {

        high: 1,

        medium: 2,

        low: 3
    };


    tasks.sort(function (a, b) {

        return (
            priorityOrder[a.priority] -
            priorityOrder[b.priority]
        );
    });


    console.log(
        "Tasks sorted by priority"
    );


    showToast(
        "Tasks sorted by priority"
    );


    renderTasks();
}


// ============================================================
// DOM ELEMENTS
// ============================================================

const taskForm =
    document.getElementById("taskForm");


const taskTitleInput =
    document.getElementById("taskTitle");


const taskPriorityInput =
    document.getElementById("taskPriority");


const taskList =
    document.getElementById("taskList");


const totalTasksElement =
    document.getElementById("totalTasks");


const completedTasksElement =
    document.getElementById("completedTasks");


const pendingTasksElement =
    document.getElementById("pendingTasks");


const taskCountLabel =
    document.getElementById("taskCountLabel");


const searchInput =
    document.getElementById("searchInput");


const searchButton =
    document.getElementById("searchBtn");


const clearSearchButton =
    document.getElementById("clearSearch");


const toast =
    document.getElementById("toast");


// ============================================================
// CURRENT VIEW
// ============================================================

let currentView = "all";


// ============================================================
// ADD TASK FORM
// ============================================================

taskForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            taskTitleInput.value.trim();


        const priority =
            taskPriorityInput.value;


        if (title === "") {

            showToast(
                "Please enter a task title"
            );

            return;
        }


        addTask(
            title,
            priority
        );


        taskForm.reset();


        taskPriorityInput.value =
            "medium";
    }
);


// ============================================================
// RENDER ALL TASKS
// ============================================================

function renderTasks() {

    let visibleTasks = tasks;


    if (currentView === "pending") {

        visibleTasks =
            tasks.filter(function (task) {

                return task.completed === false;
            });
    }


    if (currentView === "completed") {

        visibleTasks =
            tasks.filter(function (task) {

                return task.completed === true;
            });
    }


    if (visibleTasks.length === 0) {

        renderEmptyState(
            currentView === "pending"
                ? "No pending tasks"
                : currentView === "completed"
                    ? "No completed tasks"
                    : "No tasks available"
        );

    } else {

        renderTaskCollection(
            visibleTasks
        );
    }


    countTasks();
}


// ============================================================
// RENDER TASK COLLECTION
// ============================================================

function renderTaskCollection(taskCollection) {

    taskList.innerHTML = "";


    taskCollection.forEach(function (task) {

        const card =
            document.createElement("article");


        card.className =
            "task-card";


        if (task.completed) {

            card.classList.add(
                "completed"
            );
        }


        card.innerHTML = `

            <button
                class="task-check"
                data-id="${task.id}"
                title="Complete task"
            >
                ${task.completed ? "✓" : ""}
            </button>


            <div class="task-info">

                <h3>
                    ${escapeHTML(task.title)}
                </h3>

                <div class="task-meta">

                    <span class="task-id">
                        #${task.id}
                    </span>

                    <span
                        class="priority priority-${task.priority}"
                    >
                        ${task.priority}
                    </span>

                    <span class="task-status">
                        ${task.completed
                ? "Completed"
                : "Pending"
            }
                    </span>

                </div>

            </div>


            <div class="task-actions">

                ${!task.completed
                ? `
                        <button
                            class="task-action complete"
                            data-action="complete"
                            data-id="${task.id}"
                            title="Complete"
                        >
                            ✓
                        </button>
                        `
                : ""
            }


                <button
                    class="task-action edit"
                    data-action="edit"
                    data-id="${task.id}"
                    title="Edit"
                >
                    ✎
                </button>


                <button
                    class="task-action delete"
                    data-action="delete"
                    data-id="${task.id}"
                    title="Delete"
                >
                    ×
                </button>

            </div>
        `;


        taskList.appendChild(card);
    });


    attachTaskEvents();
}


// ============================================================
// EMPTY STATE
// ============================================================

function renderEmptyState(message) {

    taskList.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                ✓
            </div>

            <h3>
                ${escapeHTML(message)}
            </h3>

            <p>
                Your task list will appear here.
            </p>

        </div>
    `;
}


// ============================================================
// TASK BUTTON EVENTS
// ============================================================

function attachTaskEvents() {

    const completeButtons =
        document.querySelectorAll(
            '[data-action="complete"]'
        );


    completeButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    completeTask(id);
                }
            );
        }
    );


    const deleteButtons =
        document.querySelectorAll(
            '[data-action="delete"]'
        );


    deleteButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );


                    deleteTask(id);
                }
            );
        }
    );


    const editButtons =
        document.querySelectorAll(
            '[data-action="edit"]'
        );


    editButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );


                    const task =
                        tasks.find(
                            function (task) {

                                return task.id === id;
                            }
                        );


                    if (!task) {

                        showToast(
                            "Task not found"
                        );

                        return;
                    }


                    const newTitle =
                        prompt(
                            "Enter new task title:",
                            task.title
                        );


                    if (
                        newTitle !== null &&
                        newTitle.trim() !== ""
                    ) {

                        updateTask(
                            id,
                            newTitle.trim()
                        );
                    }
                }
            );
        }
    );
}


// ============================================================
// COMPLETE BUTTON ON CARD
// ============================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "task-check"
            )
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            completeTask(id);
        }
    }
);


// ============================================================
// FILTER CONTROLS
// ============================================================

const filterButtons =
    document.querySelectorAll(
        "[data-filter]"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );
                    }
                );


                this.classList.add(
                    "active"
                );


                currentView =
                    this.dataset.filter;


                if (
                    currentView === "all"
                ) {

                    viewTasks();

                } else if (
                    currentView === "pending"
                ) {

                    viewPendingTasks();

                } else {

                    viewCompletedTasks();
                }
            }
        );
    }
);


// ============================================================
// SORT BUTTON
// ============================================================

document
    .querySelector(
        '[data-sort="priority"]'
    )
    .addEventListener(
        "click",
        function () {

            sortByPriority();
        }
    );


// ============================================================
// SEARCH
// ============================================================

searchButton.addEventListener(
    "click",
    function () {

        const keyword =
            searchInput.value.trim();


        if (keyword === "") {

            viewTasks();

            return;
        }


        searchTask(keyword);
    }
);


searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchButton.click();
        }
    }
);


// ============================================================
// CLEAR SEARCH
// ============================================================

clearSearchButton.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        currentView = "all";


        filterButtons.forEach(
            function (button) {

                button.classList.remove(
                    "active"
                );
            }
        );


        document
            .querySelector(
                '[data-filter="all"]'
            )
            .classList.add(
                "active"
            );


        viewTasks();
    }
);


// ============================================================
// UPDATE STATISTICS
// ============================================================

function updateStatistics(
    total,
    completed,
    pending
) {

    totalTasksElement.textContent =
        total;

    completedTasksElement.textContent =
        completed;

    pendingTasksElement.textContent =
        pending;


    taskCountLabel.textContent =
        `${total} ${total === 1 ? "task" : "tasks"}`;
}


// ============================================================
// TOAST MESSAGE
// ============================================================

function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );
}


// ============================================================
// SECURITY / HTML ESCAPE
// ============================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;
}


// ============================================================
// INITIAL RENDER
// ============================================================

// viewTasks();