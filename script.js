function permissions() {
    document.getElementById("results").innerHTML = "";
    alert("Complete all forms correctly. At the moment the result is out of date.");
    return
}
function get_random() {
    var x = parseInt(document.getElementById("x").value);
    if (x < 1) {
        return permissions();
    }
    else {
        return Math.floor(Math.random() * x)+1;
    }
    
}
function work() {
    var y = parseInt(document.getElementById("y").value);    
    var table = [];
    if (y < 1) {
        return permissions();
    }
    else {
    for (var i=1; i<=y; i++) {
        var random = get_random();
        table.push(random);
    }       
    document.getElementById("results").innerHTML = table;
}
}