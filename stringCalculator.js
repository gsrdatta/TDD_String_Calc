function add(numbers) {
  //Check for empty Strings
  if (numbers === "") return 0;
  let sum = 0;
  //Added regex to check newline \n or comma
  numbers.split(/[\n,]/).map((num) => {
    sum += parseInt(num);
  });
  return sum;
}

module.exports = add;
