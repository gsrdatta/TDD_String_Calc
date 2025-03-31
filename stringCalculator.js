function add(numbers) {
  //Check for empty Strings
  if (numbers === "") return 0;
  let sum = 0;
  //Added regex to check newline \n or comma
  let regx = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    regx = new RegExp("\\" + parts[0].slice(2));
    numbers = parts[1];
  }
  const numbersArray = numbers.split(regx).map((num) => parseInt(num, 10));
  console.log(numbersArray);
  const negatives = numbersArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  sum = numbersArray.reduce((sum, num) => sum + num, 0);
  return sum;
}

module.exports = add;
