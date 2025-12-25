let loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.querySelector("#loginEmail").value.trim();
        let password = document.querySelector("#loginPassword").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let validUser = users.find(
            user => user.email === email && user.password === password
        );

        if (validUser) {
            alert("Login successful 🎉");
            sessionStorage.setItem("loggedInUser", validUser.email);
            // window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password ❌");
        }
    });
}

