<template>
  <!-- Nav tabs -->
  <div class="default-tab">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#home"
          ><i class="la la-home me-2"></i> Home</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#profile"
          ><i class="la la-user me-2"></i> Profile</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="home" role="tabpanel">
        <div class="pt-4">
          <div class="card">
            <div class="card-body">
              <div
                class="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center m-auto mb-3"
                style="width: 80px; height: 80px"
              >
                <div
                  class="rounded-circle bg-primary w-75 h-75 d-flex justify-content-evenly align-items-center"
                >
                  <div
                    class="rounded-circle bg-white w-75 h-75 d-flex justify-content-evenly align-items-center"
                  ></div>
                </div>
              </div>
              <p class="text-center">
                Compliance status and severity for your node will appear here
                <br />
                learn to start your first
                <span class="text-primary">compliance scan</span>
              </p>
            </div>

            <div class="card-footer text-body-secondary">Global Compliance</div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="profile">
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
    </div>
  </div>
</template>
