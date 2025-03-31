function add(numbers) {
  //Check for empty Strings
  if (numbers === "") return 0;
  let sum = 0;
  numbers.split(",").map((num) => {
    sum += parseInt(num);
  });
  return sum;
}

module.exports = add;
