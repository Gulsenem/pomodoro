let txarea = document.getElementById("addTask_txarea");
let pm_num = document.getElementById("pm_num");




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
    createDiv.classList.add("task_liste","flex" ) ; 

    let div_left = document.createElement("div");
    div_left.setAttribute("id", "task_liste_left");

    
    let i_circle = document.createElement("i");
    i_circle.classList.add("fas","fa-check-circle" );
    let span_tx =  document.createElement("span");
    
    let div_right = document.createElement("div");
    div_right.setAttribute("id", "task_liste_right");
    
    let b1 = document.createElement("b");
    let b2 = document.createElement("b");
    let i_btn = document.createElement("i");
    i_btn.classList.add("fas", "fa-th" ); 
    
     if(txarea.value =="" || pm_num.value <= 0 )
    {
        alert("Bitte text und Pomodoros zahl eingeben");
            
        txarea.value= "";
        pm_num.value = 0;
        return;
    }
   
    
    span_tx.innerHTML = txarea.value;
    b1.innerHTML = "0" + "  /";
    b2.innerHTML = pm_num.value;

    document.getElementById("task_container").appendChild(createDiv);
    createDiv.appendChild(div_left);
    createDiv.appendChild(div_right);
    div_left.appendChild(i_circle);
    div_left.appendChild(span_tx);
    div_right.appendChild(b1);
    div_right.appendChild(b2);
    div_right.appendChild(i_btn);


    txarea.value= "";
    pm_num.value = 0;
}