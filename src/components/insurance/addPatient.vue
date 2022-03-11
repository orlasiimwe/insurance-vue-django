<template>
  <form class="text-start">
    <div class="form-group mb-3">
      <label for="exampleInputEmail1">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Patient Name"
      />
    </div>
    <div class="form-group mb-3">
      <label for="exampleInputPassword1">Company</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Company Name"
      />
    </div>
    <div class="form-group mb-3">
      <label for="exampleInputPassword1">Policy</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Add Policy"
      />
    </div>

    <button class="px-3 py-2 bg-yellow-650">Submit</button>
  </form>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "AddPatient",
};
</script>


<style scoped>
</style>
