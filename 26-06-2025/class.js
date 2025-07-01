class BankAccount{
    constructor(name, amount, pin){
        this.name = name
        this.balance = amount
        this.pin = pin
        this.accountNumber = Math.floor(Math.random()*900000+100000)
    }
    deposits(amount){
        if(amount>0){
            this.balance += amount
            console.log(`Deposited ${amount}. New Balance: Rs. ${this.balance}`)
        }
        else{
            console.log("Deposit Amount must be greater than 0")
        }
    }
    withDraw(amount){
        if(amount>0 && amount <= this.balance){
            this.balance -=amount
            console.log(`Withdraw amount: ${amount}. New Balance: ${this.balance}`)
        }
        else{
            console.log('Insufficient Amount or Invalid Amount')
        }
    }
    getAllDetails(pin){
        if (pin === this.pin) {
            console.log(`Name: ${this.name} \n AccountNumber: ${this.accountNumber} \n Balance: ${this.balance}`)
        }
        else {
            console.log('Invalid Pin!')
        }
    }

}

let c1 = new BankAccount("Abhijit",50000,1234)

console.log(c1.deposits(5000));
console.log(c1.withDraw(2000));
console.log(c1.getAllDetails(1234))
