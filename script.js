var div = document.createElement("div")
    div.setAttribute("class", "conatiner-lg")
    div.style.margin = "-4px"
    div.style.textAlign = "center"
    div.style.backgroundColor = "#dcfff0"
    div.style.fontFamily = "'Indie Flower', cursive";
    div.style.fontSize = "25px"
    document.body.append(div)


function handleClick(value) {
    var value = document.getElementById("name").value
    if (value == "" || null) {
        alert("Enter a valid name")
        return false;
    }
    else {
        getData()
    }
}
async function getData() {
    try {

        var value = document.getElementById("name").value;
        var name = document.createElement("div")
        name.innerText = "Name : " + value;


        var data = await fetch("https://api.nationalize.io?name="+ value);
        var res = await data.json();

        for (var i = 0; i < 2; i++) {

            const element = res.country[i]

            var country = document.createElement("div")
            country.innerText = ("Country Nationality : " + element.country_id);
            div.append(country)


            var probability = document.createElement("div")
            probability.innerText = ("Country Probability : " + element.probability);
            div.append(probability)
        }
    } catch (error) {
        console.log(error);
    }
}
function reload() {
    location.reload()
}