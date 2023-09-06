<template>
<div class="container">
  <form v-on:submit="guardar">
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
      <button  class="btn btn-primary btn-lg btn-block">Guardar</button>
    </div>
  </form>
</div>
</template>
<script>
 import {sendRequest} from '../functions';
 import {showAlert} from '../functions';
 export default{
 	data(){
 		return{
 			name:"",age:'',description:'',url:'http://localhost:8000/api/save'
 		}
 	},
 	methods:{
 		guardar(){
 			event.preventDefault();
      if(this.name.trim() ===''){
        showAlert("El nombre es obligatorio","warning");
      }else if(this.age.trim() ===''){
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
        sendRequest('POST',data,this.url,"Personaje guardado"); 
      }
 		}
 	}
 }
</script>