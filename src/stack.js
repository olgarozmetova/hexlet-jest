const makeStack = () => {
  const stack = [];

  return {
    isEmpty() {
      return stack.length === 0;
    },
    push(item) {
      stack.push(item);
    },
    pop() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty');
      }
      return stack.pop();
    },
  };
};

const stack = makeStack();

stack.isEmpty(); // true
stack.push(1); // (1)
stack.push(2); // (1, 2)
stack.push(3); // (1, 2, 3)
stack.isEmpty(); // false
stack.pop(); // 3. В стеке (1, 2)
stack.pop(); // 2. В стеке (1)
stack.pop(); // 1. В стеке пусто
stack.isEmpty(); // true

export default makeStack;
