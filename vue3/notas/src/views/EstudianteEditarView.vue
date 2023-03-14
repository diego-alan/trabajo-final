<template>
    <div>
        Editar Datos del Estudiante
        <form @submit.prevent="editar()">
          <div>
            <input type="text" v-model="payload.nombre" placeholder="Nombre Completo">
          </div>
          <div>
            <input type="text" v-model="payload.carnet" placeholder="Carnet de Identidad">
          </div>
          <div>
            <input type="email" v-model="payload.correo" placeholder="Correo Electronico">
          </div>
          <div>
            <button> Editar</button>
          </div>
        </form>
        
    </div>
</template>

<script>
export default {
  name: 'EstudianteEditarView',
  props:[],
  emits:[],
  data(){
    return {
      estudianteId: 0,
      payload: {
        nombre: "",
        carnet: "",
        correo: ""
      }
    }
  },
  methods: {
    load(){
      this.estudianteId = this.$route.params.id;
    },
    getEstudiante(){
        this.axios.get("http://localhost:5000/estudiante/"+this.estudianteId)
        .then((response)=>{this.payload = response.data})
        .catch((err)=>{console.log(err)})
       },
    editar(){
        this.axios.patch("http://localhost:5000/estudiante/"+this.estudianteId,this.payload)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
       }
  },
  computed: {
  },
  mounted(){
    this.load();
    this.getEstudiante()
  },
  components: {
  }
}
</script>
