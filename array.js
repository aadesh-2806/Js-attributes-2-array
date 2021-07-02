/*let colors=['red','dark' ,'blue'];
(7) [true, undefined, 12, 234.34, NaN, null, "hi"]// 0: true// 1: undefined// 2: 12// 3: 234.34// 4: NaN// 5: null// 6: "hi"

 as[0]
 true
 as.length
 7
 as[8]='hello'
 "hello"
 as
 (9) [true, undefined, 12, 234.34, NaN, null, "hi", empty, "hello"] 0: true 1: undefined// 2: 12// 3: 234.34// 4: NaN// 5: nul// 6: "hi"// 8: "hello"// length: 9// __proto__: Array(0)

 as.push(6)       //pushes at end
 10
 as
 (10) [true, undefined, 12, 234.34, NaN, null, "hi", empty, "hello", 6]0: true1: undefined2: 123: 234.344: NaN5: null6: "hi"8: "hello"9: 6length: 10__proto__: Array(0)

 as.pop()     //pop from end
 6
 as
 (9) [true, undefined, 12, 234.34, NaN, null, "hi", empty, "hello"]0: true1: undefined2: 123: 234.344: NaN5: null6: "hi"8: "hello"length: 9__proto__: Array(0)

 as.shift();      //remove from start
 true
 as
 (8) [undefined, 12, 234.34, NaN, null, "hi", empty, "hello"]0: undefined1: 122: 234.343: NaN4: null5: "hi"7: "hello"length: 8__proto__: Array(0)

 as.unshift(2);   //add to start
 9
 as
 (9) [2, undefined, 12, 234.34, NaN, null, "hi", empty, "hello"]0: 21: undefined2: 123: 234.344: NaN5: null6: "hi"8: "hello"length: 9__proto__: Array(0)

 as.pop(NaN)      //pop specific element
 "hello"
 as
 (8) [2, undefined, 12, 234.34, NaN, null, "hi", empty]0: 21: undefined2: 123: 234.344: NaN5: null6: "hi"length: 8

 as=[2, undefined, 12, 234.34, NaN, null, "hi"]
 (7) [2, undefined, 12, 234.34, NaN, null, "hi"]
 cas=[12, 3435, 112, 234.34, 'NaN', 0, "hihello"]
 (7) [12, 3435, 112, 234.34, "NaN", 0, "hihello"]
 cas.concat(as)                                                                                   //merge (arr) in arr
 (14) [12, 3435, 112, 234.34, "NaN", 0, "hihello", 2, undefined, 12, 234.34, NaN, null, "hi"]
 as.concat(cas)
 (14) [2, undefined, 12, 234.34, NaN, null, "hi", 12, 3435, 112, 234.34, "NaN", 0, "hihello"]

 as.includes("hi")            //checks wether +nt or not
 true

 cas.indexOf(12)              //tell index of particular
 0

 as.reverse()
 (7) ["hi", null, NaN, 234.34, 12, undefined, 2]
 as                                                   //it is destructive as array is changed not initial
 (7) ["hi", null, NaN, 234.34, 12, undefined, 2]

as.slice(3,5)
(2) [234.34, 12]
as
(7) ["hi", null, NaN, 234.34, 12, undefined, 2]
as.slice(-3)
(3) [12, undefined, 2]
as.splice(5,1)
[undefined]0: undefinedlength: 1__proto__: Array(0)
as
(6) ["hi", null, NaN, 234.34, 12, 2]
as.splice(3,2)
(2) [234.34, 12]
as.splice(3,0,234.34)
[]length: 0__proto__: Array(0)
as.splice(3,2,232.3)
(2) [234.34, 2]0: 234.341: 2length: 2__proto__: Array(0)
as
(4) ["hi", null, NaN, 232.3]
as.splice(3,0,12)
[]
as
(5) ["hi", null, NaN, 12, 232.3]
as.splice(3,0,12,2355)
[]
as
(7) ["hi", null, NaN, 12, 2355, 12, 232.3]
as.splice(5,0,1245,2355.78)
[]
as
(9) ["hi", null, NaN, 12, 2355, 1245, 2355.78, 12, 232.3]
//splice remove values and if after 3 are present than add them at ith position

no=[12,34,434,45,23]
(5) [12, 34, 434, 45, 23]
no.sort()
(5) [12, 23, 34, 434, 45]               //do inlexicographical order

no.join()
"12,23,34,434,45"

no.join("%")
"12%23%34%434%45"                           //seperator in parenthesis      & work as string maker

no.toString()                               //string maker like join
"12,23,34,434,45"

'hi' === 'hi'
true
['hi'] === ['hi']
false
[] === []
false

//this is due to changing no of size of array


no=[12,34,434,45,23]
(5) [12, 34, 434, 45, 23]
let nos=no
nos
(5) [12, 34, 434, 45, 23]
nos.pop()
23
nos
(4) [12, 34, 434, 45]
no
(4) [12, 34, 434, 45]
no ===nos
true
no.push(53)
5
no
(5) [12, 34, 434, 45, 53]
nos
(5) [12, 34, 434, 45, 53]

//results same due to each are replicate


const x=5
x=x+1
VM2476:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2
(anonymous) @ VM2476:1

//but

const num=[1,2,3,5,6,7]
undefined
num.push(9)
7

//no error

num
(7) [1, 2, 3, 5, 6, 7, 9]
num=[1,2,3,5,6,7]
VM2652:1 Uncaught TypeError: Assignment to constant variable.
//due to change in memory
*/

/* multi d array
    a=[[12,23,56] , [23,45,57,34,23] , [34434,34,56,567]]
*/