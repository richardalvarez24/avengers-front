<template>
<div class="container">
  <form v-on:submit="editar">
    <div class="form-group">
      <label for="nameControl">Nombre del personaje</label>
      <input type="input" v-model="name" class="form-control" id="nameControl">
    </div>
    <div class="form-group">
      <label for="ageControl">Edad</label>
      <input type="input" v-model="age"  class="form-control" id="ageControl">
    </div>
    <div class="form-group">
      <label for="desControl">Descripción</label>
      <textarea v-model="description"  class="form-control" id="desControl" rows="3"></textarea>
    </div>
    <div class="col-md-8 offset-md-5" style="padding-top:15px">
      <button class="btn btn-primary btn-lg btn-block">Editar</button>
    </div>
  </form>
</div>
</template>
<script>
 import {sendRequest} from '../functions';
 import {useRoute} from 'vue-router';
 import axios from 'axios';
 import {showAlert} from '../functions';
 export default{
  data(){
    return{
      id:0,name:"",age:'',description:'',url:'http://localhost:8000/api/update'
    }
  },
  mounted(){
    const route =useRoute();
    this.id = route.params.id;
    this.url = this.url+'/'+this.id;
    this.getMember();
  },
  methods:{
    getMember(){
      axios.get('http://localhost:8000/api/member/'+this.id).then(
        resp=>{
          this.name = resp.data['name'];
          this.age =resp.data['age'];
          this.description =resp.data['description'];
        }
      );
    },
    editar(){
      event.preventDefault();
      if(this.name.trim() ===''){
        showAlert("El nombre es obligatorio","warning");
      }else if(this.age ===''){
        showAlert("La edad es obligatorio","warning");
      }
      else if(this.description.trim() ===''){
        showAlert("La descripción es obligatorio","warning");
      }else{
        var data = {
          name:this.name,
          age: this.age,
          description: this.description
        }
        sendRequest('PUT',data,this.url,"Personaje actualizado");
      }
    }
  }
 }
</script>