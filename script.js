'use strict';

/* ============================================================
   1. MASTER DATA AWAL (dari Excel MASTER_DATA__DDD_2026.xlsx)
   RS Tzu Chi Hospital – Farmasi
============================================================ */
const INITIAL_ANTIBIOTICS = [
  { id:1,  nama_generik:'Amikacin',                     kode_atc:'J01GB06', golongan:'Aminoglikosida',                    satuan:'g',  ddd_who:1,    rute:'Parenteral', aware:'Access' },
  { id:2,  nama_generik:'Amoxicillin',                  kode_atc:'J01CA04', golongan:'Penisilin Luas Spektrum',           satuan:'g',  ddd_who:1.5,  rute:'Oral',       aware:'Access' },
  { id:3,  nama_generik:'Amoxicillin',                  kode_atc:'J01CA04', golongan:'Penisilin Luas Spektrum',           satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Access' },
  { id:4,  nama_generik:'Amoxicillin-Clavulanate',      kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'g',  ddd_who:1.5,  rute:'Oral',       aware:'Access' },
  { id:5,  nama_generik:'Amoxicillin-Clavulanate',      kode_atc:'J01CR02', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Access' },
  { id:6,  nama_generik:'Ampicillin-Sulbactam',         kode_atc:'J01CA01', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'g',  ddd_who:2,    rute:'Oral',       aware:'Access' },
  { id:7,  nama_generik:'Ampicillin-Sulbactam',         kode_atc:'J01CA01', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'g',  ddd_who:6,    rute:'Parenteral', aware:'Access' },
  { id:8,  nama_generik:'Anidulafungin',                kode_atc:'J02AX06', golongan:'Antijamur Echinocandin',            satuan:'g',  ddd_who:0.1,  rute:'Parenteral', aware:'Anti-jamur' },
  { id:9,  nama_generik:'Azithromycin',                 kode_atc:'J01FA10', golongan:'Makrolid',                          satuan:'g',  ddd_who:0.3,  rute:'Oral',       aware:'Watch' },
  { id:10, nama_generik:'Azithromycin',                 kode_atc:'J01FA10', golongan:'Makrolid',                          satuan:'g',  ddd_who:0.3,  rute:'Parenteral', aware:'Watch' },
  { id:11, nama_generik:'Benzathine-Benzylpenicillin',  kode_atc:'J01CE08', golongan:'Penisilin',                         satuan:'IU', ddd_who:3.6,  rute:'Parenteral', aware:'Access' },
  { id:12, nama_generik:'Cefadroxil',                   kode_atc:'J01DB05', golongan:'Sefalosporin Gen-1',                satuan:'g',  ddd_who:2,    rute:'Oral',       aware:'Access' },
  { id:13, nama_generik:'Cefazolin',                    kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1',                satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Access' },
  { id:14, nama_generik:'Cefazolin',                    kode_atc:'J01DB04', golongan:'Sefalosporin Gen-1',                satuan:'g',  ddd_who:0.4,  rute:'Oral',       aware:'Access' },
  { id:15, nama_generik:'Cefepime',                     kode_atc:'J01DE01', golongan:'Sefalosporin Gen-4',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Reserve' },
  { id:16, nama_generik:'Cefixime',                     kode_atc:'J01DD08', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:0.4,  rute:'Oral',       aware:'Watch' },
  { id:17, nama_generik:'Cefoperazone',                 kode_atc:'J01DD12', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:18, nama_generik:'Cefoperazone-Sulbactam',       kode_atc:'J01DD62', golongan:'Sefalosporin Gen-3 + Inhibitor',    satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:19, nama_generik:'Cefotaxime',                   kode_atc:'J01DD01', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:20, nama_generik:'Cefpirome',                    kode_atc:'J01DE02', golongan:'Sefalosporin Gen-4',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:21, nama_generik:'Ceftazidime',                  kode_atc:'J01DD02', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:22, nama_generik:'Ceftizoxime',                  kode_atc:'J01DD07', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:4,    rute:'Parenteral', aware:'Watch' },
  { id:23, nama_generik:'Ceftolozane-Tazobactam',       kode_atc:'J01D154', golongan:'Sefalosporin Gen-5',                satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Reserve' },
  { id:24, nama_generik:'Ceftriaxone',                  kode_atc:'J01DD04', golongan:'Sefalosporin Gen-3',                satuan:'g',  ddd_who:2,    rute:'Parenteral', aware:'Watch' },
  { id:25, nama_generik:'Cefuroxime',                   kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2',                satuan:'g',  ddd_who:0.5,  rute:'Oral',       aware:'Watch' },
  { id:26, nama_generik:'Cefuroxime',                   kode_atc:'J01DC02', golongan:'Sefalosporin Gen-2',                satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Watch' },
  { id:27, nama_generik:'Chloramphenicol',              kode_atc:'J01BA01', golongan:'Amfenikol',                         satuan:'g',  ddd_who:3,    rute:'Oral',       aware:'Access' },
  { id:28, nama_generik:'Chloramphenicol',              kode_atc:'J01BA01', golongan:'Amfenikol',                         satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Access' },
  { id:29, nama_generik:'Cilastatin-Imipenem',          kode_atc:'J01DH51', golongan:'Karbapenem',                        satuan:'g',  ddd_who:2,    rute:'Parenteral', aware:'Watch' },
  { id:30, nama_generik:'Ciprofloxacin',                kode_atc:'J01MA02', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:1,    rute:'Oral',       aware:'Watch' },
  { id:31, nama_generik:'Ciprofloxacin',                kode_atc:'J01MA02', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.8,  rute:'Parenteral', aware:'Watch' },
  { id:32, nama_generik:'Clarithromycin',               kode_atc:'J01FA09', golongan:'Makrolid',                          satuan:'g',  ddd_who:0.5,  rute:'Oral',       aware:'Watch' },
  { id:33, nama_generik:'Clindamycin',                  kode_atc:'J01FF01', golongan:'Linkosamidd',                       satuan:'g',  ddd_who:1.2,  rute:'Oral',       aware:'Access' },
  { id:34, nama_generik:'Colistin',                     kode_atc:'J01XB01', golongan:'Polimiksin',                        satuan:'IU', ddd_who:9,    rute:'Oral',       aware:'Reserve' },
  { id:35, nama_generik:'Dibekacin',                    kode_atc:'J01GB09', golongan:'Aminoglikosida',                    satuan:'g',  ddd_who:0.14, rute:'Parenteral', aware:'Reserve' },
  { id:36, nama_generik:'Doripenem',                    kode_atc:'J01DH04', golongan:'Karbapenem',                        satuan:'g',  ddd_who:1.5,  rute:'Parenteral', aware:'Reserve' },
  { id:37, nama_generik:'Doxycycline',                  kode_atc:'J01AA02', golongan:'Tetrasiklin',                       satuan:'g',  ddd_who:0.1,  rute:'Oral',       aware:'Access' },
  { id:38, nama_generik:'Erythromycin',                 kode_atc:'J01FA01', golongan:'Makrolid',                          satuan:'g',  ddd_who:1,    rute:'Oral',       aware:'Access' },
  { id:39, nama_generik:'Ethambutol',                   kode_atc:'J04AK02', golongan:'Anti-Tuberkulosis',                 satuan:'g',  ddd_who:1.2,  rute:'Oral',       aware:'Anti-Tuberkulosis' },
  { id:40, nama_generik:'Fluconazole',                  kode_atc:'J02AC01', golongan:'Antijamur Triazol',                 satuan:'g',  ddd_who:0.2,  rute:'Oral',       aware:'Anti-jamur' },
  { id:41, nama_generik:'Fluconazole',                  kode_atc:'J02AC01', golongan:'Antijamur Triazol',                 satuan:'g',  ddd_who:0.2,  rute:'Parenteral', aware:'Anti-jamur' },
  { id:42, nama_generik:'Fosfomycin',                   kode_atc:'J01XX01', golongan:'Antibiotik Lain',                   satuan:'g',  ddd_who:8,    rute:'Parenteral', aware:'Watch' },
  { id:43, nama_generik:'Fosfomycin',                   kode_atc:'J01XX01', golongan:'Antibiotik Lain',                   satuan:'g',  ddd_who:3,    rute:'Oral',       aware:'Watch' },
  { id:44, nama_generik:'Gentamicin',                   kode_atc:'J01GB03', golongan:'Aminoglikosida',                    satuan:'g',  ddd_who:0.25, rute:'Parenteral', aware:'Access' },
  { id:45, nama_generik:'Griseofulvin',                 kode_atc:'D01BA01', golongan:'Antijamur',                         satuan:'g',  ddd_who:0.5,  rute:'Oral',       aware:'Anti-jamur' },
  { id:46, nama_generik:'Isavuconazonium Sulfat',       kode_atc:'J02AC04', golongan:'Antijamur Triazol',                 satuan:'g',  ddd_who:0.2,  rute:'Oral',       aware:'Anti-jamur' },
  { id:47, nama_generik:'Isavuconazonium Sulfat',       kode_atc:'J02AC04', golongan:'Antijamur Triazol',                 satuan:'g',  ddd_who:0.4,  rute:'Parenteral', aware:'Anti-jamur' },
  { id:48, nama_generik:'Isoniazid',                    kode_atc:'J04AC01', golongan:'Anti-Tuberkulosis',                 satuan:'g',  ddd_who:0.3,  rute:'Oral',       aware:'Anti-Tuberkulosis' },
  { id:49, nama_generik:'Itraconazole',                 kode_atc:'J02AC02', golongan:'Antijamur Triazol',                 satuan:'g',  ddd_who:0.2,  rute:'Oral',       aware:'Anti-jamur' },
  { id:50, nama_generik:'Kanamycin',                    kode_atc:'J01GB04', golongan:'Aminoglikosida',                    satuan:'g',  ddd_who:1,    rute:'Parenteral', aware:'Watch' },
  { id:51, nama_generik:'Ketoconazole',                 kode_atc:'J02AB02', golongan:'Antijamur Imidazol',                satuan:'g',  ddd_who:0.6,  rute:'Oral',       aware:'Anti-jamur' },
  { id:52, nama_generik:'Levofloxacin',                 kode_atc:'J01MA12', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.5,  rute:'Oral',       aware:'Watch' },
  { id:53, nama_generik:'Levofloxacin',                 kode_atc:'J01MA12', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.5,  rute:'Parenteral', aware:'Watch' },
  { id:54, nama_generik:'Lincomycin',                   kode_atc:'J01FF02', golongan:'Linkosamidd',                       satuan:'g',  ddd_who:1.8,  rute:'Oral',       aware:'Watch' },
  { id:55, nama_generik:'Linezolid',                    kode_atc:'J01XX08', golongan:'Oksazolidinon',                     satuan:'g',  ddd_who:1.2,  rute:'Oral',       aware:'Reserve' },
  { id:56, nama_generik:'Linezolid',                    kode_atc:'J01XX08', golongan:'Oksazolidinon',                     satuan:'g',  ddd_who:1.2,  rute:'Parenteral', aware:'Reserve' },
  { id:57, nama_generik:'Meropenem',                    kode_atc:'J01DH02', golongan:'Karbapenem',                        satuan:'g',  ddd_who:3,    rute:'Parenteral', aware:'Reserve' },
  { id:58, nama_generik:'Metronidazole',                kode_atc:'J01XD01', golongan:'Nitroimidazol',                     satuan:'g',  ddd_who:2,    rute:'Oral',       aware:'Access' },
  { id:59, nama_generik:'Metronidazole',                kode_atc:'J01XD01', golongan:'Nitroimidazol',                     satuan:'g',  ddd_who:1.5,  rute:'Parenteral', aware:'Access' },
  { id:60, nama_generik:'Metronidazole',                kode_atc:'J01XD01', golongan:'Nitroimidazol',                     satuan:'g',  ddd_who:2,    rute:'Rectal',     aware:'Access' },
  { id:61, nama_generik:'Micafungin',                   kode_atc:'J02AX05', golongan:'Antijamur Echinocandin',            satuan:'g',  ddd_who:0.1,  rute:'Parenteral', aware:'Anti-jamur' },
  { id:62, nama_generik:'Moxifloxacin',                 kode_atc:'J01MA14', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.4,  rute:'Oral',       aware:'Watch' },
  { id:63, nama_generik:'Moxifloxacin',                 kode_atc:'J01MA14', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.4,  rute:'Parenteral', aware:'Watch' },
  { id:64, nama_generik:'Nevirapine',                   kode_atc:'J05AG01', golongan:'Antivirus',                         satuan:'g',  ddd_who:0.4,  rute:'Oral',       aware:'Anti-Virus' },
  { id:65, nama_generik:'Nystatin',                     kode_atc:'A07AA02', golongan:'Antijamur Polien',                  satuan:'IU', ddd_who:1.5,  rute:'Oral',       aware:'Anti-jamur' },
  { id:66, nama_generik:'Ofloxacin',                    kode_atc:'J01MA01', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.4,  rute:'Oral',       aware:'Watch' },
  { id:67, nama_generik:'Ofloxacin',                    kode_atc:'J01MA01', golongan:'Fluorokuinolon',                    satuan:'g',  ddd_who:0.4,  rute:'Parenteral', aware:'Watch' },
  { id:68, nama_generik:'Piperacillin-Tazobactam',      kode_atc:'J01CR05', golongan:'Penisilin + Inhibitor β-Laktamase', satuan:'g',  ddd_who:14,   rute:'Parenteral', aware:'Watch' },
  { id:69, nama_generik:'Pyrazinamide',                 kode_atc:'J04AK01', golongan:'Anti-Tuberkulosis',                 satuan:'g',  ddd_who:1.5,  rute:'Oral',       aware:'Anti-Tuberkulosis' },
  { id:70, nama_generik:'Rifampicin',                   kode_atc:'J04AB02', golongan:'Anti-Tuberkulosis',                 satuan:'g',  ddd_who:0.6,  rute:'Oral',       aware:'Anti-Tuberkulosis' },
  { id:71, nama_generik:'Spiramycin',                   kode_atc:'J01FA02', golongan:'Makrolid',                          satuan:'g',  ddd_who:3,    rute:'Oral',       aware:'Watch' },
  { id:72, nama_generik:'Streptomycin',                 kode_atc:'J01GA01', golongan:'Aminoglikosida',                    satuan:'g',  ddd_who:1,    rute:'Parenteral', aware:'Watch' },
  { id:73, nama_generik:'Sulfamethoxazole-Trimethoprim',kode_atc:'J01EE01', golongan:'Sulfonamid-Trimetoprim',            satuan:'g',  ddd_who:2,    rute:'Oral',       aware:'Access' },
  { id:74, nama_generik:'Teicoplanin',                  kode_atc:'J01XA02', golongan:'Glikopeptida',                      satuan:'g',  ddd_who:0.4,  rute:'Parenteral', aware:'Watch' },
  { id:75, nama_generik:'Terbinafine',                  kode_atc:'B01BA02', golongan:'Antijamur',                         satuan:'g',  ddd_who:0.25, rute:'Oral',       aware:'Anti-jamur' },
  { id:76, nama_generik:'Thiamphenicol',                kode_atc:'J01BA02', golongan:'Amfenikol',                         satuan:'g',  ddd_who:1.5,  rute:'Oral',       aware:'Access' },
  { id:77, nama_generik:'Tigecycline',                  kode_atc:'J01AA12', golongan:'Tetrasiklin (Glisilsiklin)',         satuan:'g',  ddd_who:0.1,  rute:'Parenteral', aware:'Reserve' },
  { id:78, nama_generik:'Vancomycin',                   kode_atc:'J01XA01', golongan:'Glikopeptida',                      satuan:'g',  ddd_who:2,    rute:'Parenteral', aware:'Reserve' },
];

/* ============================================================
   2. STATE & STORAGE
============================================================ */
const STORAGE_KEYS = {
  auth: 'smartddd_auth',
  antibiotics: 'smartddd_antibiotics',
  history: 'smartddd_history',
  nextId: 'smartddd_next_id',
  accounts: 'smartddd_accounts',
};

// Default accounts (stored in localStorage as 'smartddd_accounts')
const DEFAULT_ACCOUNTS = [
  { id: 1, username: 'fadillah fazrin', password: 'fadillah123', nama: 'Fadillah Fazrin', role: 'admin',   jabatan: 'Apoteker' },
  { id: 2, username: 'admin',           password: 'admin123',    nama: 'Administrator',   role: 'admin',   jabatan: 'IT Admin' },
  { id: 3, username: 'farmasi',         password: 'farmasi123',  nama: 'Tim Farmasi',      role: 'user',    jabatan: 'Farmasi' },
];

let antibiotics = [];
let history = [];
let nextId = 100;
let currentSection = 'dashboard';
let barChart = null;
let pieChart = null;
let dashPieChart = null;
let currentUser = null; // { id, username, nama, role, jabatan }

/* ===== ACCOUNT STORAGE ===== */
function loadAccounts() {
  const stored = localStorage.getItem(STORAGE_KEYS.accounts);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(DEFAULT_ACCOUNTS));
    return DEFAULT_ACCOUNTS;
  }
  return JSON.parse(stored);
}
function saveAccounts(accounts) {
  localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
}

function saveAntibiotics() { localStorage.setItem(STORAGE_KEYS.antibiotics, JSON.stringify(antibiotics)); }
function saveHistory()     { localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history)); }
function saveNextId()      { localStorage.setItem(STORAGE_KEYS.nextId, nextId); }

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEYS.antibiotics);
  antibiotics = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(INITIAL_ANTIBIOTICS));
  if (!stored) saveAntibiotics();

  const hist = localStorage.getItem(STORAGE_KEYS.history);
  history = hist ? JSON.parse(hist) : [];

  const nid = localStorage.getItem(STORAGE_KEYS.nextId);
  nextId = nid ? parseInt(nid) : 200;
}

