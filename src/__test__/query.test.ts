import { getValidId, getIdFromFilename, getHighlightFromId } from '../query';

describe('query', () => {
  describe('getValidId', () => {
    test('should handle valid id', () => {
      expect(getValidId('javascript')).toBe('javascript');
      expect(getValidId('typescript')).toBe('typescript');
    });

    test('should handle aliases', () => {
      expect(getValidId('js')).toBe('javascript');
      expect(getValidId('py')).toBe('python');
    });

    test('should handle upper cases', () => {
      expect(getValidId('JS')).toBe('javascript');
      expect(getValidId('TSX')).toBe('tsx');
    });
  });

  describe('getIdFromFilename', () => {
    test('should get correct id from extension', () => {
      expect(getIdFromFilename('hello.js')).toBe('javascript');
    });

    test('should get correct id from filename', () => {
      expect(getIdFromFilename('Dockerfile')).toBe('docker');
      expect(getIdFromFilename('Jenkinsfile')).toBe('groovy');
      expect(getIdFromFilename('Vagrantfile')).toBe('ruby');
    });

    test('should get correct id from full path', () => {
      expect(getIdFromFilename('src/hello.js')).toBe('javascript');
      expect(getIdFromFilename('/client/Dockerfile')).toBe('docker');
    });
  });

  describe('getHighlightFromId', () => {
    test('should get default highlight from code', () => {
      expect(getHighlightFromId('javascript')).toBe('javascript');
    });

    test('should get overriden highlight', () => {
      expect(getHighlightFromId('vue')).toBe('html');
    });
  });
});
