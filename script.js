const qrInput = document.getElementById("qr-input");
const qrButton = document.getElementById("qr-button");
const qrImage = document.getElementById("qr-image");
const qrApp = document.querySelector(".container .qr-app")

qrButton.addEventListener("click", generateQR);

    
async function generateQR() {
    qrImage.classList.remove("effect");
    if (qrInput.value.length > 0) {
        let api = `https://api.api-ninjas.com/v1/qrcode?data=${qrInput.value}&format=png`;
        let request = new Request(api, {
        method: 'GET',
        headers: { 'X-Api-Key': `ENTER API KEY HERE`, 'Accept' : 'image/png'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        })

        let y = await fetch(request);
        let z = await (y.blob());
        let w = URL.createObjectURL(z);
        console.log(w);
        qrImage.src = w;
        qrImage.classList.add("effect");
    } else {
        qrApp.classList.add("error");
        setTimeout(() => {
            qrApp.classList.remove("error");
        }, 1000)
    }
}
