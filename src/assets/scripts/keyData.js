const keyData = [
  [
    {
      code: 'Backquote',
      func: false,
      lang: {
        en: '`',
        ru: 'ё',
        enShift: '~',
        ruShift: 'Ё',
      },
      width: 'regular',
    },
    {
      code: 'Digit1',
      func: false,
      lang: {
        en: '1',
        ru: '1',
        enShift: '!',
        ruShift: '!',
      },
      width: 'regular',
    },
    {
      code: 'Digit2',
      func: false,
      lang: {
        en: '2',
        ru: '2',
        enShift: '@',
        ruShift: '"',
      },
      width: 'regular',
    },
    {
      code: 'Digit3',
      func: false,
      lang: {
        en: '3',
        ru: '3',
        enShift: '#',
        ruShift: '№',
      },
      width: 'regular',
    },
    {
      code: 'Digit4',
      func: false,
      lang: {
        en: '4',
        ru: '4',
        enShift: '$',
        ruShift: ';',
      },
      width: 'regular',
    },
    {
      code: 'Digit5',
      func: false,
      lang: {
        en: '5',
        ru: '5',
        enShift: '%',
        ruShift: '%',
      },
      width: 'regular',
    },
    {
      code: 'Digit6',
      func: false,
      lang: {
        en: '6',
        ru: '6',
        enShift: '^',
        ruShift: ':',
      },
      width: 'regular',
    },
    {
      code: 'Digit7',
      func: false,
      lang: {
        en: '7',
        ru: '7',
        enShift: '&',
        ruShift: '?',
      },
      width: 'regular',
    },
    {
      code: 'Digit8',
      func: false,
      lang: {
        en: '8',
        ru: '8',
        enShift: '*',
        ruShift: '*',
      },
      width: 'regular',
    },
    {
      code: 'Digit9',
      func: false,
      lang: {
        en: '9',
        ru: '9',
        enShift: '(',
        ruShift: '(',
      },
      width: 'regular',
    },
    {
      code: 'Digit0',
      func: false,
      lang: {
        en: '0',
        ru: '0',
        enShift: ')',
        ruShift: ')',
      },
      width: 'regular',
    },
    {
      code: 'Minus',
      func: false,
      lang: {
        en: '-',
        ru: '-',
        enShift: '_',
        ruShift: '_',
      },
      width: 'regular',
    },
    {
      code: 'Equal',
      func: false,
      lang: {
        en: '=',
        ru: '=',
        enShift: '+',
        ruShift: '+',
      },
      width: 'regular',
    },
    {
      code: 'Backspace',
      func: true,
      lang: {
        en: '⌫ Backspace',
        ru: '⌫ Backspace',
      },
      width: 'average-wide',
    },
  ],

  [
    {
      code: 'Tab',
      func: true,
      lang: {
        en: '↹ Tab',
        ru: '↹ Tab',
      },
      width: 'regular-wide',
    },
    {
      code: 'KeyQ',
      func: false,
      lang: {
        en: 'q',
        ru: 'й',
        enShift: 'Q',
        ruShift: 'Й',
      },
      width: 'regular',
    },
    {
      code: 'KeyW',
      func: false,
      lang: {
        en: 'w',
        ru: 'ц',
        enShift: 'W',
        ruShift: 'Ц',
      },
      width: 'regular',
    },
    {
      code: 'KeyE',
      func: false,
      lang: {
        en: 'e',
        ru: 'у',
        enShift: 'E',
        ruShift: 'У',
      },
      width: 'regular',
    },
    {
      code: 'KeyR',
      func: false,
      lang: {
        en: 'r',
        ru: 'к',
        enShift: 'R',
        ruShift: 'К',
      },
      width: 'regular',
    },
    {
      code: 'KeyT',
      func: false,
      lang: {
        en: 't',
        ru: 'е',
        enShift: 'T',
        ruShift: 'Е',
      },
      width: 'regular',
    },
    {
      code: 'KeyY',
      func: false,
      lang: {
        en: 'y',
        ru: 'н',
        enShift: 'Y',
        ruShift: 'Н',
      },
      width: 'regular',
    },
    {
      code: 'KeyU',
      func: false,
      lang: {
        en: 'u',
        ru: 'г',
        enShift: 'U',
        ruShift: 'Г',
      },
      width: 'regular',
    },
    {
      code: 'KeyI',
      func: false,
      lang: {
        en: 'i',
        ru: 'ш',
        enShift: 'I',
        ruShift: 'Ш',
      },
      width: 'regular',
    },
    {
      code: 'KeyO',
      func: false,
      lang: {
        en: 'o',
        ru: 'щ',
        enShift: 'O',
        ruShift: 'Щ',
      },
      width: 'regular',
    },
    {
      code: 'KeyP',
      func: false,
      lang: {
        en: 'p',
        ru: 'з',
        enShift: 'P',
        ruShift: 'З',
      },
      width: 'regular',
    },
    {
      code: 'BracketLeft',
      func: false,
      lang: {
        en: '[',
        ru: 'х',
        enShift: '{',
        ruShift: 'Х',
      },
      width: 'regular',
    },
    {
      code: 'BracketRight',
      func: false,
      lang: {
        en: ']',
        ru: 'ъ',
        enShift: '}',
        ruShift: 'Ъ',
      },
      width: 'regular',
    },
    {
      code: 'Backslash',
      func: false,
      lang: {
        en: '\\',
        ru: '\\',
        enShift: '|',
        ruShift: '//',
      },
      width: 'backslash',
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      lang: {
        en: 'Caps Lock',
        ru: 'Caps Lock',
      },
      width: 'extra-wide',
    },
    {
      code: 'KeyA',
      func: false,
      lang: {
        en: 'a',
        ru: 'ф',
        enShift: 'A',
        ruShift: 'Ф',
      },
      width: 'regular',
    },
    {
      code: 'KeyS',
      func: false,
      lang: {
        en: 's',
        ru: 'ы',
        enShift: 'S',
        ruShift: 'Ы',
      },
      width: 'regular',
    },
    {
      code: 'KeyD',
      func: false,
      lang: {
        en: 'd',
        ru: 'в',
        enShift: 'D',
        ruShift: 'В',
      },
      width: 'regular',
    },
    {
      code: 'KeyF',
      func: false,
      lang: {
        en: 'f',
        ru: 'а',
        enShift: 'F',
        ruShift: 'А',
      },
      width: 'regular',
    },
    {
      code: 'KeyG',
      func: false,
      lang: {
        en: 'g',
        ru: 'п',
        enShift: 'G',
        ruShift: 'П',
      },
      width: 'regular',
    },
    {
      code: 'KeyH',
      func: false,
      lang: {
        en: 'h',
        ru: 'р',
        enShift: 'H',
        ruShift: 'Р',
      },
      width: 'regular',
    },
    {
      code: 'KeyJ',
      func: false,
      lang: {
        en: 'j',
        ru: 'о',
        enShift: 'J',
        ruShift: 'О',
      },
      width: 'regular',
    },
    {
      code: 'KeyK',
      func: false,
      lang: {
        en: 'k',
        ru: 'л',
        enShift: 'K',
        ruShift: 'Л',
      },
      width: 'regular',
    },
    {
      code: 'KeyL',
      func: false,
      lang: {
        en: 'l',
        ru: 'д',
        enShift: 'L',
        ruShift: 'Д',
      },
      width: 'regular',
    },
    {
      code: 'Semicolon',
      func: false,
      lang: {
        en: ';',
        ru: 'ж',
        enShift: ':',
        ruShift: 'Ж',
      },
      width: 'regular',
    },
    {
      code: 'Quote',
      func: false,
      lang: {
        en: "'",
        ru: 'э',
        enShift: '"',
        ruShift: 'Э',
      },
      width: 'regular',
    },
    {
      code: 'Enter',
      func: true,
      lang: {
        en: '↩ Enter',
        ru: '↩ Enter',
      },
      width: 'ultra-wide',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      lang: {
        en: '⇧ Shift',
        ru: '⇧ Shift',
      },
      width: 'ultra-wide',
    },
    {
      code: 'KeyZ',
      func: false,
      lang: {
        en: 'z',
        ru: 'я',
        enShift: 'Z',
        ruShift: 'Я',
      },
      width: 'regular',
    },
    {
      code: 'KeyX',
      func: false,
      lang: {
        en: 'x',
        ru: 'ч',
        enShift: 'X',
        ruShift: 'Ч',
      },
      width: 'regular',
    },
    {
      code: 'KeyC',
      func: false,
      lang: {
        en: 'c',
        ru: 'с',
        enShift: 'C',
        ruShift: 'С',
      },
      width: 'regular',
    },
    {
      code: 'KeyV',
      func: false,
      lang: {
        en: 'v',
        ru: 'м',
        enShift: 'V',
        ruShift: 'М',
      },
      width: 'regular',
    },
    {
      code: 'KeyB',
      func: false,
      lang: {
        en: 'b',
        ru: 'и',
        enShift: 'B',
        ruShift: 'И',
      },
      width: 'regular',
    },
    {
      code: 'KeyN',
      func: false,
      lang: {
        en: 'n',
        ru: 'т',
        enShift: 'N',
        ruShift: 'Т',
      },
      width: 'regular',
    },
    {
      code: 'KeyM',
      func: false,
      lang: {
        en: 'm',
        ru: 'ь',
        enShift: 'M',
        ruShift: 'Ь',
      },
      width: 'regular',
    },
    {
      code: 'Comma',
      func: false,
      lang: {
        en: ',',
        ru: 'б',
        enShift: '<',
        ruShift: 'Б',
      },
      width: 'regular',
    },
    {
      code: 'Period',
      func: false,
      lang: {
        en: '.',
        ru: 'ю',
        enShift: '>',
        ruShift: 'Ю',
      },
      width: 'regular',
    },
    {
      code: 'Slash',
      func: false,
      lang: {
        en: '/',
        ru: '.',
        enShift: '?',
        ruShift: ',',
      },
      width: 'regular',
    },
    {
      code: 'ShiftRight',
      func: true,
      lang: {
        en: '⇧ Shift',
        ru: '⇧ Shift',
      },
      width: 'extra-wide',
    },
    {
      code: 'ArrowUp',
      func: true,
      lang: {
        en: '⯅',
        ru: '⯅',
      },
      width: 'regular',
    },
    {
      code: 'Delete',
      func: true,
      lang: {
        en: 'Del',
        ru: 'Del',
      },
      width: 'regular',
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      lang: {
        en: 'Ctrl',
        ru: 'Ctrl',
      },
      width: 'extra-wide',
    },
    {
      code: 'MetaLeft',
      func: true,
      lang: {
        en: '⊞',
        ru: '⊞',
      },
      width: 'regular',
    },
    {
      code: 'AltLeft',
      func: true,
      lang: {
        en: 'Alt',
        ru: 'Alt',
      },
      width: 'regular',
    },
    {
      code: 'Space',
      func: false,
      lang: {
        en: ' ',
        ru: ' ',
      },
      width: 'space',
    },
    {
      code: 'AltRight',
      func: true,
      lang: {
        en: 'Alt',
        ru: 'Alt',
      },
      width: 'regular',
    },
    {
      code: 'ContextMenu',
      func: true,
      lang: {
        en: '▤',
        ru: '▤',
      },
      width: 'regular',
    },
    {
      code: 'ControlRight',
      func: true,
      lang: {
        en: 'Ctrl',
        ru: 'Ctrl',
      },
      width: 'extra-wide',
    },
    {
      code: 'ArrowLeft',
      func: true,
      lang: {
        en: '⯇',
        ru: '⯇',
      },
      width: 'regular',
    },
    {
      code: 'ArrowDown',
      func: true,
      lang: {
        en: '⯆',
        ru: '⯆',
      },
      width: 'regular',
    },
    {
      code: 'ArrowRight',
      func: true,
      lang: {
        en: '⯈',
        ru: '⯈',
      },
      width: 'regular',
    },
  ],
];

export default keyData;
