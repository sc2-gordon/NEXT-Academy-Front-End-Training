const btn = document.getElementById("thebtn")
const value3 = ["red", "yellow", "blue", "green"]
let count = 0

btn.addEventListener("mouseover", function () {
    if (count < 11) {
        const value = (Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight))) + 'px'
        const value2 = (Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth))) + 'px'
        btn.style.left = value2
        btn.style.top = value
        btn.style.backgroundColor = value3[Math.floor(Math.random() * value3.length)]
        count += 1
    } else {
        document.getElementById("t").innerHTML = "Thanks for playing!"
    }
})


btn.addEventListener("click", function () {
    document.getElementById("t").innerHTML = "<img src='https://www.droidlime.com/wp-content/uploads/2015/08/LOL.jpg'/>"
    document.getElementById("thebtn").remove()
})



const clr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
