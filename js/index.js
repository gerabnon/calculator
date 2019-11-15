let Numbers = document.querySelectorAll('.number')
  , Operations = document.querySelectorAll('.operation')
  , DecimalBtn = document.getElementById('decimal')
  , ClearBtns = document.querySelectorAll('.clearBtn')
  , HowWorkBtn = document.getElementById('howWorkBtn')
  , Display = document.getElementById('display')
  , MemoryCurrentNumber = 0
  , MemoryNewNumber = false
  , MemoryPendingOperation = ''
  , operationsList = document.getElementById('operationsList');

for (let i = 0; i < Numbers.length; i++) {
  let number = Numbers[i];
  number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < Operations.length; i++) {
  let operationBtn = Operations[i];
  operationBtn.addEventListener('click', function(e) {
    operation(e.target.textContent);
  });
}

for (let i = 0; i < ClearBtns.length; i++) {
  let clearBtn = ClearBtns[i];
  clearBtn.addEventListener('click', function(e) {
    clear(e.srcElement.id);
  });
}
;
DecimalBtn.addEventListener('click', decimal);

function clear(id) {
  if (id === 'ce') {
    display.value = 'продовжуй';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  };
};
function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
    ;
  }
  ;
}
;
function operation(op) {
  let localOperationMemory = display.value;
  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    ;display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  }
  ;
}

function decimal() {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  ;display.value = localDecimalMemory;
}
;
function howWork(argument) {
  for (let i = 0; i < Operations.length; i++) {
    let newLi = document.createElement('li');
    let operationText = Operations[i].value;
    newLi.innerText = operationText;
    operationsList.appendChild(newLi);
  }
  ;
}
;
