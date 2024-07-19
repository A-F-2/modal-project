const $ = document

let sectionElem = $.getElementsByTagName("section")

let sectionElemMain = sectionElem[0]

let btnElem = $.querySelector("#btn")

let modal = $.querySelector(".modal-parent")

let xBtn = $.querySelector(".X")

btnElem.addEventListener("click", function () {
    modal.style.display = "block"
    sectionElemMain.style.filter = "blur(10px)"
})

xBtn.addEventListener("click", function () {
    modal.style.display = "none"
    sectionElemMain.style.filter = "blur(0px)"
})

$.body.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none"
        sectionElemMain.style.filter = "blur(0px)"
        btnElem.blur()
    }
})