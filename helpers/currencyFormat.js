// Formats integers into a 2 precision decimal string
const currencyFormat = (num) => {
  let formatted = num.toString();
  if (formatted.length > 2) {
    formatted = formatted.substring(0, -2) + "." + formatted.substring(-2);
  } else if (formatted.length > 1) {
    formatted = "0." + formatted;
  } else {
    formatted = "0.0" + formatted;
  }
  return formatted;
};

export default currencyFormat;
