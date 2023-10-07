const names = ['pepe','andrea','juana','jose'];
const cities = ['barcelona', 'roma', 'santiago', 'bilbao', 'helsinki'];

/**
 * 1. Create a Class that receives ONE array | class HandleWords 
 * 2. Add a method that list each element from the array in one line
 *  Eg: element 1
 *      element 2
 *      ...
 * 
 * 3. Add a method which stores on a separated array, the elements finishing with 'a';
 * 4. Add a methods that display on a console.log the length of the Array
 * 
**/

class HandleWords {
  
  constructor(myArray) {
    this.myArray = myArray;
  }

  storeWordsFinishingwithA() {
    const widthA = []
    this.myArray.forEach( item => {
      if (item.endsWith('a')) {
        widthA.push(item);   
      }
    });
    console.log(widthA);
  }

  displayLength() {
    console.log(this.myArray.length);
  }

}

const myNames = new HandleWords(names);
myNames.storeWordsFinishingwithA();
myNames.displayLength();

const myCities = new HandleWords(cities);
myCities.storeWordsFinishingwithA();
myCities.displayLength();