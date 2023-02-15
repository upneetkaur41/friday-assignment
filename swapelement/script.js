
   function moveButton(elem){
    if( $(elem).parent().attr("id")=="b1"){
       $(elem).appendTo("#b2");
    }else{
       $(elem).prependTo("#b1");
    }
 }
