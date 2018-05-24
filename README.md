# sudoku-grid

Flex + JS solution to create a board for Sudoku

## About

Creating square based responsive grids is tricky. The CSS-only solution using padding on either on the before or after pseudo selector works, but the content in that case must have an absolute position and taken out of the flow.
Therefore this implementation of a Sudoku grid uses JS to set the appropriate height of each rubrics (and also adjust the font size). The rest is implemented using Flexbox and a little play with nth-child to add the borders.

## Demo

You can test how it works by opening this [GitHub Page](https://seabadger-io.github.io/sudoku-grid/) and resizing the viewport. It can be resized either by resizing the browser window or using the responsive view in Developer Tools.

## Note

The squares are not pixel perfect, there is usually a little distortion. While the tiles' height get resized, the width may change and that change might be ignored. So technically the tiles are not exactly squares, but visually it's not very noticable.