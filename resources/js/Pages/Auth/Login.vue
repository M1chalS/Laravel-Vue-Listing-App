<template>
    <form @submit.prevent="login">
        <div class="w-1/2 mx-auto">
            <div class="mb-4">
                <label class="label" for="email">
                    Email
                </label>
                <input
                    class="input"
                    id="email" type="text" placeholder="Email" v-model="form.email">
                <div class="input-error" v-if="form.errors.email">
                    {{ form.errors.email }}
                </div>
            </div>
            <div class="my-4">
                <label class="label" for="password">
                    Password
                </label>
                <input
                    class="input"
                    id="password" type="password" placeholder="******************" v-model="form.password">
                <div class="input-error" v-if="form.errors.password">
                    {{ form.errors.password }}
                </div>
            </div>
            <div class="mt-4">
                <button
                    class="btn-primary w-full"
                    type="submit">
                    Sign In
                </button>

                <div class="mt-2 text-center">
                    <Link :href="route('user-account.create')" class="text-sm text-gray-500">
                        Need an account? Click here to register.
                    </Link>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

import { Link, useForm } from "@inertiajs/inertia-vue3";
import route from "../../../../vendor/tightenco/ziggy/src/js";

const form = useForm({
    email: null,
    password: null,
});

const login = () => {
    form.post(route('login'));
};

</script>
