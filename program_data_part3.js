/* =========================================
   PYTHON PORTAL
   PROGRAM DATA PART 3
========================================= */

/* =========================
   SET PROGRAMS
========================= */

programs.setunion = {
    title:"Set Union",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Union of two sets.",
    code:`A={1,2,3,4}
B={3,4,5,6}

print(A|B)`
};

programs.setintersection = {
    title:"Set Intersection",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Intersection of sets.",
    code:`A={1,2,3,4}
B={3,4,5,6}

print(A&B)`
};

programs.setdifference = {
    title:"Set Difference",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Difference of sets.",
    code:`A={1,2,3,4}
B={3,4,5,6}

print(A-B)`
};

programs.setsymmetric = {
    title:"Symmetric Difference",
    category:"sets",
    level:"Intermediate",
    tags:["Set"],
    description:"Symmetric difference.",
    code:`A={1,2,3,4}
B={3,4,5,6}

print(A^B)`
};

programs.setadd = {
    title:"Add Element to Set",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Add new item.",
    code:`A={10,20,30}

A.add(40)

print(A)`
};

programs.setremove = {
    title:"Remove Element from Set",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Remove item from set.",
    code:`A={10,20,30}

A.remove(20)

print(A)`
};

programs.subset = {
    title:"Subset Check",
    category:"sets",
    level:"Intermediate",
    tags:["Set"],
    description:"Check subset.",
    code:`A={1,2}
B={1,2,3,4}

print(A.issubset(B))`
};

programs.superset = {
    title:"Superset Check",
    category:"sets",
    level:"Intermediate",
    tags:["Set"],
    description:"Check superset.",
    code:`A={1,2,3,4}
B={1,2}

print(A.issuperset(B))`
};

programs.membershipset = {
    title:"Membership Test",
    category:"sets",
    level:"Beginner",
    tags:["Set"],
    description:"Check membership.",
    code:`A={10,20,30}

print(20 in A)`
};

programs.removedupset = {
    title:"Remove Duplicates Using Set",
    category:"sets",
    level:"Intermediate",
    tags:["Set"],
    description:"Remove duplicate values.",
    code:`numbers=[10,20,20,30,30,40]

numbers=list(set(numbers))

print(numbers)`
};

/* =========================
   DICTIONARY PROGRAMS
========================= */

programs.dictadd = {
    title:"Add Item to Dictionary",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Add key-value pair.",
    code:`student={"name":"Arun"}

student["mark"]=95

print(student)`
};

programs.dictdelete = {
    title:"Delete Item from Dictionary",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Delete dictionary item.",
    code:`student={"name":"Arun","mark":95}

del student["mark"]

print(student)`
};

programs.dictupdate = {
    title:"Update Dictionary",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Update value.",
    code:`student={"name":"Arun","mark":90}

student["mark"]=98

print(student)`
};

programs.dictsearch = {
    title:"Search Key in Dictionary",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Search key.",
    code:`student={"name":"Arun","mark":95}

key=input("Enter Key: ")

if key in student:
    print("Found")
else:
    print("Not Found")`
};

programs.dictkeys = {
    title:"Display Dictionary Keys",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Show all keys.",
    code:`student={"name":"Arun","mark":95}

print(student.keys())`
};

programs.dictvalues = {
    title:"Display Dictionary Values",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Show all values.",
    code:`student={"name":"Arun","mark":95}

print(student.values())`
};

programs.dictcount = {
    title:"Count Dictionary Entries",
    category:"dictionary",
    level:"Beginner",
    tags:["Dictionary"],
    description:"Count entries.",
    code:`student={"name":"Arun","mark":95}

print(len(student))`
};

programs.dictmerge = {
    title:"Merge Dictionaries",
    category:"dictionary",
    level:"Intermediate",
    tags:["Dictionary"],
    description:"Combine dictionaries.",
    code:`A={"a":1}
B={"b":2}

A.update(B)

print(A)`
};

programs.phonedirectory = {
    title:"Phone Directory",
    category:"dictionary",
    level:"Intermediate",
    tags:["Exam Important"],
    description:"Phone directory example.",
    code:`phone={
"Arun":"9876543210",
"Ravi":"9876501234"
}

name=input("Enter Name: ")

print(phone.get(name,"Not Found"))`
};

programs.markanalysis = {
    title:"Student Mark Analysis",
    category:"dictionary",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Find topper.",
    code:`marks={
"Arun":95,
"Ravi":88,
"Anu":98
}

topper=max(marks,key=marks.get)

print("Topper =",topper)`
};

/* =========================
   FUNCTION PROGRAMS
========================= */

programs.defaultarg = {
    title:"Default Arguments",
    category:"functions",
    level:"Beginner",
    tags:["Function"],
    description:"Function with default value.",
    code:`def greet(name="Student"):
    print("Hello",name)

greet()
greet("Arun")`
};

programs.keywordarg = {
    title:"Keyword Arguments",
    category:"functions",
    level:"Beginner",
    tags:["Function"],
    description:"Keyword argument example.",
    code:`def student(name,mark):
    print(name,mark)

student(mark=95,name="Arun")`
};

programs.variablearg = {
    title:"Variable Length Arguments",
    category:"functions",
    level:"Intermediate",
    tags:["Function"],
    description:"Accept multiple values.",
    code:`def total(*numbers):
    print(sum(numbers))

total(10,20,30,40)`
};

programs.recfib = {
    title:"Recursive Fibonacci",
    category:"functions",
    level:"Advanced",
    tags:["Recursion"],
    description:"Fibonacci using recursion.",
    code:`def fib(n):

    if n<=1:
        return n

    return fib(n-1)+fib(n-2)

print(fib(6))`
};

programs.globalvar = {
    title:"Global Variable",
    category:"functions",
    level:"Beginner",
    tags:["Scope"],
    description:"Global variable example.",
    code:`x=100

def show():
    print(x)

show()`
};

programs.localvar = {
    title:"Local Variable",
    category:"functions",
    level:"Beginner",
    tags:["Scope"],
    description:"Local variable example.",
    code:`def show():

    x=10

    print(x)

show()`
};

programs.primefunction = {
    title:"Prime Number Using Function",
    category:"functions",
    level:"Intermediate",
    tags:["Function"],
    description:"Prime number check.",
    code:`def prime(num):

    for i in range(2,num):

        if num%i==0:
            return False

    return True

print(prime(17))`
};

programs.palfunction = {
    title:"Palindrome Using Function",
    category:"functions",
    level:"Intermediate",
    tags:["Function"],
    description:"Palindrome check.",
    code:`def palindrome(text):

    return text==text[::-1]

print(palindrome("madam"))`
};

programs.armfunction = {
    title:"Armstrong Using Function",
    category:"functions",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Armstrong number check.",
    code:`def armstrong(num):

    temp=num
    s=0

    while temp>0:

        digit=temp%10
        s+=digit**3

        temp//=10

    return s==num

print(armstrong(153))`
};

programs.calculatorfunction = {
    title:"Calculator Using Functions",
    category:"functions",
    level:"Intermediate",
    tags:["Function"],
    description:"Simple calculator.",
    code:`def add(a,b):
    return a+b

def sub(a,b):
    return a-b

print(add(10,20))
print(sub(20,10))`
};