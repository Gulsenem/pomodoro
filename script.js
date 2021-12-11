var time_start;
var disp = document.getElementById("time_show");
var is_timer_started = false;


// 1. add active class
var header = document.getElementById("time_btns");
var btns = header.getElementsByClassName("time_btn");
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function() {
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
if(str=="Pomodoro")
  {
    r.style.setProperty('--primary', 'rgb(194, 68, 68)');
    r.style.setProperty('--secondary', 'rgb(206, 111, 111)');
    r.style.setProperty('--accent', 'rgb(180, 53, 53');    
    time_start = 60*25;  
    is_timer_started = false;
    disp.innerHTML = "25:00";
  }
  else  if(str=="Short Break")
  {
    r.style.setProperty('--primary', 'rgb(76, 145, 149)');
    r.style.setProperty('--secondary', 'rgb(119, 172, 175)');
    r.style.setProperty('--accent', 'rgb(52, 111, 116)');
    is_timer_started = false;
    time_start = 60*5;        
    disp.innerHTML = "05:00";
  }
  else if(str=="Long Break")
  {
    r.style.setProperty('--primary', 'rgb(69, 124, 163)');
    r.style.setProperty('--secondary', 'rgb(128, 175, 209)');
    r.style.setProperty('--accent', 'rgb(57, 103, 136)');  
    is_timer_started = false;
    time_start = 60*10;  
    disp.innerHTML = "10:00";    
  }
  
}



/////////////////////////////////////////////////////////////////////


//countdown function
function start()
{
    startTimer(time_start, disp);
    is_timer_started = true;
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
    setInterval(timer, 1000);
}

