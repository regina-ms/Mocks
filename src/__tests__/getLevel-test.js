import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should return "Информация об уровне временно недоступна"', () => {
  fetchData.mockReturnValue(new Error('Mock this!'));
  expect(getLevel(45)).toBe('Информация об уровне временно недоступна');
});

test('should return "Ваш текущий уровень: 99"', () => {
  const response = {
    status: 'ok',
    level: 99,
  };
  fetchData.mockReturnValue(response);
  expect(getLevel(46)).toBe('Ваш текущий уровень: 99');
});

test('should throw error2', () => {
  function checkError() {
    const userId = 45;
    fetchData(`https://server/user/${userId}`);
  }
  expect(checkError).toThrow(new Error('Mock this!'));
});
