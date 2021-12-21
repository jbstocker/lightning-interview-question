import { Lightning } from "@lightningjs/sdk";
import { Row, Column } from "@lightningjs/ui-components";
import Input from "./Input";
import Tile from "./Tile";
import retrieveData from "./api/api";

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/480px-Blue_question_mark_icon.svg.png";
export default class SearchPage extends Lightning.Component {
  static _template() {
    return {
      Input: {
        type: Input,
        w: 1920,
        h: 50
      },
      ResultsColumn: {
        x: 175,
        y: 100,
        w: 1820,
        h: 980,
        type: Column,
        itemSpacing: 100,
        plinko: true
      }
    };
  }

  _init() {
    this.query = "";
  }

  get _Input() {
    return this.tag("Input");
  }

  get _ResultsRow() {
    return this.tag("ResultsRow");
  }

  get _ResultsColumn() {
    return this.tag("ResultsColumn");
  }

  /**
   * Method to handle keyboard input events
   * @param {Object} event object from keyboard
   * event.key results in a value so the 'a' key would have a event.key === 'a'
   * event.key for the backspace button on the keyboard will be 'Backspace'
   */
  _handleKey(event) {
    /**
     * Challenge 1 - Interpret keyboard entry
     * The global variable `query` has been instantiated in the _init() function, please use this to
     * store changes to the input based on keyboard events
     * Note: Input should be removed when the 'Backspace' key is pressed
     * 
     * The end of this method has been provided below but you will need to ensure this.query is 
     * populated correctly as you type on the keyboard
     */
    this._Input.inputText = this.query;
    this.retrieveData(this.query);
  }

  /**
   * Async function that should call api/api.js method retrieveData
   * Clears results, and populates results with the data from the api call
   * @param {*} query
   */
  async retrieveData(query) {
    const data = await retrieveData(query);
    this.populateResults(data);
  }

  populateResults(data) {
    /**
     * Challenge 3 - populate tiles with results
     * In the section below please use the results from the api call (stored in 'data') to populate two arrays of 5 tiles objects each
     * Hint: You will need to first clear the results before populating.
     * 
     * The data returned is an array of show data.  In particular we are interested with two values in each show:
     *      data[i].show.image.medium   -- This is the url of the image
     *      data[i].show.name           -- This is the string of the title of the image
     *
     * Here is the template for a Tile object:
     * {
     *  type: Tile,
     *  imageUrl: '',
     *  title: '',
     *  h: heightValue,
     *  w: widthValue
     * }
     *
     * Please populate two arrays of tiles (one for each row) with Tile dimensions of 270x360 (wxh)
     * If a show does not have an image please use the `defaultImage` variable noted at the top of the file
     * Use the methods below to both clear and populate the results.
     *
     */
  }

  /**
   * Clears the results
   */
  clearResults() {
    this._ResultsColumn.items = [];
  }

  /**
   * Takes an array of tile arrays to populate the results.
   * Should receive 2 arrays as the argument
   * Should only have 5 tile objects per tile array
   * @param {Object[]} rows - array of rows to populate, each row should have a max of 5 items
   */
  populateResultRows(rows) {
    for (const row of rows) {
      if (row.length > 0) {
        this._ResultsColumn.appendItems([
          {
            type: Row,
            w: 1820,
            h: 400,
            itemSpacing: 50,
            items: row,
            skipPlinko: false
          }
        ]);
      }
    }
  }

  _getFocused() {
    return this._ResultsColumn;
  }
}
