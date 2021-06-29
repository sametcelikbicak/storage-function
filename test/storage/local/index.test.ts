import {
  clearLocalStorage,
  fromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from '../../../src/storage/local';

describe('toLocalStorage', () => {
  it('should be defined', () => {
    expect(toLocalStorage).toBeDefined();
  });
});

describe('fromLocalStorage', () => {
  it('should be defined', () => {
    expect(fromLocalStorage).toBeDefined();
  });
});

describe('removeFromLocalStorage', () => {
  it('should be defined', () => {
    expect(removeFromLocalStorage).toBeDefined();
  });
});

describe('clearLocalStorage', () => {
  it('should be defined', () => {
    expect(clearLocalStorage).toBeDefined();
  });
});
