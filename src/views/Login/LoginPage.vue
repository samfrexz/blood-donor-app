<template>
  <main class="w-full flex">
    <div class="w-1/2 h-full hidden md:block">
      <img src="@/assets/loginbg.png" alt="login background">
    </div>

    <div class="lg:w-1/2 text-gray-400 bg-gray-50 w-full h-full">
      <form @submit.prevent="submitUserDetails" class="md:w-fom w-4/5 mx-auto">
        <div class="w-full my-2 mt-12 md:mt-24">
          <div class="w-full mb-11">
            <h2 class="text-gray-900 text-3xl py-1">Login</h2>
            <p class="mt-3">Welcome back!</p>
          </div>

            <label for="email" class="block my-4">Email Address</label>
          <div class="input bg-white">
            <input type="email" id="email" v-model="user.email" class="w-full">
          </div>

            <label for="pwd" class="block my-4">Password</label>
          <div class="input">
            <input :type="hide.inputFieldType" id="pwd" v-model="user.password" class="w-full bg-white" />
            <span @click="togglePasswordVisibility" class="cursor-pointer">
              <span :class="hide.eyeClosed" class="fa-regular text-gray-700"></span>
            </span>
          </div>
            <div class="text-right w-full text-gray-700 text-sm">
              <p><router-link to="#">Forgot Password?</router-link></p>
            </div>

          <div class="w-full my-8">
            <button class="w-full text-gray-100 rounded-lg p-3">Login</button>
          </div>
          <div class="mt-3 text-center">
            <p>Not yet registered? <router-link :to="{ name: 'OnBoarding'}" class="text-gray-800">Create account</router-link></p>
          </div>
        </div>
      </form> 
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAuth } from '@/store/useAuth';
const login = useAuth()
const user = login.user
const hide = login.passwordField
const togglePasswordVisibility =()=> login.togglePassword()
const submitUserDetails =()=> {
  console.log(`${user.email} ${user.password}`)
  user.email = ''
  user.password = ''
}

</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    img {
      background-size: cover;
      height: 100%;
    }
    input {
      outline: none;
      border: none;
      // background: red;
    }
    .input {
      display: flex;
      align-items: center;
      border: 2px solid #f1f1f1;
      border-radius: 6px;
      padding: 8px;
      background: #ffffff;
    }
  }
  button {
    background: #C92727;
  }
</style>