<template>
    <div>
        <h3 class="text-center">login</h3>
    <div class="card login">
        <form @submit.prevent="login()">
            <div class="form-outline mb-4">
                <label class="form-label" for="loginName">Email</label>
                <input type="email" v-model="payload.email" id="loginName" class="form-control" required />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="loginPassword">Password</label>
                <input type="password" v-model="payload.password" id="loginPassword" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
        </form>
    </div>
    </div>
</template>

<script>
import Rest from "@/classes/Rest"
import { mapActions } from "vuex"
import { Cookie } from "@/classes/Cookie"

export default {
    name: 'LoginView',
    props: [],
    emits: [],
    data() {
        return {
            payload: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions([
            'setLogin'
        ]),
        login() {
            Rest.post("http://localhost:5000/login", this.payload)
                .then((response) => {
                    this.setLogin();
                    this.$router.push({ path: '/' })
                    Cookie.set('id', response.user.id);
                    console.log(response)
                })
                .catch((err) => { alert(err) })
                ;
        }
    },
    computed: {
    },
    mounted() {
    },
    components: {
    }
}
</script>

<style></style>