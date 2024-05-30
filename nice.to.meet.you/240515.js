alert("welcome!")
var _name = prompt('Input your name!')
document.write(`nice to meet you, ${ _name }<br>`)
let level = prompt(alert("Input your grade! (A/B/C)"))
function _grade (level) {
    switch (level) {
        case "A":
            document.write("you are A")
            break
        case "B":
            document.write("you are B")
            break
        case "C":
            document.write("you are C")
            break
        default:
            let level = prompt(alert("Input your grade again! *(A/B/C)"))
            _grade(level) // Àç±ÍÇÔ¼ö
            break
    }
}
_grade(level)

