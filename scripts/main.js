const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development", credits: 3, completed: false },
  { code: "CSE 110", name: "Programming Basics", credits: 2, completed: true },
  { code: "CSE 121", name: "Python", credits: 2, completed: false }
];

const container = document.getElementById("courseCards");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    if (course.completed) div.classList.add("completed");

    div.innerHTML = `<strong>${course.code}</strong><br>${course.name}<br>${course.credits} Credits`;
    container.appendChild(div);
  });

  totalCredits.textContent = list.reduce((sum, c) => sum + c.credits, 0);
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.filter;
    let filtered = courses;
    if (type === "wdd") filtered = courses.filter(c => c.code.startsWith("WDD"));
    if (type === "cse") filtered = courses.filter(c => c.code.startsWith("CSE"));
    displayCourses(filtered);
  });
});
