<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/logo.png" :alt="t('footer.brandTag')" class="footer-logo-img">
              <span>{{ t('footer.brandName') }}</span>
            </div>
            <p>{{ t('footer.description') }}</p>
            <div class="footer-social">
              <a href="https://instagram.com/sukamajuhub" target="_blank" rel="noopener" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://tiktok.com/@sukamajuhub" target="_blank" rel="noopener" title="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.81a4.84 4.84 0 01-1-.12z"/></svg>
              </a>
              <a href="https://youtube.com/@SukamajuHub" target="_blank" rel="noopener" title="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/6285817048266" target="_blank" rel="noopener" title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>{{ t('footer.navigation') }}</h4>
            <router-link to="/">{{ t('nav.home') }}</router-link>
            <router-link to="/tentang">{{ t('footer.aboutUs') }}</router-link>
            <router-link to="/kegiatan">{{ t('nav.activities') }}</router-link>
            <router-link to="/galeri">{{ t('nav.gallery') }}</router-link>
            <router-link to="/divisi">{{ t('nav.divisions') }}</router-link>
            <router-link to="/kontak">{{ t('nav.contact') }}</router-link>
          </div>

          <div class="footer-col">
            <h4>{{ t('footer.services') }}</h4>
            <router-link to="/daftar">{{ t('footer.registerMember') }}</router-link>
            <a href="https://wa.me/6285817048266" target="_blank" rel="noopener">{{ t('footer.complaintReport') }}</a>
            <a href="https://wa.me/6285817048266" target="_blank" rel="noopener">{{ t('footer.donation') }}</a>
          </div>

          <div class="footer-col">
            <h4>{{ t('nav.contact') }}</h4>
            <div class="contact-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ t('footer.address') }}
            </div>
            <a href="mailto:info@sukamajuhub.id" class="contact-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@sukamajuhub.id
            </a>
            <a href="https://wa.me/6285817048266" target="_blank" rel="noopener" class="contact-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              0858-1704-8266
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 {{ t('footer.brandName') }}. {{ t('footer.allRights') }}</p>
          <p>{{ t('footer.developedBy') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: auto;
}

.footer-main {
  background: #111827;
  color: rgba(255,255,255,0.6);
  padding: 56px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr 1fr;
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.footer-logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 4px;
}

.footer-logo span {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
}

.footer-brand > p {
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 18px;
}

.footer-social {
  display: flex;
  gap: 8px;
}

.footer-social a {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.5);
  transition: var(--transition-fast);
}

.footer-social a:hover {
  background: var(--primary);
  color: #fff;
}

.footer-col h4 {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  color: #fff;
  margin-bottom: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.footer-col a,
.footer-col .contact-line {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 10px;
  transition: var(--transition-fast);
}

.footer-col a:hover {
  color: #fff;
}

.footer-bottom {
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 6px; text-align: center; }
}
</style>
