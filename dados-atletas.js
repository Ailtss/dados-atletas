class Atleta {

    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {

        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        }

        return "Sem categoria";
    }

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    calculaMediaValida() {
         let matrixAux = []
    

        
        let tamanho = this.notas.length;
        matrixAux = this.notas.sort((a, b) => b -a).slice(1, tamanho-1)
        
        
        let soma = matrixAux.reduce(function(total, atual) {
            return total + atual;
        },0);
    
        let media = soma/matrixAux.length;
        

        return media;
        
        

    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }
    obtemMediaValida() {
        return this.calculaMediaValida();
    }



}


// Declara o atleta
const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.notas}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);