<template>
    <div class="about">
      <h1>SISTEMA ESTUDIANTIL</h1>
  
      <br>
      <div style="text-align: left;">
      <h1>NOTAS</h1>

      <br>
       <div class="input-group mb-3">
      <input type="search" class="form-control" placeholder="Buscar contacto" aria-label="Recipient's username"
        aria-describedby="button-addon2" v-model="search" @keypress.enter="getNotas()" @search="getNotas()">
      <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="getNotas()"><i class="bi bi-search"></i>
        Buscar</button>
    </div>
      <br>

       <br>
       <i class="bi bi-funnel-fill"></i> Nota Final <input type="range" id="volume" min="0" max="100" step="1" v-model="range"
           @mouseup="filtroFinal()">{{ range }}
           api {{ api }}
      <br>
  
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Nota Examen</th>
        <th scope="col">Trabajo Practico</th>
        <th scope="col">Nota Final</th>
      </tr>
    </thead>
    <tbody>
      <tr v-show="value.final <= range" v-for="(value, key) of notas" id="key">
      <th scope="row">{{ value.id }}</th>
      <td>{{ value.primero }}</td>
      <td>{{ value.trabajo }}</td>
      <td>{{ value.final }}</td>
      <td><button type="button" class="btn btn-primary" @click="editar(value)">Editar</button></td>
      <td><button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button></td>
    </tr>
    </tbody>
      </table>
      <form @submit.prevent="crearNotas()">
        <input type="number" v-model="payload.primero" placeholder="Nota de Examen">
        <input type="number" v-model="payload.trabajo" placeholder="Nota de Trabajo Practico">
        <input type="number" v-model="payload.final" placeholder="Nota Final">
    
        <button type="submit" >Agregar</button>
      </form>
     </div>
    </div>
  </template>
  
  
  <script>
  
    export default {
      name: 'NotasView',
      props:[],
      emits:[],
      data(){
        return {
           range: 100,
           api: "",
           search: "",

            notas: [],
            payload:{
                primero: "",
                trabajo: "",
                final: ""
  
            }
        }
      },
      methods: {
        getNotas(){
          this.axios.get("http://localhost:5000/notas"+this.search)
          .then((response)=>{this.notas = response.data})
          .catch((err)=>{console.log(err);})
        },
        crearNotas (){
          this.axios.post("http://localhost:5000/notas", this.payload)
          .then((response)=>{
          this.notas.push(response.data)})
           .catch((err)=>{console.log(err)})
            console.log(this.payload);
        }, 
        
        editar(item){
          this.$router.push('/notas/'+item.id+'/editar');
          console.log(item);
        },
        eliminar(item){
            this.axios.delete("http://localhost:5000/notas/"+item.id)
            .then((response)=>{console.log(response);this.getNotas();})
            .catch((err)=>{console.log(err)})

        } 
      },
      computed: {
      },
      mounted(){
        this.getNotas();
      },
      components: {
      }
    }
  </script>
  
  <style>
  
  </style>