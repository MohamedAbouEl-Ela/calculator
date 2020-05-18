
function get_number(aaa){
    var num = document.getElementById("show");   
        num.value=num.value+aaa;
}

function get_operator(op){
    var opto = document.getElementById("show");
        opto.value= opto.value+op;
}

function get_result(){
    var reslt = document.getElementById("show");
        var ans = eval(reslt.value);
    document.getElementById("result").value="="+ans;

}

function backspace(){
    var skp=document.getElementById("show");
    var x = skp.value;
      x = x.substring(0,x.length-1);
        skp.value = x;
}

function get_clear(){
    var input_var = document.getElementById("show");
    input_var.value=" " ;
}