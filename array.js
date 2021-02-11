/* ===== 1. Implement an Array class from scratch =====
Walk through each step of implementing an array. Use the memory module provided for allocating memory.
*/

const Memory = require('./memory')
const memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this._capcity = 0
        this.ptr = memory.allocate(this.length)//0
    }
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if(this.ptr === null) {
            throw new Error('Out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capcity = size
    }
    push(value) {
        if(this.length >= this._capcity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index)
    }
    pop() {
        if(this.length == 0) {
            throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        if(this.length >= this._capcity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }
    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
}

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