<template>
    <!-- Nav tabs -->
    <div class="custom-tab-1">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#home1"><i class="la la-home me-2"></i> SSH</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#profile1"><i class="la la-user me-2"></i>WinRAM</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#contact1"><i class="la la-phone me-2"></i>Sudo</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="home1" role="tabpanel">
                <div class="pt-4">
                    <div class="bg-white p-4">
                        <form>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <label class="col-form-label">Assign a name for your credentials:</label>
                                        <input type="text" class="form-control" id="name1" placeholder="Name"
                                            required />
                                    </div>
                                </div>
                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <label class="col-form-label">Enter your username:</label>
                                        <input type="text" class="form-control" id="name1" placeholder="username"
                                            required />
                                    </div>
                                </div>

                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <label class="col-form-label">Enter your SSH password:</label>
                                        <input type="password" class="form-control" id="name1" placeholder="password"
                                            required />
                                    </div>
                                </div>

                                <div class="col-xl-12">
                                    <div class="form-group">
                                        <label class="col-form-label">Enter your SSH private key :</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                            rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-danger light">Cancel</button>
                            <button type="button" class="btn btn-primary ms-3">
                                Save Credentials
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile1">
                <div class="pt-4">
                    <h4>This is profile title</h4>
                    <p>
                        Raw denim you probably haven't heard of them jean shorts Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                        cliche tempor.
                    </p>
                    <p>
                        Raw denim you probably haven't heard of them jean shorts Austin.
                        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                        cliche tempor.
                    </p>
                </div>
            </div>
            <div class="tab-pane fade" id="contact1">
                <div class="pt-4">
                    <h4>This is contact title</h4>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove.
                    </p>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SaveCredentials",
    components: {},
};
</script>