/* ============================================================
   3. LOGIN / LOGOUT
============================================================ */
function login() {
  const user = document.getElementById('loginUsername').value.trim().toLowerCase();
  const pass = document.getElementById('loginPassword').value;
  const err  = document.getElementById('loginError');

  const accounts = loadAccounts();
  const found = accounts.find(a => a.username.toLowerCase() === user && a.password === pass);

  if (found) {
    err.classList.add('hidden');
    currentUser = found;
    localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify({ userId: found.id, user: found.username, time: Date.now() }));
    showApp();
  } else {
    err.classList.remove('hidden');
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginPassword').focus();
  }
}

function logout() {
  if (!confirm('Yakin ingin keluar?')) return;
  localStorage.removeItem(STORAGE_KEYS.auth);
  currentUser = null;
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

function checkAuth() {
  const auth = localStorage.getItem(STORAGE_KEYS.auth);
  if (!auth) return false;
  const { userId, time } = JSON.parse(auth);
  if (Date.now() - time > 8 * 60 * 60 * 1000) {
    localStorage.removeItem(STORAGE_KEYS.auth);
    return false;
  }
  const accounts = loadAccounts();
  currentUser = accounts.find(a => a.id === userId) || accounts[0];
  return true;
}

function showApp() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('mainApp').classList.remove('hidden');
  updateUserDisplay();
  initDashboard();
}

