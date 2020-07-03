function hidden() {
    document.querySelector("style").innerHTML = `
    #mobile {
        display: none;
    }
    `
}

function hapusData() {
    const classDynamic = document.querySelector("#mobile")
    const hapus = document.querySelector(".hapus")
    classDynamic.removeAttribute("class")
    hapus.setAttribute("id", "burger")
    hidden()
    } 
  
function responsiveNav() {
    const burger = document.querySelector("#burger")
    if(burger){
            document.querySelector("#mobile").classList.add("nav-mobile")
            burger.removeAttribute("id")
            burger.classList.add("hapus")

            document.querySelector("style").innerHTML= ""
    } else {
        hapusData()
    }
}
    hidden()

    
