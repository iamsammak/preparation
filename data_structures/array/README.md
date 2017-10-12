Amoritized constant time
 - this means average time taken per operation

Take an array as an example
  - think a dynamic array
  - insertion is constant time
    until the array is full in which you would increase the space by (x2) and then move all elements into the new array which is O(n)
    But this only happens every so often, and each time it takes twice as long to re-insert but you also wait twice as long till the next resize
  - Therefore the amortized time complexity comes out to
    O(1)

  #find - constant time
  #delete - constant time
  #push - amortized constant time


## Ring buffer

  #unshift - we want to get to amortized constant time as well

  Therefore we unshift the new element to the end of the array which is empty (unallocated)
  Then we move the array-start-pointer-idx to the new unshifted element's idx
  Now we we iterate - "down the array" - we will "mod %" the number by the capacity of the array and it should reflect the actual index in the array

  ```rb
  # O(1) ammortized
    def unshift(val)
    resize! if length == capacity
    # example (-1 % 4) == 3
    self.start_idx = (start_idx - 1) % capacity
    self.length += 1
    self[0] = val

    self
    end
  ```




Just so we have it here
## Static array
  - get is O(1)
  - set is O(1)
