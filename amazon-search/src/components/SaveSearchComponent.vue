<template>
  <div class="save-search">
    <b-row>
      <b-col cols="3" class="text-right">
          <label class="mt-1 mb-sm-0" for="inline-form-input-name">Date Context:</label>
      </b-col>
      <b-col cols="6" class="text-left">
          <b-form-datepicker id="contextDatepicker" size="sm" v-model="contextDate" class="mb-2"></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="8" class="text-right" offset="1">
        <b-input-group class="mb-2" size="sm">
          <b-input-group-prepend is-text >
            <b-icon icon="search" ></b-icon>
          </b-input-group-prepend>
          <b-form-input v-model="searchTerm" id="searchTerm" placeholder="Search terms"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="3" class="text-left">
          <b-button variant="danger" size="sm" id="searchBtn" @click="search">Search</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset="1">
    <b-row class="mt-3">
      <b-col class="text-right">
          <b-button v-b-modal.save_modal class="ml-3" variant="primary" size="sm">Save Search</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info" size="sm" class="text-left">Targets</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="searchTermCheckBox"
                        v-model="targets.searchTermChecked"
                        name="searchTermCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    Search Terms
                  </b-form-checkbox>                      
                </b-card-text>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="allTitleCheckBox"
                        v-model="targets.allTitleChecked"
                        name="allTitleCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    All Titles
                  </b-form-checkbox>                      
                  <b-row>
                    <b-col offset="1">Click Share</b-col>
                    <b-col>
                      <select v-model="targets.allClickSelect" class="form-control" size="sm">
                        <option value="0" selected>>=</option>
                        <option value="1"><=</option>
                      </select>
                    </b-col>
                    <b-col><b-form-input type="number" step="0.01" size="sm" v-model="targets.allClickNumber"></b-form-input></b-col>
                    <b-col>Conv Share</b-col>
                    <b-col>
                      <select v-model="targets.allConvSelect" class="form-control" size="sm">
                        <option value="0" selected>>=</option>
                        <option value="1"><=</option>
                      </select>
                    </b-col>
                    <b-col><b-form-input type="number" step="0.01" size="sm" v-model="targets.allConvNumber"></b-form-input></b-col>
                  </b-row>

                </b-card-text>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="titleCheckBox"
                        v-model="targets.titleChecked"
                        name="titleCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    #1 Title
                  </b-form-checkbox>
                  <b-row>
                    <b-col offset="1">Click Share</b-col>
                    <b-col>
                      <select v-model="targets.clickSelect" class="form-control" size="sm">
                        <option value="0" selected>>=</option>
                        <option value="1"><=</option>
                      </select>
                    </b-col>
                    <b-col><b-form-input type="number" step="0.01" size="sm" v-model="targets.clickNumber"></b-form-input></b-col>
                    <b-col>Conv Share</b-col>
                    <b-col>
                      <select v-model="targets.convSelect" class="form-control" size="sm">
                        <option value="0" selected>>=</option>
                        <option value="1"><=</option>
                      </select>
                    </b-col>
                    <b-col><b-form-input type="number" step="0.01" size="sm" v-model="targets.convNumber"></b-form-input></b-col>
                  </b-row>

                </b-card-text>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="asinCheckBox"
                        v-model="targets.asinChecked"
                        name="asinCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    #ASINs
                  </b-form-checkbox>                      
                </b-card-text>

              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info" size="sm" class="text-left">Trends</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="seasonalCheckBox"
                        v-model="trends.seasonalChecked"
                        name="seasonalCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    Seasonal Trend
                  </b-form-checkbox>
                  <b-row>
                    <b-col cols="3" offset="1">Percentage Change</b-col>
                    <b-col style="display:flex">
                      <span class="mr-2">></span>
                      <b-form-input type="number" size="sm" v-model="trends.seasonalNumber1"></b-form-input>
                      <span class="mr-2">%</span>
                    </b-col>
                    <b-col style="display:flex">
                      <span class="mr-2"><</span>
                      <b-form-input type="number" size="sm" v-model="trends.seasonalNumber2"></b-form-input>
                      <span class="mr-2">%</span>
                    </b-col>
                    <b-col></b-col>
                    <b-col style="display:flex">
                      <span class="mr-2">
                        Over
                      </span>
                      <b-form-input type="number" size="sm" v-model="trends.seasonalOver"></b-form-input>
                      </b-col>
                  </b-row>

                </b-card-text>
                <b-card-text class="text-left">
                  <b-form-checkbox size="sm"
                        id="regressionCheckBox"
                        v-model="trends.regressionChecked"
                        name="regressionCheckBox"
                        value="1"
                        unchecked-value="0"
                      >
                    Regression Trend
                  </b-form-checkbox>         
                  <b-row>
                    <b-col cols="3" offset="1">Percentage Change</b-col>
                    <b-col style="display:flex">
                      <span class="mr-2">></span>
                      <b-form-input type="number" size="sm" v-model="trends.regressionNumber1"></b-form-input>
                      <span class="mr-2">%</span>
                    </b-col>
                    <b-col style="display:flex">
                      <span class="mr-2"><</span>
                      <b-form-input type="number" size="sm" v-model="trends.regressionNumber2"></b-form-input>
                      <span class="mr-2">%</span>
                    </b-col>
                    <b-col></b-col>
                    <b-col style="display:flex">
                      <span class="mr-2">
                        Over
                      </span>
                      <b-form-input type="number" size="sm" v-model="trends.regressionOver"></b-form-input></b-col>
                  </b-row>

                                
                </b-card-text>

              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info" size="sm" class="text-left">Filters</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox size="sm"
                            id="rankCheckBox"
                            v-model="filters.rankChecked"
                            name="rankCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        Rank
                      </b-form-checkbox>
                    </b-col>
                    <b-col cols="1">
                      > 
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.rankNumber1"></b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.rankNumber2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-card-text>

                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox size="sm"
                            id="totalClickCheckBox"
                            v-model="filters.totalClickChecked"
                            name="totalClickCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        Total Click Share
                      </b-form-checkbox>
                    </b-col>
                    <b-col cols="1">
                      > 
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.totalClickNumber1"></b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.totalClickNumber2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-card-text>
                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox size="sm"
                            id="totalConvCheckBox"
                            v-model="filters.totalConvChecked"
                            name="totalConvCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        Total Conv Share
                      </b-form-checkbox>
                    </b-col>
                    <b-col cols="1">
                      > 
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.totalConvNumber1"></b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.totalConvNumber2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-card-text>
                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox type="number" step="0.01" size="sm"
                            id="clickCheckBox"
                            v-model="filters.clickChecked"
                            name="clickCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        #1 Click Share
                      </b-form-checkbox>
                    </b-col>
                    <b-col cols="1">
                      > 
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.clickNumber1"></b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.clickNumber2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-card-text>
                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox size="sm"
                            id="convCheckBox"
                            v-model="filters.convChecked"
                            name="convCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        #1 Conv Share
                      </b-form-checkbox>
                    </b-col>
                    <b-col cols="1">
                      > 
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.convNumber1"></b-form-input>
                    </b-col>
                    <b-col cols="1">
                      <
                    </b-col>
                    <b-col cols="2">
                      <b-form-input type="number" step="0.01" id="input-small" size="sm" v-model="filters.convNumber2"></b-form-input>
                    </b-col>
                  </b-row>
                </b-card-text>
                <b-card-text class="text-left">
                  <b-row>
                    <b-col cols="3" offset="2">
                      <b-form-checkbox size="sm"
                            id="trendingCheckBox"
                            v-model="filters.trendingChecked"
                            name="trendingCheckBox"
                            value="1"
                            unchecked-value="0"
                          >
                        Trending
                      </b-form-checkbox>
                    </b-col>
                  </b-row>
                </b-card-text>

              </b-card-body>
            </b-collapse>
          </b-card>

        </div>

      </b-col>
      
    </b-row>

      </b-col>
    </b-row>
    <b-modal
      id="save_modal"
      ref="modal"
      title="Submit Search Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="searchName"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
    
