<template>
  <div class="daftar-page">
    <section class="page-header">
      <div class="container">
        <span class="section-label yellow" v-reveal>{{ t('daftar.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('daftar.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('daftar.pageSubtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Type Selection -->
        <div v-if="!registrationType" class="type-selection">
          <div class="type-card card" v-reveal @click="selectType('kelurahan')">
            <div class="type-icon" style="background: rgba(220, 38, 38, 0.1);">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>{{ t('daftar.type1Title') }}</h3>
            <p>{{ t('daftar.type1Desc') }}</p>
            <div class="type-meta">
              <span>3 Langkah Pendaftaran</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>

          <div class="type-card card" v-reveal @click="selectType('rw')">
            <div class="type-icon" style="background: rgba(37, 99, 235, 0.1);">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>{{ t('daftar.type2Title') }}</h3>
            <p>{{ t('daftar.type2Desc') }}</p>
            <div class="type-meta">
              <span>4 Langkah Pendaftaran</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>

        <!-- Wizard -->
        <div v-else class="wizard-wrapper">
          <!-- Progress Bar -->
          <div class="wizard-progress" v-reveal>
            <div
              v-for="(step, i) in currentSteps"
              :key="i"
              class="progress-step"
              :class="{ active: currentStep >= i, current: currentStep === i }"
            >
              <div class="step-circle">
                <span v-if="currentStep > i">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span v-else>{{ i + 1 }}</span>
              </div>
              <span class="step-label">{{ step.label }}</span>
            </div>
          </div>

          <div class="wizard-type-badge">
            <span :class="['type-badge', registrationType]">
              {{ registrationType === 'kelurahan' ? 'Gabung ke Karang Taruna Kelurahan' : 'Membangun Katar di RW' }}
            </span>
            <button class="change-type-btn" @click="resetType">Ganti</button>
          </div>

          <!-- Step Content -->
          <div class="wizard-content card">

            <!-- ========== KELURAHAN WIZARD ========== -->

            <!-- Step 1: Data Diri (shared) -->
            <div v-show="currentStep === 0" class="step-content">
              <h3>{{ t('daftar.dataDiri.title') }}</h3>
              <p>{{ t('daftar.dataDiri.desc') }}</p>
              <div class="form-grid">
                <div class="form-group">
                  <label for="nama">{{ t('daftar.dataDiri.nama') }} *</label>
                  <input type="text" id="nama" v-model="form.nama" placeholder="Masukkan nama lengkap">
                </div>
                <div class="form-group">
                  <label for="ttl">{{ t('daftar.dataDiri.ttl') }} *</label>
                  <input type="text" id="ttl" v-model="form.ttl" placeholder="Contoh: Bogor, 1 Januari 2000">
                </div>
                <div class="form-group">
                  <label for="jk">{{ t('daftar.dataDiri.jk') }} *</label>
                  <select id="jk" v-model="form.jk">
                    <option value="">Pilih</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="noHP">{{ t('daftar.dataDiri.noHP') }} *</label>
                  <input type="tel" id="noHP" v-model="form.noHP" placeholder="08xxxxxxxxxx">
                </div>
                <div class="form-group">
                  <label for="pendidikan">{{ t('daftar.dataDiri.pendidikan') }} *</label>
                  <select id="pendidikan" v-model="form.pendidikan">
                    <option value="">Pilih</option>
                    <option value="SMA/SMK">SMA/SMK</option>
                    <option value="D3">D3</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="pekerjaan">{{ t('daftar.dataDiri.pekerjaan') }}</label>
                  <input type="text" id="pekerjaan" v-model="form.pekerjaan" placeholder="Contoh: Mahasiswa / Karyawan">
                </div>
                <div class="form-group full-width">
                  <label for="alamat">{{ t('daftar.dataDiri.alamat') }} *</label>
                  <textarea id="alamat" v-model="form.alamat" rows="3" placeholder="Masukkan alamat lengkap"></textarea>
                </div>
              </div>
            </div>

            <!-- Step 2: Pilih Bidang (Kelurahan) -->
            <div v-if="registrationType === 'kelurahan'" v-show="currentStep === 1" class="step-content">
              <h3>{{ t('daftar.pilihBidang.title') }}</h3>
              <p>{{ t('daftar.pilihBidang.desc') }}</p>
              <div class="form-grid">
                <div class="form-group full-width">
                  <label>{{ t('daftar.pilihBidang.bidang') }} *</label>
                  <div class="checkbox-grid">
                    <label v-for="divisi in bidangOptions" :key="divisi" class="checkbox-label">
                      <input type="checkbox" :value="divisi" v-model="form.divisi">
                      <span class="checkmark"></span>
                      {{ divisi }}
                    </label>
                  </div>
                </div>
                <div class="form-group full-width">
                  <label for="motivasi">{{ t('daftar.pilihBidang.motivasi') }} *</label>
                  <textarea id="motivasi" v-model="form.motivasi" rows="4" placeholder="Ceritakan motivasi Anda bergabung dengan karang taruna..."></textarea>
                </div>
              </div>
            </div>

            <!-- Step 2: Info RW (Membangun Katar) -->
            <div v-if="registrationType === 'rw'" v-show="currentStep === 1" class="step-content">
              <h3>{{ t('daftar.infoRW.title') }}</h3>
              <p>{{ t('daftar.infoRW.desc') }}</p>
              <div class="form-grid">
                <div class="form-group">
                  <label for="statusPeran">{{ t('daftar.infoRW.statusPeran') }} *</label>
                  <select id="statusPeran" v-model="form.statusPeran">
                    <option value="">Pilih</option>
                    <option value="Ketua RW">Ketua RW</option>
                    <option value="Sekretaris RW">Sekretaris RW</option>
                    <option value="Bendahara RW">Bendahara RW</option>
                    <option value="Ketua RT">Ketua RT</option>
                    <option value="Sekretaris RT">Sekretaris RT</option>
                    <option value="Ketua Karang Taruna Existing">Ketua Karang Taruna Existing</option>
                    <option value="Anggota Karang Taruna">Anggota Karang Taruna</option>
                    <option value="Pemuda / Anak Muda">Pemuda / Anak Muda</option>
                    <option value="Tokoh Masyarakat">Tokoh Masyarakat</option>
                    <option value="Ibu-Ibu PKK">Ibu-Ibu PKK</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="namaPeran">{{ t('daftar.infoRW.namaPeran') }}</label>
                  <input type="text" id="namaPeran" v-model="form.namaPeran" placeholder="Contoh: Ketua RW 01 / Sekretaris RT 05">
                </div>
                <div class="form-group">
                  <label for="namaRW">{{ t('daftar.infoRW.namaRW') }} *</label>
                  <input type="text" id="namaRW" v-model="form.namaRW" placeholder="Contoh: RW 01 atau RW Kampung Baru">
                </div>
                <div class="form-group">
                  <label for="jumlahAnggota">{{ t('daftar.infoRW.jumlahPemuda') }} *</label>
                  <input type="number" id="jumlahAnggota" v-model="form.jumlahAnggota" placeholder="Perkiraan jumlah pemuda">
                </div>
                <div class="form-group">
                  <label for="ketuaRW">{{ t('daftar.infoRW.ketuaRW') }}</label>
                  <input type="text" id="ketuaRW" v-model="form.ketuaRW" placeholder="Nama ketua RW atau tokoh masyarakat">
                </div>
                <div class="form-group">
                  <label for="statusKatar">{{ t('daftar.infoRW.statusKatar') }}</label>
                  <select id="statusKatar" v-model="form.statusKatar">
                    <option value="">Pilih</option>
                    <option value="Belum Ada">Belum Ada</option>
                    <option value="Baru Dibentuk">Baru Dibentuk</option>
                    <option value="Sudah Ada, Perlu Pengembangan">Sudah Ada, Perlu Pengembangan</option>
                  </select>
                </div>
                <div class="form-group full-width">
                  <label for="visiMisi">{{ t('daftar.infoRW.visiMisi') }}</label>
                  <textarea id="visiMisi" v-model="form.visiMisi" rows="3" placeholder="Visi dan misi karang taruna di RW Anda..."></textarea>
                </div>
              </div>
            </div>

            <!-- Step 3: Kreativitas & Ide (Membangun Katar) -->
            <div v-if="registrationType === 'rw'" v-show="currentStep === 2" class="step-content">
              <h3>{{ t('daftar.kreativitas.title') }}</h3>
              <p>{{ t('daftar.kreativitas.desc') }}</p>
              <div class="form-grid">
                <div class="form-group full-width">
                  <label for="ideProgram">{{ t('daftar.kreativitas.ideProgram') }} *</label>
                  <textarea id="ideProgram" v-model="form.ideProgram" rows="4" placeholder="Contoh: Program Taman Baca Anak, Kelompok Usaha Bersama, Turnamen Olahraga Rutin, Pelatihan Digital untuk Pemuda..."></textarea>
                </div>
                <div class="form-group full-width">
                  <label for="potensiLokal">{{ t('daftar.kreativitas.potensiLokal') }} *</label>
                  <textarea id="potensiLokal" v-model="form.potensiLokal" rows="3" placeholder="Contoh: UMKM lokal, lahan kosong untuk kebun bersama, seni budaya tradisional, dst."></textarea>
                </div>
                <div class="form-group full-width">
                  <label for="targetMasyarakat">{{ t('daftar.kreativitas.targetMasyarakat') }} *</label>
                  <textarea id="targetMasyarakat" v-model="form.targetMasyarakat" rows="3" placeholder="Contoh: Pemuda usia 15-30 tahun, ibu-ibu rumah tangga, lansia, anak-anak usia sekolah..."></textarea>
                </div>
                <div class="form-group full-width">
                  <label for="rencanaAksi">{{ t('daftar.kreativitas.rencanaAksi') }} *</label>
                  <textarea id="rencanaAksi" v-model="form.rencanaAksi" rows="4" placeholder="Langkah-langkah konkret yang akan dilakukan di 3 bulan pertama pembentukan..."></textarea>
                </div>
                <div class="form-group full-width">
                  <label for="dukungan">{{ t('daftar.kreativitas.dukungan') }}</label>
                  <textarea id="dukungan" v-model="form.dukungan" rows="3" placeholder="Contoh: Pendanaan, pelatihan, fasilitas, pengurusan administrasi, koneksi dengan kelurahan..."></textarea>
                </div>
                <div class="form-group full-width">
                  <label for="motivasi">{{ t('daftar.kreativitas.motivasi') }} *</label>
                  <textarea id="motivasi" v-model="form.motivasi" rows="3" placeholder="Apa yang mendorong Anda ingin membangun karang taruna di RW?"></textarea>
                </div>
              </div>
            </div>

            <!-- Step 3: Konfirmasi (Kelurahan) -->
            <div v-if="registrationType === 'kelurahan'" v-show="currentStep === 2" class="step-content">
              <h3>{{ t('daftar.konfirmasi.title') }}</h3>
              <p>{{ t('daftar.konfirmasi.desc') }}</p>
              <div class="confirm-grid">
                <div class="confirm-item">
                  <span class="confirm-label">Nama</span>
                  <span class="confirm-value">{{ form.nama || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Tempat, Tgl Lahir</span>
                  <span class="confirm-value">{{ form.ttl || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Jenis Kelamin</span>
                  <span class="confirm-value">{{ form.jk || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">No. WhatsApp</span>
                  <span class="confirm-value">{{ form.noHP || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Pendidikan</span>
                  <span class="confirm-value">{{ form.pendidikan || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Pekerjaan</span>
                  <span class="confirm-value">{{ form.pekerjaan || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Alamat</span>
                  <span class="confirm-value">{{ form.alamat || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Bidang</span>
                  <span class="confirm-value">{{ form.divisi.length ? form.divisi.join(', ') : '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Motivasi</span>
                  <span class="confirm-value">{{ form.motivasi || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- Step 4: Konfirmasi (RW) -->
            <div v-if="registrationType === 'rw'" v-show="currentStep === 3" class="step-content">
              <h3>{{ t('daftar.konfirmasi.title') }}</h3>
              <p>{{ t('daftar.konfirmasi.desc') }}</p>
              <div class="confirm-grid">
                <div class="confirm-item">
                  <span class="confirm-label">Nama</span>
                  <span class="confirm-value">{{ form.nama || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Tempat, Tgl Lahir</span>
                  <span class="confirm-value">{{ form.ttl || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Jenis Kelamin</span>
                  <span class="confirm-value">{{ form.jk || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">No. WhatsApp</span>
                  <span class="confirm-value">{{ form.noHP || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Pendidikan</span>
                  <span class="confirm-value">{{ form.pendidikan || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Pekerjaan</span>
                  <span class="confirm-value">{{ form.pekerjaan || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Alamat</span>
                  <span class="confirm-value">{{ form.alamat || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Status / Peran</span>
                  <span class="confirm-value">{{ form.statusPeran || '-' }}{{ form.namaPeran ? ' — ' + form.namaPeran : '' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">RW</span>
                  <span class="confirm-value">{{ form.namaRW || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Potensi Pemuda</span>
                  <span class="confirm-value">{{ form.jumlahAnggota ? form.jumlahAnggota + ' orang' : '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Ketua RW / Tokoh</span>
                  <span class="confirm-value">{{ form.ketuaRW || '-' }}</span>
                </div>
                <div class="confirm-item">
                  <span class="confirm-label">Status Katar</span>
                  <span class="confirm-value">{{ form.statusKatar || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Visi & Misi</span>
                  <span class="confirm-value">{{ form.visiMisi || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Program Unggulan</span>
                  <span class="confirm-value">{{ form.ideProgram || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Potensi Lokal</span>
                  <span class="confirm-value">{{ form.potensiLokal || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Target Masyarakat</span>
                  <span class="confirm-value">{{ form.targetMasyarakat || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Rencana Aksi (3 Bulan)</span>
                  <span class="confirm-value">{{ form.rencanaAksi || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Dukungan</span>
                  <span class="confirm-value">{{ form.dukungan || '-' }}</span>
                </div>
                <div class="confirm-item full-width">
                  <span class="confirm-label">Motivasi</span>
                  <span class="confirm-value">{{ form.motivasi || '-' }}</span>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="wizard-nav">
              <button v-if="currentStep > 0" class="btn btn-secondary" @click="prevStep">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                {{ t('common.kembali') }}
              </button>
              <div style="flex: 1;"></div>
              <button v-if="currentStep < maxStep" class="btn btn-primary" @click="nextStep">
                {{ t('common.selanjutnya') }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
              <button v-if="currentStep === maxStep" class="btn btn-whatsapp" @click="submitForm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Kirim via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppModal
      v-model="showConfirmModal"
      :title="t('daftar.modal.title')"
      :message="t('daftar.modal.msg')"
      :confirm-text="t('daftar.modal.confirm')"
      @confirm="actuallySubmit"
    />

    <AppToast
      :visible="showToast"
      :loading="toastLoading"
      :title="toastTitle"
      :message="toastMessage"
      :type="toastType"
    />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import divisionData from '@/data/division.json'
import AppModal from '@/components/AppModal.vue'
import AppToast from '@/components/AppToast.vue'

const { t } = useI18n()

const registrationType = ref(null)
const currentStep = ref(0)
const showConfirmModal = ref(false)
const showToast = ref(false)
const toastLoading = ref(false)
const toastTitle = ref('')
const toastMessage = ref('')
const toastType = ref('success')

const form = ref({
  nama: '',
  ttl: '',
  jk: '',
  noHP: '',
  alamat: '',
  pendidikan: '',
  pekerjaan: '',
  divisi: [],
  motivasi: '',
  statusPeran: '',
  namaPeran: '',
  namaRW: '',
  ketuaRW: '',
  jumlahAnggota: '',
  statusKatar: '',
  visiMisi: '',
  ideProgram: '',
  potensiLokal: '',
  targetMasyarakat: '',
  rencanaAksi: '',
  dukungan: ''
})

const bidangOptions = divisionData.divisions.map(d => d.name)

const kelurahanSteps = computed(() => [
  { label: t('daftar.kelSteps[0]') },
  { label: t('daftar.kelSteps[1]') },
  { label: t('daftar.kelSteps[2]') }
])

const rwStepsData = computed(() => [
  { label: t('daftar.rwSteps[0]') },
  { label: t('daftar.rwSteps[1]') },
  { label: t('daftar.rwSteps[2]') },
  { label: t('daftar.rwSteps[3]') }
])

const currentSteps = computed(() => {
  return registrationType.value === 'kelurahan' ? kelurahanSteps.value : rwStepsData.value
})

const maxStep = computed(() => currentSteps.value.length - 1)

function selectType(type) {
  registrationType.value = type
  currentStep.value = 0
}

function resetType() {
  registrationType.value = null
  currentStep.value = 0
  resetForm()
}

function resetForm() {
  form.value = {
    nama: '', ttl: '', jk: '', noHP: '', alamat: '',
    pendidikan: '', pekerjaan: '', divisi: [], motivasi: '',
    statusPeran: '', namaPeran: '', namaRW: '', ketuaRW: '',
    jumlahAnggota: '', statusKatar: '', visiMisi: '',
    ideProgram: '', potensiLokal: '', targetMasyarakat: '',
    rencanaAksi: '', dukungan: ''
  }
}

function nextStep() {
  if (currentStep.value < maxStep.value) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value--
}

function submitForm() {
  showConfirmModal.value = true
}

function actuallySubmit() {
  showConfirmModal.value = false
  toastLoading.value = true
  showToast.value = true

  const phone = '6285817048266'
  let text = ''

  if (registrationType.value === 'kelurahan') {
    text = `*FORMULIR PENDAFTARAN ANGGOTA*
*Karang Taruna Kel. Sukamaju*
Jenis: Gabung ke Karang Taruna Kelurahan

*DATA DIRI*
Nama: ${form.value.nama}
Tmp/Tgl Lahir: ${form.value.ttl}
Jenis Kelamin: ${form.value.jk}
No. WhatsApp: ${form.value.noHP}
Pendidikan: ${form.value.pendidikan}
Pekerjaan: ${form.value.pekerjaan || '-'}
Alamat: ${form.value.alamat}

*INFORMASI ORGANISASI*
Bidang: ${form.value.divisi.join(', ') || '-'}
Motivasi: ${form.value.motivasi}

---
Dikirim melalui form pendaftaran website`
  } else {
    text = `*FORMULIR PENDAFTARAN KATAR RW*
*Karang Taruna Kel. Sukamaju*
Jenis: Membangun Katar di RW

*DATA DIRI*
Nama: ${form.value.nama}
Tmp/Tgl Lahir: ${form.value.ttl}
Jenis Kelamin: ${form.value.jk}
No. WhatsApp: ${form.value.noHP}
Pendidikan: ${form.value.pendidikan}
Pekerjaan: ${form.value.pekerjaan || '-'}
Alamat: ${form.value.alamat}

*STATUS / PERAN*
Status: ${form.value.statusPeran}
${form.value.namaPeran ? 'Di: ' + form.value.namaPeran : ''}

*INFORMASI RW*
RW: ${form.value.namaRW}
Ketua RW / Tokoh: ${form.value.ketuaRW || '-'}
Potensi Pemuda: ${form.value.jumlahAnggota ? form.value.jumlahAnggota + ' orang' : '-'}
Status Katar: ${form.value.statusKatar || '-'}
Visi & Misi: ${form.value.visiMisi || '-'}

*KREATIVITAS & IDE*
Program Unggulan: ${form.value.ideProgram}
Potensi Lokal: ${form.value.potensiLokal}
Target Masyarakat: ${form.value.targetMasyarakat}
Rencana Aksi (3 Bulan): ${form.value.rencanaAksi}
Dukungan: ${form.value.dukungan || '-'}
Motivasi: ${form.value.motivasi}

---
Dikirim melalui form pendaftaran website`
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  setTimeout(() => {
    window.open(url, '_blank')
    toastLoading.value = false
    toastTitle.value = t('daftar.toast.sent')
    toastMessage.value = t('daftar.toast.sentMsg')
    toastType.value = 'success'
    setTimeout(() => {
      showToast.value = false
      resetType()
    }, 2500)
  }, 2000)
}
</script>

<style scoped>
.page-header {
  padding: 120px 0 56px;
  text-align: center;
  background: var(--bg-main);
  border-bottom: 1px solid var(--border-light);
}

.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin: 14px 0;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Type Selection */
.type-selection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.type-card {
  padding: 36px 32px;
  cursor: pointer;
  transition: var(--transition);
  border: 2px solid transparent;
}

.type-card:hover {
  border-color: var(--secondary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.type-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.type-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.type-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.type-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.type-meta span {
  font-weight: 600;
}

/* Wizard */
.wizard-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.wizard-progress {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.progress-step {
  display: flex;
  align-items: center;
  gap: 8px;
}

.step-circle {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 2px solid var(--border);
  color: var(--text-muted);
  font-weight: 700;
  font-size: 0.85rem;
  transition: var(--transition);
}

.progress-step.active .step-circle {
  background: var(--secondary);
  border-color: var(--secondary);
  color: #fff;
}

.progress-step.current .step-circle {
  box-shadow: 0 0 0 4px rgba(15, 157, 88, 0.2);
}

.step-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.progress-step.active .step-label {
  color: var(--secondary);
}

.wizard-type-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.type-badge {
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

.type-badge.kelurahan {
  background: rgba(220, 38, 38, 0.1);
  color: #DC2626;
}

.type-badge.rw {
  background: rgba(37, 99, 235, 0.1);
  color: #2563EB;
}

.change-type-btn {
  background: none;
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition-fast);
}

.change-type-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.wizard-content {
  padding: 40px;
}

.step-content h3 {
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.step-content > p {
  color: var(--text-secondary);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 6px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition-fast);
}

.checkbox-label:hover {
  border-color: var(--secondary);
  background: rgba(15, 157, 88, 0.04);
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--secondary);
}

.confirm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.confirm-item {
  padding: 16px;
  background: var(--bg-main);
  border-radius: var(--radius);
}

.confirm-item.full-width {
  grid-column: span 2;
}

.confirm-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.confirm-value {
  font-weight: 600;
  font-size: 0.95rem;
}

.wizard-nav {
  display: flex;
  align-items: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-light);
}

@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; }
  .type-selection { grid-template-columns: 1fr; }
  .type-card { padding: 28px 24px; }
  .wizard-content { padding: 24px; }
  .form-grid { grid-template-columns: 1fr; }
  .form-group.full-width { grid-column: span 1; }
  .checkbox-grid { grid-template-columns: 1fr; }
  .confirm-grid { grid-template-columns: 1fr; }
  .confirm-item.full-width { grid-column: span 1; }
  .step-label { display: none; }
}
</style>
