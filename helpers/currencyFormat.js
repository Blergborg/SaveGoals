// Formats integers into a 2 precision decimal string
export const currencyFormat = (num) => {
  let formatted = num.toString();
  if (formatted.length > 2) {
    formatted = formatted.slice(0, -2) + "." + formatted.slice(-2);
  } else if (formatted.length > 1) {
    formatted = "0." + formatted;
  } else {
    formatted = "0.0" + formatted;
  }
  return formatted;
};

// Formats 2 precision float values into integers
// doesn't allow for 
export const currencyDeformat = (num) => (
  (num === NaN ? 0 : num) * 100
);
