const userLanguage = navigator.language;
console.log(userLanguage);
//создание элементов страницы старт
function createTextWindow() {
  const body = document.querySelector('body');

  //создание элементов текстовго окна начало
  const textWindow = document.createElement('div');
  textWindow.classList.add('text-window');

  const form = document.createElement('form');
  form.classList.add('text-window__form');

  const label = document.createElement('label');
  label.classList.add('text-window__label');
  label.setAttribute('for', 'text-window__input');
  label.textContent = 'Input window:';

  const textarea = document.createElement('textarea');
  textarea.classList.add('text-window__input');
  textarea.setAttribute('id', 'text-window__input');
  textarea.setAttribute('name', 'text');
  textarea.setAttribute('rows', '7');
  textarea.setAttribute('cols', '50');
  textarea.setAttribute('required', '');
  textarea.textContent = 'text';

  const languageDiv = document.createElement('div');
  languageDiv.classList.add('text-window__language');
  languageDiv.setAttribute('id', 'text-window__language');

  const languageLabel = document.createElement('label');
  languageLabel.classList.add('text-window__language-label');
  languageLabel.setAttribute('for', 'text-window__language-select');
  languageLabel.textContent = 'Language:';

  const languageSelect = document.createElement('select');
  languageSelect.classList.add('text-window__language-select');
  languageSelect.setAttribute('id', 'text-window__language-select');
  languageSelect.setAttribute('name', 'language');
  languageSelect.setAttribute('required', '');

  const defaultOption = document.createElement('option');
  defaultOption.setAttribute('value', 'default');
  defaultOption.setAttribute('selected', '');
  defaultOption.textContent = 'Default';

  const englishOption = document.createElement('option');
  englishOption.setAttribute('value', 'en-US');
  englishOption.textContent = 'English';

  const russianOption = document.createElement('option');
  russianOption.setAttribute('value', 'ru-RU');
  russianOption.textContent = 'Russian';

  languageSelect.appendChild(defaultOption);
  languageSelect.appendChild(englishOption);
  languageSelect.appendChild(russianOption);

  languageDiv.appendChild(languageLabel);
  languageDiv.appendChild(languageSelect);

  form.appendChild(label);
  form.appendChild(textarea);
  form.appendChild(languageDiv);

  textWindow.appendChild(form);

  body.appendChild(textWindow);
}

createTextWindow();
//создание элементов текстовго конец


