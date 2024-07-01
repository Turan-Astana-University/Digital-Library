var forfon = document.getElementById("forfon");

function bronirovano() {

    forfon.style.display = "flex";
    forfon.style.height = "100%";
}
function ok_bronirovano() {
    forfon.style.display = "none";
    forfon.style.height = "0px";
}
function redirectToReader() {
    window.location.href = "/book-reader.html";
}