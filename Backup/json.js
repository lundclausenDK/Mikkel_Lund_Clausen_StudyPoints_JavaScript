// ready dom object
var app = document.getElementById("app");
app.innerHTML = "";

// ready ajax
var url = "http://localhost:8080/jsonProvider/JsonProvider";
var conf = {method: "get"};
var promise = fetch(url, conf);

promise.then(function(response){
    return response.text();
}).then(function(text){
    app.innerHTML = text;
});

