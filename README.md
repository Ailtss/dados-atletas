# 🏆 Projeto Atleta - DEVstart SENAI

## 📌 Resumo do Projeto

Este projeto consiste no desenvolvimento de uma aplicação em
**JavaScript** capaz de receber informações de um atleta, calcular
parâmetros importantes e exibi-los ao usuário.

A aplicação foi desenvolvida como parte do curso **DEVstart - SENAI**,
dando continuidade ao projeto anterior de certificação.

------------------------------------------------------------------------

## 📖 Introdução

Após o sucesso do projeto anterior, os organizadores da competição
solicitaram uma nova solução utilizando **JavaScript**.

O objetivo é criar um software capaz de:

-   Receber informações dos atletas
-   Calcular sua categoria
-   Calcular o IMC
-   Calcular a média válida das notas
-   Exibir todas as informações de forma organizada

------------------------------------------------------------------------

## ⚙️ Especificações do Projeto

### 📦 Classe Atleta

Foi criada uma classe chamada `Atleta`, responsável por concentrar todos
os atributos e métodos relacionados ao atleta.

### 🔹 Atributos

A classe recebe os seguintes atributos:

-   `nome`
-   `idade`
-   `peso`
-   `altura`
-   `notas`

------------------------------------------------------------------------

### 🔹 Métodos Implementados

#### 🧮 Métodos de Cálculo

-   `calculaCategoria()` → Calcula a categoria do atleta com base na
    idade.
-   `calculaIMC()` → Calcula o IMC do atleta.
-   `calculaMediaValida()` → Calcula a média válida das notas
    (desconsiderando a maior e menor nota).

#### 📊 Métodos Getters

-   `obtemNomeAtleta()`
-   `obtemIdadeAtleta()`
-   `obtemPesoAtleta()`
-   `obtemNotasAtleta()`
-   `obtemCategoria()`
-   `obtemIMC()`
-   `obtemMediaValida()`

------------------------------------------------------------------------

## 📏 Regras de Negócio

### 🥇 1. Cálculo da Categoria

  Idade           Categoria
  --------------- ---------------
  9 a 11 anos     Infantil
  12 a 13 anos    Juvenil
  14 a 15 anos    Intermediário
  16 a 30 anos    Adulto
  Demais idades   Sem categoria

------------------------------------------------------------------------

### ⚖️ 2. Cálculo do IMC

Fórmula utilizada:

IMC = peso / (altura x altura)

------------------------------------------------------------------------

### 📊 3. Cálculo da Média Válida

A média válida é calculada:

1.  Removendo a maior nota
2.  Removendo a menor nota
3.  Calculando a média das notas restantes

Metodologia baseada no Projeto de Certificação 1.

------------------------------------------------------------------------

## ▶️ Como Executar o Projeto

1.  Clone o repositório:

    git clone `<url-do-repositorio>`{=html}

2.  Acesse a pasta do projeto:

    cd nome-do-projeto

3.  Execute o arquivo JavaScript:

    node index.js

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   JavaScript (ES6+)
-   Node.js

------------------------------------------------------------------------

## 👨‍💻 Autor

Projeto desenvolvido como parte do curso **DEVstart - SENAI**.

------------------------------------------------------------------------

## 📌 Observação

Este projeto demonstra conhecimentos em:

-   Programação Orientada a Objetos (POO)
-   Manipulação de arrays
-   Cálculos matemáticos
-   Estruturação de classes em JavaScript
-   Organização de código e boas práticas
