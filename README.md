# [Crushit](https://crushit.vercel.app/entry)

Crushit is an interactive puzzle game where players need to eliminate buttons on the screen based on certain rules. The goal is to clear the screen by pressing buttons surrounded by other buttons, and the player wins when there are no buttons left to crush.

## Features

- **Button Elimination**: Pressing a button will remove itself and its adjacent buttons based on the surrounding count (1, 2, 3, or 4 buttons).
- **Multiple Levels of Difficulty**: The game starts easy with fewer adjacent buttons and increases in difficulty as the game progresses.
- **Victory Condition**: The player wins when all buttons are eliminated.

## Game Rules

1. **4 Adjacent Buttons Rule**: 
   - If a button is surrounded by 4 buttons, pressing it will eliminate that button and the 4 adjacent buttons.  

2. **3 Adjacent Buttons Rule**: 
   - If a button is surrounded by 3 buttons, pressing it will eliminate that button and the 3 adjacent buttons.  

3. **2 Adjacent Buttons Rule**: 
   - If a button is surrounded by 2 buttons, pressing it will eliminate that button and the 2 adjacent buttons.  

4. **1 Adjacent Button Rule**: 
   - If a button has only 1 adjacent button, pressing it will eliminate only that button.

5. **0 Adjacent Button Rule**:
   - If a button has 0 adjacent buttons, you can't eliminate that button.

6. **Victory**: 
   - The player wins when no buttons are left to crush.  
