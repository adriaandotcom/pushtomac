<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <Html
      lang="en-US"
      class="h-full bg-purple-50 dark:bg-purple-900"
      :class="{ 'scroll-smooth': true }"
    >
      <Head>
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b54baa" />
        <Meta name="msapplication-TileColor" content="#b54baa" />
        <Meta name="theme-color" content="#b54baa" />
      </Head>
    </Html>

    <main>
      <NuxtLink to="/">
        <img
          src="/ios-icon.svg"
          alt="Push to Mac Icon"
          class="h-20 rounded-lg mt-16 mx-auto"
        />
      </NuxtLink>

      <NuxtLink to="/"
        ><h1
          class="p-8 font-bold text-center text-4xl sm:text-6xl text-purple-600 dark:text-purple-200"
        >
          Push To Mac
        </h1>
      </NuxtLink>

      <p class="text-center mb-20">
        Never forget a task when you're going back to your Mac.
      </p>

      <slot></slot>

      <p class="flex justify-center my-20">
        <NuxtLink
          v-if="path !== '/privacy'"
          to="/privacy"
          class="flex justify-center items-center border rounded-lg py-2 px-4 text-purple-400 dark:text-purple-100 border-purple-400 dark:border-purple-100 mx-2"
          ><svg
            class="inline-block mr-2 fill-purple-400 dark:fill-purple-100"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.955 13.934c0 .789-.639 1.428-1.428 1.428s-1.427-.639-1.427-1.428l.027-.276c.702.257 1.393-.42 1.145-1.128l.256-.023c.788-.001 1.427.639 1.427 1.427zm5.045-.233s-2.316 4.299-6.528 4.299c-2.622 0-4.668-2.173-5.733-3.316-.313-.336-.751-.527-1.211-.527h-.89c-.311 0-.407-.124-.499-.315l-.574-1.312-.999 2.553c-.183.467-.856.412-.966-.073l-1.058-5.51-1.167 8.075c-.088.542-.857.577-.991.042l-1.146-5.453-.441 1.508c-.052.175-.235.328-.458.328h-1.339v-1h.94l.823-3.041c.157-.487.881-.428 1.005.063l1.055 4.655s1.037-7.912 1.11-8.253c.126-.583.943-.547 1.067-.001l1.225 6.751.847-2.165c.165-.422.759-.431.938-.015l.958 2.146h.741c.422 0 .829-.162 1.136-.452 1.058-1 2.996-2.689 5.627-2.689 4.191.001 6.528 3.702 6.528 3.702zm-3.934.233c0-1.402-1.137-2.539-2.539-2.539s-2.538 1.137-2.538 2.539 1.136 2.538 2.538 2.538 2.539-1.136 2.539-2.538z"
            />
          </svg>
          Privacy policy</NuxtLink
        >
        <NuxtLink
          v-if="path !== '/'"
          to="/"
          class="flex justify-center items-center border rounded-lg py-2 px-4 text-purple-400 dark:text-purple-100 border-purple-400 dark:border-purple-100 mx-2"
          ><svg
            class="inline-block mr-2 fill-purple-400 dark:fill-purple-100"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M9 23h-6v-10l8.991-8.005 9.009 8.005v10h-6v-3c0-1.654-1.355-3.021-3.009-3.021-1.655 0-2.991 1.367-2.991 3.021v3zm2.252-11.015c.094-.002 1.385-.002 1.477 0 1.17.016 1.264-.998 2.259-.998.643 0 .995.524.999.999.005.474-.28.825-.622.995.327.177.619.527.622 1.002.003.475-.347.999-.999.999-.995 0-1.089-1.015-2.259-.998h-1.477c-1.17-.017-1.264.998-2.259.998-.652 0-1.002-.524-.999-.999.003-.475.295-.825.622-1.002-.342-.17-.627-.521-.622-.995.004-.475.356-.999.999-.999.995 0 1.089 1.014 2.259.998zm.748-10.985l12 10.632-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.481 12-10.644z"
            />
          </svg>
          Home</NuxtLink
        >
        <NuxtLink
          v-if="path !== '/contact'"
          to="/contact"
          class="flex justify-center items-center border rounded-lg py-2 px-4 text-purple-400 dark:text-purple-100 border-purple-400 dark:border-purple-100 mx-2"
          ><svg
            class="inline-block mr-2 fill-purple-400 dark:fill-purple-100"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z"
            />
          </svg>
          Contact</NuxtLink
        >
      </p>
    </main>
  </div>
</template>

<script setup>
const { path } = useRoute();
</script>
