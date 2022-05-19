import { defineStore } from 'pinia'

interface Create {
  fullName: string
  email: string
  password: string
}
interface User {
  email: string
  password: string
}
interface Toggle {
  inputFieldType: string
  eyeClosed: string
}
export const useAuth = defineStore({
  id: 'auth',
  state: ()=> ({
    newUser: <Create> {
      fullName: '',
      email: '',
      password: ''
    },
    user:<User> {
      email: '',
      password: ''
    },
    passwordField:<Toggle> {
      inputFieldType: 'password',
      eyeClosed: 'fa-eye-slash'
    }
  }),
  actions: {
    togglePassword(){
      this.passwordField.eyeClosed = this.passwordField.eyeClosed === 'fa-eye-slash' ? 'fa-eye' : 'fa-eye-slash'
      this.passwordField.inputFieldType = this.passwordField.inputFieldType === 'password' ? 'text' : 'password';
    }
  }
})