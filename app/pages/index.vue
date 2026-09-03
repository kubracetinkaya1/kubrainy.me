<script setup lang="ts">
const { data: home } = await useAsyncData('home', () => queryCollection('content').path('/').first())
const { data: socials } = await useAsyncData('socials', () => queryCollection('socials').all())
const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all())
</script>

<template>
  <UPage>
    <UPageBody>
      <UContainer class="lg:mt-36 md:mt-24 mt-24">
        <div class="prose-scale">
          <ClientOnly>
            <ContentRenderer v-if="home" :value="home" />
          </ClientOnly>

          <USeparator class="my-6" />

          <section v-if="projects?.length">
            <h2 class="font-display text-xl text-highlighted">
              Projeler
            </h2>

            <ul class="mt-4 flex flex-col gap-4">
              <li v-for="project in projects" :key="project.name">
                <ULink
                  :to="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-1 text-default transition-colors hover:text-primary"
                >
                  {{ project.name }}
                  <UIcon
                    name="i-tabler-arrow-up-right"
                    class="size-3 -translate-x-1 translate-y-0.5 text-primary opacity-0 transition duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </ULink>
                <p class="mt-1 text-sm text-muted">
                  {{ project.description }}
                </p>
              </li>
            </ul>
          </section>

          <USeparator class="my-6" />

          <div v-if="socials?.length" class="flex flex-wrap items-center gap-1">
            <UButton
              v-for="social in socials"
              :key="social.name"
              :to="social.url"
              :icon="social.icon"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              color="neutral"
              variant="link"
              size="sm"
            />
          </div>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
