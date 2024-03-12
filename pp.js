
function fibonacci(n) {
    let fibArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; 
       console.log("Fibonacci Series to", n, ":", fibArray);
    }
  

  }
  fibonacci(6);  
  console.log("------------------------------------------------------------------------------------------------------------------------------------")

  function updateClock() {
    let now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let clockDisplay = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = clockDisplay;
  }
  setInterval(updateClock, 1000);
  updateClock();

  console.log("------------------------------------------------------------------------------------------------------------------------------------")
  