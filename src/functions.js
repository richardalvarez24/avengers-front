import Swal from 'sweetalert2';
import axios from 'axios';

export function showAlert(msg,icono){
	Swal.fire({
		title:msg,
		icon:icono,
		customClass:{confirmButton:'btn btn-primary',popup:'animated zoomIn'},
		buttonsStyling:false
	});
}

export function sendRequest(metodo,params,url,msg){
	axios({method:metodo,url:url,data:params}).then(
		function(respuesta){
			console.log("res");
			console.log(respuesta);
			var status = respuesta.status;
				window.setTimeout(function(){
					window.location.href="/";
				},1000);
		}).catch(function(error){
			showAlert("Ha ocurrido un error","error");
		});

	

}

export function confirmar(id,name){
	var url = "http://localhost:8000/api/delete/"+id;
	const buttons = Swal.mixin({
		customClass:{confirmButton: 'btn btn-success',cancelButton:'btn btn-danger'}
		,buttonsStyling:false
	});

	buttons.fire({
		title:'Está seguro de eliminar el personaje '+name+'?',
		text: 'Se perderá la información del personaje '+name,
		icon: 'question',
		showCancelButton:true,
		confirmButtonText:'<i class="fa-solid fa-check"></i> Si',
		cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
	}).then((result)=>{
		if(result.isConfirmed){
			sendRequest("DELETE",{id:id},url,'Personaje eliminado'); 

		}else{
			showAlert('Operación cancelada','info');
		}
	})
}