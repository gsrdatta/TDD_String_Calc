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
  console.log(numbers.split(regx));
  numbers.split(regx).map((num) => {
    sum += parseInt(num, 10);
  });
  return sum;
}

module.exports = add;
