<template>
  <div class="kontak-page">
    <section class="page-header">
      <div class="container">
        <span class="section-label red" v-reveal>{{ t('kontak.pageLabel') }}</span>
        <h1 class="page-title" v-reveal>{{ t('kontak.pageTitle') }}</h1>
        <p class="page-subtitle" v-reveal>{{ t('kontak.pageSubtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="kontak-grid">
          <!-- Contact Info -->
          <div class="contact-info" v-reveal>
            <h2>{{ t('kontak.infoTitle') }}</h2>
            <p>{{ t('kontak.infoDesc') }}</p>

            <div class="info-cards">
              <div class="info-card">
                <div class="info-icon" style="background: rgba(15, 157, 88, 0.1); color: var(--secondary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Sekretariat</h4>
                  <p>Kelurahan Cilodong, Kecamatan Sukamaju</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon" style="background: rgba(37, 211, 102, 0.1); color: #25D366;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/6285817048266" target="_blank" rel="noopener">0858-1704-8266</a>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon" style="background: rgba(229, 57, 53, 0.1); color: var(--danger);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@sukamajuhub.id">info@sukamajuhub.id</a>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon" style="background: rgba(244, 180, 0, 0.1); color: var(--primary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <a href="https://instagram.com/sukamajuhub" target="_blank" rel="noopener">@sukamajuhub</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper card reveal-delay-2" v-reveal>
            <h3>{{ t('kontak.formTitle') }}</h3>
            <p>{{ t('kontak.formDesc') }}</p>
            <form @submit.prevent="sendToWhatsApp" class="contact-form">
              <div class="form-group">
                <label for="name">{{ t('kontak.formName') }} *</label>
                <input type="text" id="name" v-model="form.name" placeholder="Masukkan nama lengkap" required>
              </div>
              <div class="form-group">
                <label for="subject">{{ t('kontak.formSubject') }} *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Pilih subjek</option>
                  <option value="Umum">Pertanyaan Umum</option>
                  <option value="Keanggotaan">Keanggotaan</option>
                  <option value="Kerjasama">Kerjasama</option>
                  <option value="Donasi">Donasi</option>
                  <option value="Pengaduan">Pengaduan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">{{ t('kontak.formMessage') }} *</label>
                <textarea id="message" v-model="form.message" rows="5" placeholder="Tulis pesan Anda..." required></textarea>
              </div>
              <button type="submit" class="btn btn-whatsapp" style="width: 100%;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {{ t('kontak.formBtn') }}
              </button>
            </form>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="map-section" v-reveal>
          <h3>{{ t('kontak.mapTitle') }}</h3>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNnPCsDEyJzAwLjAiUyAxMDbCsDQ4JzAwLjAiRQ!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="400"
              style="border:0; border-radius: var(--radius-lg);"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Social Media -->
        <div class="social-section" v-reveal>
          <h3>{{ t('kontak.socialTitle') }}</h3>
          <p>{{ t('kontak.socialDesc') }}</p>
          <div class="social-grid">
            <a href="https://instagram.com/sukamaju.katar" target="_blank" rel="noopener" class="social-card card">
              <div class="social-icon" style="background: linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45);">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12" r="5" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/></svg>
              </div>
              <h4>Instagram</h4>
              <span>@sukamaju.katar</span>
            </a>
            <a href="https://wa.me/6285817048266" target="_blank" rel="noopener" class="social-card card">
              <div class="social-icon" style="background: #25D366;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h4>WhatsApp</h4>
              <span>0858-1704-8266</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <AppModal
      v-model="showConfirmModal"
      :title="t('kontak.modalTitle') || 'Kirim Pesan?'"
      :message="t('kontak.modalMsg') || 'Pesan akan dikirim ke WhatsApp Sukamaju Hub. Lanjutkan?'"
      :confirm-text="t('common.ya_kirim')"
      @confirm="actuallySend"
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
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'
import AppToast from '@/components/AppToast.vue'

const { t } = useI18n()

const form = ref({
  name: '',
  phone: '',
  subject: '',
  message: ''
})

const showConfirmModal = ref(false)
const showToast = ref(false)
const toastLoading = ref(false)
const toastTitle = ref('')
const toastMessage = ref('')
const toastType = ref('success')

function sendToWhatsApp() {
  showConfirmModal.value = true
}

function actuallySend() {
  showConfirmModal.value = false
  toastLoading.value = true
  showToast.value = true

  const phone = '6285817048266'
  const text = `*Pesan dari Website Sukamaju Hub*

*Nama:* ${form.value.name}
*Subjek:* ${form.value.subject}

*Pesan:*
${form.value.message}

---
Dikirim melalui form kontak website`
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  setTimeout(() => {
    window.open(url, '_blank')
    toastLoading.value = false
    toastTitle.value = t('kontak.toastTitle') || 'Terkirim!'
    toastMessage.value = t('kontak.toastMsg') || 'Pesan Anda akan dibuka di WhatsApp.'
    toastType.value = 'success'
    setTimeout(() => {
      showToast.value = false
      form.value = { name: '', phone: '', subject: '', message: '' }
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

.kontak-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 60px;
}

.contact-info h2 {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.contact-info > p {
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.7;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  transition: var(--transition);
}

.info-card:hover {
  box-shadow: var(--shadow);
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-card h4 {
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.info-card p, .info-card a {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.info-card a:hover {
  color: var(--secondary);
}

.contact-form-wrapper {
  padding: 36px;
}

.contact-form-wrapper h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.contact-form-wrapper > p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.map-section {
  margin-bottom: 60px;
}

.map-section h3 {
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.social-section {
  text-align: center;
}

.social-section h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.social-section > p {
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.social-card {
  padding: 28px 20px;
  text-align: center;
  transition: var(--transition);
}

.social-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.social-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.social-card h4 {
  font-size: 1rem;
  margin-bottom: 4px;
}

.social-card span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; }
  .kontak-grid { grid-template-columns: 1fr; }
  .social-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
