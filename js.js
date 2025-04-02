const a = document.getElementById("t1");
const b = document.getElementById("btn1");
var b1 = document.getElementById("btn1");

var x = 0;

function next(){
       window.location = 'main.html';
       
}

function change11(){
       a.textContent = "So you wish to visit-";
}

function change21(){
       b.textContent = "Yes...";
}

function change12(){
       a.textContent = "Press again to visit :)";
}

function change22(){
       b.textContent = "Ok..."
}

function change13(){
       a.textContent = "We now legally own your First-Born, go ahead.";
       b1.disabled = true;
       setTimeout(next(),5000)
}

function convo(){
       if (x==0) {
              change11();
              change21();
              x= 1;
       }else if(x==1) {
              change12();
              change22();
              x=2;
       }
       else {
             change13(); 
       }
}
