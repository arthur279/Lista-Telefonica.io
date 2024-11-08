const app1 = {
    data(){
        return{
            mensaje: '',
            agendas:[{nombre: 'Maria', telefono: 4778906543, Categoria: 'Amigos', mensajes:0, llamadas:0, total:0}],
            nuevoNombre:"",
            nuevoTelef:0,
            nuevoCat:'',
            nuevoMen: 0,
            nuevoLl: 0,
            numeroContactos:0,
            numeroMensajes:0,
            numeroLlamadas:0,
            
        }
    },
    methods:{
        agregar(){
            
            this.agendas.push({nombre:this.nuevoNombre, telefono:this.nuevoTelef, Categoria: this.nuevoCat, mensajes: this.nuevoMen, llamadas: this.nuevoLl});
            nuevaNombre = "";
            nuevoTelef =0;
            nuevoCat='';
            nuevoMen=0;
            nuevoLl=0;
        },
        eliminar(i){
            this.agendas.pop(this.i);
            this.i - 1;
            },

    },
    computed:{
       
            estadisticas() {
                return {
                    numeroContactos: this.agendas ? this.agendas.length : 0,
                    
                };
            },
            totalMensajes() {
                return this.agendas.reduce((sum, agenda) => sum + agenda.mensajes, 0);
            },
            totalLlamadas() {
                return this.agendas.reduce((sum, agenda) => sum + agenda.llamadas, 0);
            }
        


    }
};
const apli2 = Vue.createApp(app1).mount('#seccion');