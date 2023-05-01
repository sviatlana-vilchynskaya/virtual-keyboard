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
    this.description.textContent = 'The keyboard was created in the Windows operating system. Смена языка происходит по кнопам Alt+Ctrl, но язык изменяется после перезагрузки страницы.(по нажатию мышки язык меняет кнопка ⊞)';

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
        buttonElement.setAttribute('data-lang-enShift', buttonData.lang.enShift);
        buttonElement.setAttribute('data-lang-ruShift', buttonData.lang.ruShift);
        buttonElement.setAttribute('data-lang-enCaps', buttonData.lang.enCaps);
        buttonElement.setAttribute('data-lang-ruCaps', buttonData.lang.ruCaps);
        buttonElement.setAttribute('func', buttonData.func);
        buttonElement.classList.add(`keyboard__button-${buttonData.width}`);

        window.addEventListener('keydown', (event) => {
          event.preventDefault();
          if (event.altKey && event.ctrlKey) {
            event.preventDefault();
            if (this.lang === 'en') {
              this.lang = 'ru';
            } else {
              this.lang = 'en';
            }
            localStorage.setItem('lang', this.lang);
          }

          if (event.shiftKey) {
            this.shift = true;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.enShift;
            } else {
              buttonElement.textContent = buttonData.lang.ruShift;
            }
          }
          if (event.code === 'CapsLock') {
            if (buttonData.func === false) {
              this.caps = true;
              if (this.lang === 'en') {
                buttonElement.textContent = buttonData.lang.enCaps;
              } else {
                buttonElement.textContent = buttonData.lang.ruCaps;
              }
            }
          }

          if (event.code === buttonData.code) {
            buttonElement.classList.add('active');
          }
        });

        window.addEventListener('keyup', (event) => {
          event.preventDefault();
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          if (!event.shiftKey && event.code === dataCodeShift) {
            this.shift = false;

            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.en;
            } else {
              buttonElement.textContent = buttonData.lang.ru;
            }

            if (event.altKey && event.ctrlKey) {
              event.preventDefault();
              if (this.lang === 'en') {
                this.lang = 'ru';
              } else {
                this.lang = 'en';
              }
              localStorage.setItem('lang', this.lang);
            }
          }

          if (event.getModifierState('CapsLock')) {
            this.caps = false;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.en;
            } else {
              buttonElement.textContent = buttonData.lang.ru;
            }
          }

          if (event.code === buttonData.code) {
            buttonElement.classList.remove('active');
            if (buttonData.func === false) {
              if (this.caps && !this.shift) {
                if (this.lang === 'en') {
                  this.textarea.value += buttonData.lang.enCaps;
                } else {
                  this.textarea.value += buttonData.lang.ruCaps;
                }
              }
              if (this.shift && !this.caps) {
                if (this.lang === 'en') {
                  this.textarea.value += buttonData.lang.enShift;
                } else {
                  this.textarea.value += buttonData.lang.ruShift;
                }
              }
              if (!this.caps && !this.shift) {
                if (this.lang === 'en') {
                  this.textarea.value += buttonData.lang.en;
                } else {
                  this.textarea.value += buttonData.lang.ru;
                }
              }
            }
          }
        });

        this.keyboard.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          const button = event.target;
          const buttonDataCode = button.getAttribute('data-code');
          if (buttonDataCode === dataCodeShift) {
            this.shift = true;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.enShift;
            } else {
              buttonElement.textContent = buttonData.lang.ruShift;
            }
          }

          if (buttonDataCode === 'CapsLock') {
            this.caps = true;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.enCaps;
            } else {
              buttonElement.textContent = buttonData.lang.ruCaps;
            }
          }

          if (buttonDataCode === 'MetaLeft') {
            event.preventDefault();
            if (this.lang === 'en') {
              this.lang = 'ru';
            } else {
              this.lang = 'en';
            }
            localStorage.setItem('lang', this.lang);
          }
        });

        this.keyboard.addEventListener('mouseup', (event) => {
          event.preventDefault();
          const dataCodeShift = 'ShiftLeft' || 'ShiftRight';
          const button = event.target;
          const buttonDataCode = button.getAttribute('data-code');
          if (buttonDataCode === dataCodeShift) {
            this.shift = false;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.en;
            } else {
              buttonElement.textContent = buttonData.lang.ru;
            }
          }

          if (buttonDataCode === 'CapsLock') {
            this.caps = false;
            if (this.lang === 'en') {
              buttonElement.textContent = buttonData.lang.en;
            } else {
              buttonElement.textContent = buttonData.lang.ru;
            }
          }
        });

        if (this.lang === 'en') {
          buttonElement.textContent = buttonData.lang.en;
        } else {
          buttonElement.textContent = buttonData.lang.ru;
        }

        rowElement.append(buttonElement);
      });
      this.keyboard.append(rowElement);
    });

    this.keyboard.addEventListener('click', (event) => {
      event.preventDefault();
      const button = event.target;
      const value = button.getAttribute('data-lang-en');
      const valueRu = button.getAttribute('data-lang-ru');
      const valueEnShift = button.getAttribute('data-lang-enShift');
      const valueRuShift = button.getAttribute('data-lang-ruShift');
      const valueEnCaps = button.getAttribute('data-lang-enCaps');
      const valueRuCaps = button.getAttribute('data-lang-ruCaps');
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
        ? this.textarea.value.length : cursorPosition + nextNewLinePosition + 1;
      const newValueBaskspace = textareaValue.slice(0, cursorPosition - 1)
        + textareaValue.slice(cursorPosition);
      const newValueDelete = textareaValue.slice(0, cursorPosition)
        + textareaValue.slice(cursorPosition + 1);
      this.textarea.focus();

      if (button.tagName === 'BUTTON') {
        if (buttonDataCode === 'Backspace') {
          if (cursorPosition > 0) {
            this.textarea.value = newValueBaskspace;
            this.textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
          }
        }

        if (buttonDataCode === 'Tab') {
          this.textarea.value = `${textareaValue.substring(0, cursorPosition)}\t${textareaValue.substring(cursorPositionEnd)}`;
          this.textarea.selectionStart = this.textarea.selectionEnd;
          this.textarea.selectionEnd = cursorPosition + 1;
        }

        if (buttonDataCode === 'Enter') {
          this.textarea.value = `${textareaValue.substring(0, cursorPosition)}\n${textareaValue.substring(cursorPositionEnd)}`;
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
          this.textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
        if (buttonDataCode === 'ArrowLeft') {
          this.textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        }
        if (buttonDataCode === 'ArrowUp') {
          this.textarea.setSelectionRange(newCursorPositionUp, newCursorPositionUp);
        }

        if (buttonDataCode === 'ArrowDown') {
          this.textarea.setSelectionRange(newCursorPositionDown, newCursorPositionDown);
        }

        if (this.shift && !this.caps && funcBoolean === 'false') {
          if (this.lang === 'en') {
            this.textarea.value += valueEnShift;
          } else {
            this.textarea.value += valueRuShift;
          }
        }

        if (this.caps && !this.shift && funcBoolean === 'false') {
          if (this.lang === 'en') {
            this.textarea.value += valueEnCaps;
          } else {
            this.textarea.value += valueRuCaps;
          }
        }

        if (!this.caps && !this.shift && funcBoolean === 'false') {
          if (this.lang === 'en') {
            this.textarea.value += value;
          } else {
            this.textarea.value += valueRu;
          }
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
