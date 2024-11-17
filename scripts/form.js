const scriptURL = 'https://script.google.com/macros/s/AKfycbyuaKlSETDwl62EQLYJaCYjmzYklfd9Jjp4d9TLD_xBnA0ubDHK0ELMDFJHXGdDBxvsEw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting Me..! I Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})