<template>
  <b-container style="max-width:500px; padding-top:10%">
    <h2 class="mt-4" >Log in</h2>

    <b-toast id="my-toast" variant="warning" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notice!</strong>
          <small class="text-muted mr-2">42 seconds ago</small>
        </div>
      </template>
    </b-toast>

    <b-form class="mt-4" @submit="onSubmit" @reset="onReset">
        <b-row class="my-1">
            <b-col sm="3">
            <label for="input-small">Username:</label>
            </b-col>
            <b-col sm="9">
                <b-input-group class="mb-2" size="sm">
                <b-input-group-prepend is-text >
                    <b-icon icon="file-person" ></b-icon>
                </b-input-group-prepend>
                <b-form-input type="text" v-model="form.username" id="username" placeholder="Enter Username" required></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row class="my-1 mt-3">
            <b-col sm="3">
            <label for="input-small">Password:</label>
            </b-col>
            <b-col sm="9">
                <b-input-group class="mb-2" size="sm">
                <b-input-group-prepend is-text >
                    <b-icon icon="lock" ></b-icon>
                </b-input-group-prepend>
                <b-form-input type="password" v-model="form.password" id="password" placeholder="Enter Password" required></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                  <b-button type="submit" variant="primary">Log in</b-button>

            </b-col>
        </b-row>


    </b-form>
  </b-container>
</template>

<script>
    import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          password: '',
          username: '',
        }
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$store.getters.login(this.form).then(res => {
            let data = res.data;
            if(data && data.status == "success"){
                localStorage.setItem("username", this.form.username)
                this.$router.push({name:'Home'})
            }else{
                this.$bvToast.toast("Authentication failed", {
                title: 'Error',
                href: '#my-toast',
                autoHideDelay: 5000,
                variant:'danger'
                })
                
            }

        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      }
    }
  }
</script>