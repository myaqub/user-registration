

    


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

       //     if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '')
            console.log("Okkkk");


        }

        else
        {
            console.log("not good ");
        }
    }



  




