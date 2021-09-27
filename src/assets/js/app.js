import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var navcolor = document.getElementById('responsive-menu');
function navBg() { 
    var depth = window.pageYOffset;

    if (depth < 2) {
        navcolor.classList.add('nav-transparent');
        navcolor.classList.remove('nav-colored');
    } else {
        navcolor.classList.remove('nav-transparent');
        navcolor.classList.add('nav-colored');
    }
    requestAnimationFrame(navBg);
}
requestAnimationFrame(navBg); 
// Browser optimized way to call function;