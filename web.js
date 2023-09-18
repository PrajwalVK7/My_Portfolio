function contact() {
    let name = uname.value;
    let email = uemail.value;
    let msg = utext.value;




    let feedback = { name, email, msg }
    console.log(feedback)
}

let bt1 = document.getElementById('typing-slider')
let ima = document.getElementById('po')
bt1.onmouseover = function(){
ima.style.color="green"

}
ima.onmouseleave=function(){
    bt1.style.color="green"
}


    // let anto=document.getElementById('anto')
    // anto.onmouseover=function(){
    // anto.style.color="pink"
    // }
    
    // var today = new Date();
    // var day = today.getDay();
    // var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;
  
    document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];