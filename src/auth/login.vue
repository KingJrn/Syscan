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
                  <form
                    action="https://eres.dexignzone.com/django/xhtml/index.html"
                  >
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value="hello@example.com"
                      />
                    </div>
                    <label class="form-label">Password</label>
                    <div class="mb-3 position-relative">
                      <input
                        type="password"
                        id="dz-password"
                        class="form-control"
                        value="123456"
                      />
                      <span class="show-pass eye">
                        <i class="fa fa-eye-slash"></i>
                        <i class="fa fa-eye"></i>
                      </span>
                    </div>
                    <div
                      class="form-row d-flex justify-content-between flex-wrap mt-4 mb-2"
                    >
                      <div class="form-group">
                        <div class="form-check custom-checkbox ms-1">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="basic_checkbox_1"
                          />
                          <label class="form-check-label" for="basic_checkbox_1"
                            >Remember my preference</label
                          >
                        </div>
                      </div>
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
                      <RouterLink class="text-primary" to="register"
                        >Sign up</RouterLink
                      >
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
export default {
  name: "Login",
};
</script>

<style></style>
