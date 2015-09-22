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
var bankAccount;

  $("form#new-bank-account").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#deposit-form").val());
    if (inputtedDeposit < 20) {
      $(".minimumMessage").show();
    } else {
      var newBankAccount = new BankAccount(inputtedName, inputtedDeposit);
      bankAccount = newBankAccount;
      $("p#welcome").append("<br><br>You are " + bankAccount.name + "<br><br>" + "and you have $" + bankAccount.deposit);
      $("form#new-bank-account").remove();
      $("#headline").replaceWith("<h2>Welcome " + bankAccount.name + "</h2>");
      $("#manage-account").show();
    }
  });

  $("form#withdraw-form").submit(function(event) {
    event.preventDefault();
    var amount = parseInt($("input#withdraw").val());
    bankAccount.withdraw(amount);
    $("p#welcome").replaceWith("<br><br>You just withdrew $" + amount + "<br><br>" + "and you now have $" + bankAccount.deposit);
  });

  $("form#add-form").submit(function(event) {
    event.preventDefault();
    var amount = parseInt($("input#addfunds").val());//this does not work if not parsed
    bankAccount.addfunds(amount);
    $("p#welcome").replaceWith("<br><br>You just deposited $" + amount + "<br><br>" + "and you now have $" + bankAccount.deposit);
  });


});
