<template>
  <main class="w-full flex">
    <div class="w-1/2 h-full hidden md:block">
      <img src="@/assets/loginbg.png" alt="login background">
    </div>

    <div class="lg:w-1/2 text-gray-400 bg-gray-50 w-full h-full">
      <form @submit.prevent="submitDetails" class="md:w-fom w-4/5 mx-auto">
        <div class="w-full my-2 mt-12 md:mt-24">
          <div class="w-full mb-11">
            <h2 class="text-gray-900 text-3xl py-1">Create Account</h2>
            <p class="mt-3">Create an account here to schedule your first donation</p>
          </div>

            <label for="fname" class="block my-4">Fullname</label>
          <div class="input">
            <input type="text" id="fname" v-model="newDetails.fullName" class="w-full">
          </div>

            <label for="email" class="block my-4">Email</label>
          <div class="input bg-white">
            <input type="email" id="email" v-model="newDetails.email" class="w-full">
          </div>

            <label for="pwd" class="block my-4">Password</label>
          <div class="input">
            <input :type="hideDetails.inputFieldType" id="pwd" v-model="newDetails.password" class="w-full bg-white" />
            <span @click="togglePasswordVisibility" class="cursor-pointer">
              <span :class="hideDetails.eyeClosed" class="fa-regular text-gray-700"></span>
            </span>
          </div>

          <div class="w-full my-8">
            <button class="w-full text-gray-100 rounded-lg p-3">Create Account</button>
          </div>
          <div class="mt-3 text-center">
            <p>Have an account already? <router-link :to="{ name: 'LoginPage'}" class="text-gray-800">Login</router-link></p>
          </div>
        </div>
      </form> 
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAuth } from "@/store/useAuth";
  const auth = useAuth()
  const newDetails = auth.newUser
  const hideDetails = auth.passwordField
  const togglePasswordVisibility = () => {
    auth.togglePassword()
  }
  function submitDetails() {
    console.log(`${newDetails.email}, ${newDetails.password}`)
    newDetails.email = ''
    newDetails.fullName = ''
    newDetails.password = ''
    
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