<template>
  <section class="shadow-lg bg-white rounded-lg p-3">
    <div class="flex justify-between py-3 text-black">
      <div class="float-left flex w-1/4">
        <p class="place-self-center text-2xl font-bold whitespace-nowrap">
          Patients with Insurance
        </p>
      </div>
      <div class="w-1/4"></div>
      <div class="flex justify-around flex w-2/4">
        <label
          for="site-search"
          class="flex border-yellow-650 border-2 w-2/3 mr-3"
        >
          <input
            type="search"
            id="site-search"
            name="q"
            class="w-5/6"
            aria-label="Search through site content"
          />

          <button class="w-1/6 flex items-center bg-yellow-650">
            <SearchIcon class="w-8 h-8" style="padding-left: 10px" />
          </button>
        </label>
        <a class="clicker" href="#popup1">
          <button
            class="
              rounded-none
              py-2
              px-4
              border-yellow-650 border-2
              flex
              whitespace-nowrap
              bg-yellow-650
            "
          >
            <PlusCircleIcon class="w-5 h-5" />
            <p class="pl-3">Add Patients</p>
          </button>
        </a>
      </div>
    </div>

    <!-- tables************** -->

    <div class="w-full mt-10">
      <table class="table table-hover text-start" style="cursor:pointer">
        <thead>
          <tr class="text-uppercase">
            <th scope="col" class="whitespace-nowrap"></th>
            <th scope="col" class="whitespace-nowrap">Patients Name</th>
            <th scope="col" class="whitespace-nowrap">Insurance company</th>
            <th scope="col" class="whitespace-nowrap">Insurance Policy</th>
            <th scope="col" class="whitespace-nowrap">Insurance Status</th>
            <th scope="col" class="whitespace-nowrap">Edit</th>
            <th scope="col" class="whitespace-nowrap">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key, index) in patient" :key="index">
            <th scope="row"></th>
            <td>{{ value.name }}</td>
            <td>{{ value.company }}</td>
            <td>{{ value.policy }}</td>
            <td>{{ value.status }}</td>
            <td class="">
              <a class="button clicker" href="#popup1">
                <PencilIcon class="w-5 h-5 text-yellow-650" />
              </a>
            </td>
            <td class="">
              <a class="button clicker" href="#popup2">
                <TrashIcon class="w-5 h-5 text-red-600" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Add Insurance Patient</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
          <add-patient />
        </div>
      </div>
    </div>
    <div id="popup2" class="overlay">
      <div class="popup">
        <h2>Delete</h2>

        <div class="content">
          <p>Are you sure you want to delete</p>
        </div>
        <div class="d-flex justify-content-around">
          <a class="" href="#"
            ><button class="px-3 py-2 bg-yellow-650">Cancel</button></a
          >
          <button class="px-3 py-2 bg-red-400">Delete</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AddPatient from "./addPatient.vue";
import { PlusCircleIcon, TrashIcon, SearchIcon } from "@heroicons/vue/outline";
import { PencilIcon } from "@heroicons/vue/solid";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "ViewPatient",
  components: {
    PlusCircleIcon,
    PencilIcon,
    TrashIcon,
    SearchIcon,
    AddPatient,
  },
  data() {
    return {
      patient: [
        {
          name: "Jane Doe",
          company: "Prudential",
          status: "active",
          policy:"A"
        },
        {
          name: "John Doe",
          company: "Prudential",
          status: "active",
          policy:"D"
        },
        {
          name: "Jane Doe",
          company: "Prudential",
          status: "active",
          policy:"A"
        },
        {
          name: "John Doe",
          company: "Prudential",
          status: "active",
          policy:"D"
        },

      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clicker {
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.clicker:hover {
  border-color: #999;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.clicker:active {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25) inset;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  visibility: hidden;
  opacity: 0;
}
.overlay.light {
  background: rgba(255, 255, 255, 0.5);
}
.overlay .cancel {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: default;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
.popup {
  margin: 200px auto;
  padding: 20px;
  background: #fff;
  border: 1px solid #666;
  width: 50%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  position: relative;
}
.light .popup {
  border-color: #aaa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}
.popup .close:hover {
  opacity: 1;
}
.popup .content {
  max-height: 650px;
  overflow: auto;
}
.popup p {
  margin: 0 0 1em;
}
.popup p:last-child {
  margin: 0;
}
.popup .close {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  opacity: 0.8;
  transition: all 200ms;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #666;
}
</style>