// Создание элементов клавиатуры начало
function createVirtualKeyboard() {
  const body = document.querySelector('body');

  const virtualKeyboard = document.createElement('div');
  virtualKeyboard.classList.add('virtual-keyboard');

  const row1 = document.createElement('div');
  row1.classList.add('virtual-keyboard__row-1', 'virtual-keyboard__row');

  const row2 = document.createElement('div');
  row2.classList.add('virtual-keyboard__row-2', 'virtual-keyboard__row');

  const row3 = document.createElement('div');
  row3.classList.add('virtual-keyboard__row-3', 'virtual-keyboard__row');

  const row4 = document.createElement('div');
  row4.classList.add('virtual-keyboard__row-4', 'virtual-keyboard__row');

  const row5 = document.createElement('div');
  row5.classList.add('virtual-keyboard__row-5', 'virtual-keyboard__row');

  const backquote = document.createElement('button');
  backquote.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  backquote.setAttribute('id', 'backquote');
  backquote.textContent = '`';

  const digit1 = document.createElement('button');
  digit1.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit1.setAttribute('id', 'digit-1');
  digit1.textContent = '1';

  const digit2 = document.createElement('button');
  digit2.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit2.setAttribute('id', 'digit-2');
  digit2.textContent = '2';

  const digit3 = document.createElement('button');
  digit3.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit3.setAttribute('id', 'digit-3');
  digit3.textContent = '3';

  const digit4 = document.createElement('button');
  digit4.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit4.setAttribute('id', 'digit-4');
  digit4.textContent = '4';

  const digit5 = document.createElement('button');
  digit5.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit5.setAttribute('id', 'digit-5');
  digit5.textContent = '5';

  const digit6 = document.createElement('button');
  digit6.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit6.setAttribute('id', 'digit-6');
  digit6.textContent = '6';

  const digit7 = document.createElement('button');
  digit7.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit7.setAttribute('id', 'digit-7');
  digit7.textContent = '7';

  const digit8 = document.createElement('button');
  digit8.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit8.setAttribute('id', 'digit-8');
  digit8.textContent = '8';

  const digit9 = document.createElement('button');
  digit9.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit9.setAttribute('id', 'digit-9');
  digit9.textContent = '9';

  const digit0 = document.createElement('button');
  digit0.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  digit0.setAttribute('id', 'digit-0');
  digit0.textContent = '0';

  const minus = document.createElement('button');
  minus.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  minus.setAttribute('id', 'minus');
  minus.textContent = '-';

  const plus = document.createElement('button');
  plus.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  plus.setAttribute('id', 'plus');
  plus.textContent = '+';

  const backspace = document.createElement('button');
  backspace.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--backspace');
  backspace.setAttribute('id', 'backspace');
  const backspaceIcon = document.createElement('i');
  backspaceIcon.classList.add('fas', 'fa-backspace');
  backspace.appendChild(backspaceIcon);

  const tab = document.createElement('button');
  tab.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--tab');
  tab.setAttribute('id', 'tab');
  tab.textContent = 'Tab';

  const letterQ = document.createElement('button');
  letterQ.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterQ.setAttribute('id', 'letter-q');
  letterQ.textContent = 'q';

  const letterW = document.createElement('button');
  letterW.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterW.setAttribute('id', 'letter-w');
  letterW.textContent = 'w';

  const letterE = document.createElement('button');
  letterE.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterE.setAttribute('id', 'letter-e');
  letterE.textContent = 'e';

  const letterR = document.createElement('button');
  letterR.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterR.setAttribute('id', 'letter-r');
  letterR.textContent = 'r';

  const letterT = document.createElement('button');
  letterT.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterT.setAttribute('id', 'letter-t');
  letterT.textContent = 't';

  const letterY = document.createElement('button');
  letterY.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterY.setAttribute('id', 'letter-y');
  letterY.textContent = 'y';

  const letterU = document.createElement('button');
  letterU.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterU.setAttribute('id', 'letter-u');
  letterU.textContent = 'u';

  const letterI = document.createElement('button');
  letterI.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterI.setAttribute('id', 'letter-i');
  letterI.textContent = 'i';

  const letterO = document.createElement('button');
  letterO.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterO.setAttribute('id', 'letter-o');
  letterO.textContent = 'o';

  const letterP = document.createElement('button');
  letterP.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  letterP.setAttribute('id', 'letter-p');
  letterP.textContent = 'p';

  const bracketLeft = document.createElement('button');
  bracketLeft.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  bracketLeft.setAttribute('id', 'bracket-left');
  bracketLeft.textContent = '[';

  const closeSquareBracket = document.createElement('button');
  closeSquareBracket.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  closeSquareBracket.setAttribute('id', 'close-square-bracket');
  closeSquareBracket.textContent = ']';

  const backslashSlash = document.createElement('button');
  backslashSlash.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--backslash-slash');
  backslashSlash.setAttribute('id', 'backslash-slash');
  backslashSlash.textContent = '\\';

  const Delite = document.createElement('button');
  Delite.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--del');
  Delite.setAttribute('id', 'delete');
  Delite.textContent = 'Del';

  const capsLockButton = document.createElement('button');
  capsLockButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--caps');
  capsLockButton.setAttribute('id', 'caps-lock');
  capsLockButton.textContent = 'Caps Lock';

  const aButton = document.createElement('button');
  aButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  aButton.setAttribute('id', 'letter-a');
  aButton.textContent = 'a';

  const sButton = document.createElement('button');
  sButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  sButton.setAttribute('id', 'letter-s');
  sButton.textContent = 's';

  const dButton = document.createElement('button');
  dButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  dButton.setAttribute('id', 'letter-d');
  dButton.textContent = 'd';

  const fButton = document.createElement('button');
  fButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  fButton.setAttribute('id', 'letter-f');
  fButton.textContent = 'f';

  const gButton = document.createElement('button');
  gButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  gButton.setAttribute('id', 'letter-g');
  gButton.textContent = 'g';

  const hButton = document.createElement('button');
  hButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  hButton.setAttribute('id', 'letter-h');
  hButton.textContent = 'h';

  const jButton = document.createElement('button');
  jButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  jButton.setAttribute('id', 'letter-j');
  jButton.textContent = 'j';

  const kButton = document.createElement('button');
  kButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  kButton.setAttribute('id', 'letter-k');
  kButton.textContent = 'k';

  const lButton = document.createElement('button');
  lButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  lButton.setAttribute('id', 'letter-l');
  lButton.textContent = 'l';

  const semicolonButton = document.createElement('button');
  semicolonButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  semicolonButton.setAttribute('id', 'semicolon');
  semicolonButton.textContent = ';';

  const quoteButton = document.createElement('button');
  quoteButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  quoteButton.setAttribute('id', 'quote');
  quoteButton.textContent = "'";

  const enterButton = document.createElement('button');
  enterButton.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--enter');
  enterButton.setAttribute('id', 'enter');
  enterButton.textContent = 'Enter';
  const buttonShiftLeft = document.createElement('button');
  buttonShiftLeft.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--l-shift');
  buttonShiftLeft.setAttribute('id', 'shift-left');
  buttonShiftLeft.textContent = 'L Shift';

  const buttonIntlBackslash = document.createElement('button');
  buttonIntlBackslash.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--backslash');
  buttonIntlBackslash.setAttribute('id', 'intl-backslash');
  buttonIntlBackslash.textContent = '\\';

  const buttonLetterZ = document.createElement('button');
  buttonLetterZ.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterZ.setAttribute('id', 'letter-z');
  buttonLetterZ.textContent = 'z';

  const buttonLetterX = document.createElement('button');
  buttonLetterX.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterX.setAttribute('id', 'letter-x');
  buttonLetterX.textContent = 'x';

  const buttonLetterC = document.createElement('button');
  buttonLetterC.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterC.setAttribute('id', 'letter-c');
  buttonLetterC.textContent = 'c';

  const buttonLetterV = document.createElement('button');
  buttonLetterV.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterV.setAttribute('id', 'letter-v');
  buttonLetterV.textContent = 'v';

  const buttonLetterB = document.createElement('button');
  buttonLetterB.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterB.setAttribute('id', 'letter-b');
  buttonLetterB.textContent = 'b';

  const buttonLetterN = document.createElement('button');
  buttonLetterN.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterN.setAttribute('id', 'letter-n');
  buttonLetterN.textContent = 'n';

  const buttonLetterM = document.createElement('button');
  buttonLetterM.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonLetterM.setAttribute('id', 'letter-m');
  buttonLetterM.textContent = 'm';

  const buttonComma = document.createElement('button');
  buttonComma.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonComma.setAttribute('id', 'comma');
  buttonComma.textContent = ',';

  const buttonPeriod = document.createElement('button');
  buttonPeriod.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonPeriod.setAttribute('id', 'period');
  buttonPeriod.textContent = '.';

  const buttonSlash = document.createElement('button');
  buttonSlash.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--letter');
  buttonSlash.setAttribute('id', 'slash');
  buttonSlash.textContent = '/';

  const buttonUp = document.createElement('button');
  buttonUp.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--up', 'virtual-keyboard__key--letter');
  buttonUp.setAttribute('id', 'up');
  buttonUp.textContent = '\u2191';
  
  const buttonShiftRight = document.createElement('button');
  buttonShiftRight.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--r-shift');
  buttonShiftRight.setAttribute('id', 'shift-right');
  buttonShiftRight.textContent = 'R Shift';
  const ctrlLeft = document.createElement('button');
  ctrlLeft.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--ctr');
  ctrlLeft.setAttribute('id', 'ctrl-left');
  ctrlLeft.textContent = 'L Ctrl';

  const window = document.createElement('button');
  window.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--window');
  window.setAttribute('id', 'window');
  window.textContent = '\u2634';

  const altLeft = document.createElement('button');
  altLeft.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--l-alt');
  altLeft.setAttribute('id', 'alt-left');
  altLeft.textContent = 'L Alt';

  const space = document.createElement('button');
  space.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--space');
  space.setAttribute('id', 'space');
  space.textContent = ' Space';

  const altRight = document.createElement('button');
  altRight.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--r-alt');
  altRight.setAttribute('id', 'alt-right');
  altRight.textContent = 'R Alt';

  const ctrlRight = document.createElement('button');
  ctrlRight.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--ctr');
  ctrlRight.setAttribute('id', 'ctrl-right');
  ctrlRight.textContent = 'R Ctrl';

  const left = document.createElement('button');
  left.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--button-left', 'virtual-keyboard__key--letter');
  left.setAttribute('id', 'left');
  left.textContent = '\u2190';

  const down = document.createElement('button');
  down.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--button-down', 'virtual-keyboard__key--letter');
  down.setAttribute('id', 'down');
  down.textContent = '\u2193';

  const right = document.createElement('button');
  right.classList.add('virtual-keyboard__key', 'virtual-keyboard__key--button-right', 'virtual-keyboard__key--letter');
  right.setAttribute('id', 'right');
  right.textContent = '\u2192';

  // Добавление элементов клавиатуры начало
  row1.appendChild(backquote);
  row1.appendChild(digit1);
  row1.appendChild(digit2);
  row1.appendChild(digit3);
  row1.appendChild(digit4);
  row1.appendChild(digit5);
  row1.appendChild(digit6);
  row1.appendChild(digit7);
  row1.appendChild(digit8);
  row1.appendChild(digit9);
  row1.appendChild(digit0);
  row1.appendChild(minus);
  row1.appendChild(plus);
  row1.appendChild(backspace);

  row2.appendChild(tab);
  row2.appendChild(letterQ);
  row2.appendChild(letterW);
  row2.appendChild(letterE);
  row2.appendChild(letterR);
  row2.appendChild(letterT);
  row2.appendChild(letterY);
  row2.appendChild(letterU);
  row2.appendChild(letterI);
  row2.appendChild(letterO);
  row2.appendChild(letterP);
  row2.appendChild(bracketLeft);
  row2.appendChild(closeSquareBracket);
  row2.appendChild(backslashSlash);
  row2.appendChild(Delite);

  row3.appendChild(capsLockButton);
  row3.appendChild(aButton);
  row3.appendChild(sButton);
  row3.appendChild(dButton);
  row3.appendChild(fButton);
  row3.appendChild(gButton);
  row3.appendChild(hButton);
  row3.appendChild(jButton);
  row3.appendChild(kButton);
  row3.appendChild(lButton);
  row3.appendChild(semicolonButton);
  row3.appendChild(quoteButton);
  row3.appendChild(enterButton);

  row4.appendChild(buttonShiftLeft);
  row4.appendChild(buttonIntlBackslash);
  row4.appendChild(buttonLetterZ);
  row4.appendChild(buttonLetterX);
  row4.appendChild(buttonLetterC);
  row4.appendChild(buttonLetterV);
  row4.appendChild(buttonLetterB);
  row4.appendChild(buttonLetterN);
  row4.appendChild(buttonLetterM);
  row4.appendChild(buttonComma);
  row4.appendChild(buttonPeriod);
  row4.appendChild(buttonSlash);
  row4.appendChild(buttonUp);
  row4.appendChild(buttonShiftRight);

  row5.appendChild(ctrlLeft);
  row5.appendChild(window);
  row5.appendChild(altLeft);
  row5.appendChild(space);
  row5.appendChild(altRight);
  row5.appendChild(ctrlRight);
  row5.appendChild(left);
  row5.appendChild(down);
  row5.appendChild(right);

  virtualKeyboard.appendChild(row1);
  virtualKeyboard.appendChild(row2);
  virtualKeyboard.appendChild(row3);
  virtualKeyboard.appendChild(row4);
  virtualKeyboard.appendChild(row5);
  body.appendChild(virtualKeyboard);
  
  
  }

  createVirtualKeyboard();


