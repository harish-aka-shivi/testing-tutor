import { renderHook } from '@testing-library/react-hooks';
import useRawProblemsFile from '../hooks/useRawProblemsFile';

describe('useRawProblemsFile operations', () => {
  it('should return the raw file', () => {
    const { result } = renderHook(() => useRawProblemsFile());
    expect(result.current.rawFile).toHaveProperty('problems');
  });
});
