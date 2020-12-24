const body = document.querySelector('body');
let navTemplate = `
    <nav>
        <ul class="nav-items">
            <li class="nav-item logo">Nicholas Klaene</li>
            <li class="nav-item"><a href="index.html">Work</a></li>
            <li class="nav-item"><a href="about.html">About</a></li>
            <li class="nav-item"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`
let footerTemplate = `
    <footer>
        <p class="icons">
            <a href="https://github.com/nicholasklaene" class="fab fa-github"></a>
            <a href="https://www.linkedin.com/in/nicholas-klaene/" class="fab fa-linkedin-in"></a>
            <a href="mailto:nicholasklaene@gmail.com" class="fas fa-envelope"></a>
        </p>
        <p class="copy">Nicholas Klaene &copy; 2020</p>
    </footer>
`

if (location.href.split("/").slice(-1) == "about.html") {
  footerTemplate = `
  <footer class="footer-about">
      <p class="icons">
          <a href="https://github.com/nicholasklaene" class="fab fa-github"></a>
          <a href="https://www.linkedin.com/in/nicholas-klaene/" class="fab fa-linkedin-in"></a>
          <a href="mailto:nicholasklaene@gmail.com" class="fas fa-envelope"></a>
      </p>
      <p class="copy">Nicholas Klaene &copy; 2020</p>
  </footer>
`
};


htmlToElement = html => {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

const navHTML = htmlToElement(navTemplate);
const footerHTML = htmlToElement(footerTemplate);
body.prepend(navHTML);
body.append(footerHTML);

// API
(() => {
  const form = document.querySelector('form');
  const submitResponse = document.querySelector('#response');
  const formURL = 'https://uw9atfv9zl.execute-api.us-east-1.amazonaws.com/Prod/submitForm';

  form.onsubmit = e => {
    e.preventDefault();

    // Capture the form data
    let data = {};
    Array.from(form).map(input => (data[input.id] = input.value));
    delete data.submit;
    console.log('Sending: ', JSON.stringify(data));
    submitResponse.innerHTML = 'Sending...';

    // Create the AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, formURL, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = response => {
      if (response.target.status === 200) {
        form.reset();
        submitResponse.innerHTML = 'Message sent!';
      } else {
        submitResponse.innerHTML = 'Error! Please try again.';
        console.error(JSON.parse(response));
      }
    };
  };
})();