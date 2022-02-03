var cookieBox = document.querySelector("#cookiemessage");


function removeMessage(){
    cookieBox.remove();
}

function c2f(temp){
    return Math.round(temp * (9/5) +32);
}

function  f2c(temp){
    return Math.round(5/9 * (temp -32));
}

function tempConvert(element){
    for(var i=1; i <9; i++){
        var temp = document.querySelector("#temp" + i);
        var tempVal = temp.innerHTML;
        if (element.value =="cel"){
            temp.innerHTML = f2c(tempVal);
        } else {
            temp.innerHTML = c2f(tempVal);
        }
    }
}