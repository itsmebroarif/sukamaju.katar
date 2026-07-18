<template>
  <teleport to="body">
    <transition name="toast">
      <div v-if="visible" class="toast-overlay">
        <div class="toast-container">
          <div class="toast-spinner" v-if="loading">
            <div class="spinner"></div>
          </div>
          <div class="toast-icon" v-else :class="type">
            <svg v-if="type === 'success'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          </div>
          <h4>{{ loading ? 'Mengirim ke WhatsApp...' : title }}</h4>
          <p>{{ message }}</p>
          <div class="toast-progress" v-if="loading">
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'AppToast',
  props: {
    visible: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    type: { type: String, default: 'success' }
  }
}
</script>

<style scoped>
.toast-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.toast-container {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 40px 48px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 360px;
  width: 90%;
}

.toast-spinner {
  margin: 0 auto 20px;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--border-light);
  border-top-color: #25D366;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.toast-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.toast-icon.success {
  background: rgba(22, 163, 74, 0.1);
  color: #16A34A;
}

.toast-icon.error {
  background: rgba(220, 38, 38, 0.1);
  color: #DC2626;
}

.toast-container h4 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.toast-container p {
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.6;
}

.toast-progress {
  margin-top: 20px;
  height: 3px;
  background: var(--border-light);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #25D366;
  border-radius: 2px;
  animation: progress 2s ease-in-out;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

/* Transition */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease;
}

.toast-enter-active .toast-container,
.toast-leave-active .toast-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.toast-enter-from .toast-container {
  transform: scale(0.85);
  opacity: 0;
}

.toast-leave-to .toast-container {
  transform: scale(0.9);
  opacity: 0;
}
</style>
