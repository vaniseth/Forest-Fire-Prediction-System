(function ($) {
    // USE STRICT
    "use strict";
    $( "#date_from" ).datepicker({
        dateFormat: "dd-mm-yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
    });

    $( "#date_to" ).datepicker({
        dateFormat: "dd-mm-yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
    });

})(jQuery);
function Tang(){
    var x = document.getElementById("quantity").value;
    if(parseInt(x) >= 0){
        document.getElementById("quantity").value = parseInt(x) +1;
    }
}
function Giam(){
    var x = document.getElementById("quantity").value;
    if(parseInt(x) >= 1){
        document.getElementById("quantity").value = parseInt(x) -1;
    }
}