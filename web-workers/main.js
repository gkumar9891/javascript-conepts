const startCounter = document.getElementById("start");
const stopCounter = document.getElementById("stop");

var worker;

startCounter.addEventListener("click", function(){
    
    if(typeof(worker) == 'undefined')
            worker = new Worker("workers.js");

    worker.onmessage = function(event) {
                document.getElementById("counter").innerHTML = event.data;
    };
});

stopCounter.addEventListener("click", function() {
    worker.terminate();
    worker = undefined
});