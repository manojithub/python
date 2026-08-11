/* =========================================
   PYTHON PORTAL - PROGRAM DATABASE
   program_data.js
========================================= */

const programs = {

    hello:{
        title:"Hello World",
        category:"basic",
        level:"Beginner",
        tags:["Basic"],
        description:"Displays Hello World.",
        code:`print("Hello World")`
    },

    addition:{
        title:"Addition of Two Numbers",
        category:"basic",
        level:"Beginner",
        tags:["Arithmetic"],
        description:"Adds two numbers.",
        code:`a=int(input("Enter First Number: "))
b=int(input("Enter Second Number: "))
print("Sum =",a+b)`
    },

    swap:{
        title:"Swap Two Numbers",
        category:"basic",
        level:"Beginner",
        tags:["Variables"],
        description:"Swaps two variables.",
        code:`a=10
b=20

a,b=b,a

print("a =",a)
print("b =",b)`
    },

    evenodd:{
        title:"Even or Odd Number",
        category:"decision",
        level:"Beginner",
        tags:["if"],
        description:"Checks whether a number is even or odd.",
        code:`num=int(input("Enter Number: "))

if num%2==0:
    print("Even")
else:
    print("Odd")`
    },

    positive:{
        title:"Positive or Negative Number",
        category:"decision",
        level:"Beginner",
        tags:["if"],
        description:"Checks positive or negative.",
        code:`num=int(input("Enter Number: "))

if num>=0:
    print("Positive")
else:
    print("Negative")`
    },

    largest2:{
        title:"Largest of Two Numbers",
        category:"decision",
        level:"Beginner",
        tags:["if-else"],
        description:"Finds largest of two numbers.",
        code:`a=int(input("Enter First Number: "))
b=int(input("Enter Second Number: "))

if a>b:
    print("Largest =",a)
else:
    print("Largest =",b)`
    },

    largest3:{
        title:"Largest of Three Numbers",
        category:"decision",
        level:"Beginner",
        tags:["nested if"],
        description:"Finds largest of three numbers.",
        code:`a=int(input())
b=int(input())
c=int(input())

if a>b and a>c:
    print(a)
elif b>c:
    print(b)
else:
    print(c)`
    },

    leapyear:{
        title:"Leap Year",
        category:"decision",
        level:"Intermediate",
        tags:["Exam Important"],
        description:"Checks leap year.",
        code:`year=int(input("Enter Year: "))

if year%400==0 or (year%4==0 and year%100!=0):
    print("Leap Year")
else:
    print("Not Leap Year")`
    },

    grade:{
        title:"Grade Calculator",
        category:"decision",
        level:"Intermediate",
        tags:["elif"],
        description:"Displays grade based on marks.",
        code:`mark=int(input("Enter Mark: "))

if mark>=90:
    print("A+")
elif mark>=80:
    print("A")
elif mark>=70:
    print("B+")
else:
    print("Needs Improvement")`
    },

    factorial:{
        title:"Factorial",
        category:"loops",
        level:"Beginner",
        tags:["for loop"],
        description:"Calculates factorial.",
        code:`num=int(input("Enter Number: "))

fact=1

for i in range(1,num+1):
    fact*=i

print(fact)`
    },

    fibonacci:{
        title:"Fibonacci Series",
        category:"loops",
        level:"Intermediate",
        tags:["Series"],
        description:"Displays Fibonacci sequence.",
        code:`n=int(input("Enter Terms: "))

a=0
b=1

for i in range(n):
    print(a,end=" ")
    c=a+b
    a=b
    b=c`
    },

    table:{
        title:"Multiplication Table",
        category:"loops",
        level:"Beginner",
        tags:["for loop"],
        description:"Displays multiplication table.",
        code:`num=int(input("Enter Number: "))

for i in range(1,11):
    print(num,"x",i,"=",num*i)`
    },

    sumdigits:{
        title:"Sum of Digits",
        category:"loops",
        level:"Intermediate",
        tags:["while loop"],
        description:"Calculates sum of digits.",
        code:`num=int(input("Enter Number: "))

s=0

while num>0:
    s=s+(num%10)
    num=num//10

print(s)`
    },

    reverse:{
        title:"Reverse a Number",
        category:"loops",
        level:"Intermediate",
        tags:["while loop"],
        description:"Reverses a number.",
        code:`num=int(input("Enter Number: "))

rev=0

while num>0:
    rev=rev*10+num%10
    num//=10

print(rev)`
    },

    prime:{
        title:"Prime Number",
        category:"loops",
        level:"Intermediate",
        tags:["Exam Important"],
        description:"Checks prime number.",
        code:`num=int(input("Enter Number: "))

flag=True

if num<=1:
    flag=False

for i in range(2,num):
    if num%i==0:
        flag=False
        break

if flag:
    print("Prime")
else:
    print("Not Prime")`
    },

    palindrome:{
        title:"Palindrome Number",
        category:"loops",
        level:"Intermediate",
        tags:["Exam Important"],
        description:"Checks palindrome number.",
        code:`num=input("Enter Number: ")

if num==num[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`
    },

    armstrong:{
        title:"Armstrong Number",
        category:"loops",
        level:"Advanced",
        tags:["Exam Important"],
        description:"Checks Armstrong number.",
        code:`num=int(input("Enter Number: "))

temp=num
s=0

while temp>0:
    digit=temp%10
    s+=digit**3
    temp//=10

if num==s:
    print("Armstrong")
else:
    print("Not Armstrong")`
    },

    reversestring:{
        title:"Reverse String",
        category:"strings",
        level:"Beginner",
        tags:["String"],
        description:"Reverses a string.",
        code:`text=input("Enter String: ")

print(text[::-1])`
    },

    vowels:{
        title:"Count Vowels",
        category:"strings",
        level:"Intermediate",
        tags:["String"],
        description:"Counts vowels.",
        code:`text=input("Enter String: ")

count=0

for ch in text.lower():
    if ch in "aeiou":
        count+=1

print("Vowels =",count)`
    },

    stringpal:{
        title:"Palindrome String",
        category:"strings",
        level:"Intermediate",
        tags:["String"],
        description:"Checks palindrome string.",
        code:`text=input("Enter String: ")

if text==text[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`
    },

    listsort:{
        title:"Sort a List",
        category:"lists",
        level:"Beginner",
        tags:["List"],
        description:"Sorts list elements.",
        code:`numbers=[50,20,10,80,30]

numbers.sort()

print(numbers)`
    },

    listmax:{
        title:"Largest Element in List",
        category:"lists",
        level:"Beginner",
        tags:["List"],
        description:"Finds largest element.",
        code:`numbers=[10,20,50,90,40]

print(max(numbers))`
    },

    tupledemo:{
        title:"Tuple Operations",
        category:"tuples",
        level:"Beginner",
        tags:["Tuple"],
        description:"Demonstrates tuple usage.",
        code:`t=(10,20,30,40)

print(t[0])
print(len(t))`
    },

    setdemo:{
        title:"Set Operations",
        category:"sets",
        level:"Intermediate",
        tags:["Set"],
        description:"Union and intersection.",
        code:`A={1,2,3,4}
B={3,4,5,6}

print(A|B)
print(A&B)`
    },

    dictdemo:{
        title:"Dictionary Example",
        category:"dictionary",
        level:"Beginner",
        tags:["Dictionary"],
        description:"Displays dictionary values.",
        code:`student={
"name":"Arun",
"mark":95
}

print(student["name"])
print(student["mark"])`
    },

	function1:{
    title:"Function Without Arguments",
    category:"functions",
    level:"Beginner",
    tags:["Function"],
    description:"Simple function without arguments.",
    code:`def greet():
    print("Welcome to Python")

greet()`
},

function2:{
    title:"Function With Arguments",
    category:"functions",
    level:"Beginner",
    tags:["Function"],
    description:"Function with parameters.",
    code:`def add(a,b):
    print(a+b)

add(10,20)`
},

function3:{
    title:"Function Returning Value",
    category:"functions",
    level:"Beginner",
    tags:["Return"],
    description:"Returns a value from function.",
    code:`def square(n):
    return n*n

result=square(5)

print(result)`
},

function4:{
    title:"Recursive Factorial",
    category:"functions",
    level:"Advanced",
    tags:["Recursion"],
    description:"Factorial using recursion.",
    code:`def factorial(n):

    if n==1:
        return 1

    return n*factorial(n-1)

print(factorial(5))`
},

function5:{
    title:"Lambda Function",
    category:"functions",
    level:"Intermediate",
    tags:["Lambda"],
    description:"Anonymous function example.",
    code:`square=lambda x:x*x

print(square(6))`
},

module1:{
    title:"Math Module",
    category:"modules",
    level:"Beginner",
    tags:["Module"],
    description:"Using math module.",
    code:`import math

print(math.sqrt(25))
print(math.factorial(5))`
},

module2:{
    title:"Random Module",
    category:"modules",
    level:"Beginner",
    tags:["Random"],
    description:"Generate random number.",
    code:`import random

print(random.randint(1,100))`
},

module3:{
    title:"Calendar Module",
    category:"modules",
    level:"Intermediate",
    tags:["Calendar"],
    description:"Display calendar.",
    code:`import calendar

print(calendar.month(2026,7))`
},

file1:{
    title:"Create and Write File",
    category:"files",
    level:"Beginner",
    tags:["File"],
    description:"Create file and write data.",
    code:`file=open("sample.txt","w")

file.write("Welcome to Python")

file.close()`
},

file2:{
    title:"Read File",
    category:"files",
    level:"Beginner",
    tags:["File"],
    description:"Read contents of file.",
    code:`file=open("sample.txt","r")

print(file.read())

file.close()`
},

file3:{
    title:"Append File",
    category:"files",
    level:"Beginner",
    tags:["File"],
    description:"Append data to file.",
    code:`file=open("sample.txt","a")

file.write("\\nNew Record")

file.close()`
},

file4:{
    title:"Read File Line By Line",
    category:"files",
    level:"Intermediate",
    tags:["File"],
    description:"Reads file line by line.",
    code:`file=open("sample.txt","r")

for line in file:
    print(line)

file.close()`
},

file5:{
    title:"Count Lines in File",
    category:"files",
    level:"Intermediate",
    tags:["File"],
    description:"Count total lines.",
    code:`file=open("sample.txt","r")

count=len(file.readlines())

print("Lines =",count)

file.close()`
},

file6:{
    title:"Copy File",
    category:"files",
    level:"Advanced",
    tags:["File"],
    description:"Copies file contents.",
    code:`source=open("sample.txt","r")

target=open("copy.txt","w")

target.write(source.read())

source.close()
target.close()`
},

file7:{
    title:"Student Record File",
    category:"files",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Store student details.",
    code:`file=open("student.txt","w")

name=input("Name : ")
mark=input("Mark : ")

file.write(name+" "+mark)

file.close()`
},

pattern1:{
    title:"Star Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Right triangle star pattern.",
    code:`for i in range(1,6):
    print("*"*i)`
},

pattern2:{
    title:"Inverted Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Inverted star pattern.",
    code:`for i in range(5,0,-1):
    print("*"*i)`
},

pattern3:{
    title:"Number Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Number pattern.",
    code:`for i in range(1,6):

    for j in range(1,i+1):
        print(j,end=" ")

    print()`
},

pattern4:{
    title:"Floyd's Triangle",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Floyd's triangle.",
    code:`n=1

for i in range(1,6):

    for j in range(i):
        print(n,end=" ")
        n+=1

    print()`
},

pattern5:{
    title:"Pyramid Pattern",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Centered pyramid.",
    code:`rows=5

for i in range(rows):

    print(" "*(rows-i-1)+"*"*(2*i+1))`
},



};