let p = document.getElementById("pom_set_btn");
let sh = document.getElementById("short_set_btn");
let l = document.getElementById("long_set_btn");

var time_start= p.value *60;
let time_interval;
var disp = document.getElementById("time_show");
    disp.innerHTML = time_start/60 + ":00";
var is_timer_started = false;


// 1. add active class
var header = document.getElementById("time_btns");
var btns = header.getElementsByClassName("time_btn");
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function() {
  if (is_timer_started)
    alert("The timer is still running, are you sure you want to switch? ");
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  myFunction_set(current[0].innerHTML);
  
  });
}
///////////////////////////////////////////////////////////////////////

// 2. to change :roots color compared to  active class

// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
}

// Create a function for setting a variable value
function myFunction_set(str) {
  // Set the value of variable --accent .... to another value (in this case "XXXXXXX")
stop();
if(str=="Pomodoro")
  {
    r.style.setProperty('--primary', 'rgb(194, 68, 68)');
    r.style.setProperty('--secondary', 'rgb(206, 111, 111)');
    r.style.setProperty('--accent', 'rgb(180, 53, 53');  
    r.style.setProperty('--hover', 'rgb(180, 48, 48)');    
    time_start = 60*p.value;  
    is_timer_started = false;
       let ts =  time_start/60 
   ts = ts < 10 ? "0" + ts : ts;
    disp.innerHTML = ts + ":00";   
  }
  else  if(str=="Short Break")
  {
    r.style.setProperty('--primary', 'rgb(76, 145, 149)');
    r.style.setProperty('--secondary', 'rgb(119, 172, 175)');
    r.style.setProperty('--accent', 'rgb(52, 111, 116)');
    r.style.setProperty('--hover', 'rgb(49, 104, 109)');
    is_timer_started = false;
    time_start = 60*sh.value;
   let ts =  time_start/60 
   ts = ts < 10 ? "0" + ts : ts;
    disp.innerHTML = ts + ":00";   

    //disp.innerHTML = sh.value + ":00";
  }
  else if(str=="Long Break")
  {
    r.style.setProperty('--primary', 'rgb(69, 124, 163)');
    r.style.setProperty('--secondary', 'rgb(128, 175, 209)');
    r.style.setProperty('--accent', 'rgb(57, 103, 136)'); 
    r.style.setProperty('--hover', 'rgb(54, 96, 126)'); 
    is_timer_started = false;
    time_start = 60*l.value;  
    let ts =  time_start/60 
    ts = ts < 10 ? "0" + ts : ts;
     disp.innerHTML = ts + ":00";    
  }
  
}



/////////////////////////////////////////////////////////////////////


//countdown function
var start_btn = document.getElementById("start_btn");

function start_stop()
{
  if(start_btn.innerHTML == "Start")
  {
    start();    
    
  }
  else if(start_btn.innerHTML == "Stop")
  {
    stop();
  }
}


function start()
{
    startTimer(time_start, time_show);
    is_timer_started = true;
    start_btn.innerHTML = "Stop";
}


function stop()
{
  clearInterval(time_interval);
  start_btn.innerHTML = "Start";
  let  str = time_show.innerHTML.split(":");
  time_start = parseInt(str[0]*60) +parseInt(str[1]);
  console.log(time_start);
  is_timer_started = false;
  
}

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (is_timer_started)
            display.innerHTML = minutes + ":" + seconds; 

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    }
    timer();
    time_interval = setInterval(timer, 1000);
}
///////////////////////////// stop timer ////////////////////


