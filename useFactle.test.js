import { useFactle } from './useFactle';

describe('useFactle', () => {
    it('returns the correct initial state', () => {
        const hook = useFactle({ options: [{ text: 'apple' }, { text: 'orange' }] });
        expect(hook.turn).toBe(0);
        expect(hook.currentGuess).toBe('');
        expect(hook.guesses).toEqual([undefined, undefined, undefined, undefined, undefined, undefined]);
        expect(hook.history).toEqual([]);
        expect(hook.solution).toEqual([]);
        expect(hook.isCorrect).toBe(false);
        expect(hook.usedKeys).toEqual({});
    });

    it('formats a guess correctly', () => {
        const hook = useFactle({ options: [{ text: 'apple' }, { text: 'orange' }] });
        hook.setCurrentGuess('apple,orange');
        const formattedGuess = hook.formatGuess();
        expect(formattedGuess).toEqual([{ key: 'apple', color: 'grey' }, { key: 'orange', color: 'grey' }]);
    });

    it('adds a new guess correctly', () => {
        const hook = useFactle({ options: [{ text: 'apple' }, { text: 'orange' }] });
        hook.setCurrentGuess('apple,orange');
        const formattedGuess = hook.formatGuess();
        hook.addNewGuess(formattedGuess);
        expect(hook.turn).toBe(1);
        expect(hook.guesses).toEqual([[{ key: 'apple', color: 'grey' }, { key: 'orange', color: 'grey' }], undefined, undefined, undefined, undefined, undefined]);
        expect(hook.history).toEqual(['apple,orange']);
        expect(hook.solution).toEqual(['apple', 'orange']);
        expect(hook.isCorrect).toBe(true);
        expect(hook.usedKeys).toEqual({ apple: 'grey', orange: 'grey' });
      });
    
      it('sets the current guess correctly', () => {
        const hook = useFactle({ options: [{ text: 'apple' }, { text: 'orange' }] });
        hook.setCurrentGuess('apple,orange');
        expect(hook.currentGuess).toBe('apple,orange');
      });
      
});
