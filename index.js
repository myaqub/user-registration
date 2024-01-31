

    


        // User authentication 
        const userInput = document.getElementById('username');
        const userError = document.getElementById('usernameError');

        //password length 
        const passwordInput = document.getElementById('password');
        const passwordInputerror = document.getElementById('passwordError');

        // confirmation password 
        const inputconfirmationpassword=document.getElementById("confirmPassword");
        const  inputconfirmationerror=document.getElementById("confirmPasswordError");

        //Email 
        const inputEmail =document.getElementById("email");

        const   mailerror= document.getElementById( "emailError");


        //user Name  length

        userInput.addEventListener('input', function() {      
        const userLenght = userInput.value.length;    
      if (userLenght <5) {
        userError.style.display ="inline";
        userError.textContent=" User Name  must be more the 6 character ";           
        
      } else {
        userError.textContent="   Available  ";
        userError.classList.add("accept");
        
        
      }
    });

    
        // password lenght 
        passwordInput.addEventListener('input', function() {      
        const passwordLength = passwordInput.value.length;    
      if (passwordLength < 8) {
        passwordInputerror.textContent=" Password lenght must be more the 5 ";  
        passwordInputerror.style.display="inline"     ; 
      } else {
        passwordInputerror.classList.add("accept");
        passwordInputerror.textContent=" Strong Password ";
      }
    });


      //  Password compare

    inputconfirmationpassword.addEventListener("input", function(){       

        if(inputconfirmationpassword.value !==passwordInput.value){          
            inputconfirmationerror.textContent=" password is not matcht";
            inputconfirmationerror.style.display="inline"    ;            
          
        }

        else {
            
            inputconfirmationerror.style.display="none"     ; 
            passwordInputerror.style.display="none"     ; 

        }       

    });

     // Validate email

            inputEmail.addEventListener("input", function(){

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputEmail.value)) {
                mailerror.textContent=" Write correct Email format";
                mailerror.style.display="inline"    ; 
  

             }

             else {

                mailerror.textContent=" goood";
               // mailerror.style.display="none"     ; 

            
             }


            });
     
            


             
    
    function  register(){

        const inputuserleng=userInput.value.length;
        const  inputpasslengh=passwordInput.value.length;

        if(! (inputuserleng<5)  && ! (inputpasslengh<8) ){

            const myconfirm=document.getElementById("myconfirm");
            const myform=document.querySelector(".myform");
            const myuser=document.getElementById("myuser");
            const email1=document.getElementById("email1");
            const password1=document.getElementById("password1");
            myform.style.display="none";

            myconfirm.style.visibility="visible";
            myuser.innerText=userInput.value;
            email1.textContent=inputEmail.value;
            password1.textContent=passwordInput.value;
            
            console.log(myuser);


            

            

            console.log(userInput.value);



        }

        else
        {
            myform.style.display="none";

            myconfirm.style.display="inline";
            document.write("form is empty");
            
        }
    }



  




