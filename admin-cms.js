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
      status: "published",
      title: "Cum raspunzi la primul interviu",
      category: "Interviu",
      date: "2026-06-25",
      excerpt: "Intrebari frecvente, raspunsuri naturale si exemple practice.",
      image: "",
      content: "<p>Primul interviu este mai usor daca stii ce vrei sa transmiti: seriozitate, curiozitate si dorinta de a invata.</p>"
    },
    {
      id: "articol-documente",
      type: "article",
      status: "published",
      title: "Ce documente sunt necesare pentru practica",
      category: "Documente",
      date: "2026-06-26",
      excerpt: "Contractul de practica, anexa pedagogica si pasii de validare prin scoala.",
      image: "",
      content: "<p>Dupa acceptarea la un stagiu, elevul merge la scoala pentru documentele necesare. Scoala marcheaza participarea dupa semnare.</p>"
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
    },
    {
      id: "eveniment-angajatori",
      type: "event",
      status: "published",
      title: "Ce cauta angajatorii la elevi",
      category: "Q&A",
      date: "2026-06-30",
      excerpt: "Dialog cu reprezentanti ai companiilor despre asteptari, atitudine si abilitati utile.",
      image: "",
      location: "Hybrid",
      content: "<p>Eveniment interactiv pentru elevii care vor sa inteleaga cum sa se prezinte la primul contact cu o companie.</p>"
    },
    {
      id: "eveniment-parteneri",
      type: "event",
      status: "published",
      title: "Ziua partenerilor PracticPRO",
      category: "Companii",
      date: "2026-07-08",
      excerpt: "Prezentari scurte ale companiilor si exemple de activitati de practica.",
      image: "",
      location: "Fizic",
      content: "<p>Companiile partenere prezinta domeniile in care pot primi elevi si tipurile de activitati propuse.</p>"
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
      const items = JSON.parse(raw);
      const existingIds = new Set(items.map((item) => item.id));
      const missingSeeds = seedItems.filter((item) => !existingIds.has(item.id));
      if (missingSeeds.length) {
        const merged = items.concat(missingSeeds);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
      return items;
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
      imageUpload: form.querySelector("[name='imageUpload']"),
      content: form.querySelector("[data-editor]")
    };

    const search = document.querySelector("[data-cms-search]");
    const filter = document.querySelector("[data-cms-filter]");
    const newButton = document.querySelector("[data-cms-new]");
    const deleteButton = document.querySelector("[data-cms-delete]");
    const resetButton = document.querySelector("[data-cms-reset]");
    const previewOpenButton = document.querySelector("[data-cms-preview-open]");
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
      if (fields.imageUpload) fields.imageUpload.value = "";
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
      if (fields.imageUpload) fields.imageUpload.value = "";
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

    function handleImageUpload() {
      const file = fields.imageUpload && fields.imageUpload.files ? fields.imageUpload.files[0] : null;
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        updateStatus("Fisierul selectat trebuie sa fie o imagine.");
        fields.imageUpload.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        fields.image.value = reader.result;
        updatePreview();
        updateStatus("Imagine incarcata in preview.");
      };
      reader.readAsDataURL(file);
    }

    function saveItem(event) {
      event.preventDefault();
      saveCurrentItem();
    }

    function saveCurrentItem() {
      const item = getFormItem();
      if (!item.title) {
        updateStatus("Adauga un titlu inainte de salvare.");
        fields.title.focus();
        return null;
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
      return item;
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
    if (fields.imageUpload) fields.imageUpload.addEventListener("change", handleImageUpload);
    fields.content.addEventListener("input", updatePreview);
    list.addEventListener("click", (event) => {
      const row = event.target.closest("[data-id]");
      if (!row) return;
      const item = readItems().find((entry) => entry.id === row.dataset.id);
      if (item) loadItem(item);
    });
    if (newButton) newButton.addEventListener("click", () => emptyForm(fields.type.value));
    if (deleteButton) deleteButton.addEventListener("click", deleteItem);
    if (previewOpenButton) previewOpenButton.addEventListener("click", () => {
      const item = saveCurrentItem();
      if (!item) return;
      window.open("cms-preview.html?id=" + encodeURIComponent(item.id), "_blank");
    });
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
    target.innerHTML = items.map((item) => renderPublicCard(item)).join("");
  }

  function renderPublicCard(item) {
    const link = "cms-preview.html?id=" + encodeURIComponent(item.id);
    if (item.type === "event") {
      const date = item.date ? new Date(item.date + "T12:00:00") : null;
      const day = date ? String(date.getDate()).padStart(2, "0") : "--";
      const month = date ? date.toLocaleDateString("ro-RO", { month: "short" }) : "";
      return `
        <a class="public-event-card" href="${link}">
          ${item.image ? `<img class="public-card-image" src="${escapeHtml(item.image)}" alt="">` : `<div class="event-accent"></div>`}
          <div class="event-date"><strong>${day}</strong><span>${escapeHtml(month)}</span></div>
          <div class="event-content">
            <span class="tag">${escapeHtml(item.category || "Eveniment")}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 150))}</p>
            <div class="public-card-footer"><span>${escapeHtml(item.location || "Online")}</span><span>Vezi detalii -></span></div>
          </div>
        </a>
      `;
    }
    return `
      <a class="public-content-card" href="${link}">
        ${item.image ? `<img class="public-card-image" src="${escapeHtml(item.image)}" alt="">` : `<div class="public-card-visual"></div>`}
        <div class="public-card-body">
          <span class="tag">${escapeHtml(item.category || "Resursa")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.excerpt || stripHtml(item.content).slice(0, 150))}</p>
          <div class="public-card-footer"><span>${escapeHtml(item.date || "")}</span><span>Citeste -></span></div>
        </div>
      </a>
    `;
  }

  function renderLatestContent() {
    const target = document.querySelector("[data-latest-content]");
    if (!target) return;
    const items = readItems()
      .filter((item) => item.status === "published" && (item.type === "article" || item.type === "event"))
      .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
      .slice(0, 6);
    target.innerHTML = items.map((item) => renderPublicCard(item)).join("");
  }

  function renderPreviewArticle() {
    const target = document.querySelector("[data-preview-article]");
    if (!target) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const item = readItems().find((entry) => entry.id === id) || readItems()[0];
    if (!item) {
      target.innerHTML = `<h1>Nu exista continut pentru preview</h1><p>Intoarce-te in CMS si salveaza un articol sau eveniment.</p>`;
      return;
    }
    target.innerHTML = `
      <div class="preview-back"><a class="btn outline" href="admin-cms.html">Inapoi in CMS</a></div>
      <span class="tag">${escapeHtml(formatType(item.type))}</span>
      <h1>${escapeHtml(item.title || "Preview continut")}</h1>
      <div class="preview-meta">
        <span class="hero-pill" style="color:#243a59; border-color:#dce7f4; background:#f6f9fd;">${escapeHtml(item.category || "Fara categorie")}</span>
        <span class="hero-pill" style="color:#243a59; border-color:#dce7f4; background:#f6f9fd;">${formatStatus(item.status)}</span>
        ${item.date ? `<span class="hero-pill" style="color:#243a59; border-color:#dce7f4; background:#f6f9fd;">${escapeHtml(item.date)}</span>` : ""}
        ${item.location ? `<span class="hero-pill" style="color:#243a59; border-color:#dce7f4; background:#f6f9fd;">${escapeHtml(item.location)}</span>` : ""}
      </div>
      ${item.image ? `<img class="preview-cover" src="${escapeHtml(item.image)}" alt="">` : ""}
      <p class="section-copy">${escapeHtml(item.excerpt || "")}</p>
      <div class="preview-content">${item.content || ""}</div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCmsAdmin();
    renderPublicContent();
    renderLatestContent();
    renderPreviewArticle();
  });
})();
