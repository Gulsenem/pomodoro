let txarea = document.getElementById("addTask_txarea");





function add_task()
{
    document.getElementById("add_task_box").style.display="block";
    
}

function cancel_task()
{
    document.getElementById("add_task_box").style.display="none";
    txarea.value= "";
}

function save_task()
{
    document.getElementById("add_task_box").style.display="none";

    let createDiv = document.createElement("div");
    createDiv.className = "task_liste";

    createDiv.innerHTML = txarea.value;

    document.getElementById("task_container").appendChild(createDiv);

    if(txarea.value =="")
    {
        return;
    }

    txarea.value= "";
}