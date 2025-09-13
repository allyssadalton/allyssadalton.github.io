const languageFilter = document.getElementById("languageFilter");
const courseFilter = document.getElementById("courseFilter");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const projectsContainer = document.querySelector(".project-container");
let projects = Array.from(document.querySelectorAll(".project-container .expandable"));


function getProjectEndDate(project) {
    const dateText = project.querySelector("h4").innerText;
    const endDateStr = dateText.includes('-') ? dateText.split('-')[1].trim() : dateText.trim();
    return new Date(endDateStr);
}

function filterSortSearchProjects() {
    const selectedLanguage = languageFilter.value;
    const selectedCourse = courseFilter.value;
    const sortOption = sortSelect.value;
    const searchTerm = searchInput.value.toLowerCase();

    let filtered = projects.filter(project => {
        const languages = (project.dataset.language || "").split(',').map(l => l.trim());
        const course = project.dataset.course || "";
        const title = project.querySelector("h2").innerText.toLowerCase();

        const languageMatch = selectedLanguage === "all" || languages.includes(selectedLanguage);
        const courseMatch = selectedCourse === "all" || course === selectedCourse;
        const searchMatch = title.includes(searchTerm);

        return languageMatch && courseMatch && searchMatch;
    });

    // Sorting
    filtered.sort((a, b) => {
        if (sortOption === "title-asc") {
            return a.querySelector("h2").innerText.localeCompare(b.querySelector("h2").innerText);
        } else if (sortOption === "title-desc") {
            return b.querySelector("h2").innerText.localeCompare(a.querySelector("h2").innerText);
        } else if (sortOption === "date-newest") {
            return getProjectEndDate(b) - getProjectEndDate(a);
        } else if (sortOption === "date-oldest") {
            return getProjectEndDate(a) - getProjectEndDate(b);
        }

    });

    // Re-append filtered projects in order
    projectsContainer.innerHTML = "";
    filtered.forEach(p => projectsContainer.appendChild(p));
}

// Event listeners
languageFilter.addEventListener("change", filterSortSearchProjects);
courseFilter.addEventListener("change", filterSortSearchProjects);
sortSelect.addEventListener("change", filterSortSearchProjects);
searchInput.addEventListener("input", filterSortSearchProjects);

// Initial load
filterSortSearchProjects();
