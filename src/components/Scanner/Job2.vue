<template>
  <form>
    <div class="row">
      <div class="col-xl-12">
        <div class="form-group">
          <label class="col-form-label">Import multiple nodes by IPor hostname:</label>
          <input type="text" class="form-control" id="name1" placeholder="Name" required v-model="data1"
            @input="emitData1" />
        </div>
      </div>
      <div class="col-xl-12">
        <div class="form-group">
          <label class="col-form-label">Assign a name for your nodes with a custom fix:</label>
          <input type="text" class="form-control" id="name1" placeholder="username" required v-model="data2"
            @input="emitData2" />
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "JOB2",
  data() {
    return {
      data1: '',
      data2: '',

    }
  },
  methods: {
    emitData1(){
      this.$emit('data1-updated', this.data1);
    },
    emitData2(){
      this.$emit('data2-updated', this.data2);
    }
  }
}
</script>