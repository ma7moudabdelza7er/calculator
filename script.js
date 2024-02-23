let btnn=document.querySelectorAll('.btn');
let myinput=document.querySelector('.screen');
let myClear=document.querySelector('.btn-clear');
let myequal=document.querySelector('.btn-equal');
btnn.forEach(function(button){
    button.addEventListener('click',function(e){
        let value= e.target.dataset.num;
        myinput.value +=value;
        console.log(value)
        

    })
    
});
myequal.addEventListener('click',function(e){
    if(myinput.value === ''){
        myinput.value = "please enter";
    }else{
        let answer=eval(myinput.value);
        myinput.value=answer;
    }
})
myClear.addEventListener('click',function(e){
    myinput.value="";
})