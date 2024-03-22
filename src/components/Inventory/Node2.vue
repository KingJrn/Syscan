<template>
  <form @submit.prevent="createNode">
    <div class="row">
      <div class="col-xl-12">
        <select class="form-select form-select-lg mb-3" aria-label="Default select example"
          v-model="NodeData.credentials.type">
          <option>SSH</option>
          <option>WinRM</option>
        </select>
      </div>
      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Assign a name for your nodes (Alias):</label>
          <input type="text" class="form-control" id="name1" placeholder="FirstMachine" required
            v-model="NodeData.alias" />
        </div>
      </div>
      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Hostname:</label>
          <input type="text" class="form-control" id="name1" placeholder="127.0.0.1" required
            v-model="NodeData.hostname" />
        </div>
      </div>

      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Machine name</label>
          <input type="text" class="form-control" id="name1" placeholder="MachineAccess"
            v-model="NodeData.credentials.name" />
        </div>
      </div>
      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Username</label>
          <input type="text" class="form-control" id="name1" placeholder="ubuntu"
            v-model="NodeData.credentials.username" />
        </div>
      </div>
      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Enter Password:</label>
          <input type="password" class="form-control" id="name1" placeholder="password"
            v-model="NodeData.credentials.password" />
        </div>
      </div>
      <div class="col-xl-6">
        <div class="form-group">
          <label class="col-form-label">Enter your access key:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
            v-model="NodeData.credentials.access_key"></textarea>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button type="reset" class="btn btn-danger light">Cancel</button>
        <button type="submit" class=" btn btn-primary ms-3">Save Credentials</button>
      </div>
    </div>
  </form>
</template>
<script>
import nodeService from "../../services/nodes";
import "../../Utilities/notiflix/notiflix";
export default {
  name: "JOB2",
  data() {
    return {
      NodeData: {
        alias: "",
        hostname: "",
        credentials: {
          type: "",
          name: "",
          username: "",
          password: "",
          access_key: "",
        },
      },
    };
  },
  methods: {
    createNode() {
      Notiflix.Loading.pulse("please wait..."); // Show loading animation
      // Call NodeService to create
      nodeService.createNode(this.NodeData, (response) => {
        console.log(response);
        if (response.status === true) {
          // If Node Creation is successful, show success message
          Notiflix.Loading.remove(); // Remove loading animation
          this.$swal({
            title: "Success!",
            text: `Node added successfully`,
            icon: "success",
          });
        } else {
          // If it fails, show error message
          Notiflix.Loading.remove(); // Remove loading animation
          // Use sweetalert2 for error notification
          this.$swal({
            title: "Error!",
            text: `${response.data.message}`,
            icon: "error",
          });
        }
      });
    },
  },
};
</script>
