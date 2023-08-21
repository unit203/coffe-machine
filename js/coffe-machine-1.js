let walletUnit;
let money = document.getElementById("money");
// money.value = 300;

function getCoffee(price, name) {
  walletUnit = money.value;

  if (walletUnit >= price) {
    giveRemainingMoney(walletUnit, price);
    console.log("Ваш " + name + " готов!");

  } else {
    console.log("Не хватает средств");
  }
}

function giveRemainingMoney(wallet, moneyDebited) {
  // wallet = (+wallet - +moneyDebited);
  // Более сокращеная запись.
  wallet -= +moneyDebited;
  money.value = wallet;
}
