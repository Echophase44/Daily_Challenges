https://scrimba.com/scrim/coce04cafa0b8afc63d14703f

/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
  breakfast: 'cereal',
  lunch: 'sandwich',
  supper: 'stew'
}

const {breakfast, lunch, supper} = faveFoods

const meals = document.getElementById("meals");

meals.innerHTML = `<p>For breakfast, I like to have ${breakfast} with nuts. For lunch, I'll make myself a ${lunch} with some chips. When supper comes around, I'll get the ${supper} off the stove, which has been simmering all day.</p>`