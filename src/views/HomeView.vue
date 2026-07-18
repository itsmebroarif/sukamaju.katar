<template>
  <div class="home">
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <ProgramsSection />
    <VisionSection />
    <TestimonialsSection />
    <CtaSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ProgramsSection from '@/components/home/ProgramsSection.vue'
import VisionSection from '@/components/home/VisionSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    StatsSection,
    AboutSection,
    ProgramsSection,
    VisionSection,
    TestimonialsSection,
    CtaSection
  }
}
</script>

<style scoped>
</style>
