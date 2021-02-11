const memory = require('./memory')
const Array = require('./array')

/* ===== 2. Explore the push() method =====
Using the Array class you just created, add an item to the array.
*/
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    //length: 1 capacity: 3 ptr: 0
    console.log(arr);
    arr.push(5); //length: 2 capcity: 3 ptr: 0
    arr.push(15); //length: 3 capacity: 12 ptr: 3
    arr.push(19); //length: 4 capacity: 12 ptr: 3
    arr.push(45); //length: 5 capacity: 12 ptr: 3
    arr.push(10);  //length: 6 capacity: 12 ptr: 3
    console.log(arr);
    //length: 6 capcity: 12 ptr: 3

    /* ===== 3. Explore the pop() method ===== 
    Add the following in the main function and then print the array:
    */
   arr.pop();
   arr.pop();
   arr.pop();
   console.log(arr)
   //length: 3 capacity: 12 ptr: 3

   /* ===== 4. Understanding more aobut how arrays work ===== */
   //Print the 1st item in the array
   console.log(arr.get(0))
   //Empty the array and add just 1 item: arr.push('tauhida)
   arr.pop();
   arr.pop();
   arr.pop();
   arr.push('tauhida')
   console.log(arr.get(0))
   //the array returns NaN instead because we are pushing a string instead of an integer.
   //the _re-size function makes room for more memory, assigns a new ptr value, and frees up old ptr value
}

main()