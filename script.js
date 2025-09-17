/* =============================
   PART 2: JavaScript Functions
   ============================= */

// Global variable
let clickCount = 0;

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height;
}

// Function showing local scope
function logMessage(message) {
  let localMsg = "Local: " + message; // local variable
  console.log(localMsg);
}

// Example: function reused for animations
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}


/* =============================
   PART 3: JS + CSS Animations
   ============================= */

// Animate box when button clicked
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  clickCount++;
  toggleAnimation(box, "animate");
  logMessage(`Box animation triggered ${clickCount} times`);
});

// Use calculateArea with inputs
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  let width = parseInt(document.getElementById("width").value);
  let height = parseInt(document.getElementById("height").value);

  if (isNaN(width) || isNaN(height)) {
    result.textContent = "❌ Please enter valid numbers!";
  } else {
    let area = calculateArea(width, height);
    result.textContent = `✅ The area is ${area}`;
  }
});


/* =============================
   Modal Logic
   ============================= */
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
