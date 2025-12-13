// ================================
// DYNAMIC DOM MANIPULATION
// ================================

// Select h1 and change its text
let h1 = document.querySelector("h1");
h1.innerText = "hello hello, sab badhiya?";
console.log("h1 selected");

// Create h2 and append at the END of body
let h2 = document.createElement("h2");
h2.textContent = "Append hai to last me body ke andar! (h2)";
document.body.append(h2);

// Create h3 and prepend at the TOP of body
let h3 = document.createElement("h3");
h3.textContent = "Prepend hai to body ke top pe hoga!";
document.body.prepend(h3);

// Create h4 and insert it AFTER h2
let h4 = document.createElement("h4");
h4.textContent = "Ye h4 hai, h2 ke baad insert hua hai!";
let h2Element = document.querySelector("h2");
h2Element.insertAdjacentElement("afterend", h4);



// ================================
// STYLE & CLASS MANIPULATION
// ================================

h1.style.color = "brown";
h1.style.backgroundColor = "pink";
h1.style.border = "2px solid purple";

// Add CSS class using classList
h1.classList.add("big-font");



// ================================
// ATTRIBUTE MANIPULATION
// ================================

// Add title attribute (tooltip)
h1.setAttribute("title", "This is a heading tag");

// Read attribute value
console.log(h1.getAttribute("title"));



// ================================
// LIST MANIPULATION (Dynamic Element)
// ================================

// Select ul and add a new li dynamically
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "JavaScript DOM Manipulation";
ul.prepend(li);



// ================================
// EVENTS IN JAVASCRIPT
// ================================

// Select button (anchor tag styled as button)
let btn = document.querySelector(".btn");


// BASIC CLICK EVENT
btn.addEventListener("click", function (event) {

    // Stop default anchor behaviour (page redirect)
    event.preventDefault();

    console.log("Button clicked!");
    console.log("Event type:", event.type);      // click
    console.log("Clicked element:", event.target);

    // Change styles on click
    btn.style.backgroundColor = "pink";
    btn.style.color = "black";
    btn.style.fontWeight = "bold";
});



// ================================
// EXTRA EVENTS (OPTIONAL LEARNING)
// ================================

// Mouse hover event
btn.addEventListener("mouseover", function () {
    btn.style.transform = "scale(1.1)";
});

// Mouse out event
btn.addEventListener("mouseout", function () {
    btn.style.transform = "scale(1)";
});

// Keyboard event (global)
document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});


// DOM se select element ko access kiya
let sel = document.querySelector("select");

// DOM se output paragraph ko access kiya
let device = document.querySelector("#deviceTitle");

// change event lagaya select element par
sel.addEventListener("change", function (dets) {

    // selected option ki value read ki
    device.textContent = `${dets.target.value} Device Selected`;

});



