function playBot(){
  let botNum = Math.floor(Math.random() * 100);
  ask();

  function ask(){
    let userNum = prompt('Введите число от 1 до 100:');
    if (userNum === null) {
      alert('Игра закончена');
      return false;
    } else if (isNaN(userNum) || userNum.trim() == '') {
      alert( 'Введите число!'); 
    } else if (userNum > botNum) {
      alert('Загаданное число меньше!');
    } else if (userNum < botNum){
      alert('Загаданное число больше!');
    } else if (userNum == botNum) {
      alert('Правильно!');
      botNum = Math.floor(Math.random() * 100);
    }
    ask();
  }
}

playBot();
