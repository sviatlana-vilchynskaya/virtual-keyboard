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
      const value = button.getAttribute('data-lang-en');
      const buttonDataCode = button.getAttribute('data-code');
      const funcBoolean = button.getAttribute('func');
      const textareaValue = this.textarea.value;
      const cursorPosition = this.textarea.selectionStart;
      const cursorPositionEnd = this.textarea.selectionEnd;
      const textBeforeCursor = this.textarea.value.substring(0, cursorPosition);
      const previousNewLinePosition = textBeforeCursor.lastIndexOf('n');
      const newCursorPositionUp =
        previousNewLinePosition === -1 ? 0 : previousNewLinePosition + 1;
      const textAfterCursor = this.textarea.value.substring(cursorPosition);
      const nextNewLinePosition = textAfterCursor.indexOf('n');
      const newCursorPositionDown =
        nextNewLinePosition === -1
          ? this.textarea.value.length
          : cursorPosition + nextNewLinePosition + 1;
      const newValueBaskspace =
        textareaValue.slice(0, cursorPosition - 1) +
        textareaValue.slice(cursorPosition);
      const newValueDelete =
        textareaValue.slice(0, cursorPosition) +
        textareaValue.slice(cursorPosition + 1);
      this.textarea.focus();

      if (button.tagName === 'BUTTON') {
        if (buttonDataCode === 'Backspace') {
          if (cursorPosition > 0) {
            this.textarea.value = newValueBaskspace;
            this.textarea.setSelectionRange(
              cursorPosition - 1,
              cursorPosition - 1
            );
          }
        }

        if (buttonDataCode === 'Tab') {
          this.textarea.value = `${textareaValue.substring(
            0,
            cursorPosition
          )}\t${textareaValue.substring(cursorPositionEnd)}`;
          this.textarea.selectionStart = this.textarea.selectionEnd;
          this.textarea.selectionEnd = cursorPosition + 1;
        }

        if (buttonDataCode === 'Enter') {
          this.textarea.value = `${textareaValue.substring(
            0,
            cursorPosition
          )}\n${textareaValue.substring(cursorPositionEnd)}`;
          this.textarea.selectionStart = this.textarea.selectionEnd;
          this.textarea.selectionEnd = cursorPosition + 1;
        }

        if (buttonDataCode === 'Delete') {
          if (cursorPosition < textareaValue.length) {
            this.textarea.value = newValueDelete;
            this.textarea.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        if (buttonDataCode === 'ArrowRight') {
          this.textarea.setSelectionRange(
            cursorPosition + 1,
            cursorPosition + 1
          );
        }
        if (buttonDataCode === 'ArrowLeft') {
          this.textarea.setSelectionRange(
            cursorPosition - 1,
            cursorPosition - 1
          );
        }
        if (buttonDataCode === 'ArrowUp') {
          this.textarea.setSelectionRange(
            newCursorPositionUp,
            newCursorPositionUp
          );
        }

        if (buttonDataCode === 'ArrowDown') {
          this.textarea.setSelectionRange(
            newCursorPositionDown,
            newCursorPositionDown
          );
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
