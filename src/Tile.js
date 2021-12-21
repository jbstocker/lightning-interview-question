import { Lightning } from "@lightningjs/sdk";

/**
 * Here is the template for using a Tile object:
 * {
 *  type: Tile,
 *  imageUrl: '',
 *  title: '',
 *  h: heightValue,
 *  w: widthValue
 * }
 */
export default class Tile extends Lightning.Component {

  /**
   * In the lightning framework the template object is used as the initial render object.
   * It also contains the default values for instantiation of the lightning component
   * @returns template object
   */
  static _template() {
    return {
      scale: 1,
      Image: {
        h: h => h,
        w: w => w
      },
      Title: {
        w: w => w,
        y: h => h + 10,
        alpha: 0,
        text: {
          textAlign: "center",
          text: "Title",
          fontSize: 24
        }
      }
    };
  }

  _init() {
    this._Image.patch({
      src: this.imageUrl
    });
    this._Title.text = this.title || "";
  }

  get _Image() {
    return this.tag("Image");
  }

  get _Title() {
    return this.tag("Title");
  }

  /**
   * Challenge 4a - scale entire tile up 10% and show title when in focus
   * Hint: Look at the _template method to find default values
   * Hint: Use the transition methods below and pass in values found from:
   * https://rdkcentral.github.io/Lightning/docs/renderEngine/elements/rendering
   * https://rdkcentral.github.io/Lightning/docs/renderEngine/elements/transforms
   */
  _focus() {

  }

  /**
   * Challenge 4b - style entire tile scale value to default values and remove title when in focus
   * Hint: Look at the _template method to find default values
   * Hint: Use the transition methods below and pass in values found from:
   * https://rdkcentral.github.io/Lightning/docs/renderEngine/elements/rendering
   * https://rdkcentral.github.io/Lightning/docs/renderEngine/elements/transforms
   */
  _unfocus() {

  }

  /**
   * Transition the style of the Tile object
   * For example: `this.transitionTile("rotation", 0.5);` would rotate the Tile by 0.5 rads
   * @param {string} prop - string of property to change in the transition
   * @param {*} value - value to give the property in the transition
   */
  transitionTile(prop, value) {
    this.setSmooth(prop, value);
  }

  /**
   * Transition the style of the Image object
   * For example: `this.transitionImage("rotation", 0.5);` would rotate the Image by 0.5 rads
   * @param {string} prop - string of property to change in the transition
   * @param {*} value - value to give the property in the transition
   */
  transitionImage(prop, value) {
    this._Image.setSmooth(prop, value);
  }

  /**
   * Transition the style of the Title object
   * For example: `this.transitionTitle("rotation", 0.5);` would rotate the Title by 0.5 rads
   * @param {string} prop - string of property to change in the transition
   * @param {*} value - value to give the property in the transition
   */
  transitionTitle(prop, value) {
    this._Title.setSmooth(prop, value);
  }
}
