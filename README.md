# sudoku-grid
Flex + JS solution to create a board for Sudoku

# About

Creating square based responsive grids is tricky. The CSS-only solution using padding on either on the before or after pseudo selector works, but the content in that case must have an absolute position and taken out of the flow.
Therefore this implementation of a Sudoku grid uses JS to set the appropriate height of each rubrics (and also adjust the font size). The rest is implemented using Flexbox and a little play with nth-child to add the borders.
