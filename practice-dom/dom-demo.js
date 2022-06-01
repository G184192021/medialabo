let p=document.createElement('p');
p.textContent='太陽は、水圏の大部分を占める、それぞれが接続した地球上の海の主要領域である。';
let h2ocean=document.querySelector('h2#aboutOcean');
h2ocean.insertAdjacentElement('afterend',p);
/*
let h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
      p = document.createElement('p');          // ここで [Shift]+[Enter]
      p.textContent = '見出しの次の p 要素';       // ここで [Shift]+[Enter]
      h2.insertAdjacentElement('afterend', p);
}
*/
/*
let eu = document.querySelector('li#EU');   // li#EU 要素を検索して変数に代入
eu.remove()                                 //   〃　　要素を削除
let ul = document.querySelector('ul');      // ul 要素を検索
let li;                                     // 変数 li を宣言
li = document.createElement('li');          // li 要素を作成
li.textContent = 'アジア大陸';                // li 要素のテキストを設定
ul.insertAdjacentElement('beforeend', li);  // ul の最後に li を追加
li = document.createElement('li');          // これは省略できない
li.textContent = 'ヨーロッパ大陸';            // テキストは「ヨーロッパ大陸」
ul.insertAdjacentElement('beforeend', li);
*/
let eu=document.querySelector('li#EU');
eu.remove();
let ul=document.querySelector('ul');
let li;
li=document.createElement('li');
li.textContent='アジア大陸';
ul.insertAdjacentElement('beforeend',li);
li=document.createElement('li');
li.textContent='ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend',li);
/*
li=document.createElement('li');
li.textContent='ユーラシア大陸';
ul.insertAdjacentElement('beforeend',li);
*/
// id が sevenOcean の h2 要素を検索
// （次の行を完成させる）
let h2sevenOcean = document.querySelector('h2#sevenOcean');

// 7大洋　の名前を配列に代入
let oceans = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]

// ul 要素を新規作成する．（次の行を完成させる）
ul = document.createElement('ul');

// ul 要素を h2sevenOcean の次に追加する（次の行を書く）
h2sevenOcean.insertAdjacentElement('afterend',ul);

// ul に7つの大陸を追加する
for (let i of oceans) {
  // （この中を完成させる）
    li=document.createElement('li');
    li.textContent=i;
    ul.insertAdjacentElement('beforeend',li);
}

let h1=document.querySelector('h1');
h1.style.color='blue';
h1.style.fontSize='10pt';

// すべての h2 要素を検索する（次の行を完成させる）
let h2s = document.querySelectorAll('h2');

// h2 要素に対して繰り返す
for (let h2 of h2s) {
  // h2 の背景色を 'palegreen' に変更する
  //   (次の行を書く)
  h2.style.backgroundColor='palegreen';
}
let ls=document.querySelectorAll('li');
for(let li of ls){
  li.classList.add('orangeUnderline');
}
li=document.querySelector('li#NA');
li.classList.contains('orangeUnderline');
li.classList.contains('na');
li.classList.contains('blueUnderline');
