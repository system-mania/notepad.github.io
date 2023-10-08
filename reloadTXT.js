$(document).ready(function(){
    if($.localStorage.isSet("txtName") || $.localStorage.isSet("txtContent")){
        $('#txtName').val($.localStorage.get('txtName'));
        $('#txtContent').val($.localStorage.get('txtContent'));
    }
});