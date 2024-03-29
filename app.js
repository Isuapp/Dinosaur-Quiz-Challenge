const correctAnswers=['A', 'A', 'B', 'A'];
const form=document.querySelector('.quiz-section');
const result=document.querySelector('.scoreContainer');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);
    userAnswers.forEach((answers, index) => {
        if( answers === correctAnswers[index]){
            score += 25;
        }
    });
    scrollTo(0,0);
    let output=0;
    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    })
    
    result.style.display='flex';
}); 
