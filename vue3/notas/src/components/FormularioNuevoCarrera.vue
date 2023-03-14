<template>
    <div>
        <form @submit.prevent="crearCarrera()">
        <input type="text" v-model="payload.nombre_carrera" placeholder="Carrera">
        <input type="text" v-model="payload.docente" placeholder="Docente encargado">
        <button type="submit" >Agregar</button>
      </form>
    </div>
</template>

<script>
    export default {
        name: 'FormularioNuevoCarrera',
        props:["inpayload"],
        emits:["on-payload"],
        data(){
            return {
                payload: {
                    nombre_carrera: "",
                    docente: ""
                }
            }
        },
        methods: {
            crearCarrera(){
                this.$emit('on-payload',this.payload);
            }
        },
        computed: {
        },
        mounted(){
            this.payload = this.inpayload;
        },
        components: {
        }
    }
</script>