function updateUserDisplay() {
  if (!currentUser) return;
  const initials = currentUser.nama.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
  // Sidebar
  document.querySelectorAll('.user-avatar').forEach(el => el.textContent = initials);
  document.querySelectorAll('.user-name').forEach(el => el.textContent = currentUser.nama);
  document.querySelectorAll('.user-role').forEach(el => el.textContent = currentUser.jabatan);
  document.querySelectorAll('.user-avatar-sm').forEach(el => el.textContent = initials);
  document.querySelectorAll('.navbar-user span').forEach(el => el.textContent = currentUser.nama);
  // Show/hide admin-only menu
  const adminMenu = document.getElementById('navAkun');
  const adminLabel = document.getElementById('navAkunLabel');
  if (adminMenu) adminMenu.style.display = currentUser.role === 'admin' ? '' : 'none';
  if (adminLabel) adminLabel.style.display = currentUser.role === 'admin' ? '' : 'none';
}

function togglePassword() {
  const pw = document.getElementById('loginPassword');
  pw.type = pw.type === 'password' ? 'text' : 'password';
}

/* ============================================================
   3b. MANAJEMEN AKUN
============================================================ */
function initAkun() {
  renderAkunTable();
}

function renderAkunTable() {
  const accounts = loadAccounts();
  const tbody = document.getElementById('akunTableBody');
  if (!tbody) return;
  tbody.innerHTML = accounts.map(a => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="user-avatar" style="width:34px;height:34px;font-size:13px;flex-shrink:0">
            ${a.nama.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase()}
          </div>
          <div>
            <div style="font-weight:600">${a.nama}</div>
            <div style="font-size:12px;color:var(--text-3)">${a.username}</div>
          </div>
        </div>
      </td>
      <td>${a.jabatan}</td>
      <td><span class="badge-role badge-role-${a.role}">${a.role === 'admin' ? 'Admin' : 'User'}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn-icon btn-edit" onclick="openEditAkun(${a.id})" title="Edit">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          ${a.id !== (currentUser?.id) ? `
          <button class="btn-icon btn-delete" onclick="deleteAkun(${a.id})" title="Hapus">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>` : '<span style="font-size:11px;color:var(--text-3)">Akun Anda</span>'}
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddAkun() {
  document.getElementById('akunModalTitle').textContent = 'Tambah Akun';
  document.getElementById('akunEditId').value = '';
  document.getElementById('akunNama').value = '';
  document.getElementById('akunUsername').value = '';
  document.getElementById('akunPassword').value = '';
  document.getElementById('akunJabatan').value = '';
  document.getElementById('akunRole').value = 'user';
  document.getElementById('akunPasswordNote').textContent = '';
  document.getElementById('akunModalOverlay').classList.remove('hidden');
}

function openEditAkun(id) {
  const accounts = loadAccounts();
  const a = accounts.find(x => x.id === id);
  if (!a) return;
  document.getElementById('akunModalTitle').textContent = 'Edit Akun';
  document.getElementById('akunEditId').value = id;
  document.getElementById('akunNama').value = a.nama;
  document.getElementById('akunUsername').value = a.username;
  document.getElementById('akunPassword').value = '';
  document.getElementById('akunJabatan').value = a.jabatan;
  document.getElementById('akunRole').value = a.role;
  document.getElementById('akunPasswordNote').textContent = 'Kosongkan jika tidak ingin mengubah password';
  document.getElementById('akunModalOverlay').classList.remove('hidden');
}

function closeAkunModal() {
  document.getElementById('akunModalOverlay').classList.add('hidden');
}

function saveAkun() {
  const id    = document.getElementById('akunEditId').value;
  const nama  = document.getElementById('akunNama').value.trim();
  const uname = document.getElementById('akunUsername').value.trim().toLowerCase();
  const pass  = document.getElementById('akunPassword').value;
  const jabatan = document.getElementById('akunJabatan').value.trim();
  const role  = document.getElementById('akunRole').value;

  if (!nama || !uname || !jabatan) { showToast('Nama, username, dan jabatan wajib diisi!', 'error'); return; }

  const accounts = loadAccounts();

  if (id) {
    // Edit
    const idx = accounts.findIndex(a => a.id === parseInt(id));
    if (idx === -1) return;
    // cek username duplikat (kecuali akun sendiri)
    if (accounts.some(a => a.username.toLowerCase() === uname && a.id !== parseInt(id))) {
      showToast('Username sudah digunakan!', 'error'); return;
    }
    accounts[idx].nama = nama;
    accounts[idx].username = uname;
    accounts[idx].jabatan = jabatan;
    accounts[idx].role = role;
    if (pass) accounts[idx].password = pass;
    showToast('Akun berhasil diperbarui!', 'success');
  } else {
    // Add
    if (!pass) { showToast('Password wajib diisi untuk akun baru!', 'error'); return; }
    if (accounts.some(a => a.username.toLowerCase() === uname)) {
      showToast('Username sudah digunakan!', 'error'); return;
    }
    const newId = Math.max(...accounts.map(a => a.id)) + 1;
    accounts.push({ id: newId, username: uname, password: pass, nama, role, jabatan });
    showToast('Akun berhasil ditambahkan!', 'success');
  }

  saveAccounts(accounts);
  closeAkunModal();
  renderAkunTable();
  // Refresh current user display if edited self
  if (id && parseInt(id) === currentUser?.id) {
    currentUser = accounts.find(a => a.id === currentUser.id);
    updateUserDisplay();
  }
}

function deleteAkun(id) {
  if (!confirm('Hapus akun ini?')) return;
  const accounts = loadAccounts().filter(a => a.id !== id);
  saveAccounts(accounts);
  renderAkunTable();
  showToast('Akun dihapus.', 'info');
}

/* ============================================================
   3c. GANTI PASSWORD SENDIRI
============================================================ */
function openGantiPassword() {
  if (!currentUser) return;
  const initials = currentUser.nama.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
  document.getElementById('gantiPwAvatar').textContent    = initials;
  document.getElementById('gantiPwNama').textContent      = currentUser.nama;
  document.getElementById('gantiPwUsername').textContent  = currentUser.username;
  document.getElementById('pwLama').value        = '';
  document.getElementById('pwBaru').value        = '';
  document.getElementById('pwKonfirmasi').value  = '';
  document.getElementById('gantiPwError').classList.add('hidden');
  document.getElementById('pwStrengthFill').style.width = '0';
  document.getElementById('pwStrengthFill').style.background = '';
  document.getElementById('pwStrengthLabel').textContent = '';
  document.getElementById('gantiPwOverlay').classList.remove('hidden');
  setTimeout(() => document.getElementById('pwLama').focus(), 100);
}

function closeGantiPassword() {
  document.getElementById('gantiPwOverlay').classList.add('hidden');
}

function togglePwField(fieldId, iconId) {
  const field = document.getElementById(fieldId);
  field.type = field.type === 'password' ? 'text' : 'password';
}

function checkPwStrength() {
  const pw = document.getElementById('pwBaru').value;
  const fill  = document.getElementById('pwStrengthFill');
  const label = document.getElementById('pwStrengthLabel');
  if (!pw) { fill.style.width = '0'; label.textContent = ''; return; }

  let score = 0;
  if (pw.length >= 6)  score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const levels = [
    { pct: '20%', color: '#DC2626', text: 'Sangat lemah' },
    { pct: '40%', color: '#F97316', text: 'Lemah' },
    { pct: '60%', color: '#EAB308', text: 'Cukup' },
    { pct: '80%', color: '#22C55E', text: 'Kuat' },
    { pct: '100%',color: '#16A34A', text: 'Sangat kuat' },
  ];
  const lvl = levels[Math.min(score - 1, 4)] || levels[0];
  fill.style.width      = lvl.pct;
  fill.style.background = lvl.color;
  label.style.color     = lvl.color;
  label.textContent     = lvl.text;
}

function simpanGantiPassword() {
  const pwLama       = document.getElementById('pwLama').value;
  const pwBaru       = document.getElementById('pwBaru').value;
  const pwKonfirmasi = document.getElementById('pwKonfirmasi').value;
  const errEl        = document.getElementById('gantiPwError');

  const showErr = (msg) => {
    errEl.textContent = msg;
    errEl.classList.remove('hidden');
  };

  if (!pwLama || !pwBaru || !pwKonfirmasi) { showErr('Semua field wajib diisi!'); return; }

  const accounts = loadAccounts();
  const idx = accounts.findIndex(a => a.id === currentUser.id);
  if (idx === -1) { showErr('Akun tidak ditemukan.'); return; }

  if (accounts[idx].password !== pwLama) { showErr('Password lama tidak sesuai!'); return; }
  if (pwBaru.length < 6)                 { showErr('Password baru minimal 6 karakter!'); return; }
  if (pwBaru !== pwKonfirmasi)           { showErr('Konfirmasi password tidak cocok!'); return; }
  if (pwBaru === pwLama)                 { showErr('Password baru tidak boleh sama dengan password lama!'); return; }

  accounts[idx].password = pwBaru;
  saveAccounts(accounts);
  currentUser = accounts[idx];

  closeGantiPassword();
  showToast('Password berhasil diubah!', 'success');
}

/* ============================================================
   4. NAVIGATION
============================================================ */
function navigate(section) {
  currentSection = section;
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
  // Show target
  const el = document.getElementById(section + 'Section');
  if (el) el.classList.add('active-section');

  // Update nav active state
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === section);
  });

  // Update page title
  const titles = {
    dashboard: 'Dashboard',
    masterdata: 'Master Data Antibiotik',
    kalkulator: 'Kalkulator DDD',
    statistik: 'Statistik Penggunaan',
    export: 'Export Laporan',
    akun: 'Manajemen Akun',
  };
  document.getElementById('pageTitle').textContent = titles[section] || section;

  // Init section-specific logic
  if (section === 'dashboard')   initDashboard();
  if (section === 'masterdata')  { populateGolonganFilter(); renderMasterTable(); }
  if (section === 'kalkulator')  { populateAntibioticSelect(); renderHistory(); }
  if (section === 'statistik')   initStatistik();
  if (section === 'export')      initExport();
  if (section === 'akun')        initAkun();
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

/* ============================================================
   5. DATETIME
============================================================ */
function updateDatetime() {
  const now = new Date();
  const opts = { weekday:'short', day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' };
  document.getElementById('datetimeDisplay').textContent = now.toLocaleString('id-ID', opts);
}

/* ============================================================
   6. DASHBOARD
============================================================ */
function initDashboard() {
  // Stat cards
  document.getElementById('statTotalAntibiotik').textContent = antibiotics.length;
  document.getElementById('statTotalKalkulasi').textContent = history.length;

  // Most used antibiotic from history
  if (history.length > 0) {
    const freq = {};
    history.forEach(h => { freq[h.nama_generik] = (freq[h.nama_generik] || 0) + 1; });
    const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
    document.getElementById('statMostUsed').textContent = top ? top[0].substring(0, 14) : '–';
  } else {
    document.getElementById('statMostUsed').textContent = '–';
  }

  // Avg DDD/100HD
  if (history.length > 0) {
    const avg = history.reduce((s, h) => s + h.ddd_100hd, 0) / history.length;
    document.getElementById('statAvgDDD').textContent = avg.toFixed(2);
  } else {
    document.getElementById('statAvgDDD').textContent = '0.00';
  }

  // Recent table
  const tbody = document.getElementById('dashRecentBody');
  if (history.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="empty-state">Belum ada perhitungan DDD</td></tr>';
  } else {
    const recent = [...history].reverse().slice(0, 5);
    tbody.innerHTML = recent.map(h => `
      <tr>
        <td><strong>${h.nama_generik}</strong><br><small style="color:var(--text-3)">${h.rute}</small></td>
        <td class="mono">${h.total_ddd.toFixed(3)}</td>
        <td class="mono" style="color:var(--primary);font-weight:700">${h.ddd_100hd.toFixed(2)}</td>
        <td style="color:var(--text-3);font-size:12px">${formatDate(h.tanggal)}</td>
      </tr>
    `).join('');
  }

  // Pie chart for AWARE distribution (from antibiotics)
  renderDashPie();
}

function renderDashPie() {
  const counts = { Access:0, Watch:0, Reserve:0, 'Anti-jamur':0, 'Anti-Tuberkulosis':0, 'Anti-Virus':0 };
  antibiotics.forEach(a => { if (counts[a.aware] !== undefined) counts[a.aware]++; else counts['Anti-jamur']++; });

  const labels = Object.keys(counts).filter(k => counts[k] > 0);
  const data   = labels.map(k => counts[k]);
  const colors = {
    'Access': '#16A34A', 'Watch': '#D97706', 'Reserve': '#7C3AED',
    'Anti-jamur': '#9333EA', 'Anti-Tuberkulosis': '#C2410C', 'Anti-Virus': '#2563EB'
  };
  const bgColors = labels.map(l => colors[l] || '#94A3B8');

  const ctx = document.getElementById('dashPieChart');
  if (!ctx) return;
  if (dashPieChart) dashPieChart.destroy();
  dashPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: bgColors, borderWidth: 2, borderColor: '#fff' }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: {
        label: ctx => ` ${ctx.label}: ${ctx.raw} antibiotik`
      }}}
    }
  });

  // Legend
  const legend = document.getElementById('awareLegend');
  if (legend) {
    legend.innerHTML = labels.map((l, i) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${bgColors[i]}"></div>
        <span>${l} (${data[i]})</span>
      </div>
    `).join('');
  }
}

