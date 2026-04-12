function showVariables(){
    let city = document.getElementById("cityname").value;
    let age = document.getElementById("yourage").value;
    let country = document.getElementById("yourcountry").value;
    if(city === "" || age === "" || country === ""){
        document.getElementById("output").textContent = "Please fill in all the fields!";
    }
    else{
        document.getElementById("output").textContent = "City: " + city + " | Age: " + age + " | Country: " + country;
    }
}


function sayHello(){

    let message = "Hello Students! Welcome to JavaScript.";

    document.getElementById("output").textContent = message;
}


function showName(){

    let name = document.getElementById("username").value;

    if(name === ""){
        document.getElementById("output").textContent = "Please enter your name!";
    }
    else{
        document.getElementById("output").textContent = "Hello " + name;
    }

}

