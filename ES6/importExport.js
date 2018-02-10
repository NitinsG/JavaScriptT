
//-----math.js -------------

export const mult = Math.mult;
export function add(x) {
    retrun a+b;
}
export function square(x){
  return x * x;
}

//---- in another file.js-----

import { add , square } from math;

console.log(square(2);
console.log(add(1,2));

//---- import whole module ---

import * as math from math;
console.log(math.square(2));
console.log(math.add(1,2));

//

import {reallyLongModuleName as shortName} from 'my-module';

//export default - if only one value to export

//---Myfun.js----

export default function() { }

//--- anotherfile.js

import myfunc from Myfun;
myfunc();