/* ============================================================
   7. MASTER DATA
============================================================ */
function populateGolonganFilter() {
  const golongans = [...new Set(antibiotics.map(a => a.golongan))].sort();
  const sel = document.getElementById('filterGolongan');
  const val = sel.value;
  sel.innerHTML = '<option value="">Semua Golongan</option>' +
    golongans.map(g => `<option value="${g}"${val===g?' selected':''}>${g}</option>`).join('');
}

function renderMasterTable() {
  const search  = (document.getElementById('searchAntibiotic').value || '').toLowerCase();
  const golongan = document.getElementById('filterGolongan').value;
  const aware   = document.getElementById('filterAware').value;
  const rute    = document.getElementById('filterRute').value;

  let data = antibiotics.filter(a => {
    const matchSearch = !search || a.nama_generik.toLowerCase().includes(search) ||
      a.kode_atc.toLowerCase().includes(search) || a.golongan.toLowerCase().includes(search);
    const matchGolongan = !golongan || a.golongan === golongan;
    const matchAware    = !aware   || a.aware === aware;
    const matchRute     = !rute    || a.rute === rute;
    return matchSearch && matchGolongan && matchAware && matchRute;
  });

  document.getElementById('masterDataCount').textContent = `${data.length} data`;

  const tbody = document.getElementById('masterTableBody');
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" class="empty-state">Tidak ada data yang cocok</td></tr>';
    return;
  }
  tbody.innerHTML = data.map((a, i) => `
    <tr>
      <td style="color:var(--text-3)">${i+1}</td>
      <td><strong>${a.nama_generik}</strong></td>
      <td class="mono" style="color:var(--primary)">${a.kode_atc}</td>
      <td style="font-size:12px">${a.golongan}</td>
      <td>${ruteBadge(a.rute)}</td>
      <td class="mono">${a.satuan}</td>
      <td class="mono" style="font-weight:700;color:var(--primary)">${a.ddd_who}</td>
      <td>${awareBadge(a.aware)}</td>
      <td>
        <div style="display:flex;gap:4px">
          <button class="btn-icon btn-icon-edit" onclick="openModal('edit',${a.id})" title="Edit">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon btn-icon-del" onclick="deleteAntibiotic(${a.id})" title="Hapus">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function filterMasterData() { renderMasterTable(); }

function awareBadge(aware) {
  const map = {
    'Access':          'badge-access',
    'Watch':           'badge-watch',
    'Reserve':         'badge-reserve',
    'Anti-jamur':      'badge-antijamur',
    'Anti-Tuberkulosis':'badge-antitb',
    'Anti-Virus':      'badge-antivirus',
  };
  return `<span class="badge ${map[aware] || 'badge-other'}">${aware}</span>`;
}

function ruteBadge(rute) {
  const map = { 'Oral':'color:#16A34A', 'Parenteral':'color:#1565C0', 'Rectal':'color:#D97706', 'Topikal':'color:#9333EA' };
  return `<span style="font-size:12px;font-weight:600;${map[rute] || ''}">${rute}</span>`;
}

/* ===== CRUD ===== */
function openModal(mode, id) {
  const overlay = document.getElementById('modalOverlay');
  const title   = document.getElementById('modalTitle');
  overlay.classList.remove('hidden');

  if (mode === 'add') {
    title.textContent = 'Tambah Data Antibiotik';
    document.getElementById('editId').value = '';
    ['mNamaGenerik','mKodeAtc','mGolongan','mDddWho'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('mRute').value = 'Oral';
    document.getElementById('mSatuan').value = 'g';
    document.getElementById('mAware').value = 'Access';
  } else {
    const a = antibiotics.find(x => x.id === id);
    if (!a) return;
    title.textContent = 'Edit Data Antibiotik';
    document.getElementById('editId').value = a.id;
    document.getElementById('mNamaGenerik').value = a.nama_generik;
    document.getElementById('mKodeAtc').value = a.kode_atc;
    document.getElementById('mGolongan').value = a.golongan;
    document.getElementById('mRute').value = a.rute;
    document.getElementById('mSatuan').value = a.satuan;
    document.getElementById('mDddWho').value = a.ddd_who;
    document.getElementById('mAware').value = a.aware;
  }
}

function closeModal() { document.getElementById('modalOverlay').classList.add('hidden'); }
function closeModalOnOverlay(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

function saveAntibiotic() {
  const namaGenerik = document.getElementById('mNamaGenerik').value.trim();
  const kodeAtc     = document.getElementById('mKodeAtc').value.trim();
  const golongan    = document.getElementById('mGolongan').value.trim();
  const rute        = document.getElementById('mRute').value;
  const satuan      = document.getElementById('mSatuan').value;
  const dddWho      = parseFloat(document.getElementById('mDddWho').value);
  const aware       = document.getElementById('mAware').value;

  if (!namaGenerik || !kodeAtc || !golongan || isNaN(dddWho) || dddWho <= 0) {
    showToast('Harap isi semua field yang wajib dengan benar!', 'error');
    return;
  }

  const editId = document.getElementById('editId').value;

  if (editId) {
    const idx = antibiotics.findIndex(a => a.id === parseInt(editId));
    if (idx > -1) {
      antibiotics[idx] = { ...antibiotics[idx], nama_generik:namaGenerik, kode_atc:kodeAtc, golongan, rute, satuan, ddd_who:dddWho, aware };
      showToast('Data berhasil diperbarui!', 'success');
    }
  } else {
    antibiotics.push({ id: nextId++, nama_generik:namaGenerik, kode_atc:kodeAtc, golongan, rute, satuan, ddd_who:dddWho, aware });
    saveNextId();
    showToast('Data berhasil ditambahkan!', 'success');
  }

  saveAntibiotics();
  closeModal();
  populateGolonganFilter();
  renderMasterTable();
}

function deleteAntibiotic(id) {
  const a = antibiotics.find(x => x.id === id);
  if (!confirm(`Hapus "${a?.nama_generik}"? Data tidak dapat dikembalikan.`)) return;
  antibiotics = antibiotics.filter(x => x.id !== id);
  saveAntibiotics();
  populateGolonganFilter();
  renderMasterTable();
  showToast('Data berhasil dihapus!', 'success');
}

/* ============================================================
   8. KALKULATOR DDD
============================================================ */
function populateAntibioticSelect() {
  const sel = document.getElementById('calcAntibiotic');
  sel.innerHTML = '<option value="">-- Pilih Antibiotik --</option>';
  antibiotics.slice().sort((a,b) => a.nama_generik.localeCompare(b.nama_generik)).forEach(a => {
    const opt = document.createElement('option');
    opt.value = a.id;
    opt.textContent = `${a.nama_generik} (${a.rute}) – DDD: ${a.ddd_who}${a.satuan}`;
    sel.appendChild(opt);
  });
}

function onAntibioticSelect() {
  const id = parseInt(document.getElementById('calcAntibiotic').value);
  const infoRow = document.getElementById('dddInfoRow');
  if (!id) { infoRow.style.display = 'none'; document.getElementById('calcRute').value = ''; return; }

  const a = antibiotics.find(x => x.id === id);
  if (!a) return;

  document.getElementById('calcRute').value = a.rute;
  document.getElementById('infoKodeAtc').textContent = a.kode_atc;
  document.getElementById('infoDddWho').textContent = `${a.ddd_who} ${a.satuan}`;
  document.getElementById('infoGolongan').textContent = a.golongan;
  document.getElementById('infoAware').textContent = a.aware;
  document.getElementById('satHint').textContent = `(masukkan dalam ${a.satuan === 'IU' ? 'juta IU (MIU)' : 'gram (g)'})`;
  infoRow.style.display = 'grid';
}

function calculateDDD() {
  const id         = parseInt(document.getElementById('calcAntibiotic').value);
  const totalGram  = parseFloat(document.getElementById('calcTotalGram').value);
  const totalPasien= parseInt(document.getElementById('calcTotalPasien').value);
  const lamaRawat  = parseInt(document.getElementById('calcLamaRawat').value);
  const catatan    = document.getElementById('calcCatatan').value.trim();

  if (!id) { showToast('Pilih nama antibiotik terlebih dahulu!', 'error'); return; }
  if (isNaN(totalGram) || totalGram <= 0) { showToast('Masukkan total gram/MIU yang valid!', 'error'); return; }
  if (isNaN(totalPasien) || totalPasien < 1) { showToast('Masukkan jumlah pasien yang valid!', 'error'); return; }
  if (isNaN(lamaRawat) || lamaRawat < 1) { showToast('Masukkan lama rawat yang valid!', 'error'); return; }

  const a = antibiotics.find(x => x.id === id);
  if (!a) return;

  const totalDDD   = totalGram / a.ddd_who;
  const patientDays = totalPasien * lamaRawat;
  const ddd100hd   = (totalDDD / patientDays) * 100;

  // Show result
  const resultCard = document.getElementById('calcResultCard');
  resultCard.classList.remove('hidden');
  document.getElementById('resultAntibiotic').textContent = `${a.nama_generik} (${a.rute})`;
  document.getElementById('resultTotalDDD').textContent = totalDDD.toFixed(4);
  document.getElementById('resultDDD100HD').textContent = ddd100hd.toFixed(2);
  document.getElementById('resultPatientDays').textContent = patientDays.toLocaleString('id-ID');
  document.getElementById('resultDDDStd').textContent = `${a.ddd_who} ${a.satuan}`;
  document.getElementById('resultFormula').textContent =
    `Total DDD = ${totalGram} ${a.satuan} ÷ ${a.ddd_who} ${a.satuan}/DDD = ${totalDDD.toFixed(4)} DDD\n` +
    `Patient-days = ${totalPasien} pasien × ${lamaRawat} hari = ${patientDays} HD\n` +
    `DDD/100HD = (${totalDDD.toFixed(4)} ÷ ${patientDays}) × 100 = ${ddd100hd.toFixed(2)}`;

  // Save to history
  history.push({
    id: nextId++,
    nama_generik: a.nama_generik,
    kode_atc: a.kode_atc,
    golongan: a.golongan,
    rute: a.rute,
    aware: a.aware,
    satuan: a.satuan,
    ddd_who: a.ddd_who,
    total_gram: totalGram,
    total_pasien: totalPasien,
    lama_rawat: lamaRawat,
    patient_days: patientDays,
    total_ddd: totalDDD,
    ddd_100hd: ddd100hd,
    catatan,
    tanggal: new Date().toISOString(),
  });
  saveHistory(); saveNextId();
  renderHistory();
  showToast(`DDD berhasil dihitung: ${ddd100hd.toFixed(2)} DDD/100HD`, 'success');
}

function renderHistory() {
  const q = (document.getElementById('searchHistory')?.value || '').toLowerCase();
  let data = history.filter(h =>
    !q || h.nama_generik.toLowerCase().includes(q) || h.kode_atc.toLowerCase().includes(q)
  );

  const tbody = document.getElementById('historyTableBody');
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">Belum ada riwayat perhitungan</td></tr>';
    return;
  }

  tbody.innerHTML = [...data].reverse().map(h => `
    <tr>
      <td><strong>${h.nama_generik}</strong><br><small style="color:var(--text-3)">${h.rute}</small></td>
      <td class="mono">${h.total_gram} ${h.satuan}</td>
      <td class="mono">${h.total_ddd.toFixed(3)}</td>
      <td class="mono" style="color:var(--primary);font-weight:700">${h.ddd_100hd.toFixed(2)}</td>
      <td style="color:var(--text-3);font-size:12px">${formatDate(h.tanggal)}</td>
      <td>
        <button class="btn-icon btn-icon-del" onclick="deleteHistory(${h.id})" title="Hapus">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
        </button>
      </td>
    </tr>
  `).join('');
}

function deleteHistory(id) {
  history = history.filter(h => h.id !== id);
  saveHistory();
  renderHistory();
  showToast('Riwayat dihapus', 'info');
}

function clearHistory() {
  if (!confirm('Hapus semua riwayat perhitungan?')) return;
  history = [];
  saveHistory();
  renderHistory();
  showToast('Semua riwayat dihapus', 'info');
}

/* ============================================================
   9. STATISTIK
============================================================ */
function initStatistik() {
  const total = antibiotics.length;
  const totalCalc = history.length;
  const avgDDD = history.length > 0 ? history.reduce((s,h) => s + h.ddd_100hd, 0) / history.length : 0;
  const maxDDD = history.length > 0 ? Math.max(...history.map(h => h.ddd_100hd)) : 0;

  document.getElementById('ss1').textContent = total;
  document.getElementById('ss2').textContent = totalCalc;
  document.getElementById('ss3').textContent = avgDDD.toFixed(2);
  document.getElementById('ss4').textContent = maxDDD.toFixed(2);

  renderBarChart();
  renderPieChart();
  renderStatTable();
}

function getStatData() {
  const map = {};
  history.forEach(h => {
    const key = `${h.nama_generik}|${h.rute}`;
    if (!map[key]) map[key] = { nama: h.nama_generik, rute: h.rute, aware: h.aware, count: 0, total_gram: 0, total_ddd: 0, ddd_100hd_sum: 0 };
    map[key].count++;
    map[key].total_gram += h.total_gram;
    map[key].total_ddd += h.total_ddd;
    map[key].ddd_100hd_sum += h.ddd_100hd;
  });
  return Object.values(map).sort((a, b) => b.total_ddd - a.total_ddd);
}

function renderBarChart() {
  const ctx = document.getElementById('barChart');
  if (!ctx) return;
  if (barChart) barChart.destroy();

  const data = getStatData().slice(0, 10);

  if (data.length === 0) {
    barChart = new Chart(ctx, {
      type: 'bar',
      data: { labels: ['Belum ada data'], datasets: [{ data: [0], backgroundColor: '#E2E8F0' }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
    return;
  }

  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => `${d.nama} (${d.rute})`),
      datasets: [{
        label: 'Total DDD',
        data: data.map(d => parseFloat(d.total_ddd.toFixed(3))),
        backgroundColor: data.map(d => awareColor(d.aware, 0.7)),
        borderColor: data.map(d => awareColor(d.aware, 1)),
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ` Total DDD: ${ctx.raw}` } }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } },
        x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 35, minRotation: 0 } }
      }
    }
  });
}

function renderPieChart() {
  const ctx = document.getElementById('pieChart');
  if (!ctx) return;
  if (pieChart) pieChart.destroy();

  const counts = { Access:0, Watch:0, Reserve:0, 'Anti-jamur':0, 'Anti-Tuberkulosis':0, 'Anti-Virus':0 };
  antibiotics.forEach(a => { if (counts[a.aware] !== undefined) counts[a.aware]++; });

  const labels = Object.keys(counts).filter(k => counts[k] > 0);
  const data   = labels.map(k => counts[k]);
  const bgColors = labels.map(l => awareColor(l, 0.85));

  pieChart = new Chart(ctx, {
    type: 'pie',
    data: { labels, datasets: [{ data, backgroundColor: bgColors, borderWidth: 2, borderColor: '#fff' }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right', labels: { font: { size: 11 }, padding: 12, boxWidth: 12, usePointStyle: true } },
        tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw} (${Math.round(ctx.raw/ctx.dataset.data.reduce((a,b)=>a+b,0)*100)}%)` } }
      }
    }
  });
}

