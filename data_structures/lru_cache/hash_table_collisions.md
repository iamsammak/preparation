Hash table - pretty much an array of linked lists

Space - O(n)
Search - O(1)
Insert - constant time
Delete - constant time

All the above is O(N) worst case

Hash tables deal with collisions in one of two ways.

Option 1: By having each bucket contain a linked list of elements that are hashed to that bucket. This is why a bad hash function can make lookups in hash tables very slow.

Option 2: If the hash table entries are all full then the hash table can increase the number of buckets that it has and then redistribute all the elements in the table. The hash function returns an integer and the hash table has to take the result of the hash function and mod it against the size of the table that way it can be sure it will get to bucket. So by increasing the size, it will rehash and run the modulo calculations which if you are lucky might send the objects to different buckets.


https://stackoverflow.com/questions/4980757/how-do-hashtables-deal-with-collisions
