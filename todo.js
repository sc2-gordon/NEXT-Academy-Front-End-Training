const btn = document.getElementById("thebtn")
const list = document.getElementById("thelist")
const form = document.getElementById("theform")
const time = 350


form.addEventListener("submit", function (event) {
    event.preventDefault()
})

btn.addEventListener("click", function () {
    if ((document.getElementById("txtinput").value).length > 3) {
        const newlist = document.createElement("li")
        newlist.innerHTML = document.getElementById("txtinput").value
        document.getElementById("thelist").appendChild(newlist)
        document.getElementById("txtinput").value = ""

        newlist.addEventListener("click", function () {
            setTimeout(() => {
                document.getElementById("thelist").removeChild(newlist)
            }, time);
            newlist.style.width = "50px"
        })
    }
})

