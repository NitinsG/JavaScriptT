/*

Promises solves two purposes:

1. It will save you from async behaviour of the javascript. 
   For Example, suppose you have two api calls:
     1. Order ID and
     2. Order Status
   then the order of completion should be from 1 to 2. But because of async nature of JS, request 2 get settled first before the 1 request get completed.
   It will lead umbigous behaviour of application. Order should be maintained at all cost from 1 to 2 to be successful running of application.
   One approach is to use XHR with callbacks , like first orderID will get completed , then on load you are hitting another api call. That will create a
   call back hell which promise can solve by its way.
   
   Conclusion : Use Promise Where Synchronization needed and getting away from callback hell is required. 
   
2. Other aspect is when you dont know when the object or value will be avaiable in future. Then in that case , Promise is th best way to handle that situation.

*/

For Point 1 , below is the example

import setText from "./results.mjs";

export function raceCondition() {
  let xhr = new XMLHttpRequest();
  let statuses = [];
  xhr.open("GET", "http://localhost:3000/orderStatuses");                 //API 1
  xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);
  };

  xhr.send();

  let xhr2 = new XMLHttpRequest();
  xhr2.open("GET", "http://localhost:3000/orders/1");                     //API 2
  xhr2.onload = () => {
    const order = JSON.parse(xhr2.responseText);
    const description = statuses.map(t => {
      if (t.id === order.orderStatusId) {
        return t.description;
      }
    })[0];

    setText(`Order Status: ${description}`);
  };

  xhr2.send();
}

// Result of above code is API 2 get completed first before the API 1 need to be completed.
// So we need to sync the code using the callback hell like below.

export function callbacks() {
  let xhr = new XMLHttpRequest();
  let statuses = [];
  xhr.open("GET", "http://localhost:3000/orderStatuses");

  xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://localhost:3000/orders/1");

    xhr2.onload = () => {
      const order = JSON.parse(xhr2.responseText);

      const description = statuses.map(t => {
        if (t.id === order.orderStatusId) {
          return t.description;
        }
      })[0];

      setText(`Order Status: ${description}`);
    };

    xhr2.send();
  };

  xhr.send();
}

//Above is also not the efficent of handling the situation.
