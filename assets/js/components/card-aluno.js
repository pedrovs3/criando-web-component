class CardAluno extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.nome = 'Aluno';
    this.color = 'tomato';
    this.turma = 'sem turma'
    this.foto = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  }

  connectedCallback() {
    this.shadow.appendChild(this.component());
    this.shadow.appendChild(this.styles());
  }

  component() {
    const card = document.createElement('div');
    card.style.backgroundColor = this.color;
    card.classList.add('card');
    const div = document.createElement('div');
    div.classList.add('card__imagem');
    const nome = document.createElement('div');
    nome.classList.add('card__titulo');
    nome.textContent = this.nome;
    const turma = document.createElement('div');
    turma.classList.add('card__turma');
    turma.textContent = this.turma

    card.appendChild(nome);
    card.appendChild(div);
    card.appendChild(turma);

    return card;
  }

  static get observedAttributes(){
    return ['nome', 'bg-color', 'turma', 'foto'];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    // this.nameAtr = newValue

    if(nameAtr == 'nome') {
      this.nome = newValue;
    } else if(nameAtr == 'bg-color') {
      this.color = newValue;
    }else if(nameAtr == 'turma') {
      this.turma = newValue;
    } else if(nameAtr == 'foto') {
      this.foto = newValue;
    }
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `.card{
      width: 400px;
      height:400px;
      display: grid;
      grid-template-rows: 20% 60% 20%;
      place-items:center;
      border-radius: 12px;
    }
    .card__titulo{
      color: #fff;
      font-size: 1.5rem;
    }
    .card__imagem {
      width: 60%;
      height: 100%;
      background-image: url(${this.foto});
      border-radius: 50%;
      background-position:center center;
      filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
      background-size: cover;
      
    }
    .card__turma{
      color:#fff;
    }`
    return style;
  }
}

customElements.define('card-aluno', CardAluno)