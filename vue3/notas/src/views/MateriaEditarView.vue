<template>
    <div>
        Editar Datod de la Materia
        <form @submit.prevent="editar()">
          <div>
            <input type="text" v-model="payload.nombre_materia" placeholder="Materia">
          </div>
          <div>
            <input type="text" v-model="payload.semestre" placeholder="Semestre">
          </div>
          <div>
            <input type="text" v-model="payload.paralelo" placeholder="Paralelo">
          </div>
          <div>
            <button> Editar</button>
          </div>
        </form>
        
    </div>
</template>

<script>
export default {
  name: 'MateriaEditarView',
  props:[],
  emits:[],
  data(){
    return {
      materiaId: 0,
      payload: {
        nombre_materia: "",
        semestre: "",
        paralelo: ""
      }
    }
  },
  methods: {
    load(){
      this.materiaId = this.$route.params.id;
    },
    getMateria(){
        this.axios.get("http://localhost:5000/materia/"+this.materiaId)
        .then((response)=>{this.payload = response.data})
        .catch((err)=>{console.log(err)})
       },
    editar(){
        this.axios.patch("http://localhost:5000/materia/"+this.materiaId,this.payload)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
       }
  },
  computed: {
  },
  mounted(){
    this.load();
    this.getMateria()
  },
  components: {
  }
}
</script>
