<template>
  <div class="authincation h-100 py-5">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-md-6">
          <div class="authincation-content">
            <div class="row no-gutters">
              <div class="col-xl-12">
                <div class="auth-form">
                  <div class="text-center mb-3">
                    <h1 class="d-inline text-primary">Chef</h1>
                    <h6 class="d-inline text-primary">Automate</h6>
                  </div>
                  <h4 class="text-center mb-4">Sign up your account</h4>

                  <form @submit.prevent="Register">
                    <div class="form-group">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" placeholder="Emmanuel Eze" v-model="registerData.name"
                        required>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" placeholder="hello@example.com"
                        v-model="registerData.email" required>
                    </div>
                    <label class="form-label">Password</label>
                    <div class="mb-3 position-relative">
                      <input type="password" id="dz-password" class="form-control" value="123456"
                        v-model="registerData.password" required />
                      <span class="show-pass eye">
                        <i class="fa fa-eye-slash"></i>
                        <i class="fa fa-eye"></i>
                      </span>
                      <p class="fs-6 mt-2 text-danger" v-if="validationError">Password must have 8 characters with upper
                        and lower case letters and a special character.</p>
                    </div>
                    <div class="text-center mt-4">
                      <button type="submit" class="btn btn-primary btn-block">
                        Sign me up
                      </button>
                    </div>
                  </form>
                  <div class="new-account mt-3">
                    <p class="mb-0">
                      Already have an account?
                      <RouterLink class="text-primary" to="login">Sign in</RouterLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the Auth service from services
import AuthService from "../services/auth";
import '../Utilities/notiflix/notiflix'
export default {
  name: "Register", // Component name

  data() {
    return {
      // Data properties for registration form and validation error handling
      registerData: {
        name: "",
        email: "",
        password: "",
      },
      validationError: false, // Flag for validation error
    }
  },
  computed: {
    // Computed properties to check password strength
    hasNumbers() {
      return /[0-9]+/.test(this.registerData.password); // Check if password has numbers
    },
    hasUppercase() {
      return /[A-Z]+/.test(this.registerData.password); // Check if password has uppercase letters
    },
    hasLowercase() {
      return /[a-z]+/.test(this.registerData.password); // Check if password has lowercase letters
    },
    characterMin() {
      return this.registerData.password.length >= 8; // Check if password meets minimum length requirement
    },
  },
  methods: {
    Register() {
      // Validate the password before continuing the registration process
      if (this.hasNumbers && this.hasUppercase && this.hasLowercase && this.characterMin) {
        // If password meets validation criteria, proceed with registration
        Notiflix.Loading.pulse('please wait...'); // Show loading animation

        // Call AuthService to register user
        AuthService.registerUser(this.registerData, (response) => {
          if (response.status === true) {
            // If registration is successful, show success message
            Notiflix.Loading.remove(); // Remove loading animation
            this.$swal({
              title: "Success!",
              text: "You have been registered successfully.",
              icon: "success"
            });
            // navigate to the confirm email page while sending the registration email
            setTimeout(() => {
              this.$router.push({
                name: 'Confirm-Email',
                query: { email: this.registerData.email }
              });

            }, 800)
          } else {
            // If registration fails, show error message
            Notiflix.Loading.remove(); // Remove loading animation
            // Use sweetalert2 for error notification
            this.$swal({
              title: "Error!",
              text: `${response.data.message}`,
              icon: "error"
            });
          }
        });
      } else {
        // If password does not meet validation criteria, set validation error flag
        this.validationError = true;
      }
    }
  },
};

</script>

<style></style>
