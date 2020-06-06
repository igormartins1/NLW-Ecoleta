const buttonSearch = document.querySelector("page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventlistener("click", () => { 
    modal.classList.remove("hide")
})

close.addEventlistener("click",() => {
    modal.classList.add("hide")
})


