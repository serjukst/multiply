module.exports = function multiply(first, second) {

  let result = BigInt(first) * BigInt(second);
  return result.toString()
}
