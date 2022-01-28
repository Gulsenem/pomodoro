
var time_start;
let time_interval;
var time_show = document.getElementById("time_show");
var is_timer_started = false;


// 1. add active class
var header = document.getElementById("time_btns");
var btns = header.getElementsByClassName("time_btn");
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", add_activeClas);
}
  btns[1].addEventListener("click", short_break);
function add_activeClas()
{
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  //myFunction_set(current[0].innerHTML);
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


function short_break()
{
  r.style.setProperty('--primary', 'rgb(76, 145, 149)');
  r.style.setProperty('--secondary', 'rgb(119, 172, 175)');
  r.style.setProperty('--accent', 'rgb(52, 111, 116)');

  time_show.innerHTML = "01:00";
  time_start = 60*1; 
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
  time_start = parseInt(str[0]*60 + str[1]);
  console.log(time_start);
  
}
///////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
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
