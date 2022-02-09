function saveSecret() {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("secret", "found")
    } else {
        alert("Not supported!")
    }
}
function removeSecret() {
    sessionStorage.clear()
}