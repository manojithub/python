/* =========================================
   PYTHON PORTAL
   PROGRAM DATA PART 5
   Kerala Plus One & Plus Two Practical Programs
========================================= */

/* =========================
   KERALA PLUS ONE PRACTICALS
========================= */

programs.sum_n_numbers = {
    title:"Sum of N Numbers",
    category:"practicals",
    level:"Plus One",
    tags:["Practical","Loop"],
    description:"Find sum of first N natural numbers.",
    code:`n=int(input("Enter N: "))
s=0

for i in range(1,n+1):
    s+=i

print("Sum =",s)`
};

programs.factorial_practical = {
    title:"Factorial of a Number",
    category:"practicals",
    level:"Plus One",
    tags:["Practical","Loop"],
    description:"Calculate factorial.",
    code:`n=int(input())
fact=1

for i in range(1,n+1):
    fact*=i

print(fact)`
};

programs.fibonacci_practical = {
    title:"Fibonacci Series",
    category:"practicals",
    level:"Plus One",
    tags:["Series"],
    description:"Generate Fibonacci series.",
    code:`n=int(input())

a,b=0,1

for i in range(n):
    print(a,end=" ")
    a,b=b,a+b`
};

programs.armstrong_practical = {
    title:"Armstrong Number",
    category:"practicals",
    level:"Plus One",
    tags:["Number"],
    description:"Check Armstrong number.",
    code:`n=int(input())
temp=n
s=0

while temp>0:
    d=temp%10
    s+=d**3
    temp//=10

if s==n:
    print("Armstrong")
else:
    print("Not Armstrong")`
};

programs.palindrome_practical = {
    title:"Palindrome Number",
    category:"practicals",
    level:"Plus One",
    tags:["Number"],
    description:"Check palindrome number.",
    code:`n=input()

if n==n[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`
};

programs.prime_practical = {
    title:"Prime Number",
    category:"practicals",
    level:"Plus One",
    tags:["Exam Important"],
    description:"Check prime number.",
    code:`n=int(input())

flag=True

for i in range(2,n):
    if n%i==0:
        flag=False
        break

if flag:
    print("Prime")
else:
    print("Not Prime")`
};

programs.largest_three = {
    title:"Largest of Three Numbers",
    category:"practicals",
    level:"Plus One",
    tags:["Decision Making"],
    description:"Find largest number.",
    code:`a=int(input())
b=int(input())
c=int(input())

print(max(a,b,c))`
};

programs.reverse_number = {
    title:"Reverse a Number",
    category:"practicals",
    level:"Plus One",
    tags:["Number"],
    description:"Reverse digits of a number.",
    code:`n=int(input())

rev=0

while n>0:
    rev=rev*10+n%10
    n//=10

print(rev)`
};

programs.count_digits = {
    title:"Count Digits",
    category:"practicals",
    level:"Plus One",
    tags:["Loop"],
    description:"Count digits in a number.",
    code:`n=input()

print(len(n))`
};

programs.even_odd_practical = {
    title:"Even or Odd",
    category:"practicals",
    level:"Plus One",
    tags:["Decision Making"],
    description:"Check even or odd.",
    code:`n=int(input())

if n%2==0:
    print("Even")
else:
    print("Odd")`
};

/* =========================
   KERALA PLUS TWO PRACTICALS
========================= */

programs.list_max = {
    title:"Maximum in List",
    category:"practicals",
    level:"Plus Two",
    tags:["List"],
    description:"Find maximum element.",
    code:`numbers=[10,20,30,40,50]

print(max(numbers))`
};

programs.list_min = {
    title:"Minimum in List",
    category:"practicals",
    level:"Plus Two",
    tags:["List"],
    description:"Find minimum element.",
    code:`numbers=[10,20,30,40,50]

print(min(numbers))`
};

programs.list_sort = {
    title:"Sort List",
    category:"practicals",
    level:"Plus Two",
    tags:["List"],
    description:"Sort list items.",
    code:`numbers=[50,10,30,20]

numbers.sort()

print(numbers)`
};

programs.string_reverse = {
    title:"Reverse String",
    category:"practicals",
    level:"Plus Two",
    tags:["String"],
    description:"Reverse a string.",
    code:`text=input()

print(text[::-1])`
};

programs.vowel_count = {
    title:"Count Vowels",
    category:"practicals",
    level:"Plus Two",
    tags:["String"],
    description:"Count vowels.",
    code:`text=input().lower()

count=0

for ch in text:
    if ch in "aeiou":
        count+=1

print(count)`
};

programs.function_factorial = {
    title:"Factorial Using Function",
    category:"practicals",
    level:"Plus Two",
    tags:["Function"],
    description:"Factorial with function.",
    code:`def fact(n):
    if n==0:
        return 1
    return n*fact(n-1)

print(fact(5))`
};

programs.file_write_practical = {
    title:"Write to File",
    category:"practicals",
    level:"Plus Two",
    tags:["File Handling"],
    description:"Write content into file.",
    code:`f=open("sample.txt","w")

f.write("Python Portal")

f.close()`
};

programs.file_read_practical = {
    title:"Read from File",
    category:"practicals",
    level:"Plus Two",
    tags:["File Handling"],
    description:"Read file content.",
    code:`f=open("sample.txt","r")

print(f.read())

f.close()`
};

programs.csv_practical = {
    title:"CSV File Example",
    category:"practicals",
    level:"Plus Two",
    tags:["CSV"],
    description:"Write CSV file.",
    code:`import csv

f=open("data.csv","w",newline="")

writer=csv.writer(f)

writer.writerow(["Name","Mark"])

f.close()`
};

programs.binary_practical = {
    title:"Binary File Example",
    category:"practicals",
    level:"Plus Two",
    tags:["Binary File"],
    description:"Binary file using pickle.",
    code:`import pickle

f=open("student.dat","wb")

pickle.dump(["Arun",95],f)

f.close()`
};

/* =========================
   MODEL PRACTICAL PROGRAMS
========================= */

programs.student_marklist = {
    title:"Student Mark List",
    category:"practicals",
    level:"Model Exam",
    tags:["Exam Important"],
    description:"Prepare mark list.",
    code:`name=input("Name: ")
mark=int(input("Mark: "))

print("Name =",name)
print("Mark =",mark)`
};

programs.phone_directory_practical = {
    title:"Phone Directory",
    category:"practicals",
    level:"Model Exam",
    tags:["Dictionary"],
    description:"Phone directory using dictionary.",
    code:`phone={
"Arun":"9876543210",
"Ravi":"9876501234"
}

name=input()

print(phone.get(name,"Not Found"))`
};

programs.employee_record = {
    title:"Employee Record File",
    category:"practicals",
    level:"Model Exam",
    tags:["File Handling"],
    description:"Store employee details.",
    code:`f=open("employee.txt","a")

name=input("Name: ")

f.write(name+"\\n")

f.close()`
};

programs.menu_driven = {
    title:"Menu Driven Calculator",
    category:"practicals",
    level:"Model Exam",
    tags:["Function"],
    description:"Simple calculator.",
    code:`print("1.Add")
print("2.Subtract")

choice=int(input())

a=int(input())
b=int(input())

if choice==1:
    print(a+b)
else:
    print(a-b)`
};

programs.result_processing = {
    title:"Student Result Processing",
    category:"practicals",
    level:"Model Exam",
    tags:["Exam Important"],
    description:"Pass/Fail processing.",
    code:`mark=int(input())

if mark>=30:
    print("Pass")
else:
    print("Fail")`
};