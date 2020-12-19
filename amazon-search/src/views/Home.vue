<template>
  <div class="home mt-3">
    <h1>Amazon search</h1>
    <b-row class="mt-4">
      <b-col cols="7">
          <save-search-component />
      </b-col>
      <b-col>
        <upload-file-component />
      </b-col>
    </b-row>    
    <b-row class="mt-3 mb-3">
      <b-col>
        <data-view-component/>
      </b-col>
      
    </b-row>

  </div>
</template>
<style lang="scss">
</style>

<script>
import { mapState } from 'vuex'
import DataViewComponent from '../components/DataViewComponent.vue'
import SaveSearchComponent from '../components/SaveSearchComponent.vue'
import UploadFileComponent from '../components/UploadFileComponent.vue'

export default {
  components: { DataViewComponent, SaveSearchComponent, UploadFileComponent },
  name: 'Home',
  computed: {
    ...mapState([
        'searchParams',
    ])
  },
  data() {
    return {
    }
  },
  mounted(){
      this.$store.dispatch('saveMissingDates')
      this.$store.dispatch('storeHistory')
  }
}
</script>
