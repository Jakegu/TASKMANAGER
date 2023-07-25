let isImportant = false;
let isVisible = false;

function addTask(){
   const title = $("#txtTitle").val();
   const desc = $("#txtDescription").val();
   const color = $("#selColor").val();
   const date = $("#selStartDate").val();
   const status = $("#selStatus").val();
   const budget = $("#txtBudget").val();

   let taskToSave = new Task(isImportant, title, desc, color, date, status, budget);
   displayTask(taskToSave);
}

function displayTask(task){

    let syntax = `<div class='task'>
        <div class='info'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        
        <label class='status'>${task.status} </label>
        
        <div class='date-budget'>
            <label>${task.startDate}</label>
            <label>${task.budget}</label>
        </div>

        </div>`;

    $(".pending-tasks").append(syntax);
}


function toggleImportant(){
    const importantIcon = "fa-solid fa-star important-icon";
    const unimportantIcon = "fa-regular fa-star";
    
    if(isImportant){
        $("#iImportant").removeClass(importantIcon).addClass(unimportantIcon);
        isImportant = false;
    }else{
        $("#iImportant").removeClass(unimportantIcon).addClass(importantIcon);
        isImportant = true;
    }
}

function toggleDetails(){
    if(isVisible){
        $("#form").fadeOut();
        isVisible = false;
    }else{
        $("#form").fadeIn();
        isVisible = true;
    }
}

function init(){
    console.log("task manager");

    $("#btnAdd").click(addTask);
    $("#iImportant").click(toggleImportant);
    $("#btnDetails").click(toggleDetails);
}

window.onload = init;