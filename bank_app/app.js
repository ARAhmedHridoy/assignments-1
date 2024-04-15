// bank account

class BankAccount{
    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ${amount} to ${this.accountNumber}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient Amount");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// new account info:
const account1 = new BankAccount(10001, "A R Ahmed Hridoy", 1000);

// display details:
console.log(`\nInitial Account Information:\n`);
account1.displayAccountInfo();

console.log("\nDeposit & Withdraw:\n");
//deposit
account1.deposit(250);
console.log("Balance after deposit:", account1.getBalance(),"\n");

//withdraw
account1.withdraw(300);
console.log("Balance after withdraw:", account1.getBalance());

//account info after deposit & withdraw
console.log("\nUpdated Account Information:");
account1.displayAccountInfo();
console.log("\n");

//withdraw more from balance
account1.withdraw(1000); // display "Insufficient amount"
account1.displayAccountInfo();