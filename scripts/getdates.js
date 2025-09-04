


const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}


const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = "Last Modification: " + document.lastModified;
}
