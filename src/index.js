import './assets/styles/main.scss';

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
    this.description = document.createElement('p');

    this.main.classList.add('main', 'container');
    this.title.classList.add('main__title');
    this.textarea.classList.add('main__textarea');
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
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});
