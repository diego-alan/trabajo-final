<template>
    <div class="about">
      <h1>SISTEMA ESTUDIANTIL</h1>

      <br>
      <div style="text-align: left;">
      <h1>MATERIAS</h1>
      
       <br>
       <div class="input-group mb-3">
      <input type="search" class="form-control" placeholder="Buscar contacto" aria-label="Recipient's username"
        aria-describedby="button-addon2" v-model="search" @keypress.enter="getMateria()" @search="getMateria()">
      <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getMateria()"><i class="bi bi-search"></i>
        Buscar</button>
    </div>
  
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">MATERIA</th>
        <th scope="col">SEMESTRE</th>
        <th scope="col">PARALELO</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) of materia" id="key">
      <th scope="row">{{ value.id }}</th>
      <td>{{ value.nombre_materia }}</td>
      <td>{{ value.semestre}}</td>
      <td>{{ value.paralelo }}</td>
      <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
      <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
    </tr>
    </tbody>
      </table>
      <form @submit.prevent="crearMateria()">
        <input type="text" v-model="payload.nombre_materia" placeholder="Materia">
        <input type="text" v-model="payload.semestre" placeholder="Semestre">
        <input type="text" v-model="payload.paralelo" placeholder="paralelo">
    
        <button type="submit" >Agregar</button>
      </form>
     </div>
    </div>
  </template>
  
  
  <script>
  
    export default {
      name: 'MateriaView',
      props:[],
      emits:[],
      data(){
        return {
          search: "",
          api: "",
            materia: [],
            payload:{
                nombre_materia: "",
                semestre: "",
                paralelo: ""
  
            }
        }
      },
      methods: {
        getMateria(){
          this.axios.get("http://localhost:5000/materia"+this.search)
          .then((response)=>{this.materia = response.data})
          .catch((err)=>{console.log(err);})
        },
        crearMateria (){
          this.axios.post("http://localhost:5000/materia", this.payload)
          .then((response)=>{
          this.materia.push(response.data)})
           .catch((err)=>{console.log(err)})
            console.log(this.payload);
        },
        editar(item){
      this.$router.push('/materia/'+item.id+'/editar');
      console.log(item);
        },
        eliminar(item){
            this.axios.delete("http://localhost:5000/materia/"+item.id)
            .then((response)=>{console.log(response);this.getMateria();})
            .catch((err)=>{console.log(err)})

        } 
      },
      computed: {
      },
      mounted(){
        this.getMateria();
      },
      components: {
      }
    }
  </script>
  
  <style>
  
  </style>