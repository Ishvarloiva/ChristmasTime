// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.
 */

if (typeof templates == 'undefined') { var templates = {}; }


templates.header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((! opt_data.index) ? '<div class="grid_12"><div id="header"><h1>Christmas Time</h1></div></div><div id="bar" class="grid_12"><div id="link" class="grid_2 alpha"><a href="../index.html">Home</a></div><div id="link" class="grid_2"><a href="recipes.html">Recipes</a></div><div id="link" class="grid_2"><a href="facts.html">Facts</a></div><div id="link" class="grid_2"><a href="history.html">History</a></div><div id="link" class="grid_2"><a href="music.html">Music</a></div><div id="link" class="grid_2 omega"><a href="about.html">About</a></div></div><hr>' : '<div class="grid_12"><div id="header"><h1>Christmas Time</h1></div></div><div id="bar" class="grid_12"><div id="link" class="grid_2 alpha"><a href="index.html">Home</a></div><div id="link" class="grid_2"><a href="pages/recipes.html">Recipes</a></div><div id="link" class="grid_2"><a href="pages/facts.html">Facts</a></div><div id="link" class="grid_2"><a href="pages/history.html">History</a></div><div id="link" class="grid_2"><a href="pages/music.html">Music</a></div><div id="link" class="grid_2 omega"><a href="pages/about.html">About</a></div></div><hr>');
};
if (goog.DEBUG) {
  templates.header.soyTemplateName = 'templates.header';
}
