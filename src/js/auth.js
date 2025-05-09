console.log("auth.js loaded");

async function loginUser(email, password) {
    const res = await fetch("https://51.20.37.222/api/v1/account/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        alert("Login successful!");
        window.location.href = "verify.html"; 
        
        // redirect to verification page
    } else {
        alert("Login failed: " + (data.detail || "Unknown error"));
    }
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    loginUser(email, password);
    console.log("Login successful");
});
