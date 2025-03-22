/** You can import all css in js, it will injecting a `<style>` tag
 * e.g: import '../scss/styles.scss'
 * But you should change the config in webpack.config.js
 * You can call me if you need help about this
 */

// Import jQuery
import * as $ from 'jquery'

$(document).ready(function () {
  console.log('Welcome');
})