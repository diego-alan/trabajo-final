<template>
    <div class="about">
      <h1>SISTEMA ESTUDIANTIL</h1>

      <br>
      <div style="text-align: left;">
      <h1>CARRERAS</h1>
       <FormularioNuevoCarrera 
        :inpayload="payload"
        @on-payload="crearCarrera($event)">
      </FormularioNuevoCarrera>
       <br>

       <br>
       <div class="input-group mb-3">
      <input type="search" class="form-control" placeholder="Buscar contacto" aria-label="Recipient's username"
        aria-describedby="button-addon2" v-model="search" @keypress.enter="getCarrera()" @search="getCarrera()">
      <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getCarrera()"><i class="bi bi-search"></i>
        Buscar</button>
    </div>
      <br>
     
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Carreras </th>
        <th scope="col">Docentes Encargado</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) of carrera" id="key">
      <th scope="row">{{ value.id }}</th>
      <td>{{ value.nombre_carrera }}</td>
      <td>{{ value.docente }}</td>
      <td>
        <button type="button" class="btn btn-primary" @click="editar(value)">Editar</button>
        <button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button>
      </td>
    </tr>
    </tbody>
      </table>
     </div>
    </div>
  </template>
  

  <script>
  import FormularioNuevoCarrera from '../components/FormularioNuevoCarrera.vue'
 
    export default {
      name: 'CarreraView',
      props:[],
      emits:[],
      data(){
        return {
          search:"",
          api: "",
            carrera: [],
            payload:{
                nombre_carrera: "",
                docente: ""

            }
        }
      },
      methods: {
        getCarrera(){
          this.axios.get("http://localhost:5000/carrera"+this.search)
          .then((response)=>{this.carrera = response.data})
          .catch((err)=>{console.log(err);})
        },
        crearCarrera (){
          this.axios.post("http://localhost:5000/carrera", this.payload)
          .then((response)=>{
          this.carrera.push(response.data)})
           .catch((err)=>{console.log(err)})
            console.log(this.payload);
        },
        editar(item){
      this.$router.push('/carrera/'+item.id+'/editar');
      console.log(item);
        },
        eliminar(item){
            this.axios.delete("http://localhost:5000/carrera/"+item.id)
            .then((response)=>{console.log(response);this.getCarrera();})
            .catch((err)=>{console.log(err)})

        } 
      },
      computed: {
      },
      mounted(){
        this.getCarrera();
      },
      components: {
        FormularioNuevoCarrera
      }
    }
  </script>
  
  <style>
  
  </style>