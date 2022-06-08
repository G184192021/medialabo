let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(/*'都市名:'+*/data.name);
console.log(/*'最高気温'+*/data.main.temp_max);
console.log(/*'最低気温'+*/data.main.temp_min);

let t=document.querySelector('table');
let p=document.createElement('p');
p.textContent='都市名：'+data.name;
let d=document.createElement('div');
d.insertAdjacentElement('beforeend',p);
t.insertAdjacentElement('afterend',d);
p=document.createElement('p');
p.textContent='最高気温：'+data.main.temp_max;
d.insertAdjacentElement('beforeend',p);
t.insertAdjacentElement('afterend',d);
p=document.createElement('p');
p.textContent='最低気温：'+data.main.temp_min;
d.insertAdjacentElement('beforeend',p);
t.insertAdjacentElement('afterend',d);


//イベント：#search(検索)
let b=document.querySelector('#address');
b.addEventListener('click',search);
//検索要素を入手
function search(){
  let id=document.querySelector('input[name="predict"]');
  let iv=id.value;
  let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+ iv +'.json';
  axios.get(url).then(showResult).catch(showError).then(finish);
}
function showResult(answer){
  let data=answer.data;
  let s=document.querySelector('p#search');
  let item=['coord.lon','coord.lat','weather.description','main.temp_min','main.temp_max','main.humidity','wind.speed','wind.deg','name'];
  if(typeof data==='string'){
    data=JSON.parse(data);
  }
  /*for(int in of item){
    p=document.createElement('p');
    p.textContent=data.in;
    s.insertAdjacentElement('beforeend',p);
  }*/
  p=document.createElement('p');
  p.textContent='緯度:'+data.coord.lon;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='経度:'+data.coord.lat;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='天気:'+data.weather.description;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='最低気温:'+data.main.temp_min;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='最高気温:'+data.main.temp_max;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='湿度:'+data.main.humidity;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='風速:'+data.wind.speed;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='風向:'+data.wind.deg;
  s.insertAdjacentElement('beforeend',p);
  p=document.createElement('p');
  p.textContent='都市名:'+data.name;
  s.insertAdjacentElement('beforeend',p);
}
function showError(err){
  //２度目
  s=document.querySelector('p#search');
  p=document.createElement('p');
  p.textContent='err';
  s.insertAdjacentElement('beforeend',p);
}
function finish(){
  //３度目
  s=document.querySelector('p#search');
  p=document.createElement('p');
  p.textContent='Ajax 通信が終わりました';
  s.insertAdjacentElement('beforeend',p);
}

/*
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
*/
