<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click.self="cancel">
        <div class="modal-container" ref="container">
          <div class="modal-header">
            <div class="modal-icon" :style="{ background: iconBg }">
              <slot name="icon">
                <svg v-if="type === 'confirm'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <svg v-else-if="type === 'success'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              </slot>
            </div>
            <h3>{{ title }}</h3>
            <p>{{ message }}</p>
          </div>
          <div class="modal-body" v-if="$slots.body">
            <slot name="body" />
          </div>
          <div class="modal-actions">
            <button v-if="showCancel" class="btn btn-secondary" @click="cancel">
              {{ cancelText }}
            </button>
            <button class="btn" :class="confirmClass" @click="confirm">
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: 'Konfirmasi' },
    message: { type: String, default: '' },
    type: { type: String, default: 'confirm' },
    confirmText: { type: String, default: 'Ya, Lanjutkan' },
    cancelText: { type: String, default: 'Batal' },
    showCancel: { type: Boolean, default: true }
  },
  emits: ['update:modelValue', 'confirm', 'cancel'],
  computed: {
    iconBg() {
      if (this.type === 'confirm') return 'rgba(245, 158, 11, 0.1)'
      if (this.type === 'success') return 'rgba(22, 163, 74, 0.1)'
      return 'rgba(37, 99, 235, 0.1)'
    },
    confirmClass() {
      if (this.type === 'confirm') return 'btn-primary'
      if (this.type === 'success') return 'btn-primary'
      return 'btn-primary'
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
      this.$emit('update:modelValue', false)
    },
    cancel() {
      this.$emit('cancel')
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-container {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  padding: 32px 32px 0;
  text-align: center;
}

.modal-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.modal-header h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.modal-header p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.modal-body {
  padding: 0 32px;
}

.modal-actions {
  display: flex;
  gap: 10px;
  padding: 24px 32px 32px;
  justify-content: flex-end;
}

.modal-actions .btn {
  min-width: 120px;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>
