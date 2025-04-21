fetch("https://ciisa.coningenio.cl/v1/services/", {
    headers: { Authorization: "Bearer ciisa" }
})
.then(response => response.json())
.then(data => console.log("Servicios:", data));

fetch("https://ciisa.coningenio.cl/v1/about-us/", {
    headers: { Authorization: "Bearer ciisa" }
})
.then(response => response.json())
.then(data => console.log("Nosotros:", data));