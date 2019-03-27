function myFunction(id) {
    document.cal.result.value+=id;
}
function clearScreen() {
  document.cal.result.value="";
}
function calculate() {
  try {
    var input = eval(document.cal.result.value);
    document.cal.result.value=input;
} 
  catch(err){
      document.cal.result.value="Error";
    }
}
