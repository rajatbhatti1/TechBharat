function openWhatsApp(message){

let phone = "919050358180"; // 👉 replace with your number

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

}
