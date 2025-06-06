const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const modalDay = document.getElementById("modal-day");
const eventInput = document.getElementById("event-text");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

const days = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

let selectedDate = null;

function getEvents() {
  return JSON.parse(localStorage.getItem("zahra-events") || "{}");
}

function saveEvents(events) {
  localStorage.setItem("zahra-events", JSON.stringify(events));
}

function openModal(dateStr) {
  selectedDate = dateStr;
  modalDay.textContent = `رویداد برای ${dateStr}`;
  eventInput.value = getEvents()[dateStr] || "";
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  selectedDate = null;
  eventInput.value = "";
}

function renderCalendar() {
  calendar.innerHTML = "";

  // Header
  days.forEach(day => {
    const div = document.createElement("div");
    div.className = "text-center font-bold text-blue-600";
    div.textContent = day;
    calendar.appendChild(div);
  });

  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // Sunday = 0
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  const events = getEvents();

  // Offset empty cells
  for (let i = 0; i < (firstDay + 6) % 7; i++) {
    calendar.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateStr = `${currentYear}-${currentMonth + 1}-${day}`;
    const div = document.createElement("div");
    div.className = "bg-white p-2 rounded shadow hover:bg-green-100 cursor-pointer";
    div.innerHTML = `<div class="font-bold">${day}</div>`;

    if (events[dateStr]) {
      div.innerHTML += `<div class="text-sm text-green-600 mt-1 truncate">${events[dateStr]}</div>`;
    }

    div.addEventListener("click", () => openModal(dateStr));
    calendar.appendChild(div);
  }
}

saveBtn.addEventListener("click", () => {
  const text = eventInput.value.trim();
  const events = getEvents();
  if (text) {
    events[selectedDate] = text;
  } else {
    delete events[selectedDate];
  }
  saveEvents(events);
  closeModal();
  renderCalendar();
});

cancelBtn.addEventListener("click", closeModal);

// Init
renderCalendar();
