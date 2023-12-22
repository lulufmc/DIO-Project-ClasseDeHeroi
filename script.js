class heroi{
    constructor(name, age, classType){
        this.name = name
        this.age = age
        this.classType = classType
    }

    toString(){
        if (this.classType === "guerreiro") {
            console.log(`O ${this.classType} ${this.name} de ${this.age} anos, atacou usando espada.`)
        } else if (this.classType === "mago"){
            console.log(`O ${this.classType} ${this.name} de ${this.age} anos, atacou usando magia.`)
        } else if (this.classType === "monge"){
            console.log(`O ${this.classType} ${this.name} de ${this.age} anos, atacou usando artes marciais.`)
        } else {
            console.log(`O ${this.classType} ${this.name} de ${this.age} anos, atacou usando shuriken.`)
        }    
    }
}

let heroiGuerreiro = new heroi("Luiz", 25, "guerreiro")
let heroiMago = new heroi("Ítalo", 28, "mago")
let heroiMonge = new heroi("Leonardo", 20, "monge")
let heroiNinja = new heroi("Daniel", 23, "ninja")

heroiNinja.toString()
heroiGuerreiro.toString()
heroiMonge.toString()
heroiMago.toString()