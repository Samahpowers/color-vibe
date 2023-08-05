

const addUserform  = document.querySelector(".add")
const forms = document.querySelector(".forms")
const signUp = document.getElementById("sup")
const main =document.querySelector(".main")

const signInModel = document.querySelector(".form-si")
const signInForm = document.querySelector(".si")
const signInbutton = document.querySelector("#sibtn")

document.addEventListener("click", (e)=>{
if(signUp.contains(e.target)){
forms.style.display = "block"
}else if(forms.contains(e.target)){
  forms.style.display = "block"
  
} else {
  forms.style.display = "none"
}
if(signInbutton.contains(e.target)){
  signInModel.style.display = "block"
  
}else if(signInForm.contains(e.target)){
signInModel.style.display = "block"
} else{
  signInModel.style.display = "none"
}
})


document.getElementById('userForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const currentUser = document.getElementById("current-user")
            const data = { name, email, phone };
            console.log(data)
            try {
                const response = await fetch("http://localhost:5001/api/users/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const user = await response.json();
                console.log('User created:', user);
              currentUser.innerText= user.name
            } catch (error) {
                console.error('Error creating user:', error.message);
            }
        });
        