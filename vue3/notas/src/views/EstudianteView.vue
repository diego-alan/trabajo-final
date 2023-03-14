<template>
  <div class="about">
    <h1>SISTEMA ESTUDIANTIL</h1>

    <br>
    <div style="text-align: left;">
    <h1>ESTUDIANTES</h1>

     <br>
     <div class="input-group mb-3">
      <input type="search" class="form-control" placeholder="Buscar contacto" aria-label="Recipient's username"
        aria-describedby="button-addon2" v-model="search" @keypress.enter="getEstudiante()" @search="getEstudiante()">
      <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getEstudiante()"><i class="bi bi-search"></i>
        Buscar</button>
    </div> 

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Code</th>
      <th scope="col">Nombre del Estudiante</th>
      <th scope="col">Carnet de Identidad</th>
      <th scope="col">Correo electronico</th>
      <th scope=""></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, key) of estudiante" id="key">
    <th scope="row">{{ value.id }}</th>
    <td>{{ value.nombre }}</td>
    <td>{{ value.carnet }}</td>
    <td>{{ value.correo }}</td>
    <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
    <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
  </tr>
  </tbody>
    </table>
    <form @submit.prevent="crearEstudiante()">
      <input type="text" v-model="payload.nombre" placeholder="Nombre del Estudiante">
      <input type="text" v-model="payload.carnet" placeholder="Cedula de identidad">
      <input type="email" v-model="payload.correo" placeholder="correo electronico">
  
      <button type="submit" >Agregar</button>
    </form>
   </div>
  </div>
</template>


<script>

  export default {
    name: 'EstudianteView',
    props:[],
    emits:[],
    data(){
      return {
          estudiante: [],
          search: "",
          api:"",
          payload:{
              nombre: "",
              carnet: "",
              correo: ""

          }
      }
    },
    methods: {
      getEstudiante(){
        this.axios.get("http://localhost:5000/estudiante" +this.search)
        .then((response)=>{this.estudiante = response.data})
        .catch((err)=>{console.log(err);})
      },
      crearEstudiante (){
        this.axios.post("http://localhost:5000/estudiante", this.payload)
        .then((response)=>{
        this.estudiante.push(response.data)})
         .catch((err)=>{console.log(err)})
          console.log(this.payload);
      },
      editar(item){
      this.$router.push('/estudiante/'+item.id+'/editar');
      console.log(item);
        },
      eliminar(item){
            this.axios.delete("http://localhost:5000/estudiante/"+item.id)
            .then((response)=>{console.log(response);this.getEstudiante();})
            .catch((err)=>{console.log(err)})

        } 
    },
    computed: {
    },
    mounted(){
      this.getEstudiante();
    },
    components: {
    }
  }
</script>

<style>

</style>