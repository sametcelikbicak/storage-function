import {
  clearSessionStorage,
  fromSessionStorage,
  removeFromSessionStorage,
  toSessionStorage,
} from '../../../src/storage/session';

describe('toSessionStorage', () => {
  it('should be defined', () => {
    expect(toSessionStorage).toBeDefined();
  });
});

describe('fromSessionStorage', () => {
  it('should be defined', () => {
    expect(fromSessionStorage).toBeDefined();
  });
});

describe('removeFromSessionStorage', () => {
  it('should be defined', () => {
    expect(removeFromSessionStorage).toBeDefined();
  });
});

describe('clearSessionStorage', () => {
  it('should be defined', () => {
    expect(clearSessionStorage).toBeDefined();
  });
});
