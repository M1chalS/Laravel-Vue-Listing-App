<template>
    <form @submit.prevent="register">
        <div class="w-1/2 mx-auto">
            <div class="mb-4">
                <label class="label" for="email">
                    Name
                </label>
                <input
                    class="input"
                    id="email" type="text" placeholder="Name" v-model="form.name">
                <div class="input-error" v-if="form.errors.name">
                    {{ form.errors.name }}
                </div>
            </div>
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
            <div class="my-4">
                <label class="label" for="password">
                    Password Confirmation
                </label>
                <input
                    class="input"
                    id="password" type="password" placeholder="******************" v-model="form.password_confirmation">
                <div class="input-error" v-if="form.errors.password_confirmation">
                    {{ form.errors.password_confirmation }}
                </div>
            </div>
            <div class="mt-4">
                <button
                    class="btn-primary w-full"
                    type="submit">
                    Create Account
                </button>

                <div class="mt-2 text-center">
                    <Link :href="route('login')" class="text-sm text-gray-500">
                        Already have an account? Click here to login.
                    </Link>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

import { Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
});

const register = () => {
    form.post(route('user-account.store'));
};

</script>
