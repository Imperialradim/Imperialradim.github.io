function saveSecret() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("secret", "found")
        const status = localStorage.getItem("secret")
        if (status == "found") {
            document.getElementById("secret2").innerHTML = "Nalezeno!"
        }
    } else {
        alert("Not supported!")
    }
}
function removeSecret() {
    localStorage.clear()
}

function secreT() {
    const status = localStorage.getItem("secret")
    if (status == "found") {
        document.getElementById("secret2").innerHTML = "Již nalezeno!";
    }
}