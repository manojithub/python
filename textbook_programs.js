const textbookPrograms = [
  {
    "id": 1,
    "chapter": "4",
    "title": "Print Welcome Message",
    "topic": "Basics",
    "code": "print(\"Welcome to Python programming\")"
  },
  {
    "id": 2,
    "chapter": "4",
    "title": "Addition using print()",
    "topic": "Basics",
    "code": "print(25 + 12)"
  },
  {
    "id": 3,
    "chapter": "4",
    "title": "String Concatenation",
    "topic": "Strings",
    "code": "print(\"Hello\" + \"World\")"
  },
  {
    "id": 4,
    "chapter": "4",
    "title": "Area of a Circle – Activity",
    "topic": "Textbook Activity",
    "code": "diameter = 12\nradius = diameter / 2\narea = 3.14 * radius * radius\nprint(\"Area =\", area)"
  },
  {
    "id": 5,
    "chapter": "4",
    "title": "Perimeter of a Rectangle – Activity",
    "topic": "Textbook Activity",
    "code": "length = 7\nbreadth = 5\nperimeter = 2 * (length + breadth)\nprint(\"Perimeter =\", perimeter)"
  },
  {
    "id": 6,
    "chapter": "5",
    "title": "Variable Assignment",
    "topic": "Variables",
    "code": "num = 10\nmsg = \"Hello\"\nprint(num)\nprint(msg)"
  },
  {
    "id": 7,
    "chapter": "5",
    "title": "Variable Reassignment",
    "topic": "Variables",
    "code": "num = 10\ntemp = num\nnum = num * num\nprint(num)\nprint(temp)"
  },
  {
    "id": 8,
    "chapter": "5",
    "title": "Arithmetic Addition",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 + num2)"
  },
  {
    "id": 9,
    "chapter": "5",
    "title": "String Concatenation",
    "topic": "Operators",
    "code": "print(\"Hello\" + \"Guys\")"
  },
  {
    "id": 10,
    "chapter": "5",
    "title": "Subtraction",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 - num2)"
  },
  {
    "id": 11,
    "chapter": "5",
    "title": "Multiplication",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 * num2)"
  },
  {
    "id": 12,
    "chapter": "5",
    "title": "String Repetition",
    "topic": "Operators",
    "code": "print(\"Hello\" * 2)"
  },
  {
    "id": 13,
    "chapter": "5",
    "title": "Division",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 / num2)"
  },
  {
    "id": 14,
    "chapter": "5",
    "title": "Modulus",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 % num2)"
  },
  {
    "id": 15,
    "chapter": "5",
    "title": "Floor Division",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 // num2)"
  },
  {
    "id": 16,
    "chapter": "5",
    "title": "Exponentiation",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = 2\nprint(num1 ** num2)"
  },
  {
    "id": 17,
    "chapter": "5",
    "title": "Assignment Operators",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = num1 + 12\nstr1 = 'hello'\nstr1 = str1 + ' friends'\nprint(num1)\nprint(num2)\nprint(str1)"
  },
  {
    "id": 18,
    "chapter": "5",
    "title": "Input and Addition",
    "topic": "Input/Output",
    "code": "num1 = int(input(\"Enter first number: \"))\nnum2 = int(input(\"Enter second number: \"))\ns = num1 + num2\nprint(\"Sum = \", s)"
  },
  {
    "id": 19,
    "chapter": "5",
    "title": "Type Conversion with Input",
    "topic": "Input/Output",
    "code": "num1 = input(\"Enter first number: \")\nnum2 = input(\"Enter second number: \")\ns = int(num1) + int(num2)\nprint(\"Sum = \", s)"
  },
  {
    "id": 20,
    "chapter": "5",
    "title": "Identity Operator Example",
    "topic": "Operators",
    "code": "num1 = 5\nnum2 = num1\nprint(num1 is num2)\nprint(type(num1) is int)"
  },
  {
    "id": 21,
    "chapter": "5",
    "title": "Membership Operator Example",
    "topic": "Operators",
    "code": "a = [10, 15, 100]\nprint(10 in a)\nprint('15' in a)"
  },
  {
    "id": 22,
    "chapter": "6",
    "title": "Eligibility Check",
    "topic": "if Statement",
    "code": "age = int(input(\"Enter age: \"))\nif age >= 18:\n    print(\"Eligible\")\nelse:\n    print(\"Not eligible\")"
  },
  {
    "id": 23,
    "chapter": "6",
    "title": "Grade using if-elif-else",
    "topic": "if-elif-else",
    "code": "marks = int(input(\"Enter marks: \"))\nif marks >= 90:\n    print(\"A+\")\nelif marks >= 80:\n    print(\"A\")\nelif marks >= 70:\n    print(\"B+\")\nelse:\n    print(\"Other Grade\")"
  },
  {
    "id": 24,
    "chapter": "6",
    "title": "while – Print 1 to 5",
    "topic": "while Loop",
    "code": "i = 1\nwhile i <= 5:\n    print(i)\n    i = i + 1"
  },
  {
    "id": 25,
    "chapter": "6",
    "title": "while – Print 2 to 20",
    "topic": "while Loop",
    "code": "i = 2\nwhile i <= 20:\n    print(i)\n    i = i + 1"
  },
  {
    "id": 26,
    "chapter": "6",
    "title": "while – Reverse Digits",
    "topic": "while Loop",
    "code": "rev = 0\nn = int(input(\"Enter number: \"))\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n = n // 10\nprint(rev)"
  },
  {
    "id": 27,
    "chapter": "6",
    "title": "while – Factorial",
    "topic": "while Loop",
    "code": "n = int(input(\"Enter number: \"))\nfact = 1\nwhile n > 0:\n    fact = fact * n\n    n = n - 1\nprint(\"Factorial =\", fact)"
  },
  {
    "id": 28,
    "chapter": "6",
    "title": "for – Print 1 to 10",
    "topic": "for Loop",
    "code": "for i in range(1, 11):\n    print(i)"
  },
  {
    "id": 29,
    "chapter": "6",
    "title": "for – Repetition",
    "topic": "for Loop",
    "code": "for _ in range(5):\n    print(\"Hello\")"
  },
  {
    "id": 30,
    "chapter": "6",
    "title": "for – Numbers with Step",
    "topic": "for Loop",
    "code": "for i in range(2, 11, 3):\n    print(i, end=\" \")"
  },
  {
    "id": 31,
    "chapter": "6",
    "title": "continue Example",
    "topic": "Jump Statement",
    "code": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)"
  },
  {
    "id": 32,
    "chapter": "6",
    "title": "break Example",
    "topic": "Jump Statement",
    "code": "for i in range(1, 6):\n    if i == 3:\n        break\n    print(i)"
  },
  {
    "id": 33,
    "chapter": "6",
    "title": "Nested Loop",
    "topic": "Nested Loop",
    "code": "for i in range(1, 4):\n    for j in range(1, 4):\n        print(i, j)"
  },
  {
    "id": 34,
    "chapter": "7",
    "title": "Simple Function",
    "topic": "Functions",
    "code": "def welcome():\n    print(\"Welcome to Python functions\")\n\nwelcome()"
  },
  {
    "id": 35,
    "chapter": "7",
    "title": "Recursive Digit Count – Activity",
    "topic": "Textbook Activity",
    "code": "def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)\n\nprint(count_digits(12345))"
  },
  {
    "id": 36,
    "chapter": "7",
    "title": "Recursive Power – Activity",
    "topic": "Textbook Activity",
    "code": "def power(x, n):\n    if n == 0:\n        return 1\n    return x * power(x, n - 1)\n\nprint(power(2, 5))"
  },
  {
    "id": 37,
    "chapter": "7",
    "title": "Recursive Sum of Divisors – Activity",
    "topic": "Textbook Activity",
    "code": "def sum_divisors(n, d=1):\n    if d > n:\n        return 0\n    if n % d == 0:\n        return d + sum_divisors(n, d + 1)\n    return sum_divisors(n, d + 1)\n\nprint(sum_divisors(12))"
  },
  {
    "id": 38,
    "chapter": "7",
    "title": "Recursive Count of Even Digits – Activity",
    "topic": "Textbook Activity",
    "code": "def count_even_digits(n):\n    if n == 0:\n        return 0\n    return (1 if (n % 10) % 2 == 0 else 0) + count_even_digits(n // 10)\n\nprint(count_even_digits(123456))"
  },
  {
    "id": 39,
    "chapter": "7",
    "title": "Recursive Sum of Even Digits – Activity",
    "topic": "Textbook Activity",
    "code": "def sum_even_digits(n):\n    if n == 0:\n        return 0\n    d = n % 10\n    return (d if d % 2 == 0 else 0) + sum_even_digits(n // 10)\n\nprint(sum_even_digits(123456))"
  },
  {
    "id": 40,
    "chapter": "8",
    "title": "String Slicing",
    "topic": "Strings",
    "code": "string = \"Python programming\"\nprint(string[7:])\nprint(string[-11:-1])\nprint(string[-11:-1:2])\nprint(string[:6])\nprint(string[::-1])"
  },
  {
    "id": 41,
    "chapter": "8",
    "title": "String Input",
    "topic": "Strings",
    "code": "text = input(\"Enter a string: \")\nprint(text)"
  },
  {
    "id": 42,
    "chapter": "8",
    "title": "String Traversal",
    "topic": "Strings",
    "code": "text = input(\"Enter a string: \")\nfor ch in text:\n    print(ch)"
  },
  {
    "id": 43,
    "chapter": "8",
    "title": "String Membership",
    "topic": "Strings",
    "code": "text = \"Python programming\"\nprint(\"Python\" in text)\nprint(\"Java\" in text)"
  },
  {
    "id": 44,
    "chapter": "9",
    "title": "Create a List",
    "topic": "Lists",
    "code": "scores = [85, 92, 78, 96, 88]\nprint(scores)"
  },
  {
    "id": 45,
    "chapter": "9",
    "title": "Access List Elements",
    "topic": "Lists",
    "code": "fruits = [\"apple\", \"banana\", \"orange\", \"grape\"]\nprint(fruits[0])\nprint(fruits[2])"
  },
  {
    "id": 46,
    "chapter": "9",
    "title": "Negative Indexing",
    "topic": "Lists",
    "code": "L = [10, 20, 30, 40, 50]\nprint(L[-1])\nprint(L[-2])\nprint(L[-3])"
  },
  {
    "id": 47,
    "chapter": "9",
    "title": "List Slice Assignment",
    "topic": "Lists",
    "code": "L2 = [5, 10, 15, 20, 25]\nL2[1:4] = [100, 200, 300]\nprint(L2)"
  },
  {
    "id": 48,
    "chapter": "9",
    "title": "List Slicing with Step",
    "topic": "Lists",
    "code": "numbers = [11,12,13,14,15,16,17,18,19,20]\nprint(numbers[2:7:2])\nprint(numbers[9:0:-2])"
  },
  {
    "id": 49,
    "chapter": "9",
    "title": "List Copy using Slice",
    "topic": "Lists",
    "code": "L1 = [10, 20, 30]\nL2 = L1[0:2]\nL2[0] = 100\nprint(L1)\nprint(L2)"
  },
  {
    "id": 50,
    "chapter": "9",
    "title": "List Concatenation",
    "topic": "Lists",
    "code": "L1 = [10,20,30]\nL2 = [40,50]\nL3 = L1 + L2\nprint(L3)"
  },
  {
    "id": 51,
    "chapter": "9",
    "title": "List Delete",
    "topic": "Lists",
    "code": "colours = [\"red\", \"blue\", \"green\", \"yellow\", \"purple\"]\ndel colours[3]\nprint(colours)"
  },
  {
    "id": 52,
    "chapter": "9",
    "title": "List Length",
    "topic": "Lists",
    "code": "colours = [\"red\", \"blue\", \"green\", \"yellow\", \"purple\"]\nprint(len(colours))"
  },
  {
    "id": 53,
    "chapter": "9",
    "title": "Matrix Element Access",
    "topic": "Lists",
    "code": "matrix = [[1,2,3],[4,5,6],[7,8,9]]\nprint(matrix[0][2])\nprint(matrix[2][1])"
  },
  {
    "id": 54,
    "chapter": "10",
    "title": "Create a Tuple",
    "topic": "Tuples",
    "code": "t = (\"apple\", \"grapes\", 2, 23, 2.5)\nprint(t)"
  },
  {
    "id": 55,
    "chapter": "10",
    "title": "Single Element Tuple",
    "topic": "Tuples",
    "code": "t1 = (1984,)\nprint(t1)\nprint(type(t1))"
  },
  {
    "id": 56,
    "chapter": "10",
    "title": "Empty Tuple",
    "topic": "Tuples",
    "code": "t3 = ()\nprint(t3)"
  },
  {
    "id": 57,
    "chapter": "10",
    "title": "Tuple Indexing",
    "topic": "Tuples",
    "code": "marks = (85, 90, 78, 92)\nprint(marks[0])\nprint(marks[3])"
  },
  {
    "id": 58,
    "chapter": "10",
    "title": "Tuple Concatenation",
    "topic": "Tuples",
    "code": "T1 = (10,20,30)\nT2 = T1 + (40,)\nprint(T2)"
  },
  {
    "id": 59,
    "chapter": "10",
    "title": "Tuple Unpacking",
    "topic": "Tuples",
    "code": "t = (10, 20, 30)\na, b, c = t\nprint(a, b, c)"
  },
  {
    "id": 60,
    "chapter": "10",
    "title": "Nested Tuple",
    "topic": "Tuples",
    "code": "total_score = ((20, 40, 60),(18, 39, 45),(17, 34, 40))\nprint((20, 40, 60) in total_score)"
  },
  {
    "id": 61,
    "chapter": "10",
    "title": "List to Tuple Conversion",
    "topic": "Tuples",
    "code": "my_list = [1,2,3]\nmy_tuple = tuple(my_list)\nprint(my_tuple)"
  },
  {
    "id": 62,
    "chapter": "10",
    "title": "Tuple Slicing",
    "topic": "Tuples",
    "code": "A = (10, 20, 30, 40, 50)\nprint(A[-1], A[2:4])"
  },
  {
    "id": 63,
    "chapter": "11",
    "title": "Create a Dictionary",
    "topic": "Dictionaries",
    "code": "students = {101:\"Anu\", 102:\"Binu\", 103:\"Cinu\"}\nprint(students)"
  },
  {
    "id": 64,
    "chapter": "11",
    "title": "Dictionary Access",
    "topic": "Dictionaries",
    "code": "students = {101:\"Anu\", 102:\"Binu\", 103:\"Cinu\"}\nprint(students[103])"
  },
  {
    "id": 65,
    "chapter": "11",
    "title": "Dictionary with String Keys",
    "topic": "Dictionaries",
    "code": "capitals = {\"India\":\"New Delhi\", \"Oman\":\"Muscat\", \"Japan\":\"Tokyo\"}\nprint(capitals[\"Oman\"])"
  },
  {
    "id": 66,
    "chapter": "11",
    "title": "Nested Dictionary",
    "topic": "Dictionaries",
    "code": "employee = {\n    \"Emp101\":{\"Name\":\"Sajimon Abraham\", \"Phone\":9876501234},\n    \"Emp102\":{\"Name\":\"Ravi\", \"Phone\":9876501234}\n}\nprint(\"Name of Emp101:\", employee[\"Emp101\"][\"Name\"])\nprint(\"Phone of Emp102:\", employee[\"Emp102\"][\"Phone\"])"
  },
  {
    "id": 67,
    "chapter": "11",
    "title": "Delete Dictionary Item",
    "topic": "Dictionaries",
    "code": "inventory = {\"Apples\":10, \"Oranges\":20, \"Mangoes\":15}\ndel inventory[\"Oranges\"]\nprint(inventory)"
  },
  {
    "id": 68,
    "chapter": "11",
    "title": "Create a Set",
    "topic": "Sets",
    "code": "numbers = {10, 20, 30, 10}\nprint(numbers)"
  },
  {
    "id": 69,
    "chapter": "11",
    "title": "Set Removes Duplicates",
    "topic": "Sets",
    "code": "random_num = {7, 9, 11, 10, 4, 10, 20, 3, 6, 11}\nprint(random_num)"
  },
  {
    "id": 70,
    "chapter": "11",
    "title": "Set Intersection",
    "topic": "Sets",
    "code": "lng1 = {\"Python\", \"C\", \"Java\"}\nlng2 = {\"Python\", \"JavaScript\", \"Java\"}\nprint(lng1.intersection(lng2))"
  },
  {
    "id": 71,
    "chapter": "11",
    "title": "Set Difference",
    "topic": "Sets",
    "code": "lng1 = {\"Python\", \"C\", \"Java\"}\nlng2 = {\"Python\", \"JavaScript\", \"Java\"}\nprint(lng1.difference(lng2))"
  },
  {
    "id": 72,
    "chapter": "12",
    "title": "Bubble Sort – Inner Function",
    "topic": "Sorting",
    "code": "def bubble(LIST, last):\n    for j in range(0, last):\n        if LIST[j] > LIST[j + 1]:\n            LIST[j], LIST[j + 1] = LIST[j + 1], LIST[j]\n    return LIST"
  },
  {
    "id": 73,
    "chapter": "12",
    "title": "Bubble Sort – Complete Example",
    "topic": "Sorting",
    "code": "def bubble(LIST, last):\n    for j in range(0, last):\n        if LIST[j] > LIST[j + 1]:\n            LIST[j], LIST[j + 1] = LIST[j + 1], LIST[j]\n    return LIST\n\ndef bubble_sort(LIST):\n    for last in range(len(LIST)-1, 0, -1):\n        bubble(LIST, last)\n    return LIST\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))"
  },
  {
    "id": 74,
    "chapter": "12",
    "title": "Python sorted() – Example",
    "topic": "Sorting",
    "code": "numbers = [5, 2, 9, 1, 7]\nprint(sorted(numbers))\nprint(sorted(numbers, reverse=True))"
  },
  {
    "id": 75,
    "chapter": "12",
    "title": "sort() – Example",
    "topic": "Sorting",
    "code": "numbers = [5, 2, 9, 1, 7]\nnumbers.sort()\nprint(numbers)"
  },
  {
    "id": 76,
    "chapter": "12",
    "title": "sort() with key=len",
    "topic": "Sorting",
    "code": "words = [\"python\", \"is\", \"easy\", \"to\", \"learn\"]\nwords.sort(key=len)\nprint(words)"
  },
  {
    "id": 77,
    "chapter": "12",
    "title": "Linear Search using in",
    "topic": "Searching",
    "code": "numbers = [10, 20, 30, 40, 50]\nkey = int(input(\"Enter value: \"))\nif key in numbers:\n    print(\"Found\")\nelse:\n    print(\"Not Found\")"
  },
  {
    "id": 78,
    "chapter": "12",
    "title": "Linear Search using index()",
    "topic": "Searching",
    "code": "numbers = [10, 20, 30, 40, 50]\nkey = int(input(\"Enter value: \"))\nif key in numbers:\n    print(\"Position =\", numbers.index(key))\nelse:\n    print(\"Not Found\")"
  }
];

const grid = document.getElementById("programGrid");
const searchBox = document.getElementById("searchBox");
const chapterFilter = document.getElementById("chapterFilter");
const countBox = document.getElementById("programCount");
const clearBtn = document.getElementById("clearBtn");

const chapterNames = {
  "4":"Chapter 4 – Getting Started with Python",
  "5":"Chapter 5 – Python Fundamentals",
  "6":"Chapter 6 – Control Statements",
  "7":"Chapter 7 – Functions and Modules",
  "8":"Chapter 8 – Strings in Python",
  "9":"Chapter 9 – Lists",
  "10":"Chapter 10 – Tuples",
  "11":"Chapter 11 – Dictionaries and Sets",
  "12":"Chapter 12 – Sorting and Searching"
};

function esc(s){
  return s.replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function render(){
  const q = searchBox.value.trim().toLowerCase();
  const ch = chapterFilter.value;

  const filtered = textbookPrograms.filter(p => {
    const hay = (p.title+" "+p.topic+" "+p.code+" "+chapterNames[p.chapter]).toLowerCase();
    return (ch==="all" || p.chapter===ch) && (!q || hay.includes(q));
  });

  countBox.textContent = `${filtered.length} program/example(s) shown`;

  if(!filtered.length){
    grid.innerHTML = `<div class="empty">No matching textbook program found.</div>`;
    return;
  }

  let currentChapter = "";
  let html = "";

  filtered.forEach(p => {
    if(p.chapter !== currentChapter){
      currentChapter = p.chapter;
      html += `<h2 class="chapter-title">${esc(chapterNames[p.chapter])}</h2>`;
    }
    const code = esc(p.code);
    html += `
      <article class="card ${p.topic==="Textbook Activity" ? "activity":""}">
        <h3>${p.id}. ${esc(p.title)}</h3>
        <div class="meta">
          <span class="tag">${esc(p.topic)}</span>
          <span class="tag">Chapter ${p.chapter}</span>
        </div>
        <pre><button class="copy" onclick="copyProgram(${p.id})">Copy Code</button><code id="code-${p.id}">${code}</code></pre>
      </article>`;
  });

  grid.innerHTML = html;
}

function copyProgram(id){
  const p = textbookPrograms.find(x => x.id === id);
  navigator.clipboard.writeText(p.code).then(() => {
    const old = event.target.textContent;
    event.target.textContent = "Copied!";
    setTimeout(() => event.target.textContent = old, 900);
  });
}

searchBox.addEventListener("input", render);
chapterFilter.addEventListener("change", render);
clearBtn.addEventListener("click", () => {
  searchBox.value = "";
  chapterFilter.value = "all";
  render();
});

render();
