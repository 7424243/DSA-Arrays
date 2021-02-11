/* ===== 1. Implement an Array class from scratch =====
Walk through each step of implementing an array. Use the memory module provided for allocating memory.
*/


const memory = require('./memory')
const memory = new memory()

class Array {
    constructor() {
        this.length = 0
        this._capcity = 0
        this.ptr = memory.allocate(this.length)
    }
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocat(size)
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
Array.SIZE_RATIO = 3

module.exports = Array