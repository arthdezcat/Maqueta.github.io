function percentage_1() {
  
    // Method returns the element of percent id
    var percent = document.getElementById("percent").value;
      
    // Method returns the element of num id
    var num = document.getElementById("num").value;

    document.getElementById("value1")
        .value = (num / 100) * percent;
    var value1 = document.getElementById("value1").value;

    document.getElementById("value2")
        .value =(parseInt(num)+parseInt(value1));    
}