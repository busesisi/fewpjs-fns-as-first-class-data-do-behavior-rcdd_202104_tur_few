/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet (timeString) {
  const splittedTime = timeString.split(':');
  const parsed = parseInt.(timeString.split(':').[0]);
  if (parsed<12){
    return "Good Morning";
  }
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
