const toggleDisneyOffer = (event) => {
    document.getElementById("disney-detail-offer").classList.remove("d-none")

    const toggleElements = document.querySelectorAll(".toggle-disney")
    if (event.target.value == "estandar") {
        document.getElementById("price-display-disney").innerHTML = `<span>$</span>219`
        document.getElementById("advertisement").innerHTML = null
        document.getElementById("offer-disney").innerHTML = `Disney+ Estándar`
        document.getElementById("devices-disney").innerHTML = `Hasta 2 dispositivos en simultáneo`
        toggleElements.forEach((el) => el.classList.add("d-none"))
    } else {
        document.getElementById("devices-disney").innerHTML = `Hasta 4 dispositivos en simultáneo`
        document.getElementById("offer-disney").innerHTML = `Disney+ Premium`
        document.getElementById("advertisement").innerHTML = `Sin anuncios`
        document.getElementById("price-display-disney").innerHTML = `<span>$</span>299`
        toggleElements.forEach((el) => el.classList.remove("d-none"))
    }

}
