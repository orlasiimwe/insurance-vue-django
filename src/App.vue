<template>
  <NavBar />
  <SideBar />
  <!-- <ViewPatient/> -->
  <InsuranceIndex/>
</template>

<script>
import NavBar from "./components/shared/NavBar.vue";
import SideBar from "./components/shared/SideBar.vue";
// import ViewPatient from './components/insurance/viewPatient.vue'
import InsuranceIndex from './components/insurance/index.vue'


export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
    // ViewPatient,
    InsuranceIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
