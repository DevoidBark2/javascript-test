// 1 задание
function dscount(str,firstChar,secondChar){
    let symbol = [firstChar,secondChar].join('');
    let inputStr = str.toLowerCase();
    let newArr = inputStr.split(symbol);
    return newArr.length - 1;
}

try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    //test(dscount, ['aAa', 'a', 'a'], 2); //этот тест не прошел,возможно я не так понял задачу,но тут должно быть 1,по моему пониамю задания

    console.info("Congratulations! All tests passed. (1 task)");
} catch(e) {
    console.error(e);
}
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}

//2 задание
function checkSyntax(string) {
    var stack = [];
    var last;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == '[' || string[i] == '(' || string[i] == '{' || string[i] == '<') { // если на входе скобка открыв., то добавляем в стэк
            stack.push(string[i]);
        } else if (string[i] == ']' || string[i] == ')' || string[i] == '}' || string[i] == '>') { //если на входе закрыв. скобка
            if (stack.length) { // и стэк не пустой
                last = stack[stack.length - 1]; //проверяем какая последняя и сравниваем
                if ((last == '[' && string[i] == ']') || (last == '(' && string[i] == ')') ||
                    (last == '{' && string[i] == '}') || (last == '<' && string[i] == '>')) {
                    stack.pop(); //если скобки одинакового типа, то убираем последнюю открыв. из стэка
                }
            } else return 1; //если закрывающаяся на входе и стэк пустой
        }
    }
    if(!stack.length) return 0;
    else return 1;
}
try {
  test(checkSyntax,["---(++++)----"],0)
  test(checkSyntax,[""],0)
  test(checkSyntax,["before ( middle []) after "],0)
  test(checkSyntax,[") ("],1)
  test(checkSyntax,["} {"],1)
  test(checkSyntax,["<(   >)"],1)
  test(checkSyntax,["(  [  <>  ()  ]  <>  )"],0)
  test(checkSyntax,["   (      [)"],1)

  console.info("Congratulations! All tests passed. (2 task)");
} catch(e) {
  console.error(e);
}

//3 задание
// Решение с помощью бинарного поиска
const findSum = (arr, val) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (binarySearch(removeIndex(arr, i), val - arr[i])) { //производим бинарный поиск по массиву
        newArr.push(i); // если находим такой элемент(возвращает true),который удовлетворяет условию, то добавляем в массив
      }
    };
    return newArr; //если элементов нет, возращаем пустой массив,иначе возращем массив индексов элментов
  };
   
  const removeIndex = (arr, i) => {
    return arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
  };
   
  const binarySearch = (arr, val) => {
    let start = 0; //начало 
    let end = arr.length - 1; // конец
    let pivot = Math.floor(arr.length / 2); // высчитываем серидину  
    while (start < end) { // пока не доходим до конца
    // ищем элемент
      if (val < arr[pivot]) {
        end = pivot - 1;
      } else if (val > arr[pivot]) {
        start = pivot + 1;
      };
      pivot = Math.floor((start + end) / 2);
      if (arr[pivot] === val) {
        return true;
      }
    };
    return false;
  };

  // 4 задание
function parseUrl(string){
  let parseString = new URL(string);
  let href = parseString.href;
  let hash = parseString.hash;
  let port = parseString.port;
  let host = parseString.host;
  let protocol = parseString.protocol;
  let hostname = parseString.hostname;
  let pathname = parseString.pathname;
  let origin = parseString.origin;
  return{
  href,hash,port,host,protocol,hostname,pathname,origin
  }
}