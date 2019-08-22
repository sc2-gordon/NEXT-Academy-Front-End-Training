let insert = document.querySelectorAll("td")
let btn = document.getElementById("mybutton")
let a = 0
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function givemarker() {
    return a % 2 == 0 ? "O" : "X"
}

function winCondition() {
    for (let i = 0; i < win.length; i++) {
        let combo = win[i]
        let marker1 = insert[combo[0]]
        let marker2 = insert[combo[1]]
        let marker3 = insert[combo[2]]
        if (marker1.innerText == givemarker() && marker2.innerText == givemarker() && marker3.innerText == givemarker()) {
            document.getElementById("winner").innerHTML = "You've Won!"
        }
    }
}

// function winCondition() {
//     if ((insert[0].innerText == ("O" || "X")) && (insert[0].innerText == insert[1].innerText) && (insert[1].innerText == insert[2].innerText)) {
//         alert("You have won!")
//     } else if ((insert[3].innerText == ("O" || "X")) && (insert[3].innerText == insert[4].innerText) && (insert[4].innerText == insert[5].innerText)) {
//         alert("You have won!")
//     } else if ((insert[6].innerText == ("O" || "X")) && (insert[6].innerText == insert[7].innerText) && (insert[7].innerText == insert[8].innerText)) {
//         alert("You have won!")
//     } else if ((insert[0].innerText == ("O" || "X")) && (insert[0].innerText == insert[3].innerText) && (insert[3].innerText == insert[6].innerText)) {
//         alert("You have won!")
//     } else if ((insert[1].innerText == ("O" || "X")) && (insert[1].innerText == insert[4].innerText) && (insert[4].innerText == insert[7].innerText)) {
//         alert("You have won!")
//     } else if ((insert[2].innerText == ("O" || "X")) && (insert[2].innerText == insert[5].innerText) && (insert[5].innerText == insert[8].innerText)) {
//         alert("You have won!")
//     } else if ((insert[0].innerText == ("O" || "X")) && (insert[0].innerText == insert[4].innerText) && (insert[4].innerText == insert[8].innerText)) {
//         alert("You have won!")
//     } else if ((insert[2].innerText == ("O" || "X")) && (insert[2].innerText == insert[4].innerText) && (insert[4].innerText == insert[6].innerText)) {
//         alert("You have won!")
//     }
// }

insert.forEach(function (square) {
    square.addEventListener('click', function () {
        if (a == 0 && square.innerText == "") {
            square.innerText = givemarker()
            winCondition()
            a = 1
        } else if (a == 1 && square.innerText == "") {
            square.innerText = givemarker()
            winCondition()
            a = 0
        }
    })
})

btn.addEventListener('click', function () {
    insert[0].innerText = ""
    insert[1].innerText = ""
    insert[2].innerText = ""
    insert[3].innerText = ""
    insert[4].innerText = ""
    insert[5].innerText = ""
    insert[6].innerText = ""
    insert[7].innerText = ""
    insert[8].innerText = ""
    a = 0
    document.getElementById("winner").innerHTML = ""
})
