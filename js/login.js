function login(event) {
    event.preventDefault();
    let email = document.getElementById("exampleInputEmail").value;
    let email2 = localStorage.getItem("email");

    let password = document.getElementById("exampleInputPassword").value;
    let password2 = localStorage.getItem("password");

    if ( (email && password) == (email2 && password2) ) {
        localStorage.setItem("hasLogin", true);
        window.location.replace('../login.html');
    } else {
        return swal("PERINGATN!", "Passord atau Email Salah");
    }
}

const checklogin = () => {
    let hasLogin = localStorage.getItem('hasLogin');
    if (hasLogin == "true") {
        window.location.replace('../login.html');
    }
}

checklogin();