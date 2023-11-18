import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from 'src/app/Service/articulo.service';
import { ClienteService } from 'src/app/Service/cliente.service';
import { OrdenService } from 'src/app/Service/orden.service';
import { ArticuloModel } from 'src/app/models/articulo';
import { ClientesModel } from 'src/app/models/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
  clientes!: ClientesModel[];
  fecha_hoy:Date=new Date;
  articulos!: ArticuloModel[];

  myForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private srvCliente:ClienteService,
    private articuloService:ArticuloService,
    private srvOrden:OrdenService
  ) { 
    this.myForm = this.fb.group({  // método que espera un objeto
      orden_general:this.OrdenGeneralForm(),
      orden_detalle: this.fb.array([this.ArticuloForm()])
    });
  }

  ngOnInit(): void {
    this.getClientes();
    this.getArticulos();
  }

  getClientes() {
    this.srvCliente.getClientes().subscribe(
      (data: any) => {
        console.log("Llegada de datos de cliente a orden", data);
        this.clientes = data;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  getArticulos() {
    this.articuloService.getArticulos().subscribe(
      (data: any) => {
        console.log("Llegada de datos de articulos a orden", data);
        this.articulos = data;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  get orden_detalle(){
    return this.myForm.get("orden_detalle") as FormArray;
    }

  ArticuloForm(){
    return this.fb.group(
      {
        articId: ['',Validators.required],
      }
    );
  }
  addNuevoArticulo(){
    this.orden_detalle.push(this.ArticuloForm());
  }

  EliminarNuevoArticulo(i:Required<number>){
    this.orden_detalle.removeAt(i);
  }

  OrdenGeneralForm(){
    return this.fb.group(
      {
        clienteId: ['',[Validators.required]], 
        fecha: [formatDate(this.fecha_hoy, 'yyyy-MM-dd', 'en'),[Validators.required]]
      }
    )
  }

  get orden_general(){
    return this.myForm.get("orden_general") as FormGroup;
  }

  addOrden() {
    Swal.fire({
      title: 'Está seguro que desea agregar esta orden?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('datos que van al servicio de post orden =>', this.myForm.value);
        this.srvOrden.postOrden(this.myForm.value).subscribe((res:any) => {
          if(res==true){
            Swal.fire({
              title: 'Orden agregada correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          }           
        });
      } else if (result.isDenied) {
        this.myForm.reset();
        Swal.fire('No se agrego la orden!', '', 'info');
      }

      // si le da cancelar, aquí va si quiere vaciar el formulario
    });
  }


}
