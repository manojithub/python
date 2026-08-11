/* =========================================
   PYTHON PORTAL
   PROGRAM DATA PART 4
========================================= */

/* =========================
   FILE HANDLING PROGRAMS
========================= */

programs.createfile = {
    title:"Create File",
    category:"files",
    level:"Beginner",
    tags:["File Handling"],
    description:"Create a new text file.",
    code:`file=open("sample.txt","w")
file.close()

print("File Created")`
};

programs.writefile = {
    title:"Write to File",
    category:"files",
    level:"Beginner",
    tags:["File Handling"],
    description:"Write data to a file.",
    code:`file=open("sample.txt","w")

file.write("Welcome to Python")

file.close()`
};

programs.readfile = {
    title:"Read File",
    category:"files",
    level:"Beginner",
    tags:["File Handling"],
    description:"Read file contents.",
    code:`file=open("sample.txt","r")

print(file.read())

file.close()`
};

programs.appendfile = {
    title:"Append File",
    category:"files",
    level:"Beginner",
    tags:["File Handling"],
    description:"Append data to file.",
    code:`file=open("sample.txt","a")

file.write("\\nNew Record")

file.close()`
};

programs.countlines = {
    title:"Count Lines in File",
    category:"files",
    level:"Intermediate",
    tags:["File Handling"],
    description:"Count number of lines.",
    code:`file=open("sample.txt","r")

count=len(file.readlines())

print("Lines =",count)

file.close()`
};

programs.countwords = {
    title:"Count Words in File",
    category:"files",
    level:"Intermediate",
    tags:["File Handling"],
    description:"Count words in file.",
    code:`file=open("sample.txt","r")

text=file.read()

print(len(text.split()))

file.close()`
};

programs.countchars = {
    title:"Count Characters in File",
    category:"files",
    level:"Intermediate",
    tags:["File Handling"],
    description:"Count characters.",
    code:`file=open("sample.txt","r")

text=file.read()

print(len(text))

file.close()`
};

programs.copyfile = {
    title:"Copy File",
    category:"files",
    level:"Intermediate",
    tags:["File Handling"],
    description:"Copy contents to another file.",
    code:`source=open("sample.txt","r")
target=open("copy.txt","w")

target.write(source.read())

source.close()
target.close()`
};

programs.studentrecord = {
    title:"Student Record File",
    category:"files",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Store student details.",
    code:`file=open("student.txt","a")

name=input("Name : ")
mark=input("Mark : ")

file.write(name+" "+mark+"\\n")

file.close()`
};

programs.searchrecord = {
    title:"Search Record",
    category:"files",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Search record in file.",
    code:`file=open("student.txt","r")

name=input("Enter Name : ")

for line in file:
    if name in line:
        print(line)

file.close()`
};

programs.updaterecord = {
    title:"Update Record",
    category:"files",
    level:"Advanced",
    tags:["Exam Important"],
    description:"Update file record.",
    code:`print("Record update example")
print("Read records")
print("Modify data")
print("Rewrite file")`
};

programs.csvwrite = {
    title:"CSV File Write",
    category:"files",
    level:"Advanced",
    tags:["CSV"],
    description:"Write CSV file.",
    code:`import csv

file=open("data.csv","w",newline="")

writer=csv.writer(file)

writer.writerow(["Name","Mark"])

writer.writerow(["Arun",95])

file.close()`
};

programs.csvread = {
    title:"CSV File Read",
    category:"files",
    level:"Advanced",
    tags:["CSV"],
    description:"Read CSV file.",
    code:`import csv

file=open("data.csv","r")

reader=csv.reader(file)

for row in reader:
    print(row)

file.close()`
};

programs.binarywrite = {
    title:"Binary File Write",
    category:"files",
    level:"Advanced",
    tags:["Binary File"],
    description:"Write binary file.",
    code:`import pickle

file=open("student.dat","wb")

pickle.dump(["Arun",95],file)

file.close()`
};