function awareColor(aware, alpha=1) {
  const colors = {
    'Access': `rgba(22,163,74,${alpha})`,
    'Watch':  `rgba(217,119,6,${alpha})`,
    'Reserve': `rgba(124,58,237,${alpha})`,
    'Anti-jamur': `rgba(147,51,234,${alpha})`,
    'Anti-Tuberkulosis': `rgba(194,65,12,${alpha})`,
    'Anti-Virus': `rgba(37,99,235,${alpha})`,
  };
  return colors[aware] || `rgba(148,163,184,${alpha})`;
}

function renderStatTable() {
  const data = getStatData();
  const tbody = document.getElementById('statTableBody');
  if (data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-state">Belum ada data untuk ditampilkan</td></tr>';
    return;
  }
  tbody.innerHTML = data.map(d => `
    <tr>
      <td><strong>${d.nama}</strong><br><small style="color:var(--text-3)">${d.rute}</small></td>
      <td class="mono">${d.count}×</td>
      <td class="mono">${d.total_gram.toFixed(2)}</td>
      <td class="mono" style="color:var(--primary);font-weight:700">${d.total_ddd.toFixed(3)}</td>
      <td class="mono" style="font-weight:700">${(d.ddd_100hd_sum / d.count).toFixed(2)}</td>
      <td>${awareBadge(d.aware)}</td>
    </tr>
  `).join('');
}

