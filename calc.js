const val= document.getElementById('inp');
function myad(v){
    val.value +=v;
}
function per(v){
    val.value +=v;
}
function equal(v){
    val.value =eval(val.value)
}
function cmyad(v){
    val.value=val.value.substr(0,val.value.length-1)
}
function cancel(v){
    val.value = ' '
}