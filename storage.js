function saveSecret() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("secrets, found")
    } else {
        alert("Not supported!")
    }
}
function removeSecret() {
    localStorage.clear()
}