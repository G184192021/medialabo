// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

//hantei();
let judgement=document.querySelector('#print');
judgement.addEventListener('click',hantei)

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(event) {
    let predict=document.querySelector('input[name="predict"]');
    let yoso=Math.floor(predict.value);       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
kaisu+=1;
//console.log(kaisu+'回目の予想:'+yoso);
let not=document.querySelector('span#time');
let nots=document.createElement('p');
nots.textContent=kaisu+'回目の予想: '+yoso;
not.insertAdjacentElement('afterbegin',nots);
let reply=document.querySelector('p#result');
if(kaisu>=4){
    let p=document.createElement('p');
    p.textContent='答えは'+kotae+'でした．すでにゲームは終わっています';
    reply.insertAdjacentElement('afterbegin',p);
}else if(kotae===yoso){
    p=document.createElement('p');
    p.textContent='正解です．おめでとう！';
    reply.insertAdjacentElement('afterbegin',p);
}else if(kaisu===3){
    p=document.createElement('p');
    p.textContent='まちがい．残念でした答えは'+kotae+'です．';
    reply.insertAdjacentElement('afterbegin',p);
}else if(kotae>yoso){
    p=document.createElement('p');
    p.textContent='まちがい．答えはもっと大きいですよ';
    reply.insertAdjacentElement('afterbegin',p);
}else{
    p=document.createElement('p');
    p.textContent='まちがい．答えはもっと小さいですよ';
    reply.insertAdjacentElement('afterbegin',p);
}
}
