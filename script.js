const form = document.querySelector('form');
const nextBtnEl = document.querySelector('.nextBtn');
const backBtnEl = document.querySelector('.backBtn');
const allInputEl = document.querySelectorAll('.first input');

nextBtnEl.addEventListener('click',()=>{
    allInputEl.forEach(input =>{
        if(input.value !='')
        {
            form.classList.add('secActive');
        }
        else
        {
            form.classList.remove('secActive');
        }
    })
})

backBtnEl.addEventListener('click',()=>form.classList.remove('secActive')); 
