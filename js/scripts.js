function BankAccount(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

$(document).ready(function() {

  $("form#new-bank-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#deposit").val());
    var newBankAccount = new BankAccount(inputtedName, inputtedDeposit);
    console.log(newBankAccount);

    $("p#welcome").append("Welcome " + newBankAccount.name + "<br><br>" + "Your current funds are: " + newBankAccount.deposit);

  });
});
