<template>
<div class="container">           
  <table class="table">
    <thead>
      <tr>
      	<th>#</th>
        <th>Nombre del personaje</th>
        <th>Edad</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="mem, i in members" :key="mem.id">
        <td>{{(i+1)}}</td>
        <td>{{(mem.name)}}</td>
        <td>{{(mem.age)}}</td>
        <td>{{(mem.description)}}</td>
        <td>
        	<router-link :to="{path:'/edit/'+mem.id}" class="btn btn-warning">
        		<i class="fa-solid fa-edit"></i>
        	</router-link>
        	<button class="btn btn-danger" v-on:click="deleteMember(mem.id,mem.name)">
        		<i class="fa-solid fa-trash"></i>
        	</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
	import axios from 'axios';
	import { confirmar } from '../functions';
	export default{
		data(){
			return{ members:null}
		},
		mounted(){
			this.getMembers();
		},
		methods:{
			getMembers(){
				axios.get('http://localhost:8000/api/members').then(
					response=>{
						this.members = response.data
					}
				
				);
			},
			deleteMember(id,name){
				confirmar(id,name);
			}
		}
	}
</script>