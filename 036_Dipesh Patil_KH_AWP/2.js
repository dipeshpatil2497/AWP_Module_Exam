let Submitinfo = () => {
    let username = document.querySelector("#Getusername").value;

    let putinspan = document.querySelector("#Showuser");

    putinspan.textContent = username;

    document.querySelector("#Getusername").value = "";


    let password = document.querySelector("#Getpass").value;

    let putpassspan = document.querySelector("#Showpass");

    putpassspan.textContent = password;

    document.querySelector("#Getpass").value = "";


    let Gotmail = document.querySelector("#Getemail").value;

    let putmailinspan = document.querySelector("#Skowmail");

    putmailinspan.textContent = Gotmail;

    document.querySelector("#Getemail").value = "";

}