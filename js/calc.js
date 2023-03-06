let calculationButton = document.querySelector('.calculation__button');
let countsum = document.getElementById('countsum');
calculationButton.onclick =  function(){
    let countQuest = Number(document.getElementById('countquest').value);
    let countChild = Number(document.getElementById('countchild').value);
    let countAdult = Number(document.getElementById('countadult').value);
    let countHour = Number(document.getElementById('counthour').value);
    let resultsum = countQuest*2000; 
    if(countQuest > 200){
        alert('Количество гостей не может быть больше 200');
    }
    else{

    countsum.innerHTML = resultsum;
    }
    
   
};


    
