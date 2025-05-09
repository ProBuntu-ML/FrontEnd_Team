async function verifyPlateNumber(plateNumber) {
    const token = localStorage.getItem("access_token");

    const res = await fetch("https://51.20.37.222/api/v1/plate_number", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ plate_number: plateNumber })
    });

    const data = await res.json();

    if (res.ok) {
        console.log("Verification successful", data);
        document.getElementById("result").innerText = JSON.stringify(data, null, 2);
    } else {
        alert("Verification failed: " + (data.detail || "Unknown error"));
    }
}

document.getElementById("verify-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const plate = document.getElementById("plate").value;
    verifyPlateNumber(plate);
});
