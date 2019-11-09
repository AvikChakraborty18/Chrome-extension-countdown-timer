$(function(){
    
    var variable = 5;
    var element = "<div id='countDownWrapper'> <h3> Count Down </h3> <br> <h1 id='countDownTime'> " + variable + "</h1><br><h3>Sec</h3></div>"
    $('#body').prepend(element);
    var pageTitle = "Google ("+ variable + " sec)"
    document.title = pageTitle;
   
    
     let changeCounter = () => {
        if(variable > 0) {
            variable = variable - 1;
            changeTimer(variable);
            changeTitle(variable);
        }
        else{
             location.replace('https://news.google.com/');
        }
      
    }
    
    setInterval(changeCounter, 1000);

    function changeTimer(variable){
       $('#countDownTime').html(variable);
    }

    function changeTitle(variable){
        var pageTitle = "Google ("+ variable + " sec)"
        document.title = pageTitle;
    }

});