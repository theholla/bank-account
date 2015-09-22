describe('BankAccount', function(){
  it("creates a new bank account", function() {
    var testBankAccount = new BankAccount("Diana", 999999);
    expect(testBankAccount.name).to.equal("Diana");
    expect(testBankAccount.initialDeposit).to.equal(999999);
  })
})
