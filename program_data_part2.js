/* =========================================
   PYTHON PORTAL
   PROGRAM DATA PART 2
========================================= */

/* =========================
   NUMBER PROGRAMS
========================= */

programs.smallest3 = {
    title:"Smallest of Three Numbers",
    category:"numbers",
    level:"Beginner",
    tags:["Number"],
    description:"Find smallest among three numbers.",
    code:`a=int(input())
b=int(input())
c=int(input())

if a<b and a<c:
    print(a)
elif b<c:
    print(b)
else:
    print(c)`
};

programs.primerange = {
    title:"Prime Numbers in Range",
    category:"numbers",
    level:"Intermediate",
    tags:["Prime"],
    description:"Display prime numbers in a range.",
    code:`start=int(input("Start: "))
end=int(input("End: "))

for num in range(start,end+1):

    if num>1:

        for i in range(2,num):
            if num%i==0:
                break
        else:
            print(num)`
};

programs.perfect = {
    title:"Perfect Number",
    category:"numbers",
    level:"Intermediate",
    tags:["Exam Important"],
    description:"Check perfect number.",
    code:`num=int(input())

total=0

for i in range(1,num):
    if num%i==0:
        total+=i

if total==num:
    print("Perfect")
else:
    print("Not Perfect")`
};

programs.strong = {
    title:"Strong Number",
    category:"numbers",
    level:"Advanced",
    tags:["Number"],
    description:"Check strong number.",
    code:`import math

num=int(input())
temp=num
s=0

while temp>0:

    digit=temp%10
    s+=math.factorial(digit)

    temp//=10

if s==num:
    print("Strong")
else:
    print("Not Strong")`
};

programs.neon = {
    title:"Neon Number",
    category:"numbers",
    level:"Intermediate",
    tags:["Number"],
    description:"Check neon number.",
    code:`num=int(input())

sq=num*num

s=0

while sq>0:
    s+=sq%10
    sq//=10

if s==num:
    print("Neon")
else:
    print("Not Neon")`
};

programs.spy = {
    title:"Spy Number",
    category:"numbers",
    level:"Intermediate",
    tags:["Number"],
    description:"Check spy number.",
    code:`num=int(input())

s=0
p=1

while num>0:

    digit=num%10

    s+=digit
    p*=digit

    num//=10

if s==p:
    print("Spy Number")
else:
    print("Not Spy Number")`
};

programs.gcd = {
    title:"GCD of Two Numbers",
    category:"numbers",
    level:"Intermediate",
    tags:["Math"],
    description:"Find greatest common divisor.",
    code:`a=int(input())
b=int(input())

while b!=0:
    a,b=b,a%b

print("GCD =",a)`
};

programs.lcm = {
    title:"LCM of Two Numbers",
    category:"numbers",
    level:"Intermediate",
    tags:["Math"],
    description:"Find least common multiple.",
    code:`a=int(input())
b=int(input())

greater=max(a,b)

while True:

    if greater%a==0 and greater%b==0:
        print(greater)
        break

    greater+=1`
};

programs.decimalbinary = {
    title:"Decimal to Binary",
    category:"numbers",
    level:"Intermediate",
    tags:["Conversion"],
    description:"Convert decimal to binary.",
    code:`num=int(input())

print(bin(num)[2:])`
};

programs.binarydecimal = {
    title:"Binary to Decimal",
    category:"numbers",
    level:"Intermediate",
    tags:["Conversion"],
    description:"Convert binary to decimal.",
    code:`binary=input()

print(int(binary,2))`
};

/* =========================
   STRING PROGRAMS
========================= */

programs.consonants = {
    title:"Count Consonants",
    category:"strings",
    level:"Beginner",
    tags:["String"],
    description:"Count consonants in string.",
    code:`text=input()

count=0

for ch in text.lower():

    if ch.isalpha() and ch not in "aeiou":
        count+=1

print(count)`
};

programs.wordcount = {
    title:"Count Words",
    category:"strings",
    level:"Beginner",
    tags:["String"],
    description:"Count words in string.",
    code:`text=input()

words=text.split()

print(len(words))`
};

programs.frequency = {
    title:"Character Frequency",
    category:"strings",
    level:"Intermediate",
    tags:["String"],
    description:"Display character frequency.",
    code:`text=input()

freq={}

for ch in text:

    freq[ch]=freq.get(ch,0)+1

print(freq)`
};

programs.removespaces = {
    title:"Remove Spaces",
    category:"strings",
    level:"Beginner",
    tags:["String"],
    description:"Remove spaces from string.",
    code:`text=input()

print(text.replace(" ",""))`
};

programs.anagram = {
    title:"Anagram Check",
    category:"strings",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Check whether two strings are anagrams.",
    code:`a=input()
b=input()

if sorted(a)==sorted(b):
    print("Anagram")
else:
    print("Not Anagram")`
};

/* =========================
   LIST PROGRAMS
========================= */

programs.listsum = {
    title:"Sum of List Elements",
    category:"lists",
    level:"Beginner",
    tags:["List"],
    description:"Find sum of elements.",
    code:`numbers=[10,20,30,40]

print(sum(numbers))`
};

programs.listavg = {
    title:"Average of List Elements",
    category:"lists",
    level:"Beginner",
    tags:["List"],
    description:"Find average.",
    code:`numbers=[10,20,30,40]

print(sum(numbers)/len(numbers))`
};

programs.listsearch = {
    title:"Search Element in List",
    category:"lists",
    level:"Beginner",
    tags:["List"],
    description:"Search item in list.",
    code:`numbers=[10,20,30,40]

item=int(input())

if item in numbers:
    print("Found")
else:
    print("Not Found")`
};

programs.removeduplicate = {
    title:"Remove Duplicates",
    category:"lists",
    level:"Intermediate",
    tags:["List"],
    description:"Remove duplicate values.",
    code:`numbers=[10,20,20,30,30,40]

numbers=list(set(numbers))

print(numbers)`
};

programs.reverselist = {
    title:"Reverse List",
    category:"lists",
    level:"Beginner",
    tags:["List"],
    description:"Reverse list.",
    code:`numbers=[10,20,30,40]

numbers.reverse()

print(numbers)`
};

/* =========================
   TUPLE PROGRAMS
========================= */

programs.tuplelength = {
    title:"Tuple Length",
    category:"tuples",
    level:"Beginner",
    tags:["Tuple"],
    description:"Find tuple length.",
    code:`t=(10,20,30,40)

print(len(t))`
};

programs.tuplemax = {
    title:"Maximum in Tuple",
    category:"tuples",
    level:"Beginner",
    tags:["Tuple"],
    description:"Find maximum value.",
    code:`t=(10,50,30,90)

print(max(t))`
};

programs.tuplemin = {
    title:"Minimum in Tuple",
    category:"tuples",
    level:"Beginner",
    tags:["Tuple"],
    description:"Find minimum value.",
    code:`t=(10,50,30,90)

print(min(t))`
};

programs.tupleconcat = {
    title:"Tuple Concatenation",
    category:"tuples",
    level:"Beginner",
    tags:["Tuple"],
    description:"Concatenate tuples.",
    code:`t1=(1,2,3)
t2=(4,5,6)

print(t1+t2)`
};

programs.tuplepack = {
    title:"Tuple Packing & Unpacking",
    category:"tuples",
    level:"Intermediate",
    tags:["Tuple"],
    description:"Packing and unpacking tuple.",
    code:`student=("Arun",18,95)

name,age,mark=student

print(name)
print(age)
print(mark)`
};