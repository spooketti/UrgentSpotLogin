let unEL = document.getElementById("Username")
let pwEL = document.getElementById("Password")

function login()
{
    un = unEL.value
    pw = pwEL.value
    let loginBody = {uid:un,
                    password:pw}
    
    fetch("http://127.0.0.1:8086/api/users/authenticate",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(loginBody)
    }).then(response =>{
        if(response.ok)
        {
            console.log(resposne.json())
        }
        else
        {
            console.log(response.status)
        }
    })
}
