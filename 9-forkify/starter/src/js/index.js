// Global app controller
import str from './models/Search';
//import { add as a, multiply as m, ID } from "./views/searchView";
import * as searcView from "./views/searchView";

console.log(`Using imported functions! ${searcView.add( searcView.ID, 2)} and ${searcView.multiply(3,5)}. ${str}`);