(()=>{"use strict";const e=[[{code:"Backquote",func:!1,lang:{en:"`",ru:"ё",enShift:"~",ruShift:"Ё",enCaps:"`",ruCaps:"Ё"},width:"regular"},{code:"Digit1",func:!1,lang:{en:"1",ru:"1",enShift:"!",ruShift:"!",enCaps:"1",ruCaps:"1"},width:"regular"},{code:"Digit2",func:!1,lang:{en:"2",ru:"2",enShift:"@",ruShift:'"',enCaps:"2",ruCaps:"2"},width:"regular"},{code:"Digit3",func:!1,lang:{en:"3",ru:"3",enShift:"#",ruShift:"№",enCaps:"3",ruCaps:"3"},width:"regular"},{code:"Digit4",func:!1,lang:{en:"4",ru:"4",enShift:"$",ruShift:";",enCaps:"4",ruCaps:"4"},width:"regular"},{code:"Digit5",func:!1,lang:{en:"5",ru:"5",enShift:"%",ruShift:"%",enCaps:"5",ruCaps:"5"},width:"regular"},{code:"Digit6",func:!1,lang:{en:"6",ru:"6",enShift:"^",ruShift:":",enCaps:"6",ruCaps:"6"},width:"regular"},{code:"Digit7",func:!1,lang:{en:"7",ru:"7",enShift:"&",ruShift:"?",enCaps:"7",ruCaps:"7"},width:"regular"},{code:"Digit8",func:!1,lang:{en:"8",ru:"8",enShift:"*",ruShift:"*",enCaps:"8",ruCaps:"8"},width:"regular"},{code:"Digit9",func:!1,lang:{en:"9",ru:"9",enShift:"(",ruShift:"(",enCaps:"9",ruCaps:"9"},width:"regular"},{code:"Digit0",func:!1,lang:{en:"0",ru:"0",enShift:")",ruShift:")",enCaps:"0",ruCaps:"0"},width:"regular"},{code:"Minus",func:!1,lang:{en:"-",ru:"-",enShift:"_",ruShift:"_",enCaps:"-",ruCaps:"-"},width:"regular"},{code:"Equal",func:!1,lang:{en:"=",ru:"=",enShift:"+",ruShift:"+",enCaps:"=",ruCaps:"="},width:"regular"},{code:"Backspace",func:!0,lang:{en:"⌫ Backspace",ru:"⌫ Backspace",enShift:"⌫ Backspace",ruShift:"⌫ Backspace",enCaps:"⌫ Backspace",ruCaps:"⌫ Backspace"},width:"average-wide"}],[{code:"Tab",func:!0,lang:{en:"↹ Tab",ru:"↹ Tab",enShift:"↹ Tab",ruShift:"↹ Tab",enCaps:"↹ Tab",ruCaps:"↹ Tab"},width:"regular-wide"},{code:"KeyQ",func:!1,lang:{en:"q",ru:"й",enShift:"Q",ruShift:"Й",enCaps:"Q",ruCaps:"Й"},width:"regular"},{code:"KeyW",func:!1,lang:{en:"w",ru:"ц",enShift:"W",ruShift:"Ц",enCaps:"W",ruCaps:"Ц"},width:"regular"},{code:"KeyE",func:!1,lang:{en:"e",ru:"у",enShift:"E",ruShift:"У",enCaps:"E",ruCaps:"У"},width:"regular"},{code:"KeyR",func:!1,lang:{en:"r",ru:"к",enShift:"R",ruShift:"К",enCaps:"R",ruCaps:"К"},width:"regular"},{code:"KeyT",func:!1,lang:{en:"t",ru:"е",enShift:"T",ruShift:"Е",enCaps:"T",ruCaps:"Е"},width:"regular"},{code:"KeyY",func:!1,lang:{en:"y",ru:"н",enShift:"Y",ruShift:"Н",enCaps:"Y",ruCaps:"Н"},width:"regular"},{code:"KeyU",func:!1,lang:{en:"u",ru:"г",enShift:"U",ruShift:"Г",enCaps:"U",ruCaps:"Г"},width:"regular"},{code:"KeyI",func:!1,lang:{en:"i",ru:"ш",enShift:"I",ruShift:"Ш",enCaps:"I",ruCaps:"Ш"},width:"regular"},{code:"KeyO",func:!1,lang:{en:"o",ru:"щ",enShift:"O",ruShift:"Щ",enCaps:"O",ruCaps:"Щ"},width:"regular"},{code:"KeyP",func:!1,lang:{en:"p",ru:"з",enShift:"P",ruShift:"З",enCaps:"P",ruCaps:"З"},width:"regular"},{code:"BracketLeft",func:!1,lang:{en:"[",ru:"х",enShift:"{",ruShift:"Х",enCaps:"[",ruCaps:"Х"},width:"regular"},{code:"BracketRight",func:!1,lang:{en:"]",ru:"ъ",enShift:"}",ruShift:"Ъ",enCaps:"]",ruCaps:"Ъ"},width:"regular"},{code:"Backslash",func:!1,lang:{en:"\\",ru:"\\",enShift:"|",ruShift:"//",enCaps:"\\",ruCaps:"\\"},width:"backslash"}],[{code:"CapsLock",func:!0,lang:{en:"Caps Lock",ru:"Caps Lock",enShift:"Caps Lock",ruShift:"Caps Lock",enCaps:"Caps Lock",ruCaps:"Caps Lock"},width:"extra-wide"},{code:"KeyA",func:!1,lang:{en:"a",ru:"ф",enShift:"A",ruShift:"Ф",enCaps:"A",ruCaps:"Ф"},width:"regular"},{code:"KeyS",func:!1,lang:{en:"s",ru:"ы",enShift:"S",ruShift:"Ы",enCaps:"S",ruCaps:"Ы"},width:"regular"},{code:"KeyD",func:!1,lang:{en:"d",ru:"в",enShift:"D",ruShift:"В",enCaps:"D",ruCaps:"В"},width:"regular"},{code:"KeyF",func:!1,lang:{en:"f",ru:"а",enShift:"F",ruShift:"А",enCaps:"F",ruCaps:"А"},width:"regular"},{code:"KeyG",func:!1,lang:{en:"g",ru:"п",enShift:"G",ruShift:"П",enCaps:"G",ruCaps:"П"},width:"regular"},{code:"KeyH",func:!1,lang:{en:"h",ru:"р",enShift:"H",ruShift:"Р",enCaps:"H",ruCaps:"Р"},width:"regular"},{code:"KeyJ",func:!1,lang:{en:"j",ru:"о",enShift:"J",ruShift:"О",enCaps:"J",ruCaps:"О"},width:"regular"},{code:"KeyK",func:!1,lang:{en:"k",ru:"л",enShift:"K",ruShift:"Л",enCaps:"K",ruCaps:"Л"},width:"regular"},{code:"KeyL",func:!1,lang:{en:"l",ru:"д",enShift:"L",ruShift:"Д",enCaps:"L",ruCaps:"Д"},width:"regular"},{code:"Semicolon",func:!1,lang:{en:";",ru:"ж",enShift:":",ruShift:"Ж",enCaps:";",ruCaps:"Ж"},width:"regular"},{code:"Quote",func:!1,lang:{en:"'",ru:"э",enShift:'"',ruShift:"Э",enCaps:"'",ruCaps:"Э"},width:"regular"},{code:"Enter",func:!0,lang:{en:"↩ Enter",ru:"↩ Enter",enShift:"↩ Enter",ruShift:"↩ Enter",enCaps:"↩ Enter",ruCaps:"↩ Enter"},width:"ultra-wide"}],[{code:"ShiftLeft",func:!0,lang:{en:"⇧ Shift",ru:"⇧ Shift",enShift:"⇧ Shift",ruShift:"⇧ Shift",enCaps:"⇧ Shift",ruCaps:"⇧ Shift"},width:"ultra-wide"},{code:"KeyZ",func:!1,lang:{en:"z",ru:"я",enShift:"Z",ruShift:"Я",enCaps:"Z",ruCaps:"Я"},width:"regular"},{code:"KeyX",func:!1,lang:{en:"x",ru:"ч",enShift:"X",ruShift:"Ч",enCaps:"X",ruCaps:"Ч"},width:"regular"},{code:"KeyC",func:!1,lang:{en:"c",ru:"с",enShift:"C",ruShift:"С",enCaps:"C",ruCaps:"С"},width:"regular"},{code:"KeyV",func:!1,lang:{en:"v",ru:"м",enShift:"V",ruShift:"М",enCaps:"V",ruCaps:"М"},width:"regular"},{code:"KeyB",func:!1,lang:{en:"b",ru:"и",enShift:"B",ruShift:"И",enCaps:"B",ruCaps:"И"},width:"regular"},{code:"KeyN",func:!1,lang:{en:"n",ru:"т",enShift:"N",ruShift:"Т",enCaps:"N",ruCaps:"Т"},width:"regular"},{code:"KeyM",func:!1,lang:{en:"m",ru:"ь",enShift:"M",ruShift:"Ь",enCaps:"M",ruCaps:"Ь"},width:"regular"},{code:"Comma",func:!1,lang:{en:",",ru:"б",enShift:"<",ruShift:"Б",enCaps:",",ruCaps:"Б"},width:"regular"},{code:"Period",func:!1,lang:{en:".",ru:"ю",enShift:">",ruShift:"Ю",enCaps:".",ruCaps:"Ю"},width:"regular"},{code:"Slash",func:!1,lang:{en:"/",ru:".",enShift:"?",ruShift:",",enCaps:"/",ruCaps:"."},width:"regular"},{code:"ShiftRight",func:!0,lang:{en:"⇧ Shift",ru:"⇧ Shift",enShift:"⇧ Shift",ruShift:"⇧ Shift",enCaps:"⇧ Shift",ruCaps:"⇧ Shift"},width:"extra-wide"},{code:"ArrowUp",func:!0,lang:{en:"⯅",ru:"⯅",enShift:"⯅",ruShift:"⯅",enCaps:"⯅",ruCaps:"⯅"},width:"regular"},{code:"Delete",func:!0,lang:{en:"Del",ru:"Del",enShift:"Del",ruShift:"Del",enCaps:"Del",ruCaps:"Del"},width:"regular"}],[{code:"ControlLeft",func:!0,lang:{en:"Ctrl",ru:"Ctrl",enShift:"Ctrl",ruShift:"Ctrl",enCaps:"Ctrl",ruCaps:"Ctrl"},width:"extra-wide"},{code:"MetaLeft",func:!0,lang:{en:"⊞",ru:"⊞",enShift:"⊞",ruShift:"⊞",enCaps:"⊞",ruCaps:"⊞"},width:"regular"},{code:"AltLeft",func:!0,lang:{en:"Alt",ru:"Alt",enShift:"Alt",ruShift:"Alt",enCaps:"Alt",ruCaps:"Alt"},width:"regular"},{code:"Space",func:!1,lang:{en:" ",ru:" ",enShift:" ",ruShift:" ",enCaps:" ",ruCaps:" "},width:"space"},{code:"AltRight",func:!0,lang:{en:"Alt",ru:"Alt",enShift:"Alt",ruShift:"Alt",enCaps:"Alt",ruCaps:"Alt"},width:"regular"},{code:"ContextMenu",func:!0,lang:{en:"▤",ru:"▤",enShift:"▤",ruShift:"▤",enCaps:"▤",ruCaps:"▤"},width:"regular"},{code:"ControlRight",func:!0,lang:{en:"Ctrl",ru:"Ctrl",enShift:"Ctrl",ruShift:"Ctrl",enCaps:"Ctrl",ruCaps:"Ctrl"},width:"extra-wide"},{code:"ArrowLeft",func:!0,lang:{en:"⯇",ru:"⯇",enShift:"⯇",ruShift:"⯇",enCaps:"⯇",ruCaps:"⯇"},width:"regular"},{code:"ArrowDown",func:!0,lang:{en:"⯆",ru:"⯆",enShift:"⯆",ruShift:"⯆",enCaps:"⯆",ruCaps:"⯆"},width:"regular"},{code:"ArrowRight",func:!0,lang:{en:"⯈",ru:"⯈",enShift:"⯈",ruShift:"⯈",enCaps:"⯈",ruCaps:"⯈"},width:"regular"}]];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var a=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.caps=!1,this.shift=!1,this.lang="ru"===localStorage.getItem("lang")?"ru":"en"}var a,r;return a=t,(r=[{key:"init",value:function(){var t=this;this.main=document.createElement("main"),this.title=document.createElement("h1"),this.textarea=document.createElement("textarea"),this.keyboard=document.createElement("section"),this.key=document.createElement("button"),this.description=document.createElement("p"),this.main.classList.add("main","container"),this.title.classList.add("main__title"),this.textarea.classList.add("main__textarea"),this.textarea.focus(),this.keyboard.classList.add("keyboard"),this.description.classList.add("keyboard__description"),this.title.textContent="RSSchool Virtual keyboard",this.textarea.placeholder="Type anything...",this.description.textContent="The keyboard was created in the Windows operating system.",this.main.append(this.title,this.textarea,this.keyboard),this.keyboard.append(this.description),document.body.append(this.main),e.forEach((function(e){var n=document.createElement("div");n.classList.add("keyboard__row"),e.forEach((function(e){var a=document.createElement("button");a.classList.add("keyboard__button"),a.setAttribute("type","button"),a.setAttribute("data-code",e.code),a.setAttribute("data-lang-en",e.lang.en),a.setAttribute("data-lang-ru",e.lang.ru),a.setAttribute("data-lang-enShift",e.lang.enShift),a.setAttribute("data-lang-ruShift",e.lang.ruShift),a.setAttribute("data-lang-enCaps",e.lang.enCaps),a.setAttribute("data-lang-ruCaps",e.lang.ruCaps),a.setAttribute("func",e.func),a.classList.add("keyboard__button-".concat(e.width)),window.addEventListener("keydown",(function(n){n.shiftKey&&(t.shift=!0,a.textContent=e.lang.enShift),"CapsLock"===n.code&&!1===e.func&&(a.textContent=e.lang.enCaps,t.caps=!0)})),window.addEventListener("keyup",(function(n){n.shiftKey||"ShiftLeft"!==n.code||(t.shift=!1,a.textContent=e.lang.en),n.getModifierState("CapsLock")&&(t.caps=!1,a.textContent=e.lang.en)})),t.keyboard.addEventListener("mousedown",(function(n){var r=n.target.getAttribute("data-code");"ShiftLeft"===r&&(t.shift=!0,a.textContent=e.lang.enShift),"CapsLock"===r&&(t.caps=!0,a.textContent=e.lang.enCaps)})),t.keyboard.addEventListener("mouseup",(function(n){var r=n.target.getAttribute("data-code");"ShiftLeft"===r&&(t.shift=!1,a.textContent=e.lang.en),"CapsLock"===r&&(t.caps=!1,a.textContent=e.lang.en)})),t.shift&&!t.caps&&(a.textContent=e.lang.enShift),t.caps&&!t.shift&&(a.textContent=e.lang.enCaps),t.caps&&t.shift||(a.textContent=e.lang.en),a.textContent=e.lang.en,n.append(a)})),t.keyboard.append(n)})),this.keyboard.addEventListener("click",(function(e){var n=e.target,a=n.getAttribute("data-lang-en"),r=n.getAttribute("data-lang-enShift"),i=n.getAttribute("data-lang-enCaps"),u=n.getAttribute("data-code"),s=n.getAttribute("func"),f=t.textarea.value,c=t.textarea.selectionStart,h=t.textarea.selectionEnd,l=t.textarea.value.substring(0,c).lastIndexOf("n"),o=-1===l?0:l+1,d=t.textarea.value.substring(c).indexOf("n"),p=-1===d?t.textarea.value.length:c+d+1,g=f.slice(0,c-1)+f.slice(c),C=f.slice(0,c)+f.slice(c+1);t.textarea.focus(),"BUTTON"===n.tagName&&("Backspace"===u&&c>0&&(t.textarea.value=g,t.textarea.setSelectionRange(c-1,c-1)),"Tab"===u&&(t.textarea.value="".concat(f.substring(0,c),"\t").concat(f.substring(h)),t.textarea.selectionStart=t.textarea.selectionEnd,t.textarea.selectionEnd=c+1),"Enter"===u&&(t.textarea.value="".concat(f.substring(0,c),"\n").concat(f.substring(h)),t.textarea.selectionStart=t.textarea.selectionEnd,t.textarea.selectionEnd=c+1),"Delete"===u&&c<f.length&&(t.shift&&(t.textarea.valueEnShift=C,t.textarea.setSelectionRange(c,c)),t.textarea.value=C,t.textarea.setSelectionRange(c,c)),"ArrowRight"===u&&t.textarea.setSelectionRange(c+1,c+1),"ArrowLeft"===u&&t.textarea.setSelectionRange(c-1,c-1),"ArrowUp"===u&&t.textarea.setSelectionRange(o,o),"ArrowDown"===u&&t.textarea.setSelectionRange(p,p),t.shift&&!t.caps&&"false"===s&&(t.textarea.value+=r),t.caps&&!t.shift&&"false"===s&&(t.textarea.value+=i),t.caps||t.shift||"false"!==s||(t.textarea.value+=a))}))}}])&&n(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),t}();window.addEventListener("DOMContentLoaded",(function(){var e=new a;e.init(),e.textarea.focus()}))})();