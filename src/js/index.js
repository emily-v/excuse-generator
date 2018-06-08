/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    
    //console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    
    var first = 'A ';
    var adj = ['giant ','crazy ','loud ', 'rude ', 'ferocious ', 'facetious '];
    var noun = ['tourist ','airplane ','waterfall ', 'comedian ', 'lawyer ', 'hurricane '];
    var action = ['threw ','kicked ', 'smashed ', 'erased ', 'insulted ', 'grabbed '];
    var my = 'my ';
    var item = ['backpack ','sunglasses ','shoes ', 'coffee ', 'laptop ', 'yoga mat '];
    var location = ['in the garage.','on the train.','in the grocery store.', 'under the bridge.', 'at the toll.', 'on the beach.'];
    
    var rdmAdj = Math.floor(Math.random()*adj.length);
    var rdmNoun = Math.floor(Math.random()*noun.length);
    var rdmAction = Math.floor(Math.random()*action.length);
    var rdmItem = Math.floor(Math.random()*item.length);
    var rdmLocation = Math.floor(Math.random()*location.length);
    
    var finalSentence = first + adj[rdmAdj] + noun[rdmNoun] + action[rdmAction] + my + item[rdmItem] + location[rdmLocation];
    
    document.querySelector("#excuse").innerHTML = finalSentence;
    
};