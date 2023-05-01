import './assets/styles/main.scss';
import keyData from './assets/scripts/keyData.js';

class Keyboard {
  constructor() {
    this.caps = false;
    this.shift = false;
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
    this.description.textContent = 'The keyboard was created in the Windows operating system.';

    this.main.append(this.title, this.textarea, this.keyboard);
    this.keyboard.append(this.description);

    document.body.append(this.main);

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
        buttonElement.setAttribute(
          'data-lang-enShift',
          buttonData.lang.enShift,
        );
        buttonElement.setAttribute(
          'data-lang-ruShift',
          buttonData.lang.ruShift,
        );
        buttonElement.setAttribute('data-lang-enCaps', buttonData.lang.enCaps);
        buttonElement.setAttribute('data-lang-ruCaps', buttonData.lang.ruCaps);
        buttonElement.setAttribute('func', buttonData.func);
        buttonElement.classList.add(`keyboard__button-${buttonData.width}`);

        window.addEventListener('keydown', (event) => {
          if (event.shiftKey) {
            this.shift = true;
            buttonElement.textContent = buttonData.lang.enShift;
          }
          if (event.code === 'CapsLock') {
            if (buttonData.func === false) {
              buttonElement.textContent = buttonData.lang.enCaps;
              this.caps = true;
            }
          }
        });

        window.addEventListener('keyup', (event) => {
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          if (!event.shiftKey && event.code === dataCodeShift) {
            this.shift = false;
            buttonElement.textContent = buttonData.lang.en;
          }

          if (event.getModifierState('CapsLock')) {
            this.caps = false;
            buttonElement.textContent = buttonData.lang.en;
          }
        });

        this.keyboard.addEventListener('mousedown', (event) => {
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          const button = event.target;
          const buttonDataCode = button.getAttribute('data-code');
          if (buttonDataCode === dataCodeShift) {
            this.shift = true;
            buttonElement.textContent = buttonData.lang.enShift;
          }

          if (buttonDataCode === 'CapsLock') {
            this.caps = true;
            buttonElement.textContent = buttonData.lang.enCaps;
          }
        });

        this.keyboard.addEventListener('mouseup', (event) => {
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          const button = event.target;
          const buttonDataCode = button.getAttribute('data-code');
          if (buttonDataCode === dataCodeShift) {
            this.shift = false;
            buttonElement.textContent = buttonData.lang.en;
          }

          if (buttonDataCode === 'CapsLock') {
            this.caps = false;
            buttonElement.textContent = buttonData.lang.en;
          }
        });

        if (this.shift && !this.caps) {
          buttonElement.textContent = buttonData.lang.enShift;
        }
        if (this.caps && !this.shift) {
          buttonElement.textContent = buttonData.lang.enCaps;
        }

        if (!this.caps || !this.shift) {
          buttonElement.textContent = buttonData.lang.en;
        }
        buttonElement.textContent = buttonData.lang.en;

        rowElement.append(buttonElement);
      });
      this.keyboard.append(rowElement);
    });

    this.keyboard.addEventListener('click', (event) => {
      const button = event.target;
      const value = button.getAttribute('data-lang-en');
      const valueEnShift = button.getAttribute('data-lang-enShift');
      const valueEnCaps = button.getAttribute('data-lang-enCaps');
      const buttonDataCode = button.getAttribute('data-code');
      const funcBoolean = button.getAttribute('func');
      const textareaValue = this.textarea.value;
      const cursorPosition = this.textarea.selectionStart;
      const cursorPositionEnd = this.textarea.selectionEnd;
      const textBeforeCursor = this.textarea.value.substring(0, cursorPosition);
      const previousNewLinePosition = textBeforeCursor.lastIndexOf('n');
      const newCursorPositionUp = previousNewLinePosition === -1 ? 0 : previousNewLinePosition + 1;
      const textAfterCursor = this.textarea.value.substring(cursorPosition);
      const nextNewLinePosition = textAfterCursor.indexOf('n');
      const newCursorPositionDown = nextNewLinePosition === -1
        ? this.textarea.value.length
        : cursorPosition + nextNewLinePosition + 1;
      const newValueBaskspace = textareaValue.slice(0, cursorPosition - 1)
        + textareaValue.slice(cursorPosition);
      const newValueDelete = textareaValue.slice(0, cursorPosition)
        + textareaValue.slice(cursorPosition + 1);
      this.textarea.focus();

      if (button.tagName === 'BUTTON') {
        if (buttonDataCode === 'Backspace') {
          if (cursorPosition > 0) {
            this.textarea.value = newValueBaskspace;
            this.textarea.setSelectionRange(
              cursorPosition - 1,
              cursorPosition - 1,
            );
          }
        }

        if (buttonDataCode === 'Tab') {
          this.textarea.value = `${textareaValue.substring(
            0,
            cursorPosition,
          )}\t${textareaValue.substring(cursorPositionEnd)}`;
          this.textarea.selectionStart = this.textarea.selectionEnd;
          this.textarea.selectionEnd = cursorPosition + 1;
        }

        if (buttonDataCode === 'Enter') {
          this.textarea.value = `${textareaValue.substring(
            0,
            cursorPosition,
          )}\n${textareaValue.substring(cursorPositionEnd)}`;
          this.textarea.selectionStart = this.textarea.selectionEnd;
          this.textarea.selectionEnd = cursorPosition + 1;
        }

        if (buttonDataCode === 'Delete') {
          if (cursorPosition < textareaValue.length) {
            if (this.shift) {
              this.textarea.valueEnShift = newValueDelete;
              this.textarea.setSelectionRange(cursorPosition, cursorPosition);
            }
            this.textarea.value = newValueDelete;
            this.textarea.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        if (buttonDataCode === 'ArrowRight') {
          this.textarea.setSelectionRange(
            cursorPosition + 1,
            cursorPosition + 1,
          );
        }
        if (buttonDataCode === 'ArrowLeft') {
          this.textarea.setSelectionRange(
            cursorPosition - 1,
            cursorPosition - 1,
          );
        }
        if (buttonDataCode === 'ArrowUp') {
          this.textarea.setSelectionRange(
            newCursorPositionUp,
            newCursorPositionUp,
          );
        }

        if (buttonDataCode === 'ArrowDown') {
          this.textarea.setSelectionRange(
            newCursorPositionDown,
            newCursorPositionDown,
          );
        }

        if (this.shift && !this.caps && funcBoolean === 'false') {
          this.textarea.value += valueEnShift;
        }

        if (this.caps && !this.shift && funcBoolean === 'false') {
          this.textarea.value += valueEnCaps;
        }

        if (!this.caps && !this.shift && funcBoolean === 'false') {
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
