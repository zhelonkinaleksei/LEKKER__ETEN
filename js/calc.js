let calculationButton = document.querySelector('.calculation__button');
let countQuest = Number(document.getElementById('countquest').value);
let countsum = document.getElementById('countsum');
calculationButton.addEventListener('click', function(){
    let result = countQuest;
    countsum.innerHTML = result;
})