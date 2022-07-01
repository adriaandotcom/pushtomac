<template>
  <NuxtLayout name="default">
    <div class="relative">
      <div
        class="mac xs:m-8 m-16 mb-72 relative rounded-xl shadow-lg overflow-hidden bg-[#83c7ec] dark:bg-[#05172b]"
      >
        <div
          class="flex items-center absolute top-0 text-right text-sm px-2 left-0 right-0 h-6 bg-notification-background-light bg-black shadow-lg"
        >
          <svg
            class="fill-gray-200 h-4 w-4 mr-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"
            />
          </svg>
          <ClientOnly>
            <time class="text-gray-200">{{ time }}</time>
          </ClientOnly>
        </div>
        <div
          class="transition-all absolute top-10 flex justify-start items-center bg-[#E6E6E6] dark:bg-[#2C2C2C] p-3 border border-[#B3B3B3] dark:border-[#515151] dark:text-white rounded-2xl shadow-lg"
          :class="show ? 'right-4' : '-right-96'"
          style="width: 345px; max-width: calc(100% - 2rem)"
        >
          <img
            src="/ios-icon.svg"
            alt="Push to Mac Icon"
            class="h-12 w-12 rounded-lg mr-2"
          />
          <div class="">
            <p class="font-bold text-sm text-black dark:text-white">
              Push to Mac
            </p>
            <p class="text-sm text-black dark:text-white">{{ notification }}</p>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center absolute top-40 xs:left-20 left-32"
      >
        <div class="relative">
          <div
            class="h-6 w-0.5 rounded-l-sm bg-red-500 absolute -left-0.5 top-16"
          ></div>
          <div
            class="h-8 w-0.5 rounded-l-sm bg-red-500 absolute -left-0.5 top-28"
          ></div>
          <div
            class="h-8 w-0.5 rounded-l-sm bg-red-500 absolute -left-0.5 top-40"
          ></div>
          <div class="h-auto w-64 bg-red-500 rounded-4xl p-1 overflow-hidden">
            <div
              class="h-full w-full bg-black rounded-4xl overflow-hidden p-2 relative"
            >
              <div
                class="w-28 h-6 bg-black absolute left-1/2 rounded-b-2xl transform -translate-x-1/2"
              ></div>
              <div
                style="aspect-ratio: 1170/2532"
                class="rounded-4xl bg-white dark:bg-gray-900 pt-16 text-xs text-black dark:text-gray-300"
              >
                <div v-for="task in tasks" :key="task.id">
                  <p class="px-3 flex items-center dark:text-white">
                    <span
                      class="inline-flex border-2 rounded-full w-5 h-5 mr-2 dark:border-gray-300"
                    ></span>
                    {{ task.title }}
                  </p>
                  <hr class="border-t my-2" />
                </div>

                <form
                  class="px-3 flex items-center"
                  @submit.prevent="enterClicked()"
                >
                  <span
                    class="inline-block border-2 rounded-full w-5 h-5 mr-2"
                  ></span
                  ><input
                    class="bg-transparent border-none w-full dark:text-white focus:outline-none"
                    ref="input"
                    type="text"
                    v-model="task"
                    placeholder="Enter a task..."
                  />
                </form>
              </div>
            </div>
          </div>
          <div
            class="h-14 w-0.5 rounded-l-sm bg-red-500 absolute -right-0.5 top-32"
          ></div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Push To Mac",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    class: "h-full bg-purple-50 dark:bg-purple-900",
  },
});

import { ref, onMounted } from "vue";

const showNotificationDuration = 5000;

const zeroFill = (seconds) => {
  const s = seconds.toString();
  return s.length === 1 ? `0${s}` : s;
};

const clock = () => {
  const date = new Date();
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());
  const seconds = zeroFill(date.getSeconds());
  const time = `${hours}:${minutes}:${seconds}`;
  return time;
};

const input = ref();
const time = ref(clock());
const show = ref(false);
const task = ref("");
const notification = ref("");

const tasks = ref([
  {
    id: 1,
    title: "Send invoice to customer",
    completed: false,
  },
  {
    id: 2,
    title: "RSVP to wedding Jane & John",
    completed: false,
  },
]);

let timeout = null;

const enterClicked = () => {
  show.value = false;
  if (timeout) clearTimeout(timeout);

  setTimeout(() => {
    show.value = true;
    notification.value = task.value;

    const biggestId = tasks.value.reduce((acc, task) => {
      return task.id > acc ? task.id : acc;
    }, 0);

    tasks.value.push({
      id: biggestId + 1,
      title: task.value,
      completed: false,
    });

    task.value = "";

    timeout = setTimeout(() => {
      show.value = false;
    }, showNotificationDuration);
  }, 250);
};

const type = "Email Dave      ";
let forward = true;

let typingInterval = setInterval(() => {
  if (forward) {
    task.value = type.substr(0, task.value.length + 1);
    if (task.value.length === type.length) {
      forward = false;
    }
  } else {
    task.value = type.substr(0, task.value.length - 1);
    if (task.value.length === 0) {
      clearInterval(typingInterval);
    }
  }
}, 150);

setInterval(() => {
  time.value = clock();
}, 1000);

onMounted(() => {
  input?.value?.addEventListener("focus", () => {
    console.log("focus");
    if (typingInterval) clearTimeout(typingInterval);
    task.value = "";
  });
});

definePageMeta({
  layout: false,
});
</script>
