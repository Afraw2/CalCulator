// 1. Get the display element
const display = document.getElementById('display');

// 2. Get all calculator buttons
const buttons = document.querySelectorAll('.btn');

// 3. Initial input string
let input = '';

// 4. Add click event to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    // 5. If "C" (Clear) is clicked, reset input and display
    if (value === 'C') {
      input = '';
      display.textContent = '0';
      return;
    }

    // 6. If "←" (Backspace) is clicked, remove the last character
    if (value === '←') {
      input = input.slice(0, -1);
      display.textContent = input || '0';
      return;
    }

    // 7. If "=" is clicked, evaluate the expression
    if (value === '=') {
      try {
        // Evaluate the math expression using eval()
        input = eval(input).toString();
        display.textContent = input;
      } catch (error) {
        display.textContent = 'Error';
        input = '';
      }
      return;
    }

    // 8. Append the clicked value to input
    input += value;
    display.textContent = input;
  });
});