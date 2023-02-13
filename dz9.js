//Задание 1.
const parser = new DOMParser();
// console.log('parser', parser);

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = [...listNode.querySelectorAll("student")];
const list = [];
studentNodes.forEach( studentNode => {
  
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  list.push({
    prof: profNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    lang: langAttr,
    age: Number(ageNode.textContent),
  });
});

const result = {
  list: list
};
console.log('result', result);

//задание 2.
const json = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   const jsObjects = JSON.parse(json);
   
   console.log(jsObjects);
   jsObjects.list.push({"name": "TEST", "age": 7, "prof": "..."});
   console.log(jsObjects);

//задание 3.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    .btn {
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  margin: 5px 10px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: black;
  background: #DA70D6;
  transition: 0.3s;
}
    </style>
    <title>Document</title>
</head>
<body>
    <p class="terms">Введите число</p>
    <input class ="limit" type="number" name="" id="">
    <button class="btn request">Нажать</button>
    <p class="result"></p>
<script>
function useRequest(callback) {
 const value = document.querySelector('input').value;
 const reUrl = 'https://picsum.photos/v2/list?limit=' + value;
  
 let xhr = new XMLHttpRequest();
 xhr.open('GET', reUrl, true);

 xhr.onload =  function() {
    if (!(value >= 1 && value <= 10)) {
      console.log('Число вне диапазона от 1 до 10');
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
       callback(result);
      }
    }
 }
  xhr.send();
}

function initImg(apiData) {
  const resultNode = document.querySelector('.result');
  let cards = ''
  apiData.forEach(item => {
    const cardBlock = `
        <div class = 'card'>
          <img src='${item.download_url}' class = 'card-image'/>
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;    
  });
  resultNode.innerHTML = cards;
}

const request = document.querySelector('.request');
request.addEventListener('click', () => {
  useRequest(initImg);
});
</script>
</body>
</meta>
</head>
</html>

//задание 4.
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <style>
      .btn {
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  margin: 5px 10px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: black;
  background: #DA70D6;
  transition: 0.3s;
}
  </style>
  <title>Document</title>
</head>
<body>
  <fieldset>
  <p> <label>Ширина</label> <br />
    <input id="num1" class="text" size="20" value=100> </p>
  <p> <label>Высота</label> <br />
    <input id="num2" class="text" size="20" value=100> </p>
  <p> <button class="btn j-btn">Submit</button> </p>
</fieldset>
<div id="j-result"></div>
<img id="result"/>
<script>
  const btn = document.querySelector('.j-btn');
btn.addEventListener('click', () => {
  const value1 = +document.getElementById('num1').value;
  const value2 = +document.getElementById('num2').value;

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    s.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
 
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});
</script>
</body>
</html>

//задание 5.
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <style>
        .btn {
            padding: 0;
            background-color: transparent;
            border: none;
            outline: none;
            -webkit-tap-highlight-color: transparent;
            box-shadow: none;
            cursor: pointer;
            margin: 5px 10px;
            padding: 10px 15px;
            border-radius: 10px;
            font-size: 12px;
            line-height: 15px;
            text-transform: uppercase;
            color: black;
            background: #DA70D6;
            transition: 0.3s;
        }
        
        .btn:hover {
            box-shadow: 0px 2px 8px 2px rgba(141, 150, 178, .3);
            transform: scale(1.05);
        }
    </style>
    <title>Document</title>
</head>
<body>
    <fieldset>
        <p> <label>Номер страницы</label> <br />
            <input id="page" class="text" size="20"> </p>
        <p> <label>Лимит</label> <br />
            <input id="limit" class="text" size="20"> </p>
        <p> <button class="btn j-btn-request">Запрос</button> </p>
    </fieldset>
    <div id="result"></div>
    <img id="result" />
<script>
    const resultNode = document.querySelector('.j-result');
    const btn = document.querySelector('.j-btn-request');
    btn.addEventListener('click', () => {
        const value1 = document.getElementById('page').value;
        const value2 = document.getElementById('limit').value;
      
        let s = document.getElementById('result');
        s.textContent = '';
        if (!(value1 >= 1 && value1 <= 10)) {
            s.textContent = 'Номер страницы вне диапазона от 1 до 10';
            return;
        }
        else if(!(value2 >= 1 && value2 <= 10)) {
            s.textContent = 'Лимит вне диапазона от 1 до 10';
            return;
        }
        else if(!(value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10)) {
            s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
            return;
        } else {
            fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
                .then((response) => {
                    document.getElementById('result').src = response.url;
                });
            console.log(result);
        }
    });
</script>
</body>
</html>