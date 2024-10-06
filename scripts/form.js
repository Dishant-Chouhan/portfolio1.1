const scriptURL = 'https://script.google.com/macros/s/AKfycbxxuwTSMfs2ePNb7gbb9WFXJhTe-_Or91fbKMXGNmWut1rWyulwMNkwTxu23cguo7Ilvw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})