
    function num() {
    
    let a = document.getElementById("number").value;
      

        if (isNaN(a)) {
            document.getElementById("alert").innerText = "Please Enter A Number";
            document.getElementById("alert").style.display = "block";
          
        }
       
        else {
            document.getElementById("alert").innerText = "";
            document.getElementById("alert").style.display = "none";
          
        }
       
        function staff() {
            alert('Staff Profile Updating Soon');
        }
    }

    function num1(){
    let a = document.getElementById("number").value;
    
        try{
            if (isNaN(a)) 
    throw  "not a number";
    throw  ""
        }
        catch(err){
            document.getElementById("alert").innerHTML=err.message;
        }
    
   
   
       
    }


