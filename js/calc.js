 

let calculationButton = document.querySelector('.calculation__button');
let countsum = document.getElementById('countsum');
let countMiddleCost = document.getElementById('countmiddlecost');
calculationButton.onclick =  function(){
    let countQuest = Number(document.getElementById('countquest').value);
    let countChild = Number(document.getElementById('countchild').value);
    let countAdult = Number(document.getElementById('countadult').value);
    let countHour = Number(document.getElementById('counthour').value);
   
    if(countChild + countAdult> countQuest)
    alert('Количество взрослых и детей не может быть больше общего количества гостей');
    else
    if((countChild + countAdult != countQuest))
    alert('Количество взрослых и детей в сумме должно совпадать с общим количеством гостей');
    else
    resultsum = (countQuest*3000) + (countHour*3000); 
    countsum.innerHTML = resultsum;
    resultmiddle = resultsum / countQuest;
    countMiddleCost.innerHTML = resultmiddle.toFixed(1);
    if(countQuest > 200){
        alert('Количество гостей не может быть больше 200');
    }
    else
    if(countChild + countAdult >200)
        alert('Количество гостей не может быть больше 200') ;
    else    
    if(countQuest<20){
    countQuest = countChild + countAdult;
    resultsum = (countQuest*3000) + (countAdult*3000) + (countChild*2000) + (countHour*3000); 
    countsum.innerHTML = resultsum;
    resultmiddle = resultsum / countQuest;
    countMiddleCost.innerHTML = resultmiddle.toFixed(1);
    }
    
   
};


    
