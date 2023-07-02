let form = document.getElementById('email-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest;
    xhr.open('post','/send_email');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
            alert('Email sent');
            name.value = '';
            email.value = '';
            message.value = '';
        }
        else{
            alert('something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData));
})