/* ============================================================
   10. EXPORT
============================================================ */
function initExport() {
  document.getElementById('printDate').textContent = new Date().toLocaleDateString('id-ID', {
    weekday:'long', day:'numeric', month:'long', year:'numeric'
  });
  const printUser = document.getElementById('printUserName');
  if (printUser) printUser.textContent = currentUser?.nama || '–';

  // Fill print master table
  const tbody = document.getElementById('printMasterBody');
  tbody.innerHTML = antibiotics.map((a, i) => `
    <tr>
      <td>${i+1}</td>
      <td>${a.nama_generik}</td>
      <td>${a.kode_atc}</td>
      <td>${a.golongan}</td>
      <td>${a.rute}</td>
      <td>${a.satuan}</td>
      <td>${a.ddd_who}</td>
      <td>${a.aware}</td>
    </tr>
  `).join('') || '<tr><td colspan="8" class="empty-state">Tidak ada data</td></tr>';

  // Fill print history table
  const histBody = document.getElementById('printHistoryBody');
  histBody.innerHTML = [...history].reverse().map((h, i) => `
    <tr>
      <td>${i+1}</td>
      <td>${h.nama_generik} (${h.rute})</td>
      <td>${h.total_gram} ${h.satuan}</td>
      <td>${h.total_ddd.toFixed(3)}</td>
      <td>${h.ddd_100hd.toFixed(2)}</td>
      <td>${h.total_pasien}</td>
      <td>${h.lama_rawat} hari</td>
      <td>${formatDate(h.tanggal)}</td>
    </tr>
  `).join('') || '<tr><td colspan="8" class="empty-state">Tidak ada riwayat</td></tr>';
}

