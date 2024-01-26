function userregistration() {   
    
    const userNameArray = ["yaqub", "ali", "asad", "abid", "abida"];
    
    const inputname=document.getElementById("username");
    const inputpass=document.getElementById("password");
    const btnsubmit=document.getElementById("btn");
    const usererror=document.getElementById("usererror")
    const passworderror=document.getElementById(password);
    const valueToCheck=inputname.value

    console.log( inputname.value,inputpass.value);

    if (userNameArray.includes(valueToCheck)) {
        usererror.textContent=valueToCheck +" already found";
        console.log(userNameArray.length);
  
  } else {

    userNameArray.push(valueToCheck);
    usererror.innerHTML="<p>  User Register Successful</p>";
    console.log(userNameArray.length);
  
}
    

}

    