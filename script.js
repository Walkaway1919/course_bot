function playBot(){
  let botNum = Math.floor(Math.random() * 100);
  let count = 1;
  ask();
console.dir(ask);
  function ask(){
    let userNum = prompt('Введите число от 1 до 100:');
    if (userNum === null) {
      alert('Игра закончена');
      return false;
    } else if (isNaN(userNum) || userNum.trim() == '') {
      // (count - 1); - если мы не хотим считать это за попытку
      alert( 'Введите число!'); 
    } else if (userNum > botNum) {
      if(count == 10){
        if ( !confirm('Попытки закончились, хотите сыграть еще?') ){
          alert('Спасибо за игру!');
          return false;
        }
        botNum = Math.floor(Math.random() * 100);
        count = 0;
      } else {
        alert(`Загаданное число меньше, осталось попыток ${10 - count}`);
      }
    } else if (userNum < botNum) {
      if(count == 10){
        if ( !confirm('Попытки закончились, хотите сыграть еще?') ){
          alert('Спасибо за игру!');
          return false;
        }
        botNum = Math.floor(Math.random() * 100);
        count = 0;
      } else {
        alert(`Загаданное число больше, осталось попыток ${10 - count}`);
      }
    } else if (userNum == botNum) {
      if ( !confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') ){
        alert('Спасибо за игру!');
        return false;
      }
      count = 0;
      botNum = Math.floor(Math.random() * 100);
    }
    count++; 
    ask();
  }
}

playBot();

