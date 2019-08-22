const api_code = "N5beTtTTuLbpoMpNpk4HraETz6ujtVRt"
let btn = document.getElementById("btn")
let joke = document.getElementById("jokeheader")
let gif = document.getElementById("gifheader")


function jokegenerator(data) {
    joke.innerHTML = data.value
}

function gifgenerator(newsrc) {
    gif.setAttribute("src", newsrc)
}

btn.addEventListener("click", function () {
    let q = document.getElementById("in").value
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            jokegenerator(data)
        })
    
    if (q == "") {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=" + api_code)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let newsrc = data.data.images.downsized.url
            gifgenerator(newsrc)
        })
    } else {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=" + api_code + "&q=" + q)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let newsrc = data.data[Math.floor(Math.random() * data.data.length)].images.downsized.url
            gifgenerator(newsrc)
        })
    }
})



