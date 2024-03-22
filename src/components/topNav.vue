<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">
                <h1 class="d-inline">Chef</h1>
                <h6 class="d-inline">Automate</h6>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 justify-content-around w-25">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/">Dashboard</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/report" class="nav-link">
                            Compliance
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="administration" class="nav-link">Administration</RouterLink>
                    </li>
                </ul>

                <ul class="navbar-nav mb-2 mb-lg-0 nav_profile">
                    <li>
                        <!-- Notification -->
                        <Notification />
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src="../assets/images/nurse.jpg" class="rounded-circle" alt="" width="50" />
                        </a>
                        <ul class="dropdown-menu">
                            <li><RouterLink to="settings" class="dropdown-item" >Profile</RouterLink></li>
                            <li>
                                <RouterLink class="dropdown-item" to="login">Logout</RouterLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import Notification from "./notification.vue"
export default {
    name: 'TopNav',
    components: {
        Notification,
    }
}
</script>
