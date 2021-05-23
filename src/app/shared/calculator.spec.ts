import { Calculator } from './calculator';

beforeEach(() => {

});

describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });
  it('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });
  it('should substract two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.sub(2, 3)).toBe(-1);
  })
});
