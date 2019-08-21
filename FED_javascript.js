// JavaScript source code
function showSuggestions() {
    document.getElementsByClassName("autocomplete")[0].style.display = 'block';
}

function hideSuggestions() {
    document.getElementsByClassName("autocomplete")[0].style.display = 'none';
}

function showTab(tabname) {
    let x = document.querySelectorAll(".content-tab");
    let len = x[0].childElementCount;//get number of childs(divisions) in 1st class element

    for (let i = 0; i < len; i++) {
        x[0].children[i].style.display = 'none';
    }

    document.getElementById("tab-" + tabname).style.display = 'block';
}

var todoList = ["brush", "run", "bath", "play", "code", "sleep", "eat","clean"];


function createAutoCompleteList() {

    clearAutoCompleteList();

    let searchKey = document.getElementsByName("searchbox")[0].value;//get value in textbox

    if (searchKey == "") {
        return;
    }
      
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].startsWith(searchKey)) {

            var listItem = document.createElement("li");
            var node = document.createTextNode(todoList[i]);
            listItem.appendChild(node);

            var element = document.getElementById("autocomplete-list");
            element.appendChild(listItem);
        }
    }
}

function clearAutoCompleteList() {
     var element = document.getElementById("autocomplete-list");
        while (element.lastElementChild != null) {
            element.removeChild(element.lastElementChild);
        }
   }

function addToList() {

    let textKey = document.getElementsByName("searchbox")[0].value;
    todoList.push(textKey);
    addToTable(textKey);
}

function fillTodoTable() {

    for (let i = 0; i < todoList.length; i++) {
        let rowItem = document.createElement("tr");

        let rowdataItemTaskName = document.createElement("td");
        let TaskName = document.createTextNode(todoList[i]);
        rowdataItemTaskName.appendChild(TaskName);

        let rowdataItemTaskDetails = document.createElement("td");
        let TaskDetails = document.createTextNode("Task Details are here.");
        rowdataItemTaskDetails.appendChild(TaskDetails);

        rowItem.appendChild(rowdataItemTaskName);
        rowItem.appendChild(rowdataItemTaskDetails);

        let element = document.getElementById("todo-table");
        element.appendChild(rowItem);
    }
}

function addToTable(textKey) {
    let rowItem = document.createElement("tr");

    let rowdataItemTaskName = document.createElement("td");
    let TaskName = document.createTextNode(textKey);
    rowdataItemTaskName.appendChild(TaskName);

    let rowdataItemTaskDetails = document.createElement("td");
    let TaskDetails = document.createTextNode("Task Details are here.");
    rowdataItemTaskDetails.appendChild(TaskDetails);

    rowItem.appendChild(rowdataItemTaskName);
    rowItem.appendChild(rowdataItemTaskDetails);

    let element = document.getElementById("todo-table");
    element.appendChild(rowItem);
}

fillTodoTable();
