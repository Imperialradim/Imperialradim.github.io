function saveSecret() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("secret", "found")
    } else {
        alert("Not supported!")
    }
}
function removeSecret() {
    localStorage.clear()
}