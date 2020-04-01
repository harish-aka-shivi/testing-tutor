import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../hooks/useLocalStorage';

jest.mock('../util/localStorage');

describe('useLocalStorage', () => {
  it('local storage should work according to specs', () => {
    const { result } = renderHook(() => useLocalStorage('foo', 'bar'));
    expect(result.current[0]).toBe('bar');
    act(() => {
      result.current[1]('john doe');
    });
    expect(result.current[0]).toBe('john doe');
  });
});
