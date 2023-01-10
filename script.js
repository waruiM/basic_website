console.log("its doing it")

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme("one")
}else{
    setTheme(theme)
}
// setting the event listener
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option clicked:',mode)
        setTheme(mode)
    })

}
function setTheme(mode){
    if(mode == "one"){
        document.getElementById("theme-style").href = "default.css"

    }
    if(mode == "two"){
        document.getElementById("theme-style").href = "second.css"

    }
    if(mode == "three"){
        document.getElementById("theme-style").href = "third.css"

    }
    if(mode == "four"){
        document.getElementById("theme-style").href = "four.css"

    }
    localStorage.setItem('theme',mode)

}