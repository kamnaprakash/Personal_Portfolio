var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Software Developer.'],
    typeSpeed: 50,
  });

const scriptURL = 'https://script.google.com/macros/s/AKfycbw7eHRfpS3IGm2kQ2oUM0wM0LjbF7tBy-4FaCNUTFz013UNMurzKWR8_4P8zYLqHLcZ/exec'
    const form = document.forms['submit-to-google-sheet']

 
    form.addEventListener('submit', e => {
      e.preventDefault()
      alert("Message sent successfully");
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})

        .then(response => {
           form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });