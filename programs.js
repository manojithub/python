/* =========================================
   PYTHON PORTAL - PROGRAM GALLERY
   programs.js
========================================= */

/* -----------------------------
   PROGRAM DATABASE
------------------------------*/


/* -----------------------------
   SHOW PROGRAM
------------------------------*/

function showProgram(programId){

    const program = programs[programId];

    if(!program){
        return;
    }

    const viewer = document.getElementById("programViewer");

    viewer.innerHTML = `
        <span class="badge ${program.level.toLowerCase()}">
            ${program.level}
        </span>

        <h2>${program.title}</h2>

        <p>${program.description}</p>

        <div>
            ${program.tags.map(tag =>
                `<span class="tag">${tag}</span>`
            ).join("")}
        </div>

        <pre><code id="programCode">${program.code}</code></pre>

        <button class="copy-btn"
                onclick="copyCode()">
            📋 Copy Program
        </button>
    `;

    viewer.scrollIntoView({
        behavior:"smooth"
    });

}

/* -----------------------------
   COPY CODE
------------------------------*/

function copyCode(){

    const code =
        document.getElementById("programCode").innerText;

    navigator.clipboard.writeText(code);

    alert("Program copied successfully!");
}

/* -----------------------------
   SEARCH PROGRAMS
------------------------------*/

function searchPrograms(){

    const input =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".program-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if(text.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

/* -----------------------------
   CATEGORY FILTER
------------------------------*/

function filterPrograms(category){

    const cards =
        document.querySelectorAll(".program-card");

    cards.forEach(card => {

        if(category === "all"){

            card.style.display = "block";
        }

        else if(card.classList.contains(category)){

            card.style.display = "block";
        }

        else{

            card.style.display = "none";
        }

    });

}

/* -----------------------------
   DYNAMIC CARD LOADING
------------------------------*/

function loadProgramCards(){

    const container =
        document.getElementById("programList");

    if(!container){
        return;
    }

    container.innerHTML = "";

    Object.keys(programs).forEach(id => {

        const p = programs[id];

        const card = document.createElement("div");

        card.className =
            `program-card ${p.category}`;

        card.innerHTML = `
            <h3>${p.title}</h3>

            <p>${p.description}</p>

            <button
                onclick="showProgram('${id}')">
                View Program
            </button>
        `;

        container.appendChild(card);

    });

}

/* -----------------------------
   INITIALIZE
------------------------------*/

document.addEventListener(
    "DOMContentLoaded",
    loadProgramCards
);