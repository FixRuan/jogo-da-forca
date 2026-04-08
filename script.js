// Lista de palavras que podem ser sorteadas no jogo.
const words = [
  "codigo",
  "bug",
  "dado",
  "rede",
  "site",
  "app",
  "tela",
  "banco",
  "login",
  "variavel",
  "funcao",
  "classe",
  "objeto",
  "metodo",
  "sistema",
  "servidor",
  "cliente",
  "algoritmo",
  "compilador",
  "interface",
  "polimorfismo",
  "encapsulamento",
  "heranca",
  "recursividade",
  "concorrencia",
  "paralelismo",
  "serializacao",
  "abstracao",
  "framework",
  "middleware",
  "criptografia"
];

// Estado principal da partida atual.
let secretWord = "";
let guessedLetters = [];
let wrongLetters = [];
let triesLeft = 6;
let gameOver = false;

// Referências aos elementos da interface no HTML.
const wordEl = document.getElementById("word");
const triesEl = document.getElementById("tries");
const wrongLettersEl = document.getElementById("wrongLetters");
const messageEl = document.getElementById("message");
const letterInput = document.getElementById("letterInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
