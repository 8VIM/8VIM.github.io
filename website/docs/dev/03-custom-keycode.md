# `Custom KeyCode`

| Name                           | Description                                                 | integer |
| ------------------------------ | ----------------------------------------------------------- | ------- |
| `MOVE_CURRENT_END_POINT_LEFT`  | Move cursor to left (or select if shift is on)              | -2      |
| `MOVE_CURRENT_END_POINT_RIGHT` | Move cursor to right (or select if shift is on)             | -3      |
| `MOVE_CURRENT_END_POINT_UP`    | Move cursor to up (or select if shift is on)                | -4      |
| `MOVE_CURRENT_END_POINT_DOWN`  | Move cursor to dow (or select if shift is on)               | -5      |
| `SELECTION_START`              | Start selection mode from the cursor position               | -6      |
| `SELECT_ALL`                   | Select all the current input                                | -7      |
| `TOGGLE_SELECTION_ANCHOR`      | Switch the select anchoer end to the other side             | -8      |
| `SHIFT_TOGGLE`                 | emulate a `shift` button click (3 states: off, on, sustain) | -9      |
| `SWITCH_TO_MAIN_KEYPAD`        | Switch back to the Xpad                                     | -10     |
| `SWITCH_TO_NUMBER_KEYPAD`      | Switch the number keyboard view                             | -11     |
| `SWITCH_TO_SYMBOLS_KEYPAD`     | Switch the number symbols view                              | -12     |
| `SWITCH_TO_SELECTION_KEYPAD`   | Switch the number symbols view                              | -13     |
| `SWITCH_TO_EMOTICON_KEYBOARD`  | switch to the emoticon keyboard defined in the settings     | -14     |
| `HIDE_KEYBOARD`                | Hide the keyboard                                           | -15     |
| `NO_OPERATION`                 | Do nothing                                                  | -16     |
| `SWITCH_TO_CLIPPAD_KEYBOARD`   | switch to the clippad view (list of of copied values)       | -17     |
| `CTRL_TOGGLE`                  | emulate a `ctrl` button click (3 states: off, on, sustain)  | -18     |
| `FN_TOGGLE`                    | Toggle `Fn` function                                        | -19     |
