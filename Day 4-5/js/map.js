
var targetCountry = "";
var countryText = document.getElementById("country_text");

document.getElementById("svg2").addEventListener("click", function (event) {
    //console.log(event.target.id);
    targetCountry = event.target.id;
    console.log(event.target.style.fill);
    event.target.style.fill = "red";
    
    showCountryData();
});

function showCountryData() {

    countryText.innerHTML = "";

    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + targetCountry;
    var conf = { method: "get" };
    var promise = fetch(url, conf);

    promise.then(function (response) {
        return response.json();
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            countryText.innerHTML += data[i].name + "<br>";
            countryText.innerHTML += data[i].population + "<br>";
            countryText.innerHTML += data[i].area + "<br>";
        }

        
        /*app.innerHTML += data.joke + "<br>";
        app.innerHTML += data.reference;*/
    });
}