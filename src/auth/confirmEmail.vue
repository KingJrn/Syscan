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
                                    <h2 class="text-center mb-4">Confirm Email</h2>

                                    <div
                                        class="new-account mt-3 d-flex flex-column justify-content-center align-items-center">
                                        <button type="button" class="btn btn-sm btn-primary m-auto mb-4"
                                            @click="resendMail">Resend
                                            Email</button>
                                        <p class="mb-0 text-center fs-6">
                                            Thank you for signing up! Please check your email inbox and follow the
                                            instructions to confirm your account.
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
// Import Notiflix
import '../Utilities/notiflix/notiflix'

// Component definition for confirming email
export default {
    name: "Confirm-Email",
    data() {
        return {
            email: '' // Initializing email data property
        }
    },
    mounted() {
        // When component is mounted, retrieve email parameter from the route
        this.email = this.$route.query.email;
    },
    methods: {
        // Method to resend email verification
        resendMail() {
            Notiflix.Loading.pulse('please wait...'); // Show loading animation
            // create a new form data property
            const formData = new FormData();
            formData.append('email', this.email);

            AuthService.confirmEmail(formData, (response) => {
                // Handle response from AuthService
                if (response.status === true) { // If successful
                    Notiflix.Loading.remove(); // Remove loading animation
                    // Show success message using sweetalert2
                    this.$swal({
                        title: "Email Sent!",
                        text: `${response.message}`,
                        icon: "success"
                    });
                } else { // If error
                    // Show error message using sweetalert2
                    this.$swal({
                        title: "Error!",
                        text: `${response.message}`,
                        icon: "error"
                    });
                }
            });
        }
    }
};


</script>

<style></style>