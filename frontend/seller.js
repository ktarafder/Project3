function toggleMenu() {
        document.querySelector("body").classList.toggle("open");
}

function openPopup() {
    document.getElementById("addPropertyPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("addPropertyPopup").style.display = "none";
}

function openDeletePopup() {
    document.getElementById("deletePropertyPopup").style.display = "block";
}

function closeDeletePopup() {
    document.getElementById("deletePropertyPopup").style.display = "none";
}