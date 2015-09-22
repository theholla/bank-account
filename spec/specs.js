describe('BankAccount', function(){
  it("creates a new bank account", function() {
    var testBankAccount = new BankAccount("Diana", 999999);
    expect(testBankAccount.name).to.equal("Diana");
    expect(testBankAccount.deposit).to.equal(999999);
  });

  it("returns the correct name and deposit amount", function() {
    expect(BankAccount("Perry", 999999)).to.contain("Perry");
  });

});

describe('withdraw', function() {
  it("it withdraws money correctly from an account", function() {
    var testBankAccount = new BankAccount("Jake", 1000);
    testBankAccount.withdraw(5);
    expect(testBankAccount.deposit).to.equal(995);
  });
});

describe('adddeposit', function() {
  it("it adds money correctly to an account", function() {
    var testBankAccount = new BankAccount("Jake", 1000);
    testBankAccount.addfunds(5);
    expect(testBankAccount.deposit).to.equal(1005);
  });
});
