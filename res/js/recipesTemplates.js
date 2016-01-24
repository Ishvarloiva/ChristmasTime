// This file was automatically generated from recipes.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace recipes.
 */

if (typeof recipes == 'undefined') { var recipes = {}; }


recipes.main = function(opt_data, opt_ignored) {
  return '<a href="javascript:showCategory(\'appetizer\');"><div class="grid_4"><h2>Appetizers</h2><image src="../res/images/penguins.jpg"></div></a><a href="javascript:showCategory(\'main\');"><div class="grid_4"><h2>Main Dishes</h2><image src="../res/images/turkey.jpg"></div></a><a href="javascript:showCategory(\'side\');"><div class="grid_4"><h2>Side Dishes</h2><image src="../res/images/mashed_potato.jpg" height="300px" width="300px"></div></a><a href="javascript:showCategory(\'drink\');"><div class="grid_4"><h2>Drinks</h2><image src="../res/images/glintwein.jpg"></div></a><a href="javascript:showCategory(\'dessert\');"><div class="grid_4"><h2>Desserts</h2><image src="../res/images/cookie.jpg"></div></a><a href="javascript:showCategory(\'all\');"><div class="grid_4"><h2>All</h2><image src="../res/images/manyfood.jpg"></div></a><div class="grid_12"><hr><h2><a href="recipes_new.html">Add your own recipe!</a></h2></div>';
};
if (goog.DEBUG) {
  recipes.main.soyTemplateName = 'recipes.main';
}


recipes.small = function(opt_data, opt_ignored) {
  return '<a href="javascript:showRecipe(\'' + soy.$$escapeHtml(opt_data.name) + '\', \'' + soy.$$escapeHtml(opt_data.image) + '\', \'' + soy.$$escapeHtml(opt_data.id) + '\')"><div class="grid_4"><div class="recipe"><image src="' + soy.$$escapeHtml(opt_data.image) + '" class="smallImage"><h3>' + soy.$$escapeHtml(opt_data.name) + '</h3><p class="recipe_desc">' + soy.$$escapeHtml(opt_data.description) + '</p></div></div></a>';
};
if (goog.DEBUG) {
  recipes.small.soyTemplateName = 'recipes.small';
}


recipes.recipe = function(opt_data, opt_ignored) {
  return '<div class="grid_12"><image src="' + soy.$$escapeHtml(opt_data.image) + '" class="bigImage"><h3>' + soy.$$escapeHtml(opt_data.name) + '</h3></div><div id="recipe_text"></div>';
};
if (goog.DEBUG) {
  recipes.recipe.soyTemplateName = 'recipes.recipe';
}


recipes.navigation = function(opt_data, opt_ignored) {
  return '<div class="grid_12 navBar"><a href="javascript:showCategory(\'appetizer\');"><div class="grid_2 category_appetizer alpha"><h3>Appetizers</h3></div></a><a href="javascript:showCategory(\'main\');"><div class="grid_2 category_main"><h3>Main</h3></div></a><a href="javascript:showCategory(\'side\');"><div class="grid_2 category_side"><h3>Side</h3></div></a><a href="javascript:showCategory(\'drink\');"><div class="grid_2 category_drink"><h3>Drinks</h3></div></a><a href="javascript:showCategory(\'dessert\');"><div class="grid_2 category_dessert"><h3>Desserts</h3></div></a><a href="javascript:showCategory(\'all\');"><div class="grid_2 category_all omega"><h3>All</h3></div></a></div>';
};
if (goog.DEBUG) {
  recipes.navigation.soyTemplateName = 'recipes.navigation';
}
