//Counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //Make a counter req to endpoint
    
    // capture the req and store in variable
    
    
    //render the variable in correct span
    counter=counter + 1;
    var span=document.getElementById('count');
    
    span.innerHTML=counter.toString();
    
    
    
};