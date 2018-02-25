function add(a, b) {
  return a + b;
}

const Tests = assert => {
  return [
    {
      name: "adds two numbers correctly",
      function: () => {
        const [a, b] = [1, 2];
        return assert.equal(add(a, b), 4);
      }
    }
  ];
};

module.exports = {
  add,
  Tests
};
