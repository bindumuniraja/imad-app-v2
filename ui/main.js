//Counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //create a request
    var request= new XMLHttpRequest();
    // capture the req and store in variable
    
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest().DONE) {
           //take some action
           if(request.status === 200){
               var counter= request.responseText;
               var span=document.getElementById('count');
           }
       }
       //not done
    };
    //make a request
    
    request.open('GET',"http://bindumuniraja.imad.hasura.io/counter",true);
    request.send(null);
    
};