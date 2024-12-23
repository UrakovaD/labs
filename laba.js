function max(array) {
  let maximum = array[0];
  for (i = 1; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    }
  }
  return maximum;
}
document.getElementById('max').addEventListener('click', function() {
    const input = document.getElementById('Prog1').value;
    const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
    const maximumValue = max(array);
    document.getElementById('result').textContent = 'Максимальное значение: ' + maximumValue;
});





function min(array) {
  let minimum = array[0];
  for (i = 1; i < array.length; i++) {
      if (minimum > array[i]) {
          minimum = array[i];
      }
  }
  return minimum;
}
document.getElementById('min').addEventListener('click', function() {
  const input = document.getElementById('Prog1').value;
  const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
  const minimumValue = min(array);
  document.getElementById('result').textContent = 'Минимальное значение: ' + minimumValue;
});

function sr(array) {
  let sum=0;
  let n=0;
  let sred=0;
  for (i = 0; i < array.length; i++) {
    sum=sum+array[i];
    n=n+1;
  }
  return (sum/n);
}
document.getElementById('sred').addEventListener('click', function() {
  const input = document.getElementById('Prog1').value;
  const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
  const srValue = sr(array);
  document.getElementById('result').textContent = 'Выборачная средняя: ' + srValue;
});

function mediana(array) {
  let n=0;
  let sum;
  for (i = 0; i < array.length; i++) {
        n=n+1;
        if  (n%2===0){
            sum=(array[(n/2)-1]+array[n/2])/2;
        }
        else
        {
            sum=array[(n-1)/2]
        }
  }
  return sum;
}
document.getElementById('mediana').addEventListener('click', function() {
  const input = document.getElementById('Prog1').value;
  const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
  const medianaValue = mediana(array);
  document.getElementById('result').textContent = 'Медиана: ' + medianaValue;
});

function RazMax(array) {
  let maximum = array[0];
  let minimum = array[0];
  let sum;
  for (i = 1; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    }
  }
  for (i = 1; i < array.length; i++) {
    if (minimum > array[i]) {
        minimum = array[i];
    }
  }
  return(maximum-minimum);
}
document.getElementById('razmah').addEventListener('click', function() {
  const input = document.getElementById('Prog1').value;
  const array = input.split(',').map(Number); // Преобразуем строку в массив чисел
  const razValue = RazMax(array);
  document.getElementById('result').textContent = 'Размах: ' + razValue;
});















function подброситьМонетку() {
  // Генерируем случайное число от 0 до 1
  var случайноеЧисло = Math.random();
  
  // Определяем орел или решка
  var результат = случайноеЧисло < 0.5 ? "Орёл" : "Решка";
 
  // Выводим результат
  document.getElementById("результат").innerText = "Результат: " + результат;
  
  // Обновляем статистику
  обновитьСтатистику(результат);
  }
  
  function обновитьСтатистику(результат) {
  var статистика = JSON.parse(localStorage.getItem("статистика")) || { орёл: 0, решка: 0 };
  
  // Увеличиваем соответствующий счетчик
  статистика[результат.toLowerCase()]++;
  
  // Обновляем локальное хранилище
  localStorage.setItem("статистика", JSON.stringify(статистика));
  
  // Выводим подсказку с вероятностью выпадения орла
  var вероятностьОрла = (статистика["орёл"] / (статистика["орёл"] + статистика["решка"])) * 100;
  document.getElementById("подсказка").innerText = "С какой вероятностью выпадет Орёл: " + вероятностьОрла.toFixed(2) + "%";
  }
