console.log("hello world");
console.log('11' + 11);


//從1~100從，隨機求1個數
function jackpot() {
  const random_number = Math.floor(Math.random() * 100) + 1;
  console.log(random_number);

  for (let i = 9; i >= 0; i--) {
    let num = prompt('請輸入一個隨機數字：');
    if (num == random_number) {
      alert('中獎了！！！');
      return;
    } else if (num < random_number) {
      alert(`數字猜得太小了，還剩${i}次`);
    } else if (num > random_number) {
      alert(`數字猜得太大了，還剩${i}次`);
    }
  }

  alert(`對不起，您的機會已用盡。正確的數字是 【${random_number}】`);
}

jackpot();