function printReport() { window.print(); }

function exportToPDF() {
  showToast('Membuka dialog simpan PDF...', 'info');
  setTimeout(() => window.print(), 300);
}

function exportToExcel() {
  try {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Master Data
    const masterData = [
      ['No', 'Nama Generik', 'Kode ATC', 'Golongan', 'Rute', 'Satuan', 'DDD WHO', 'AWARE'],
      ...antibiotics.map((a, i) => [i+1, a.nama_generik, a.kode_atc, a.golongan, a.rute, a.satuan, a.ddd_who, a.aware])
    ];
    const ws1 = XLSX.utils.aoa_to_sheet(masterData);
    ws1['!cols'] = [5,25,12,30,12,8,10,15].map(w => ({ wch: w }));
    XLSX.utils.book_append_sheet(wb, ws1, 'Master Data Antibiotik');

    // Sheet 2: Riwayat DDD
    const histData = [
      ['No', 'Antibiotik', 'Rute', 'Kode ATC', 'AWARE', 'Total Gram/MIU', 'DDD WHO', 'Total DDD', 'DDD/100HD', 'Total Pasien', 'Lama Rawat (Hari)', 'Patient-Days', 'Catatan', 'Tanggal'],
      ...[...history].reverse().map((h, i) => [
        i+1, h.nama_generik, h.rute, h.kode_atc, h.aware,
        h.total_gram, h.ddd_who, parseFloat(h.total_ddd.toFixed(4)),
        parseFloat(h.ddd_100hd.toFixed(2)), h.total_pasien, h.lama_rawat, h.patient_days,
        h.catatan || '', formatDate(h.tanggal)
      ])
    ];
    const ws2 = XLSX.utils.aoa_to_sheet(histData);
    ws2['!cols'] = [5,22,12,12,15,14,10,12,12,12,18,14,20,18].map(w => ({ wch: w }));
    XLSX.utils.book_append_sheet(wb, ws2, 'Riwayat DDD');

    // Sheet 3: Statistik
    const statData = getStatData();
    const statSheet = [
      ['Antibiotik', 'Rute', 'AWARE', 'Frekuensi', 'Total Gram', 'Total DDD', 'Rata-rata DDD/100HD'],
      ...statData.map(d => [
        d.nama, d.rute, d.aware, d.count,
        parseFloat(d.total_gram.toFixed(2)), parseFloat(d.total_ddd.toFixed(3)),
        parseFloat((d.ddd_100hd_sum / d.count).toFixed(2))
      ])
    ];
    const ws3 = XLSX.utils.aoa_to_sheet(statSheet);
    ws3['!cols'] = [22,12,15,12,12,12,18].map(w => ({ wch: w }));
    XLSX.utils.book_append_sheet(wb, ws3, 'Statistik');

    const filename = `SmartDDD_Laporan_${new Date().toISOString().slice(0,10)}.xlsx`;
    XLSX.writeFile(wb, filename);
    showToast(`File "${filename}" berhasil diunduh!`, 'success');
  } catch (e) {
    showToast('Gagal export Excel: ' + e.message, 'error');
  }
}

/* ============================================================
   11. UTILITIES
============================================================ */
function formatDate(iso) {
  if (!iso) return '–';
  return new Date(iso).toLocaleString('id-ID', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast toast-${type}`;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3500);
}

/* ============================================================
   12. INIT
============================================================ */
function initApp() {
  loadData();

  if (checkAuth()) {
    showApp();
  } else {
    document.getElementById('loginPage').style.display = 'flex';
  }

  // Datetime ticker
  updateDatetime();
  setInterval(updateDatetime, 1000);

  // Enter key on login
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !document.getElementById('loginPage').style.display?.includes('none') &&
        document.getElementById('loginPage').style.display !== 'none') {
      login();
    }
  });
}

window.addEventListener('DOMContentLoaded', initApp);