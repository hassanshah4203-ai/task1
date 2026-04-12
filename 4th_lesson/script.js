let increasefive = 0;

const increasefiveDisplay = document.getElementById("increasefive");
const increasefivebtn = document.getElementById("increasefivebtn");

increasefivebtn.addEventListener("click", function() {
    increasefive = increasefive + 5;
    increasefiveDisplay.textContent = increasefive;
});