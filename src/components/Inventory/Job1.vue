<template>
  <div class="row">
    <div class="col-xl-4 col-xxl-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-body product-grid-card">
          <div class="new-arrival-product">
            <div class="new-arrivals-img-content">
              <div class=" bg-green card_bg d-flex justify-content-center align-items-center">
                <div class="">
                  <h6 class="text-white mb-3">Manually add your node</h6>
                  <button type="button" class="btn btn-sm btn-outline-light w-100 text-white" @click="selectNode">Select</button>
                </div>
              </div>
            </div>
            <div class="new-arrival-content text-center mt-3">
              <h5>Available</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-body product-grid-card">
          <div class="new-arrival-product">
            <div class="new-arrivals-img-content">
              <div class=" bg-green card_bg d-flex justify-content-center align-items-center">
                <div class="">
                  <h6 class="text-white mb-3">Import your node via CSV </h6>
                  <button type="button" class="btn btn-sm btn-outline-light w-100 text-white" disabled>Select</button>
                </div>
              </div>
            </div>
            <div class="new-arrival-content text-center mt-3">
              <h5>Not Available</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-body product-grid-card">
          <div class="new-arrival-product">
            <div class="new-arrivals-img-content">
              <div class=" bg-green card_bg d-flex justify-content-center align-items-center">
                <div class="">
                  <h6 class="text-white mb-3">Import your node via CSV </h6>
                  <button type="button" class="btn btn-sm btn-outline-light w-100 text-white" disabled>Select</button>
                </div>
              </div>
            </div>
            <div class="new-arrival-content text-center mt-3">
              <h5>Not Available</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-body product-grid-card">
          <div class="new-arrival-product">
            <div class="new-arrivals-img-content">
              <div class=" bg-green card_bg d-flex justify-content-center align-items-center">
                <div class="">
                  <h6 class="text-white mb-3">Import your node via CSV </h6>
                  <button type="button" class="btn btn-sm btn-outline-light w-100 text-white" disabled>Select</button>
                </div>
              </div>
            </div>
            <div class="new-arrival-content text-center mt-3">
              <h5>Not Available</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-xxl-4 col-md-6 col-sm-12">
      <div class="card">
        <div class="card-body product-grid-card">
          <div class="new-arrival-product">
            <div class="new-arrivals-img-content">
              <div class=" bg-green card_bg d-flex justify-content-center align-items-center">
                <div class="">
                  <h6 class="text-white mb-3">Import your node via CSV </h6>
                  <button type="button" class="btn btn-sm btn-outline-light w-100 text-white" disabled>Select</button>
                </div>
              </div>
            </div>
            <div class="new-arrival-content text-center mt-3">
              <h5>Not Available</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default{
  name: "Job1",
  data(){
    return {
      
    }
  },
  methods: {
    selectNode(){
      this.$emit('increaseStep')
    }
  }
}
</script>