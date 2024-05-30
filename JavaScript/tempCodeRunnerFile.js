function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const jean = new Pessoa("Jean", "Almeida", 30)
const thiago = new Pessoa("Thiago", "Almeida", 32)
const thamara = new Pessoa("Thamara", "da Luz", 25)

jean["nacionalidade"]="Brasileiro";
console.log(jean)
console.log(thamara)