import { renderHook } from '@testing-library/react-hooks';
import useFactle from './useFactle';

describe('useFactle', () => {
  it('should initialize with the correct state', () => {
    const facts = {
      options: [
        { text: "fact1", correctPosition: 1 },
        { text: "fact2", correctPosition: 2 },
        { text: "fact3", correctPosition: 3 },
        { text: "fact4", correctPosition: 4 },
        { text: "fact5", correctPosition: 5 },
      ]
    };
    const { result } = renderHook(() => useFactle(facts));

    expect(result.current.turn).toBe(0);
    expect(result.current.currentGuess).toBe('');
    expect(result.current.guesses).toEqual([...Array(6)]);
    expect(result.current.history).toEqual([]);
    expect(result.current.solution).toEqual([]);
    expect(result.current.isCorrect).toBe(false);
    expect(result.current.usedKeys).toEqual({});
  });

  it('should format the guess correctly', () => {
    const facts = {
      options: [
        { text: "fact1", correctPosition: 1 },
        { text: "fact2", correctPosition: 2 },
        { text: "fact3", correctPosition: 3 },
        { text: "fact4", correctPosition: 4 },
        { text: "fact5", correctPosition: 5 },
      ]
    };
    const { result } = renderHook(() => useFactle(facts));
    result.current.setCurrentGuess('fact1,fact2,fact3,fact4,fact5');
    const formattedGuess = result.current.formatGuess();

    expect(formattedGuess).toEqual([
      { key: 'fact1', color: 'green' },
      { key: 'fact2', color: 'green' },
      { key: 'fact3', color: 'green' },
      { key: 'fact4', color: 'green' },
      { key: 'fact5', color: 'green' }
    ]);
  });

  it('should add new guess correctly', () => {
    const facts = {
      options: [
        { text: "fact1", correctPosition: 1 },
        { text: "fact2", correctPosition: 2 },
        { text: "fact3", correctPosition: 3 },
        { text: "fact4", correctPosition: 4 },
        { text: "fact5", correctPosition: 5 },
      ]
    };
    const { result } = renderHook(() => useFactle(facts));
    result.current.setCurrentGuess('fact1,fact2,fact3,fact4,fact5');
    const formattedGuess = result.current.formatGuess();
    result.current.addNewGuess(formattedGuess);

    expect(result.current.turn).toBe(1);
    expect(result.current.currentGuess).toBe('');
    expect(result.current.guesses[0]).toEqual([
      { key: 'fact1', color: 'green' },
      { key: 'fact2', color: 'green' },
      { key: 'fact3', color: 'green' },
      { key: 'fact4', color: 'green' },
      { key: 'fact5', color: 'green' }
    ]);
    expect(result.current.history).toEqual(['fact1,fact2,fact3,fact4,fact5']);
    expect(result.current.solution).toEqual(['fact1', 'fact2', 'fact3', 'fact4', 'fact5']);
    expect(result.current.isCorrect).toBe(true);
    expect(result.current.usedKeys).toEqual({
      'fact1': 'green',
      'fact2': 'green',
      'fact3': 'green',
      'fact4': 'green',
      'fact5': 'green'
    });
  });
});

