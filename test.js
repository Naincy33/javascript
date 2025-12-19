// ---------- h1 ----------
let h1 = document.querySelector("h1");
if (h1) {
    h1.innerText = "hello hello, sab badhiya?";
    h1.style.color = "brown";
    h1.style.backgroundColor = "pink";
    h1.style.border = "2px solid purple";
    h1.classList.add("big-font");
    h1.setAttribute("title", "This is a heading tag");
}


// ---------- button ----------
let btn = document.querySelector(".btn");
if (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        btn.style.backgroundColor = "pink";
        btn.style.color = "black";
        btn.style.fontWeight = "bold";
    });

    btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");
}

// ---------- select ----------
let sel = document.querySelector("select");
let device = document.querySelector("#deviceTitle");

if (sel && device) {
    sel.addEventListener("change", function (dets) {
        device.textContent = `${dets.target.value} Device Selected`;
    });
}

// ---------- mouse follow ----------
let abcd = document.querySelector("#abcd");

if (abcd) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        abcd.style.left = currentX + "px";
        abcd.style.top = currentY + "px";

        requestAnimationFrame(animate);
    }

    animate();
}

// ----- ul li line-through -----

let ul = document.querySelector(".menu ul");

if (ul) {
    ul.addEventListener("click", function (dets) {
        if (dets.target.tagName === "LI") {
            dets.target.classList.toggle("lt");
        }
    });
}

let form = document.querySelector("#myForm");

if (form) {
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");
    let courseSelect = document.querySelector("#course");
    let termsCheck = document.querySelector("#terms");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        document.querySelectorAll(".error").forEach(err => err.innerText = "");

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        }

        if (!emailInput.value.includes("@")) {
            showError(emailInput, "Enter a valid email");
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters");
            isValid = false;
        }

        if (courseSelect.value === "") {
            showError(courseSelect, "Please select a course");
            isValid = false;
        }

        if (!termsCheck.checked) {
            showError(termsCheck, "You must accept the terms");
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully 🎉");
            form.reset();
        }
    });
}
function showError(inputElem, message) {
    let errorElem = inputElem.nextElementSibling;
    if (errorElem && errorElem.classList.contains("error")) {
        errorElem.innerText = message;
    }
}

// apply theme to body
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

// detect system theme
function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// set initial theme
function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
}

setInitialTheme();

// toggle button
let btn2 = document.querySelector("#themeBtn");

if (btn2) {
    btn2.addEventListener("click", function () {
        const currentTheme = document.body.classList.contains("dark")
            ? "dark"
            : "light";

        const newTheme = currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });
}
