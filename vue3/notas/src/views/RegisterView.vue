<template>
    <div>
        <h3 class="text-center">Register</h3>
        <div class="card login">

            <form @submit.prevent="register()">
                <div class="form-outline mb-4">
                    <label class="form-label" for="firstname">Firstname</label>
                    <input type="text" v-model="payload.firsname" id="firstname" class="form-control" required />

                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="lastname">Lastname</label>
                    <input type="text" v-model="payload.lastname" id="lastname" class="form-control" required />

                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="loginName">Email</label>
                    <input type="email" v-model="payload.email" id="loginName" class="form-control" required />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="loginPassword">Password</label>
                    <input type="password" v-model="payload.password" id="loginPassword" class="form-control"
                        @keyup="validate_password($event.target.value)" required />
                    <small v-if="error.password" class="app-form-error">{{ error.password }}</small>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="loginPassword">Re password</label>
                    <input type="password" v-model="payload.rePassword" id="loginPassword" class="form-control"
                        @keyup="validate_rePassword($event.target.value)" required />
                    <small v-if="error.rePassword" class="app-form-error">{{ error.rePassword }}</small>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Registrar</button>
            </form>
        </div>
    </div>
</template>

<script>
import Rest from "../classes/Rest"
import { Cookie } from "../classes/Cookie"

export default {
    name: 'RegisterView',
    props: [],
    emits: [],
    data() {
        return {
            payload: {
                email: "",
                password: "",
                rePassword: "",
                firsname: "",
                lastname: "",
            },
            error: {}
        }
    },
    methods: {
        register() {
            if (Object.entries(this.error).length === 0) {
                Rest.post("http://localhost:5000/register", this.payload)
                    .then((response) => {
                        Cookie.set('id', response.user.id);
                        this.$router.push({ path: '/' });
                    })
                    .catch((err) => { alert(err); })
            }
        },
        validate_password(value) {
            if (value.length < 5) {
                this.error['password'] = "La contraseña debe ser mayor a 5 caracteres";
            } else if (value.search(/^(?=.*\d)/)) {
                this.error['password'] = "La contraseña debe debe conener almenos un número";
            }
            else {
                delete this.error['password'];
            }
        },
        validate_rePassword(value) {
            if (this.payload.password !== value) {
                this.error['rePassword'] = "El re password no coincide";
            } else {
                delete this.error['rePassword'];
            }
            console.log(value);
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