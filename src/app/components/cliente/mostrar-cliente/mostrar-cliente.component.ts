import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Service/cliente.service';
import { ModalService } from 'src/app/Service/modal.service';
import { ClientesModel, DataForm } from 'src/app/models/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {
  clientes!:ClientesModel[];

  elementForm: DataForm = {
    title:'',
    formulario: '',
    data: {
      clienteId: 0,
      nombre:     '',
      apellido:   '',
      ordens:     [],
    },
  };
  
  constructor(
    private srvCliente:ClienteService,
    private srvModal: ModalService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.srvCliente.getClientes().subscribe(
      (data: any) => {
        console.log("Llegada de datos", data);
        this.clientes = data;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  eliminarCliente(numE: number) {
    Swal.fire({
      title: 'Está seguro que desea eliminar este cliente?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.srvCliente.deleteCliente(numE).subscribe((res) => {
            Swal.fire({
              title: 'Cliente eliminado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getClientes();
        });
      } else if (result.isDenied) {
        Swal.fire('No se elimino el cliente!', '', 'info');
      }
    });
  }

  seleccionarInput(_tipoForm: string, title:string, data: ClientesModel) {
    this.elementForm.formulario = _tipoForm;
    this.elementForm.data = data;
    this.elementForm.title = title;
    this.srvModal.setFor(this.elementForm);
    this.srvModal.openModal();
  }


}
