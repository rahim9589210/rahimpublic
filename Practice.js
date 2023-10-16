function compute(){
    var number=document.getElementById('screen').value// get str
    document.getElementById('result').value = eval(number); // eval str and output
    document.getElementById('screen').value="";  
}
//clear screen
function clearScreen(){
    document.getElementById('screen').value="";
    document.getElementById('result').value=""; 
}



//professor Re .Thansk you for your kind and help.
                                              
function number(value){
                var strOut = document.getElementById("screen").value;
                if (strOut == "0"){
                    strOut="";
                }
                strOut += value;
                document.getElementById("screen").value = strOut;
            }
function persentSelect(value){
    var number=document.getElementById('screen').value
    document.getElementById('result').value = eval(number/100) 
}

//same used for operator from professor Re
function operatorSelect(value){
    var strOut = document.getElementById("screen").value;
    if (strOut == "0"){
    strOut="0";
     }
     strOut += value;
     document.getElementById("screen").value = strOut;
     }


            //professor Re.
function dotSelect(value){
    var strOut = document.getElementById("screen").value;     
            //if statement needed
     if (!strOut.includes(".")){
        strOut += value;
        document.getElementById("screen").value = strOut;
              }
              
            }
//professor Re.
function signSelect(){
  strOut = document.getElementById("screen").value;
  if (!strOut.includes("-")){
       strSign = '-';
      strSign += strOut;
      strOut = strSign;
      document.getElementById("screen").value = strOut;
        }else{
            //place code to remove the negative sign
        }
  }
//professor Re.
function myCode (){
     var myArray = [45,2,4,6,8,10,12]
     sumArray(myArray)
              }
 function sumArray (intArray){
        var total = 0;
        for (var i = 0; i < intArray.length; i++){
         total += intArray[i];
        }
        return total;
}
