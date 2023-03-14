<template>
    <div>
        Editar Las Notas
        <form @submit.prevent="editar()">
          <div>
            <input type="number" v-model="payload.primero" placeholder="Nota de Examen">
          </div>
          <div>
            <input type="number" v-model="payload.trabajo" placeholder="Nota de Trabajo">
          </div>
          <div>
            <input type="number" v-model="payload.final" placeholder="Nota final">
          </div>
          <div>
            <button> Editar</button>
          </div>
        </form>
        
    </div>
</template>

<script>
export default {
  name: 'NotasEditarView',
  props:[],
  emits:[],
  data(){
    return {
      notasId: 0,
      payload: {
        primero: "",
        trabajo: "",
        final: ""
      }
    }
  },
  methods: {
    load(){
      this.notasId = this.$route.params.id;
    },
    getNotas(){
        this.axios.get("http://localhost:5000/notas/"+this.notasId)
        .then((response)=>{this.payload = response.data})
        .catch((err)=>{console.log(err)})
       },
    editar(){
        this.axios.patch("http://localhost:5000/notas/"+this.notasId,this.payload)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
       }
  },
  computed: {
  },
  mounted(){
    this.load();
    this.getNotas()
  },
  components: {
  }
}
</script>
