function convert()
        {
        const  fahrenheit = Number(document.getElementById("input").value)
        const Celsius  =(fahrenheit-32)*5/9
        let display = document.getElementById("display")
        display.innerHTML =Celsius +" C"
        }