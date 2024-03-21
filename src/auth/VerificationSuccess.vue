<template>
    <div class="authincation h-100 py-5">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
                                    <div
                                        class="new-account mt-3 d-flex flex-column justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                            fill="rgb(54, 201, 95)" class="bi bi-patch-check-fill mb-3" viewBox="0 0 16 16">
                                            <path
                                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                        </svg>
                                        <h2 class="text-primary">Verified!</h2>
                                        <p class="mb-0 text-center mb-3">
                                            You have successfully verify your account
                                        </p>
                                        <button type="button" class="btn btn-primary"><RouterLink to="/login" class="text-white">Ok</RouterLink></button>
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
    name: "Verification-Success",
};
</script>

<style>

</style>