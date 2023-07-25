document.querySelector('form').addEventListener('submit' , (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    closeicons= document.querySelector('.colse')
    closeIcons= document.querySelector('.colsese')
    right = document.querySelector('.right')
    wrong = document.querySelector('.wrong')

    if(name.length>0 ){
        right.classList.add('active');
        setTimeout(() => {
            right.classList.remove('active');
        },4000)
    }  
    else{
        wrong.classList.add('active');
        setTimeout(() => {
            wrong.classList.remove('active');
            
        },3000)

    }
    if(password.length>8){
        right.classList.add('active');
        setTimeout(() => {
            right.classList.remove('active');
    
        },3000)
    }
    else{
        wrong.classList.add('active');
        setTimeout(() => {
            wrong.classList.remove('active');
            
        },4000)
    }
    closeicons.addEventListener ('click' , () => {
        right.classList.remove('active');
       
    })
    closeIcons.addEventListener ('click' , () => {
        wrong.classList.remove('active');
       
    })

})







