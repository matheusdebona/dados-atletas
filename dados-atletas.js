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
            this.categoria = "Infantil";
        } else if (this.idade === 12 || this.idade === 13) {
            this.categoria = "Juvenil";
        } else if (this.idade === 14 || this.idade === 15) {
            this.categoria = "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            this.categoria = "Adulto";
        } else {
            this.categoria = "Sem categoria";
        }
    }

    calculaIMC() {
        this.imc = this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasValidas = this.notas.slice();
        notasValidas.sort(function(a, b) { return a - b; });
        notasValidas.shift();
        notasValidas.pop();
        let soma = notasValidas.reduce(function(total, atual) { return total + atual; }, 0);
        this.mediaValida = soma / notasValidas.length;
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

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        if (!this.categoria) {
            this.calculaCategoria();
        }
        return this.categoria;
    }

    obtemIMC() {
        if (!this.imc) {
            this.calculaIMC();
        }
        return this.imc;
    }

    obtemMediaValida() {
        if (!this.mediaValida) {
            this.calculaMediaValida();
        }
        return this.mediaValida;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta().join(","));
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC().toFixed(14).replace('.', ','));
console.log("Média válida: " + atleta.obtemMediaValida().toFixed(8).replace('.', ','));
