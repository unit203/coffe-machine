let walletUnit;
let money = document.getElementById("money");
let display = document.getElementById("display");
// money.value = 300;

function getCoffee(price, name) {
  walletUnit = money.value;

  if (walletUnit >= price) {
    giveRemainingMoney(walletUnit, price);
    display.innerHTML = "Ваш " + name + " готов!";
    // console.log("Ваш " + name + " готов!");

  } else {
    display.innerHTML = "Не хватает средств";
    // console.log("Не хватает средств");
  }
}

function giveRemainingMoney(wallet, moneyDebited) {
  // wallet = (+wallet - +moneyDebited);
  // Более сокращеная запись.
  wallet -= +moneyDebited;
  money.value = wallet;
}

function getChange(num) {
  if(num >= 10) {
    console.log(10);
    getChange(num - 10);
  }
}