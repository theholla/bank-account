function BankAccount(name, deposit) {
  this.name = name;
  this.deposit = deposit;
  return name + " " + deposit;
}

BankAccount.prototype.withdraw = function(amount) {
  this.deposit -= amount;
}

BankAccount.prototype.addfunds = function(amount) {
  this.deposit += amount;
}

$(document).ready(function() {


  $("form#new-bank-account").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#deposit-form").val());
    if (inputtedDeposit < 20) {
      $(".minimumMessage").show();
    } else {
      var newBankAccount = new BankAccount(inputtedName, inputtedDeposit);

      $("p#welcome").append("<br><br>You are " + newBankAccount.name + "<br><br>" + "and you have $" + newBankAccount.deposit);

      $("form#new-bank-account").remove();
      $("#headline").replaceWith("<h2>Welcome " + newBankAccount.name + "</h2>");
      $("#manage-account").show();
    }
  });


});
