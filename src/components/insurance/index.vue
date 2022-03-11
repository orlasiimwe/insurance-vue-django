<template>
<section class="text-black pl-24 py-10" style="background-color: #f6f6f6" >
<ul class="nav nav-pills mb-3 font-bold d-flex justify-content-around shadow-md py-3 bg-white rounded-lg " id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
    style="color:orange"
    >PATIENTS</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">COMPANIES</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">POLICIES</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <view-patient/>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <view-company/>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <view-patient/>
  </div>
</div>


</section>
</template>

<script>
import ViewPatient from './viewPatient.vue';
import ViewCompany from './viewCompany.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "InsuranceIndex",
  components:{
    ViewPatient,
    ViewCompany
  }
};
</script>


<style scoped>
.nav-item .active{
  background: none !important;
  color: #FF782E !important;
  border-bottom: #FF782E solid !important;
}
.nav-link{
  color: #FF782E !important;
  font-weight: 900;
}

</style>