//создание элементов клавиатуры



const selectElement = document.getElementById("text-window__language-select");
const textAreaElement = document.getElementById("text-window__input");
let textLanguage = `${userLanguage}.json`;
let localTextLanguage = textLanguage;

function updateKeyboard() {
  fetch(localTextLanguage)
    .then(response => response.json())
    .then(keyboard => {
      const keyboardButtons = document.querySelectorAll('.virtual-keyboard__key');
      keyboardButtons.forEach(button => {
        if (button.id in keyboard) {
          const keyValues = keyboard[button.id].split(",");
          if (shiftKeyPressed) {
            button.textContent = keyValues[0];
          } else {
            button.textContent = keyValues[1].replace(/&#44;/g, ",");
          }
        }
      });
    })
    .catch(error => {
      console.log('Ошибка:', error);
    });
}

let shiftKeyPressed = false;
document.addEventListener("keydown", function(event) {
  if (event.key === "Shift") {
    shiftKeyPressed = true;
    updateKeyboard();
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "Shift") {
    shiftKeyPressed = false;
    updateKeyboard();
  }
});

updateKeyboard();

selectElement.addEventListener("change", function() {
  const selectedOption = this.value;
  if (selectedOption === 'default') {
    localTextLanguage = textLanguage;
  } else if (selectedOption === 'en-US') {
    localTextLanguage= 'en-US.json';
  } else if (selectedOption === 'ru-RU') {
    localTextLanguage = 'ru-RU.json';
  } else {
    localTextLanguage = 'en-US.json';
  }
  console.log(selectedOption);
  updateKeyboard();
});