form = document.getElementById('contact_form');
form_title = document.getElementById("form_title");

function submission() {
    console.log('Form Submitted!');
    form_title.innerText = "Mesajul a fost trimis! Il vom citi!";
    form.style.opacity = "0";
}