(function () {
  const STORAGE_KEY = "practicpro_dashboard_data_v1";

  const seedData = {
    users: [
      { id: "u-admin", name: "Cosmin Admin", email: "admin@practicpro.ro", role: "Super Admin", status: "Activ", organization: "PracticPRO", schoolId: "", companyId: "" },
      { id: "u-teacher-1", name: "Ioana Popescu", email: "ioana.popescu@liceulcentral.ro", role: "Profesor", status: "Activ", organization: "Liceul Tehnologic Central", schoolId: "school-central", companyId: "", permissions: ["Aprobă parteneriate", "Validează participarea"] },
      { id: "u-teacher-2", name: "Andrei Ionescu", email: "andrei.ionescu@economic.ro", role: "Profesor", status: "Activ", organization: "Colegiul Economic Exemplu", schoolId: "school-economic", companyId: "", permissions: ["Monitorizare elevi"] },
      { id: "u-student-1", name: "Ana Munteanu", email: "ana.munteanu@email.ro", role: "Elev", status: "Activ", organization: "Liceul Tehnologic Central", schoolId: "school-central", companyId: "", profileCompletion: 82 },
      { id: "u-student-2", name: "Mihai Stan", email: "mihai.stan@email.ro", role: "Elev", status: "Activ", organization: "Liceul Tehnologic Central", schoolId: "school-central", companyId: "", profileCompletion: 74 },
      { id: "u-student-3", name: "Roxana Dobre", email: "roxana.dobre@email.ro", role: "Elev", status: "În așteptare", organization: "Colegiul Economic Exemplu", schoolId: "school-economic", companyId: "", profileCompletion: 68 },
      { id: "u-company-1", name: "Mara Georgescu", email: "mara@techsolutions.ro", role: "Companie", status: "Activ", organization: "Tech Solutions SRL", schoolId: "", companyId: "company-tech" },
      { id: "u-company-2", name: "Paul Radu", email: "paul@officepro.ro", role: "Companie", status: "Activ", organization: "Office Pro Services", schoolId: "", companyId: "company-office" },
      { id: "u-company-3", name: "Elena Matei", email: "elena@marketlab.ro", role: "Companie", status: "În așteptare", organization: "Market Lab SRL", schoolId: "", companyId: "company-market" }
    ],
    schools: [
      { id: "school-central", name: "Liceul Tehnologic Central", city: "București", status: "Activă", teachers: ["u-teacher-1"] },
      { id: "school-economic", name: "Colegiul Economic Exemplu", city: "București", status: "Activă", teachers: ["u-teacher-2"] },
      { id: "school-nord", name: "Liceul Industrial Nord", city: "Ploiești", status: "În configurare", teachers: [] }
    ],
    companies: [
      { id: "company-tech", name: "Tech Solutions SRL", cui: "RO12345678", city: "București", status: "Validată", profileCompletion: 92 },
      { id: "company-office", name: "Office Pro Services", cui: "RO87654321", city: "București", status: "Validată", profileCompletion: 88 },
      { id: "company-market", name: "Market Lab SRL", cui: "RO11223344", city: "Ploiești", status: "Profil incomplet", profileCompletion: 61 }
    ],
    partnerships: [
      { id: "p-tech-central", companyId: "company-tech", schoolId: "school-central", status: "Acceptat", contract: "PDF generat", responsible: "Școală" },
      { id: "p-office-central", companyId: "company-office", schoolId: "school-central", status: "Acceptat", contract: "Semnat offline", responsible: "Super Admin" },
      { id: "p-market-economic", companyId: "company-market", schoolId: "school-economic", status: "În așteptare", contract: "PDF trimis", responsible: "Școală" },
      { id: "p-tech-nord", companyId: "company-tech", schoolId: "school-nord", status: "Respins", contract: "Draft", responsible: "Super Admin" }
    ],
    offers: [
      { id: "offer-it", title: "Suport IT junior", companyId: "company-tech", schoolIds: ["school-central"], places: 5, status: "Activă", domain: "IT" },
      { id: "offer-admin", title: "Asistent administrativ", companyId: "company-office", schoolIds: ["school-central"], places: 4, status: "Activă", domain: "Administrativ" },
      { id: "offer-marketing", title: "Marketing digital", companyId: "company-market", schoolIds: ["school-economic"], places: 3, status: "Draft", domain: "Marketing" }
    ],
    applications: [
      { id: "app-ana-it", studentId: "u-student-1", offerId: "offer-it", status: "Acceptat", schoolStatus: "De semnat contract + anexă" },
      { id: "app-mihai-admin", studentId: "u-student-2", offerId: "offer-admin", status: "În analiză", schoolStatus: "Așteaptă răspuns" },
      { id: "app-roxana-marketing", studentId: "u-student-3", offerId: "offer-marketing", status: "Salvat", schoolStatus: "Profil în verificare" }
    ]
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const seeded = clone(seedData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
        return seeded;
      }
      const data = JSON.parse(raw);
      return {
        users: Array.isArray(data.users) ? data.users : [],
        schools: Array.isArray(data.schools) ? data.schools : [],
        companies: Array.isArray(data.companies) ? data.companies : [],
        partnerships: Array.isArray(data.partnerships) ? data.partnerships : [],
        offers: Array.isArray(data.offers) ? data.offers : [],
        applications: Array.isArray(data.applications) ? data.applications : []
      };
    } catch (error) {
      return clone(seedData);
    }
  }

  function writeData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function uid(prefix) {
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 6);
  }

  function byId(items, id) {
    return items.find((item) => item.id === id) || {};
  }

  window.PracticProData = {
    STORAGE_KEY,
    read: readData,
    write: writeData,
    uid,
    byId
  };
})();
