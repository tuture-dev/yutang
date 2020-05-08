import { comment } from '../comment';

describe('comment', () => {
  test('should comment languages with valid id', () => {
    expect(comment('test', 'javascript')).toBe('// test');
    expect(comment('test', 'python')).toBe('# test');
  });

  test('should comment languages with aliased name', () => {
    expect(comment('test', 'js')).toBe('// test');
    expect(comment('test', 'dockerfile')).toBe('# test');
  });
});
