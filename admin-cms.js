(function () {
  const STORAGE_KEY = "practicpro_cms_items_v1";

  const seedItems = [
    {
      id: "articol-cv",
      type: "article",
      status: "published",
      title: "CV-ul tau poate spune o poveste buna",
      category: "CV",
      date: "2026-06-24",
      excerpt: "Ghid simplu pentru elevii care aplica la primul stagiu de practica.",
      image: "",
      content: "<p>Un CV bun este clar, scurt si adaptat primului stagiu de practica. Include datele de contact, scoala, abilitatile si proiectele relevante.</p>"
    },
    {
      id: "articol-interviu",
      type: "article",
      status: "draft",
      title: "Cum raspunzi la primul interviu",
      category: "Interviu",
      date: "2026-06-25",
      excerpt: "Intrebari frecvente, raspunsuri naturale si exemple practice.",
      image: "",
      content: "<p>Primul interviu este mai usor daca stii ce vrei sa transmiti: seriozitate, curiozitate si dorinta de a invata.</p>"
    },
    {
      id: "eveniment-primul-stagiu",
      type: "event",
      status: "published",
      title: "De la scoala la primul stagiu",
      category: "Workshop",
      date: "2026-06-24",
      excerpt: "O sesiune despre cum alegi oportunitatea si cum iti pregatesti aplicatia.",
      image: "",
      location: "Online",
      content: "<p>Workshop dedicat elevilor care vor sa inteleaga pasii de la cautarea unei oferte pana la inceperea stagiului.</p>"
    }
  ];

  function uid() {
    return "item-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function readItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedItems));
        return seedItems.slice();
      }
      return JSON.parse(raw);
    } catch (error) {
      return seedItems.slice();
    }
  }

  function writeItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function stripHtml(value) {
    const div = document.createElement("div");
    div.innerHTML = value || "";
    return div.textContent || div.innerText || "";
  }

  function formatType(type) {
    if (type === "event") return "Eveniment";
    if (type === "page") return "Text pagina";
    return "Articol";
  }

  function formatStatus(status) {
    return status === "published" ? "Publicat" : "Draft";
  }

  function initCmsAdmin() {
    const list = document.querySelector("[data-cms-list]");
    const form = document.querySelector("[data-cms-form]");
    const preview = document.querySelector("[data-cms-preview]");
    if (!list || !form || !preview) return;

    const fields = {
      id: form.querySelector("[name='id']"),
      type: form.querySelector("[name='type']"),
      status: form.querySelector("[name='status']"),
      title: form.querySelector("[name='title']"),
      category: form.querySelector("[name='category']"),
      date: form.querySelector("[name='date']"),
      location: form.querySelector("[name='location']"),
      excerpt: form.querySelector("[name='excerpt']"),
      image: form.querySelector("[name='image']"),
      content: form.querySelector("[data-editor]")
    };

    const search = document.querySelector("[data-cms-search]");
    const filter = document.querySelector("[data-cms-filter]");
    const newButton = document.querySelector("[data-cms-new]");
    const deleteButton = document.querySelector("[data-cms-delete]");
    const resetButton = document.querySelector("[data-cms-reset]");
    const statusMessage = document.querySelector("[data-cms-status]");

    function emptyForm(type = "article") {
      fields.id.value = "";
      fields.type.value = type;
      fields.status.value = "draft";
      fields.title.value = "";
      fields.category.value = type === "event" ? "Workshop" : "Resurse";
      fields.date.value = new Date().toISOString().slice(0, 10);
      fields.location.value = type === "event" ? "Online" : "";
      fields.excerpt.value = "";
      fields.image.value = "";
      fields.content.innerHTML = "<p>Scrie continutul aici...</p>";
      updatePreview();
    }

    function loadItem(item) {
      fields.id.value = item.id;
      fields.type.value = item.type || "article";
      fields.status.value = item.status || "draft";
      fields.title.value = item.title || "";
      fields.category.value = item.category || "";
      fields.date.value = item.date || "";
      fields.location.value = item.location || "";
      fields.excerpt.value = item.excerpt || "";
      fields.image.value = item.image || "";
      fields.content.innerHTML = item.content || "";
      updatePreview();
    }

    function getFormItem() {
      return {
        id: fields.id.value || uid(),
        type: fields.type.value,
        status: fields.status.value,
        title: fields.title.value.trim(),
        category: fields.category.value.trim(),
        date: fields.date.value,
        location: fields.location.value.trim(),
        excerpt: fields.excerpt.value.trim(),
        image: fields.image.value.trim(),
        content: fields.content.innerHTML.trim()
      };
    }

    function updateStatus(message) {
      if (statusMessage) statusMessage.textContent = message;
    }

    function renderList() {
      const items = readItems();
      const term = (search && search.value ? search.value : "").toLowerCase();
      const type = filter && filter.value ? filter.value : "all";
      const filtered = items.filter((item) => {
        const matchesType = type === "all" || item.type === type;
        const haystack = [item.title, item.category, item.excerpt].join(" ").toLowerCase();
        return matchesType && haystack.includes(term);
      });

      list.innerHTML = filtered.map((item) => `
        <button class="cms-list-item" type="button" data-id="${escapeHtml(item.id)}">
          <span>
            <strong>${escapeHtml(item.title || "Fara titlu")}</strong>
            <small>${formatType(item.type)} · ${escapeHtml(item.category || "Fara categorie")}</small>
          </span>
          <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
        </button>
      `).join("");
    }

    function updatePreview() {
      const item = getFormItem();
      preview.innerHTML = `
        <article class="cms-preview-card">
          ${item.image ? `<img src="${escapeHtml(item.image)}" alt="">` : `<div class="cms-preview-visual">${formatType(item.type)}</div>`}
          <div>
            <span class="badge ${item.status === "published" ? "green" : "amber"}">${formatStatus(item.status)}</span>
            <h3>${escapeHtml(item.title || "Titlu continut")}</h3>
            <p>${escapeHtml(item.excerpt || "Rezumatul va aparea aici.")}</p>
            <div class="cms-preview-content">${item.content || "<p>Continutul articolului apare aici.</p>"}</div>
          </div>
        </article>
      `;
    }

    function saveItem(event) {
      event.preventDefault();
      const item = getFormItem();
      if (!item.title) {
        updateStatus("Adauga un titlu inainte de salvare.");
        fields.title.focus();
        return;
      }
      const items = readItems();
      const index = items.findIndex((entry) => entry.id === item.id);
      if (index >= 0) items[index] = item;
      else items.unshift(item);
      writeItems(items);
      fields.id.value = item.id;
      renderList();
      updatePreview();
      updateStatus("Salvat: " + item.title);
    }

    function deleteItem() {
      const id = fields.id.value;
      if (!id) {
        updateStatus("Nu ai selectat un continut salvat.");
        return;
      }
      const items = readItems().filter((item) => item.id !== id);
      writeItems(items);
      emptyForm(fields.type.value);
      renderList();
      updateStatus("Continut sters.");
    }

    document.querySelectorAll("[data-command]").forEach((button) => {
      button.addEventListener("click", () => {
        document.execCommand(button.dataset.command, false, null);
        fields.content.focus();
        updatePreview();
      });
    });

    document.querySelectorAll("[data-block]").forEach((button) => {
      button.addEventListener("click", () => {
        document.execCommand("formatBlock", false, button.dataset.block);
        fields.content.focus();
        updatePreview();
      });
    });

    form.addEventListener("submit", saveItem);
    form.addEventListener("input", updatePreview);
    fields.content.addEventListener("input", updatePreview);
    list.addEventListener("click", (event) => {
      const row = event.target.closest("[data-id]");
      if (!row) return;
      const item = readItems().find((entry) => entry.id === row.dataset.id);
      if (item) loadItem(item);
    });
    if (newButton) newButton.addEventListener("click", () => emptyForm(fields.type.value));
    if (deleteButton) deleteButton.addEventListener("click", deleteItem);
    if (resetButton) resetButton.addEventListener("click", () => {
      writeItems(seedItems);
      renderList();
      emptyForm();
      updateStatus("Datele demo au fost resetate.");
    });
    if (search) search.addEventListener("input", renderList);
    if (filter) filter.addEventListener("change", renderList);

    renderList();
    emptyForm();
  }

  function renderPublicContent() {
    const target = document.querySelector("[data-public-content]");
    if (!target) return;
    const type = target.dataset.publicContent;
    const items = readItems().filter((item) => item.type === type && item.status === "published");
    if (!items.length) {
      target.innerHTML = `<article class="card"><h3>Nu exista continut publicat</h3><p>Continutul salvat din Super Admin va aparea aici dupa publicare.</p></article>`;
      return;
    }
    target.innerHTML = items.map((item) => `
      <article class="${type === "event" ? "event-card" : "article-card"}">
        ${item.image ? `<img class="cms-card-image" src="${escapeHtml(item.image)}" alt="">` : `<div class="visual"></div>`}
        <div class="panel-body">
          <span class="badge ${type === "event" ? "amber" : "blue"}">${escapeHtml(item.category || formatType(type))}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 140))}</p>
          <div class="card-footer"><span>${escapeHtml(item.date || "")}${item.location ? " · " + escapeHtml(item.location) : ""}</span><span>Vezi detalii</span></div>
        </div>
      </article>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCmsAdmin();
    renderPublicContent();
  });
})();
