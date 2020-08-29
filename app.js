

var inc = document.querySelector("#inc");
var dec = document.querySelector("#dec");
var reset = document.querySelector("#reset");
var count = document.querySelector("#count");

var counter  = 0;

inc.addEventListener("click", function(){
    counter++;
    count.textContent = counter;
    if(counter >= 1){
        count.style.color = "green";
    }
    if(counter === 0){
        count.style.color = "black"
    }
    
});


reset.addEventListener("click", function(){
    counter = 0;
    count.textContent = counter;
    count.style.color = "black"
    
});


dec.addEventListener("click", function(){
    counter--;
    count.textContent = counter;

    if(counter <= -1 ){
        count.style.color = "red";
    }
    if(counter === 0){
        count.style.color = "black"
    }
    
});