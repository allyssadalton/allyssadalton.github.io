document.addEventListener("DOMContentLoaded", () => {
  const languageFilter = document.getElementById("languageFilter");
  const courseFilter = document.getElementById("courseFilter");
  const projects = document.querySelectorAll(".project-container .expandable");

  function filterProjects() {
    const selectedLanguage = languageFilter.value;
    const selectedCourse = courseFilter.value;

    projects.forEach(project => {
      const projectLanguages = project.dataset.language ? project.dataset.language.split(',').map(lang => lang.trim()) : [];
      const projectCourse = project.dataset.course;

      const languageMatch = selectedLanguage === "all" || projectLanguages.includes(selectedLanguage);
      const courseMatch = selectedCourse === "all" || projectCourse === selectedCourse;

      project.style.display = languageMatch && courseMatch ? "block" : "none";
    });
  }

  languageFilter.addEventListener("change", filterProjects);
  courseFilter.addEventListener("change", filterProjects);

  // Run initially
  filterProjects();
});
