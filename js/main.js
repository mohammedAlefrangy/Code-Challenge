
window.addEventListener('load' , function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response);

            response.forEach(element => {
                var node = document.createElement("div");
                node.classList.add('grid-item');

                var img = document.createElement("IMG");
                img.setAttribute("src", element.url);
                img.setAttribute("width", "100%");
                img.setAttribute("height", "100%");

                var paragraphId = document.createElement("p");
                paragraphId.textContent = element.id;
                paragraphId.style.textAlign = "center";
                paragraphId.style.margin = "10px 0";
                paragraphId.style.padding = "10px 0";
                paragraphId.style.border = "2px solid #FFF";



                node.appendChild(paragraphId);
                node.appendChild(img);


                document.getElementById("container").appendChild(node);

            });


        }
    };
    xhttp.open("GET", "https://api.thecatapi.com/v1/images/search?limit=12" , true);
    xhttp.setRequestHeader("x-api-key" , "72c20767-b206-40b0-9e16-f49b742d3e8f");
    xhttp.send();


});


document.getElementById("form").addEventListener('submit' , function (e) {
    e.preventDefault();
    var name = document.querySelector("input[name=name]").value;
    var breed = document.querySelector("input[name=breed]").value;
    var age = document.querySelector("input[name=age]").value;
    var color = document.querySelector("input[name=color]").value;


    var node = document.createElement("tr");


    var td1 = document.createElement("td");
    td1.textContent = name;
    var td2 = document.createElement("td");
    td2.textContent = breed;
    var td3 = document.createElement("td");
    td3.textContent = age;
    var td4 = document.createElement("td");
    td4.textContent = color;


    node.appendChild(td1);
    node.appendChild(td2);
    node.appendChild(td3);
    node.appendChild(td4);


    document.querySelector("table").appendChild(node);
    document.getElementById("form").reset();
});

