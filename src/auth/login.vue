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
                  <h4 class="text-center mb-4">Sign in your account</h4>
                  <form @submit.prevent="Login">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" value="hello@example.com" required
                        v-model="loginData.email" />
                    </div>
                    <label class="form-label">Password</label>
                    <div class="mb-3 position-relative">
                      <input type="password" id="dz-password" class="form-control" value="123456" required
                        v-model="loginData.password" />
                      <span class="show-pass eye">
                        <i class="fa fa-eye-slash"></i>
                        <i class="fa fa-eye"></i>
                      </span>
                    </div>
                    <div class="form-row d-flex justify-content-between flex-wrap mt-4 mb-2">
                      <div class="form-group">
                        <RouterLink to="forgot-password">Forgot Password?</RouterLink>
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn btn-primary btn-block">
                        Sign Me In
                      </button>
                    </div>
                  </form>
                  <div class="new-account mt-3">
                    <p class="mb-0">
                      Don't have an account?
                      <RouterLink class="text-primary" to="register">Sign up</RouterLink>
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
  name: "Login",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    Login() {
      Notiflix.Loading.pulse('please wait...'); // Show loading animation
      // Call AuthService to register user
      AuthService.loginUser(this.loginData, (response) => {
        console.log(response)
        if (response.status === true) {
          if (response.data.verified === false) {
            Notiflix.Loading.remove(); // Remove loading animation
            this.$router.push('/confirm-email');
          } else {
            // If Login is successful, show success message
            Notiflix.Loading.remove(); // Remove loading animation
            this.$swal({
              title: "Success!",
              text: "Login successful.",
              icon: "success"
            });
            setTimeout(() => {
              // navigate to the Dashboard 
              this.$router.push({
                path: '/',
              });
            }, 1000)
          }
        } else {
          // If login fails, show error message
          Notiflix.Loading.remove(); // Remove loading animation
          // Use sweetalert2 for error notification
          this.$swal({
            title: "Error!",
            text: `${response.data.message}`,
            icon: "error"
          });
        }
      });

    }
  }
};
</script>

<style></style>