programs.binaryread = {
    title:"Binary File Read",
    category:"files",
    level:"Advanced",
    tags:["Binary File"],
    description:"Read binary file.",
    code:`import pickle

file=open("student.dat","rb")

data=pickle.load(file)

print(data)

file.close()`
};

/* =========================
   PATTERN PROGRAMS
========================= */

programs.startriangle = {
    title:"Star Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Right triangle star pattern.",
    code:`for i in range(1,6):
    print("*"*i)`
};

programs.pyramid = {
    title:"Pyramid Pattern",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Pyramid pattern.",
    code:`rows=5

for i in range(rows):
    print(" "*(rows-i-1)+"*"*(2*i+1))`
};

programs.invertedtriangle = {
    title:"Inverted Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Inverted star pattern.",
    code:`for i in range(5,0,-1):
    print("*"*i)`
};

programs.diamond = {
    title:"Diamond Pattern",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Diamond star pattern.",
    code:`n=5

for i in range(n):
    print(" "*(n-i-1)+"*"*(2*i+1))

for i in range(n-2,-1,-1):
    print(" "*(n-i-1)+"*"*(2*i+1))`
};

programs.floyd = {
    title:"Floyd Triangle",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Floyd triangle.",
    code:`n=1

for i in range(1,6):
    for j in range(i):
        print(n,end=" ")
        n+=1
    print()`
};

programs.numbertriangle = {
    title:"Number Triangle",
    category:"patterns",
    level:"Beginner",
    tags:["Pattern"],
    description:"Number triangle.",
    code:`for i in range(1,6):
    for j in range(1,i+1):
        print(j,end=" ")
    print()`
};

programs.alphabettriangle = {
    title:"Alphabet Triangle",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Alphabet pattern.",
    code:`for i in range(65,70):
    for j in range(65,i+1):
        print(chr(j),end=" ")
    print()`
};

programs.hollowsquare = {
    title:"Hollow Square",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Hollow square pattern.",
    code:`n=5

for i in range(n):
    for j in range(n):
        if i==0 or i==n-1 or j==0 or j==n-1:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()`
};

programs.reversepyramid = {
    title:"Reverse Pyramid",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Reverse pyramid.",
    code:`n=5

for i in range(n,0,-1):
    print(" "*(n-i)+"*"*(2*i-1))`
};

programs.xpattern = {
    title:"X Pattern",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"X shape pattern.",
    code:`n=5

for i in range(n):
    for j in range(n):
        if i==j or i+j==n-1:
            print("*",end="")
        else:
            print(" ",end="")
    print()`
};

programs.crosspattern = {
    title:"Cross Pattern",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Cross shape pattern.",
    code:`n=5

for i in range(n):
    for j in range(n):
        if i==2 or j==2:
            print("*",end="")
        else:
            print(" ",end="")
    print()`
};

programs.binarypattern = {
    title:"Binary Pattern",
    category:"patterns",
    level:"Intermediate",
    tags:["Pattern"],
    description:"Binary pattern.",
    code:`for i in range(1,6):
    for j in range(i):
        print((i+j)%2,end=" ")
    print()`
};

programs.characterpyramid = {
    title:"Character Pyramid",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Character pyramid.",
    code:`for i in range(65,70):
    print(chr(i)*(i-64))`
};

programs.butterfly = {
    title:"Butterfly Pattern",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Butterfly pattern.",
    code:`n=5

for i in range(1,n+1):
    print("*"*i+" "*(2*(n-i))+"*"*i)`
};

programs.pascal = {
    title:"Pascal Triangle",
    category:"patterns",
    level:"Advanced",
    tags:["Pattern"],
    description:"Pascal triangle.",
    code:`from math import factorial

n=5

for i in range(n):
    for j in range(i+1):
        print(factorial(i)//(factorial(j)*factorial(i-j)),end=" ")
    print()`
};