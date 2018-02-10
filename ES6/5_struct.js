
//Structing : Used in Object construction from random variables.

var name = "Tallac"
var elevation = 9738
var funHike = {name,elevation}
console.log(funHike) // {name: "Tallac", elevation: 9738}

//When defining object methods, it is no longer necessary to use the function keyword. 

//OLD

var biker = { name: name,
              sound: sound, 
              powder: function() {
                      var yell = this.sound.toUpperCase()
                      console.log(`${yell} ${yell} ${yell}!!!`)
                     },
              speed: function(mph) { 
                      this.speed = mph
                      console.log('speed:', mph)
                     }
            }

//NEW

const biker = { name,
                sound,
                powder() {
                    let yell = this.sound.toUpperCase()
                    console.log(`${yell} ${yell} ${yell}!!!`)
                },
                speed(mph) { 
                    this.speed = mph
                    console.log('speed:', mph)
                }
              }
