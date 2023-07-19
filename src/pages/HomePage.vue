<template>
  <div class="container-fluid">
    <div class="row">
<div class="col-12 p-4">
<h1>
  Gifts
</h1>
</div>
    </div>
<!-- 
    <div class="row"> -->

<div v-for="gift in gifts" :key="gift.id" class="col-md-12 col-3 p-3">
  {{ gift.tag }}
</div>
</div>

  <!-- </div> -->
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js';


export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      } catch (error) {
        Pop.error(error, "[GETTING GIFTS]")
      }
    }

    onMounted(() => {
      logger.log("Home Page mounted");
      getGifts();
    });
    // onUnmounted(() => {
    //   logger.log("Home Page unmounted");
    // });
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss"></style>
