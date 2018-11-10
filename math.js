module.exports = (function () {
  return {
    sum: function (...args) {
      const result = args.reduce(
        function (accumulator, argument) {
          return accumulator + arg
        }
      );

      return result;
    }
  }
})()

