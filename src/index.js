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
      const cursorPosition = this.textarea.selectionStart;
      const button = event.target;
      this.textarea.focus();

      if (button.tagName === 'BUTTON') {
        const value = button.getAttribute('data-lang-en');
        const buttonDataCode = button.getAttribute('data-code');
        const funcBoolean = button.getAttribute('func');

        if (funcBoolean === 'true' && buttonDataCode === 'Backspace') {
          if (cursorPosition > 0) {
            const value = this.textarea.value;
            const newValue =
              value.slice(0, cursorPosition - 1) + value.slice(cursorPosition);
            this.textarea.value = newValue;
            this.textarea.setSelectionRange(
              cursorPosition - 1,
              cursorPosition - 1
            );
          }
        }

        if (funcBoolean === 'true' && buttonDataCode === 'Enter') {
          event.preventDefault();
          const start = this.textarea.selectionStart;
          const end = this.textarea.selectionEnd;
          const value = this.textarea.value;
          this.textarea.value =
            value.substring(0, start) + '\n' + value.substring(end);
          this.textarea.selectionStart = this.textarea.selectionEnd = start + 1;
        }

        if (funcBoolean === 'true' && buttonDataCode === 'Delete') {
          const value = this.textarea.value;
          if (cursorPosition < value.length) {
            const newValue =
              value.slice(0, cursorPosition) + value.slice(cursorPosition + 1);
            this.textarea.value = newValue;
            this.textarea.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        if (funcBoolean === 'true' && buttonDataCode === 'ArrowRight') {
          this.textarea.setSelectionRange(
            cursorPosition + 1,
            cursorPosition + 1
          );
        }
        if (funcBoolean === 'true' && buttonDataCode === 'ArrowLeft') {
          this.textarea.setSelectionRange(
            cursorPosition - 1,
            cursorPosition - 1
          );
        }
        if (funcBoolean === 'true' && buttonDataCode === 'ArrowUp') {
          const textBeforeCursor = this.textarea.value.substring(
            0,
            cursorPosition
          );
          const previousNewLinePosition = textBeforeCursor.lastIndexOf('n');
          const newCursorPosition =
            previousNewLinePosition === -1 ? 0 : previousNewLinePosition + 1;
          this.textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        }

        if (funcBoolean === 'true' && buttonDataCode === 'ArrowDown') {
          const textAfterCursor = this.textarea.value.substring(cursorPosition);
          const nextNewLinePosition = textAfterCursor.indexOf('n');
          const newCursorPosition =
            nextNewLinePosition === -1
              ? this.textarea.value.length
              : cursorPosition + nextNewLinePosition + 1;
          this.textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        }

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
  virtualKeyboard.textarea.focus();
});
