'use strict';

import './components/card-aluno.js';
import data from './alunoFetch.js'

const holderAlunos = document.querySelector('.container');

const renderAlunos = () => {
  data.forEach(({nome, turma, status, foto}) => {
    const cardAluno = document.createElement('card-aluno')
    cardAluno.setAttribute('nome', nome)
    cardAluno.setAttribute('turma', turma)
    cardAluno.setAttribute('foto', foto)

    if(status == 'aprovado') cardAluno.setAttribute('bg-color', 'green')
    if(status == 'desistente') cardAluno.setAttribute('bg-color', 'orange')
    if(status == 'reprovado') cardAluno.setAttribute('bg-color', 'red')

    holderAlunos.appendChild(cardAluno)
  })
}

renderAlunos();