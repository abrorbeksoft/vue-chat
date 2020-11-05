<template>
  <div id="confirm">
      <div v-show="!showSections" class="row my-3 part1">
          <div class="col-2 text-right">
              <i class="fas fa-2x fa-phone-square"></i>
          </div>
          <div class="col-10">
              <input type="text" class="form-control">
          </div>
      </div>
      <div v-show="!showSections" class="row my-3 part2">
          <div class="col-2 text-right">
              <i class="fas fa-2x "></i>
          </div>
          <div class="col-10">
              <input type="number" placeholder="Confirmation code" class="form-control">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'confirm',
    data(){
        return {
            showSections:true
        }
    }

}
</script>

<style>

</style>