var tombol = document.getElementById('search');
var form = document.getElementById('form-search');
var exit = document.getElementById('ex');

tombol.onclick = function(){
    form.style.display = "block";
    tombol.style.display = "none";
}

exit.onclick = function(){
    form.style.display = "none";
    tombol.style.display = "block";
}