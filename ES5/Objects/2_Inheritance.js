/* fully Exposed Objects */

var Book = function(newIsbn, newTitle, newAuthor){
  //Private attributes
  var isbn, title, author;

  //Private Methods
  function checkIsbn(isbn){
  )

  //Public , Privileged Methods  , because these methods can be called from outside as well as access to private methods and variables.
  this.getItem = function() {
   return isbn;
  };
  
  this.setIsbn = function(newIsbn){
    
  };

  //Constructor Code
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
}

//Public, Non Privileged methods
Book.prototype = function() {
  display: function(){
  }  
};

/* It has a drawback that when we instatiate the function then every instance will have a copy of private and public methods. 
Its a potentail use of more memory.
*/

/* Static Methods */

var Book = (function (){
   //Private static attribute 
    var numOfBooks = 0;

   //Private static method
    function checkIsbn(isbn){
   
   }

   //Return the constructor
  
   return function (newISbn, newTitle, newAuthor){
     //Private attributes
     var isbn, title, author;
     
     //Privileged methods
     this.getIsbn = function(){
        return isbn;
     };
 
     this.setIsbn = function(newIsbn){

     }

     this.setTitle = function(newTitle){
   
     }
      
     //Constructor Code
     
     numOfBooks++;   //Keep track of how many books have been instantiated.


     if(numOfBooks> 50) throw new Error('Book: only 50 instance can be created' + 'created');
     
     this.setIsbn(newIsbn);
     this.setTitle(newTitle);
     this.setAuthor(newAuthor);            
    }   
})();




