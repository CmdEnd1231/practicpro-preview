(function () {
  const Data = window.PracticProData;
  if (!Data) return;

  const style = document.createElement("style");
  style.textContent = `
    .dashboard-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
    .dashboard-form-grid label { display: grid; gap: 7px; color: #40546e; font-size: 13px; font-weight: 900; }
    .dashboard-form-grid .top-actions { grid-column: 1 / -1; }
    .cms-input { width: 100%; min-height: 42px; border-radius: 12px; border: 1px solid #cfdceb; background: #fff; color: #14213d; padding: 10px 12px; font: inherit; font-size: 14px; }
    .panel-body { padding: 18px; }
    @media (max-width: 760px) { .dashboard-form-grid { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(style);

  const page = location.pathname.split("/").pop();
  const data = Data.read();
  const main = document.querySelector(".main");
  if (!main) return;

  const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const find = (items, id) => Data.byId(items, id);
  const statusClass = (status) => status === "Acceptat" || status === "Activ" || status === "Activă" || status === "Validată" ? "green" : status === "Respins" || status === "Profil incomplet" ? "red" : "amber";
  const companyName = (id) => find(data.companies, id).name || "Companie";
  const schoolName = (id) => find(data.schools, id).name || "Școală";
  const studentName = (id) => find(data.users, id).name || "Elev";
  const offerTitle = (id) => find(data.offers, id).title || "Ofertă";

  function dashboardShell(title, breadcrumb, actions, content) {
    main.innerHTML = `
      <div class="topbar">
        <div><div class="breadcrumbs">${esc(breadcrumb)}</div><h1>${esc(title)}</h1></div>
        <div class="top-actions">${actions || ""}</div>
      </div>
      ${content}
    `;
  }

  function stats(cards) {
    return `<section class="stats">${cards.map((card) => `
      <article class="stat-card">
        <div class="stat-label">${esc(card.label)}</div>
        <div class="stat-value">${esc(card.value)}</div>
        <div class="stat-note">${esc(card.note)}</div>
      </article>
    `).join("")}</section>`;
  }

  function table(headers, rows) {
    return `<div class="table-wrap"><table><thead><tr>${headers.map((header) => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
  }

  function sidebarItems(kind) {
    if (kind === "school") return [
      ["Overview", "teacher-school.html"],
      ["Parteneriate", "teacher-school.html#parteneriate"],
      ["Elevii școlii", "teacher-school.html#elevi"],
      ["Stagii acceptate", "teacher-school.html#stagii"],
      ["Resurse", "resources.html"],
      ["Evenimente", "events.html"]
    ];
    if (kind === "student") return [
      ["Overview", "student.html"],
      ["Oferte eligibile", "student.html#oferte"],
      ["Aplicațiile mele", "student.html#aplicatii"],
      ["Documente practică", "student.html#documente"],
      ["Resurse", "resources.html"],
      ["Evenimente", "events.html"]
    ];
    if (kind === "company") return [
      ["Overview", "company.html"],
      ["Profil companie", "company.html#profil"],
      ["Parteneriate școli", "company.html#parteneriate"],
      ["Ofertele mele", "company.html#oferte"],
      ["Aplicații primite", "company.html#aplicatii"]
    ];
    return [
      ["Overview", "superadmin.html"],
      ["Utilizatori", "users.html"],
      ["Școli", "users.html?role=Profesor"],
      ["Elevi", "users.html?role=Elev"],
      ["Companii", "users.html?role=Companie"],
      ["CMS conținut", "admin-cms.html"],
      ["Resurse publice", "admin-cms.html#resurse-publice"],
      ["Evenimente publice", "admin-cms.html#evenimente-publice"]
    ];
  }

  function setSidebar(activeLabel, subtitle, kind = "admin") {
    const brandSub = document.querySelector(".brand-sub");
    if (brandSub && subtitle) brandSub.textContent = subtitle;
    const nav = document.querySelector(".nav-list");
    if (nav) {
      nav.innerHTML = sidebarItems(kind).map(([label, href]) => `
        <a class="nav-item ${label === activeLabel ? "active" : ""}" href="${esc(href)}"><span class="nav-dot"></span><span>${esc(label)}</span></a>
      `).join("");
    }
    const footer = document.querySelector(".sidebar-footer");
    if (footer) {
      footer.textContent = kind === "admin"
        ? "Super Admin gestionează conturile, parteneriatele, școlile, companiile și conținutul public."
        : kind === "school"
          ? "Școala verifică parteneriatele și monitorizează elevii acceptați în stagii."
          : kind === "student"
            ? "Elevul vede ofertele eligibile pentru școala selectată și statusul aplicațiilor."
            : "Compania gestionează profilul, parteneriatele cu școli, ofertele și aplicațiile primite.";
    }
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.textContent.trim() === activeLabel);
    });
  }

  function roleNav() {
    return `
      <nav class="view-switch" aria-label="Previzualizări pe roluri">
        <a class="view-link" href="student.html"><span>Vezi cont elev</span><span>→</span></a>
        <a class="view-link" href="teacher-school.html"><span>Vezi cont școală</span><span>→</span></a>
        <a class="view-link" href="company.html"><span>Vezi cont companie</span><span>→</span></a>
        <a class="view-link" href="admin-cms.html"><span>CMS conținut</span><span>→</span></a>
      </nav>
    `;
  }

  function saveUserFromForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const id = formData.get("id") || Data.uid("u");
    const user = {
      id,
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      role: formData.get("role"),
      status: formData.get("status"),
      organization: formData.get("organization").trim(),
      schoolId: formData.get("schoolId"),
      companyId: formData.get("companyId")
    };
    const next = Data.read();
    const index = next.users.findIndex((item) => item.id === id);
    if (index >= 0) next.users[index] = { ...next.users[index], ...user };
    else next.users.unshift(user);
    Data.write(next);
    location.reload();
  }

  function renderUserForm(user = {}) {
    const schoolOptions = [`<option value="">Fără școală</option>`].concat(data.schools.map((school) => `<option value="${esc(school.id)}" ${user.schoolId === school.id ? "selected" : ""}>${esc(school.name)}</option>`)).join("");
    const companyOptions = [`<option value="">Fără companie</option>`].concat(data.companies.map((company) => `<option value="${esc(company.id)}" ${user.companyId === company.id ? "selected" : ""}>${esc(company.name)}</option>`)).join("");
    return `
      <form class="panel dashboard-form" data-user-form>
        <div class="panel-head"><h2>${user.id ? "Editează utilizator" : "Adaugă utilizator"}</h2><span class="badge blue">Local</span></div>
        <div class="panel-body dashboard-form-grid">
          <input type="hidden" name="id" value="${esc(user.id || "")}">
          <label>Nume<input class="cms-input" name="name" required value="${esc(user.name || "")}"></label>
          <label>Email<input class="cms-input" name="email" type="email" required value="${esc(user.email || "")}"></label>
          <label>Rol<select class="cms-input" name="role">${["Elev", "Profesor", "Companie", "Super Admin"].map((role) => `<option ${user.role === role ? "selected" : ""}>${role}</option>`).join("")}</select></label>
          <label>Status<select class="cms-input" name="status">${["Activ", "În așteptare", "Suspendat"].map((status) => `<option ${user.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
          <label>Organizație<input class="cms-input" name="organization" value="${esc(user.organization || "")}"></label>
          <label>Școală<select class="cms-input" name="schoolId">${schoolOptions}</select></label>
          <label>Companie<select class="cms-input" name="companyId">${companyOptions}</select></label>
          <div class="top-actions"><button class="btn primary" type="submit">Salvează utilizator</button><a class="btn" href="users.html">Renunță</a></div>
        </div>
      </form>
    `;
  }

  function renderUsersPage(editId) {
    setSidebar("Utilizatori", "Super Admin", "admin");
    const role = new URLSearchParams(location.search).get("role") || "toate";
    const visibleUsers = role === "toate" ? data.users : data.users.filter((user) => user.role === role);
    const editUser = data.users.find((user) => user.id === editId);
    dashboardShell("Utilizatori", "Dashboard / Super Admin / Utilizatori", `<a class="btn" href="superadmin.html">Overview</a><a class="btn primary" href="users.html?new=1">Adaugă utilizator</a>`, `
      ${roleNav()}
      ${stats([
        { label: "Total conturi", value: data.users.length, note: "în storage local" },
        { label: "Elevi", value: data.users.filter((u) => u.role === "Elev").length, note: "asociați cu școli" },
        { label: "Companii", value: data.companies.length, note: "profiluri companie" },
        { label: "În așteptare", value: data.users.filter((u) => u.status === "În așteptare").length, note: "necesită verificare" }
      ])}
      <nav class="view-switch" aria-label="Filtre rol">
        ${["toate", "Elev", "Profesor", "Companie"].map((item) => `<a class="view-link" href="users.html?role=${encodeURIComponent(item)}"><span>${item === "toate" ? "Toate rolurile" : item}</span><span>→</span></a>`).join("")}
      </nav>
      ${(new URLSearchParams(location.search).get("new") || editUser) ? renderUserForm(editUser) : ""}
      <section class="panel">
        <div class="panel-head"><h2 class="panel-title">Lista utilizatori</h2><span class="badge blue">${visibleUsers.length} conturi</span></div>
        ${table(["Utilizator", "Rol", "Organizație", "Status", "Acțiuni"], visibleUsers.map((user) => `
          <tr>
            <td><div class="user-cell"><div class="avatar">${esc(user.name.slice(0, 1))}</div><div><div class="user-name">${esc(user.name)}</div><div class="user-email">${esc(user.email)}</div></div></div></td>
            <td>${esc(user.role)}</td>
            <td>${esc(user.organization || schoolName(user.schoolId) || companyName(user.companyId))}</td>
            <td><span class="badge ${statusClass(user.status)}">${esc(user.status)}</span></td>
            <td><a class="icon-btn" href="users.html?edit=${encodeURIComponent(user.id)}">Editează</a></td>
          </tr>
        `))}
      </section>
    `);
    const form = document.querySelector("[data-user-form]");
    if (form) form.addEventListener("submit", saveUserFromForm);
  }

  function renderSuperAdmin() {
    setSidebar("Overview", "Super Admin", "admin");
    dashboardShell("Panou principal", "Super Admin / Overview", `<a class="btn" href="users.html">Utilizatori</a><a class="btn primary" href="admin-cms.html">CMS conținut</a>`, `
      ${stats([
        { label: "Utilizatori", value: data.users.length, note: "toate rolurile" },
        { label: "Școli", value: data.schools.length, note: "instituții în platformă" },
        { label: "Companii", value: data.companies.length, note: "profiluri companie" },
        { label: "Parteneriate", value: data.partnerships.length, note: `${data.partnerships.filter((p) => p.status === "Acceptat").length} acceptate` }
      ])}
      <div class="workspace">
        <section class="panel">
          <div class="panel-head"><h2>Acțiuni rapide</h2><span class="badge red">Acces total</span></div>
          <div class="panel-body action-grid">
            <a class="action-card" href="users.html?new=1"><strong>Creează utilizator</strong><span>elev / profesor / companie</span></a>
            <a class="action-card" href="users.html?role=Profesor"><strong>Profesori</strong><span>permisiuni și școli</span></a>
            <a class="action-card" href="admin-cms.html"><strong>CMS pagini</strong><span>texte site</span></a>
            <a class="action-card" href="admin-cms.html#resurse-publice"><strong>Resurse publice</strong><span>articole și materiale</span></a>
            <a class="action-card" href="admin-cms.html#evenimente-publice"><strong>Evenimente publice</strong><span>workshopuri și întâlniri</span></a>
            <a class="action-card" href="users.html"><strong>Monitorizare globală</strong><span>date locale</span></a>
          </div>
        </section>
        <aside class="card feature-card">
          <div><span class="badge">Regulă de lucru</span><h2 style="margin-top:16px;">Nu suprascriem date fără confirmare</h2><p>Datele conturilor sunt separate de CMS și se inițializează doar dacă lipsesc.</p></div>
          <a class="btn" href="users.html">Gestionează conturi</a>
        </aside>
      </div>
      <section class="panel" style="margin-top:18px;">
        <div class="panel-head"><h2>Parteneriate</h2><span class="badge blue">Control operațional</span></div>
        ${table(["Companie", "Școală", "Contract", "Status", "Responsabil"], data.partnerships.map((item) => `
          <tr><td>${esc(companyName(item.companyId))}</td><td>${esc(schoolName(item.schoolId))}</td><td>${esc(item.contract)}</td><td><span class="badge ${statusClass(item.status)}">${esc(item.status)}</span></td><td>${esc(item.responsible)}</td></tr>
        `))}
      </section>
    `);
  }

  function renderSchool() {
    setSidebar("Overview", "Școală", "school");
    const school = data.schools[0];
    const students = data.users.filter((user) => user.role === "Elev" && user.schoolId === school.id);
    const partnerships = data.partnerships.filter((item) => item.schoolId === school.id);
    const applications = data.applications.filter((app) => students.some((student) => student.id === app.studentId));
    dashboardShell("Control parteneriate și elevi", "Cont școală / Overview", `<a class="btn" href="users.html">Utilizatori</a><span class="badge blue">${esc(school.name)}</span>`, `
      ${stats([
        { label: "Elevi asociați", value: students.length, note: "din școala curentă" },
        { label: "Parteneriate", value: partnerships.length, note: `${partnerships.filter((p) => p.status === "Acceptat").length} acceptate` },
        { label: "Aplicații elevi", value: applications.length, note: "legate de ofertele active" },
        { label: "Profesori", value: school.teachers.length, note: "cu permisiuni locale" }
      ])}
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><h2>Parteneriate</h2><span class="badge amber">Aprobare școală</span></div>${table(["Companie", "Contract", "Status", "Acțiune"], partnerships.map((item) => `<tr><td>${esc(companyName(item.companyId))}</td><td>${esc(item.contract)}</td><td><span class="badge ${statusClass(item.status)}">${esc(item.status)}</span></td><td><span class="badge blue">Detalii</span></td></tr>`))}</section>
        <section class="panel"><div class="panel-head"><h2>Elevii școlii</h2><span class="badge blue">${students.length} elevi</span></div>${table(["Elev", "Email", "Profil", "Status"], students.map((student) => `<tr><td>${esc(student.name)}</td><td>${esc(student.email)}</td><td>${esc(student.profileCompletion || 0)}%</td><td><span class="badge ${statusClass(student.status)}">${esc(student.status)}</span></td></tr>`))}</section>
      </div>
      <section class="panel" style="margin-top:18px;"><div class="panel-head"><h2>Stagii și aplicații</h2><span class="badge blue">Monitorizare</span></div>${table(["Elev", "Ofertă", "Companie", "Status aplicație", "Status școală"], applications.map((app) => { const offer = find(data.offers, app.offerId); return `<tr><td>${esc(studentName(app.studentId))}</td><td>${esc(offer.title)}</td><td>${esc(companyName(offer.companyId))}</td><td><span class="badge ${statusClass(app.status)}">${esc(app.status)}</span></td><td>${esc(app.schoolStatus)}</td></tr>`; }))}</section>
    `);
  }

  function renderStudent() {
    setSidebar("Overview", "Dashboard elev", "student");
    const student = data.users.find((user) => user.role === "Elev") || data.users[0];
    const eligibleOffers = data.offers.filter((offer) => offer.schoolIds.includes(student.schoolId) && offer.status === "Activă");
    const applications = data.applications.filter((app) => app.studentId === student.id);
    dashboardShell(`Bună, ${student.name.split(" ")[0]}`, "Cont elev / Overview", `<a class="btn" href="users.html">Utilizatori</a><a class="btn primary" href="#">Completează CV</a>`, `
      ${stats([
        { label: "Școala selectată", value: schoolName(student.schoolId).replace("Liceul ", ""), note: "preselectată în profil" },
        { label: "Oferte eligibile", value: eligibleOffers.length, note: "doar parteneriate acceptate" },
        { label: "Aplicații", value: applications.length, note: "în lucru" },
        { label: "Profil complet", value: `${student.profileCompletion || 0}%`, note: "date locale" }
      ])}
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><h2>Oferte eligibile</h2><span class="badge blue">Filtru automat</span></div><div class="panel-body list">${eligibleOffers.map((offer) => `<div class="list-row"><div><div class="mini-title">${esc(offer.title)}</div><div class="mini-meta">${esc(companyName(offer.companyId))} - ${esc(offer.domain)} - ${offer.places} locuri</div></div><span class="badge green">Aplică</span></div>`).join("")}</div></section>
        <section class="panel"><div class="panel-head"><h2>Aplicațiile mele</h2><span class="badge amber">Status</span></div>${table(["Ofertă", "Companie", "Status", "Următorul pas"], applications.map((app) => { const offer = find(data.offers, app.offerId); return `<tr><td>${esc(offer.title)}</td><td>${esc(companyName(offer.companyId))}</td><td><span class="badge ${statusClass(app.status)}">${esc(app.status)}</span></td><td>${esc(app.schoolStatus)}</td></tr>`; }))}</section>
      </div>
    `);
  }

  function renderCompany() {
    setSidebar("Overview", "Companie", "company");
    const company = data.companies[0];
    const partnerships = data.partnerships.filter((item) => item.companyId === company.id);
    const offers = data.offers.filter((offer) => offer.companyId === company.id);
    const applications = data.applications.filter((app) => offers.some((offer) => offer.id === app.offerId));
    dashboardShell("Dashboard companie", "Cont companie / Overview", `<a class="btn" href="users.html">Utilizatori</a><a class="btn green" href="#">Solicită parteneriat</a><a class="btn primary" href="#">Publică ofertă</a>`, `
      ${stats([
        { label: "Profil complet", value: `${company.profileCompletion}%`, note: company.status },
        { label: "Parteneriate", value: partnerships.length, note: `${partnerships.filter((p) => p.status === "Acceptat").length} acceptate` },
        { label: "Oferte", value: offers.length, note: "create local" },
        { label: "Aplicații primite", value: applications.length, note: "de la elevi" }
      ])}
      <div class="grid-2">
        <section class="panel"><div class="panel-head"><h2>Parteneriate cu școli</h2><span class="badge blue">Status separat</span></div>${table(["Școală", "Contract", "Status", "Acțiune"], partnerships.map((item) => `<tr><td>${esc(schoolName(item.schoolId))}</td><td>${esc(item.contract)}</td><td><span class="badge ${statusClass(item.status)}">${esc(item.status)}</span></td><td><span class="badge blue">Detalii</span></td></tr>`))}</section>
        <section class="panel"><div class="panel-head"><h2>Ofertele mele</h2><span class="badge green">${offers.length} oferte</span></div>${table(["Ofertă", "Domeniu", "Locuri", "Status"], offers.map((offer) => `<tr><td>${esc(offer.title)}</td><td>${esc(offer.domain)}</td><td>${offer.places}</td><td><span class="badge ${statusClass(offer.status)}">${esc(offer.status)}</span></td></tr>`))}</section>
      </div>
      <section class="panel" style="margin-top:18px;"><div class="panel-head"><h2>Aplicații primite</h2><span class="badge amber">Flux companie</span></div>${table(["Elev", "Școală", "Ofertă", "Status"], applications.map((app) => { const student = find(data.users, app.studentId); return `<tr><td>${esc(student.name)}</td><td>${esc(schoolName(student.schoolId))}</td><td>${esc(offerTitle(app.offerId))}</td><td><span class="badge ${statusClass(app.status)}">${esc(app.status)}</span></td></tr>`; }))}</section>
    `);
  }

  if (page === "superadmin.html") renderSuperAdmin();
  if (page === "users.html") renderUsersPage(new URLSearchParams(location.search).get("edit"));
  if (page === "teacher-school.html") renderSchool();
  if (page === "student.html") renderStudent();
  if (page === "company.html") renderCompany();
})();
