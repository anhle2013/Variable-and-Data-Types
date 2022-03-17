function Show(){
    var Amo_id = parseFloat(document.getElementById("idAmount").value);
    //var PA = parseInt(Amo_id);
    var From = document.getElementById("FromCurrency").value;
    var ToCu = document.getElementById("ToCurrency").value;
    var KQ;
    if(From == "VietNam"){
        if(ToCu == "VND"){
            document.getElementById("demo").innerHTML = Amo_id + " VND";
        }else if(ToCu == "USD"){
            KQ = Amo_id / 23000;
            document.getElementById("demo").innerHTML = KQ + " USD";
        }else {
            KQ = Amo_id / 16645.02
            document.getElementById("demo").innerHTML = KQ + " AUD";
        }
    }else if(From == "My"){
        if(ToCu == "USD"){
            document.getElementById("demo").innerHTML = Amo_id + " USD";
        }else if(ToCu == "VND"){
            KQ = Amo_id * 23000;
            document.getElementById("demo").innerHTML = KQ + " VND";
        }else {
            KQ = Amo_id * 1.3738
            document.getElementById("demo").innerHTML = KQ + " AUD";
        }
    }
    else {
        if(ToCu == "AUD"){
            document.getElementById("demo").innerHTML = Amo_id + " AUD";
        }else if(ToCu == "VND"){
            KQ = Amo_id * 16645.02;
            document.getElementById("demo").innerHTML = KQ + " VND";
        }else {
            KQ = Amo_id / 1.3738
            document.getElementById("demo").innerHTML = KQ + " USD";
        }
    }
}