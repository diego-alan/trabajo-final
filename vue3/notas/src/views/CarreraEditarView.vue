<template>
    <div>
        Editar el Tipo de Carrera
        <form @submit.prevent="editar()">
          <div>
            <input type="text" v-model="payload.nombre_carrera" placeholder="Carrera">
          </div>
          <div>
            <input type="text" v-model="payload.docente" placeholder="docente">
          </div>
          <div>
            <button> Editar</button>
          </div>
        </form>

      
        <FormularioNuevoCarrera
        v-if="isload"
        :inpayload="payload"
        @on-payload="editar($event)"
        ></FormularioNuevoCarrera>

    </div>
</template>

<script>
import FormularioNuevoCarrera from '../components/FormularioNuevoCarrera.vue';  
 export default {
  name: 'CarreraEditarView',
  props:[],
  emits:[],
  data(){
    return {
      carreraId: 0,
      isload: false,
      payload: {
        nombre_carrera: "aaa",
        docente: "bbb"
      }
    }
  },
  methods: {
    load(){
      this.carreraId = this.$route.params.id;
    },
    getCarrera(){
        this.axios.get("http://localhost:5000/carrera/"+this.carreraId)
        .then((response)=>{this.payload = response.data, this.isload = true;})
        .catch((err)=>{console.log(err)})
       },
    editar(payload){
        this.axios.patch("http://localhost:5000/carrera/"+this.carreraId, payload)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
       }
  },
  computed: {
  },
  mounted(){
    this.load();
    this.getCarrera()
  },
  components: {
    FormularioNuevoCarrera
  }
}
</script>
