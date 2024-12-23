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


document.getElementById('mody').addEventListener('click', function() { 
  const input = document.getElementById('Prog1').value; 
  const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num)); 
  
  if (numbers.length === 0) { 
  document.getElementById('result').innerText = 'Введите корректные числа.'; 
  return; 
  } 
  
  const frequency = {}; 
  let maxCount = 0; 
  let mode = null; 
  
  // Подсчет частоты каждого числа 
  numbers.forEach(num => { 
  frequency[num] = (frequency[num] || 0) + 1; 
  if (frequency[num] > maxCount) { 
  maxCount = frequency[num]; 
  mode = num; 
  } 
  }); 
  
  if (maxCount > 1) { 
  document.getElementById('result').textContent = `Мода: ${mode} (встречается ${maxCount} раз)`; 
  } else { 
  document.getElementById('result').textContent = 'Моды нет (все числа встречаются одинаково)'; 
  } 
  });


  function dis(array) { 
    let sum = 0; 
    let n = 0; 
    let sred = 0; 
    let SUM = 0; 
    let N; 
    for (i = 0; i < array.length; i++) { 
    sum=sum+array[i]; 
    n=n+1; 
    } 
    N=n; 
    sred=sum/n; 
    for (j = 0; j < array.length; j++) { 
    SUM += Math.pow((array[j] - sred), 2); 
    } 
    
    let S2=SUM/(N-1); 
    return (S2); 
   } 
    
   document.getElementById('dispersia').addEventListener('click', function() { 
    const input = document.getElementById('Prog1').value; 
    const array = input.split(',').map(Number); // Преобразуем строку в массив чисел 
    const disValue = dis(array); 
    document.getElementById('result').textContent = 'Дисперсия: ' + disValue; 
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
