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
        if (todoList[i] == undefined)
            continue;
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
    if(textKey=="")
    return;
    todoList.push(textKey);
    addToTable(textKey);
}

function fillTodoTable() {
    let element = document.getElementById("todo-table");
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = "<th>Task</th>";

    element.appendChild(tableRow);

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] == undefined)
            continue;
        let tableRowItem = document.createElement("tr");

        let tableRowDataTask = document.createElement("td");
        tableRowDataTask.innerHTML = "" + todoList[i] + "";
     

        let tableRowDataEdit = document.createElement("td");
        tableRowDataEdit.innerHTML = "<button id=\"edit-button\"  type=\"button\" onclick=editTask("+i+") > Edit </button> ";

       
        let tableRowDataDelete = document.createElement("td");
        tableRowDataDelete.innerHTML = "<button id=\"delete-button\" type=\"button\" onclick=deleteTask("+i+") > Delete </button>";

        tableRowItem.appendChild(tableRowDataTask);
        tableRowItem.appendChild(tableRowDataEdit);
        tableRowItem.appendChild(tableRowDataDelete);

    
        element.appendChild(tableRowItem);

        
    }
}

function addToTable(textKey) {
    let tableRowItem = document.createElement("tr");

    let tableRowDataTask = document.createElement("td");
    tableRowDataTask.innerHTML = "" + textKey + "";
    let len = todoList.length - 1;

    let tableRowDataEdit = document.createElement("td");
    tableRowDataEdit.innerHTML = "<button id=\"edit-button\"  type=\"button\" onclick=editTask("+len+")> Edit </button> ";
   
    let tableRowDataDelete = document.createElement("td");
    tableRowDataDelete.innerHTML = "<button id=\"delete-button\" type=\"button\" onclick=deleteTask("+len+") > Delete </button>";

    tableRowItem.appendChild(tableRowDataTask);
    tableRowItem.appendChild(tableRowDataEdit);
    tableRowItem.appendChild(tableRowDataDelete);

    let element = document.getElementById("todo-table");
    element.appendChild(tableRowItem);
}

function editTask(Key) {
    let element = document.getElementById("todo-table");

    let indexInTable = findIndexInTable(Key);
    element.children[indexInTable+1].firstElementChild.contentEditable = "true";

    element.children[indexInTable+1].firstElementChild.focus();

    element.children[indexInTable+1].children[1].innerHTML = "<button id=\"save-button\"  type=\"button\" onclick=updateTask(" + indexInTable + ","+Key+")> Save </button> ";
}

function deleteTask(Key) {

    delete todoList[Key];
    clearTodoTable();
    fillTodoTable();
}

function updateTask(indexInTable,Key) {
    let element = document.getElementById("todo-table");
    let textKey = element.children[indexInTable+1].firstElementChild.textContent;
    todoList[Key] = textKey;
    clearTodoTable();
    fillTodoTable();
}

function clearTodoTable() {

    let element = document.getElementById("todo-table");
    while (element.lastElementChild != null) {
        element.removeChild(element.lastElementChild);
    }
}

function findIndexInTable(Key) {
    let index = 0;
    for (let i = 0; i < Key; i++) {
        if (todoList[i] == undefined)
            continue;
        index++;
    }
    return index;
}
fillTodoTable();
