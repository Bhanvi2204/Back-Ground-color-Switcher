const button=document.querySelectorAll(".circle");
const body=document.querySelector("body");
button.forEach(function(circle){
    circle.addEventListener('click',function(color){
        if(color.target.id==='box1'){
            body.style.backgroundColor='aquamarine';
        }else if(color.target.id==='box2'){
            body.style.backgroundColor='tomato';
        }else if(color.target.id==='box3'){
            body.style.backgroundColor='hotpink';
        }else if(color.target.id==='box4'){
            body.style.backgroundColor='limegreen';
        }else if(color.target.id==='box5'){
            body.style.backgroundColor='blueviolet';
        }


    })
})