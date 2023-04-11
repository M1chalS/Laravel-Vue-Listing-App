<template>

    <header class="border-b border-gray-200 dark:border-gray-900 dark:bg-gray-800 bg-white w-full">
        <div class="container m-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-lg">
                    <Link :href="route('listing.index')">Listings</Link>
                </div>
                <div class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center">
                    <Link :href="route('listing.index')">LaraZillow</Link>
                </div>
                <div class="flex items-center gap-4" v-if="user">
                    <div>
                        {{ user.name }}
                    </div>
                    <Link :href="route('listing.create')"
                          class="btn-primary">+ New Listing
                    </Link>
                    <Link :href="route('logout')" method="DELETE" as="embed" class="cursor-pointer">Logout</Link>
                </div>
                <div v-else class="flex items-center gap-3">
                    <Link :href="route('user-account.create')">Sign up</Link>
                    <Link :href="route('login')">Sign in</Link>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto p-4 w-full">
        <div v-if="flashSuccess"
             class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
            {{ flashSuccess }}
        </div>

        <slot>Default</slot>
    </main>

</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);

const user = computed(() => page.props.value.user);

</script>
