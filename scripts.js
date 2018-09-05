window.onload = function () {
    with (document) {
        var charElements = getElementsByClassName("CharOnly");
        var numElements = getElementsByClassName("NumOnly");
        var emailElements = getElementsByClassName("EmailOnly");
        for (var i in charElements) {
            if (typeof (charElements[i]) === 'object') {
                charElements[i].addEventListener('keypress', function () {
                    var code = event.KeyCode || event.which;
                    if ((code < 65 || code > 90) &&
                        (code < 97 || code > 122) &&
                        (code != 32 || code != 13 || code != 8 || code != 9)) {
                        event.preventDefault();
                        document.getElementById("error").innerHTML = "Invalid Charater";
                        //this.value = (this.value)
                    }
                    else{
                        document.getElementById("error").innerHTML = "";
                    }
                });
            }
        }
        i = null;
        for (var i in numElements) {
            if (typeof (charElements[i]) === 'object') {
                numElements[i].addEventListener('keypress', function () {
                    var code = event.KeyCode || event.which;
                    if ((code < 48 || code > 57) &&
                        (code != 32 || code != 13 || code != 8 || code != 9)) {
                        event.preventDefault();
                        document.getElementById("error").innerHTML = "Invalid Number";
                        //return false;
                        //this.value = (this.value)
                    }else{
                        document.getElementById("error").innerHTML = "";
                    }
                });
            }
        }
        if (typeof (emailElements[0]) === 'object') {
            emailElements[0].addEventListener('blur', function () { //for lost focus event
                //var code = event.KeyCode || event.which;
                console.log(emailElements[0].value);
                var email = emailElements[0].value;

                var posAt = email.indexOf('@');
                var posDot = email.indexOf('.');
                var posDot_1 = email.indexOf('.',parseInt(posDot+1))
                if(posDot_1>=0){
                    posDottt = posDot_1;
                }else{
                    posDottt = posDot;
                }
                console.log(posAt,posDot,posDottt);
                if(posAt < 3 || posDottt < 6 || (email.length <= posDottt+2)){
                    document.getElementById("error").innerHTML = "Invalid Email";
                }else{
                    document.getElementById("error").innerHTML = "";
                }
            });
        }
    }
}
// function valid(){
//     var code = event.KeyCode || event.which;
//     if((code < 65 || code >90) &&
//        (code < 97 || code > 122) && 
//        (code != 32  || code != 13  || code != 8  || code != 9)){
//            //event.preventDefault();
//            return false;
//            //this.value = (this.value)
//         }
// }