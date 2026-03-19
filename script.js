function openWhatsApp(message){

let phone = "919999999999"; // 👉 replace with your number

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

}
