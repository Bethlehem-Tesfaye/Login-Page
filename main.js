let container = document.querySelector(".container");
let divOne = document.querySelector(".div-1");
let divTwo = document.querySelector(".div-2");
let signIn = document.querySelector(".div-1 .sign-in");
let signUp = document.querySelector(".div-2 .sign-in");

let stat = false;

function slide(){
    let div2H1 = document.querySelector(".div-2 h1");
    let div2P = document.querySelector(".div-2 p");
    let div2Name = document.querySelector(".div-2 #name");
    let div1H1 = document.querySelector(".div-1 h1");
    let div1P = document.querySelector(".div-1 p");

    if(stat==false){
        divOne.style.cssText="right:-50%; background-color:rgb(219, 72, 19); z-index:2;";
        divTwo.style.cssText="left:-50%";   

        div1H1.style.visibility = "hidden";
        div1P.style.visibility = "hidden";
        div2H1.style.visibility = "hidden";
        div2P.style.visibility = "hidden";
        div2Name.style.visibility = "hidden";
        signIn.style.visibility = "hidden";
        signUp.style.visibility = "hidden";
         
        div2H1.innerHTML="Sign in";
        div2P.innerHTML="Login with Email & Password";
        div2Name.style.display="none";
        signUp.innerHTML="Sign In"     
        div1H1.innerHTML="Hi coder's";
        div1P.innerHTML='Join "Code With Patel" to improve your coding skills';
        signIn.innerHTML="Sign Up";

        setTimeout(()=>{ 

            div1H1.style.visibility = "visible";
            div1P.style.visibility = "visible";
            div2H1.style.visibility = "visible";
            div2P.style.visibility = "visible";
            div2Name.style.visibility = "visible";
            signIn.style.visibility = "visible";
            signUp.style.visibility = "visible";
        }, 500)

        stat=true;

    }

    else if(stat==true){


        div1H1.style.visibility = "hidden";
        div1P.style.visibility = "hidden";
        div2H1.style.visibility = "hidden";
        div2P.style.visibility = "hidden";
        div2Name.style.visibility = "hidden";
        signIn.style.visibility = "hidden";
        signUp.style.visibility = "hidden";
        

        divOne.style.cssText="right:0%; background-color:rgb(219, 72, 19); z-index:2;";
        divTwo.style.cssText="left:0%;  ";
 
        div2H1.innerHTML="Create Account"; 
        div2P.innerHTML="Register with Email"; 
        div2Name.style.display="block";
        signUp.innerHTML="Sign Up"
     
        div1H1.innerHTML="Welcome To Code with Patel"; 
        div1P.innerHTML='Sign in with ID & Password';
        signIn.innerHTML="Sign In";


        setTimeout(()=>{
            div1H1.style.visibility = "visible";
            div1P.style.visibility = "visible";
            div2H1.style.visibility = "visible";
            div2P.style.visibility = "visible";
            div2Name.style.visibility = "visible";
            signIn.style.visibility = "visible";
            signUp.style.visibility = "visible";
        }, 500)

        stat=false;

    }  
       
}

// add event listner

signIn.addEventListener("click" , function(event){
   
    event.preventDefault();
    slide();
})