</template>

<style lang="scss">
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SaveSearch',
  computed: {
    ...mapState([
        'searchParams',
    ])
  },
  data() {
    let today = new Date()
    let dateStr = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    return {
        nameState: null,
        searchName: '',      
        searchTerm: '',
        contextDate: dateStr,
        targets:{
            searchTermChecked: 1,
    
            allTitleChecked: 0,
            allClickNumber:0,
            allClickSelect:0,
            allConvNumber:0,
            allConvSelect:0,
            
            titleChecked: 0,
            clickNumber:0,
            clickSelect:0,
            convNumber:0,
            convSelect:0,
    
            asinChecked: 0,
          },
        trends:{
            seasonalChecked: 0,
            seasonalNumber1:0,
            seasonalNumber2:0,
            seasonalOver:0,
    
            regressionChecked : 0,
            regressionNumber1:0,
            regressionNumber2:0,
            regressionOver:0,
        },
        filters:{
            rankChecked: 0,
            rankNumber1:0,
            rankNumber2:0,
    
            totalClickChecked: 0,
            totalClickNumber1:0,
            totalClickNumber2:0,
    
            totalConvChecked: 0,
            totalConvNumber1:0,
            totalConvNumber2:0,
    
            clickChecked: 0,
            clickNumber1:0,
            clickNumber2:0,
    
            convChecked: 0,
            convNumber1:0,
            convNumber2:0,
            trendingChecked:0
        }
    }
  },
  methods: {
    search(){
      let updateSearchParams = this.$store.state.searchParams;
      updateSearchParams.searchTerm = this.searchTerm;
      updateSearchParams.contextDate = this.contextDate;
      updateSearchParams.targets = this.targets;
      updateSearchParams.trends = this.trends;
      updateSearchParams.filters = this.filters;
      this.$store.dispatch('updateSearchParams', updateSearchParams)
    },
     checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.searchName = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        // Hide the modal manually
        console.log(this.searchName)
        let saveSearchParams = this.$store.state.searchParams;
        saveSearchParams.searchName = this.searchName
        this.$store.dispatch('saveSearch', saveSearchParams)
        this.$nextTick(() => {
          this.$bvModal.hide('save_modal')
        })
      }
    
  }
}
</script>
