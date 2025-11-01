// 🌙 Mode Gelap / Terang
const toggle = document.getElementById("modeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
  });
}

// ✨ Efek muncul saat scroll
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));
