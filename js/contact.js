// API
(() => {
    const form = document.querySelector('form');
    const submitResponse = document.querySelector('#response');
    const formURL = 'https://uw9atfv9zl.execute-api.us-east-1.amazonaws.com/Prod/submitForm';

    form.onsubmit = e => {
        e.preventDefault();

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