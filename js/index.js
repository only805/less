(function(){
    var html=document.documentElement;
    var width=html.getBoundingClientRect().width; 
    if(width>768){return width=768;}  
    html.style.fontSize=width/(640/20)+'px';   
})();

