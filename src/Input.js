import { Lightning } from '@lightningjs/sdk';

const placeholderText = 'Enter Search Term';

export default class Input extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      Wrapper: {
        rect: true,
        Text: {
          w: 1920,
          alpha: 0.2,
          text: {
            text: placeholderText,
            textAlign: 'center',
            maxLines: 2,
            maxLinesSuffix: '...',
          },
        },
        Underline: {
          rect: true,
          color: 0xffffffff,
          w: 800,
          h: 2,
          x: 1920 / 2 - 400,
          y: 50,
        },
      },
    };
  }

  _init() {
    this.firstEntry = false;
  }

  set inputText(input) {
    if (input.length > 0) {
      this._Text.text.text = input;
      this._Text.alpha = 1;
    } else {
      this._Text.text.text = placeholderText;
      this._Text.alpha = 0.5;
    }
  }

  get _Text() {
    return this.tag('Text');
  }
}
