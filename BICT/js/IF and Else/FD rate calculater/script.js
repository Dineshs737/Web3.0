function FdRate()
{
    const months = Number(document.getElementById("input").value)
    let rate =0

    if(months<3)
        rate=3
    else if(rate>=3 || rate<=6)
        rate=6.5
    else if(rate<=7 || rate<=9)
        rate=6.8
    else
        rate=10
    let result = document.getElementById("result")
    result.innerHTML = "Your FD Rate is " +rate+"%"
}