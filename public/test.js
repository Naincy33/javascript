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
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let password = document.querySelector("#password").value.trim();

        if (!name || !email || !password) {
            alert("All fields required");
            return;
        }

        // get existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // check duplicate email
        let userExists = users.some(user => user.email === email);

        if (userExists) {
            alert("User already registered with this email ❌");
            return;
        }

        // add new user
        users.push({ name, email, password });

        // save back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful 🎉");
        form.reset();
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
