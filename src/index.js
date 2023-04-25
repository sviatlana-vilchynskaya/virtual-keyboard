import './assets/styles/main.scss';
import keyData from './assets/scripts/keyData.js';

class Keyboard {
  constructor() {
    this.caps = false;
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }

  init() {
    this.main = document.createElement('main');
    this.title = document.createElement('h1');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('section');
    this.key = document.createElement('button');
    this.description = document.createElement('p');

    this.main.classList.add('main', 'container');
    this.title.classList.add('main__title');
    this.textarea.classList.add('main__textarea');
    this.textarea.focus();
    this.keyboard.classList.add('keyboard');
    this.description.classList.add('keyboard__description');

    this.title.textContent = 'RSSchool Virtual keyboard';
    this.textarea.placeholder = 'Type anything...';
    this.description.textContent =
      'The keyboard was created in the Windows operating system.';

    this.main.appendChild(this.title);
    this.main.appendChild(this.textarea);
    this.main.appendChild(this.keyboard);
    this.keyboard.appendChild(this.description);

    document.body.appendChild(this.main);

    keyData.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard__row');
      row.forEach((buttonData) => {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('keyboard__button');
        buttonElement.setAttribute('type', 'button');
        buttonElement.setAttribute('data-code', buttonData.code);
        buttonElement.setAttribute('data-lang-en', buttonData.lang.en);
        buttonElement.setAttribute('data-lang-ru', buttonData.lang.ru);
        buttonElement.setAttribute('func', buttonData.func);
        buttonElement.classList.add(`keyboard__button-${buttonData.width}`);
        buttonElement.textContent = buttonData.lang.en;
        rowElement.appendChild(buttonElement);
      });
      this.keyboard.appendChild(rowElement);
    });

    this.keyboard.addEventListener('click', (event) => {
      const button = event.target;

      if (button.tagName === 'BUTTON') {
        const value = button.getAttribute('data-lang-en');
        const funcBoolean = button.getAttribute('func');
        if (funcBoolean === 'false') {
          this.textarea.value += value;
        }
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const virtualKeyboard = new Keyboard();
  virtualKeyboard.init();
});
