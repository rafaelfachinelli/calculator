function criaCalculadora() {
  return {

    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    start() {
      this.cliqueBotoes();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
          this.count();
        }
      });
    },

    cliqueBotoes() {
      document.addEventListener('click', function(e) {
        const element = e.target;

        if(element.classList.contains('btn-num')) {
          this.btnParaDisplay(element.innerText);
        }

        if(element.classList.contains('btn-clear')) {
          this.clear();
        }

        if(element.classList.contains('btn-delete')) {
          this.delete();
        }

        if(element.classList.contains('btn-equal')) {
          this.count();
        }
      }.bind(this));
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clear() {
      this.display.value = '';
    },

    delete() {
      this.display.value = this.display.value.slice(0, -1);
    },

    count() {
      let expression = this.display.value;

      try {
        expression = eval(expression)

        if (!expression) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(expression);
      } catch (error) {
        alert('Conta inválida');
        return;
      }
    },

  };
}

const calculadora = criaCalculadora();

calculadora.start();