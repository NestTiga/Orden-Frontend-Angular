import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from 'src/app/Service/articulo.service';
import { ModalService } from 'src/app/Service/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  myForm!: FormGroup;
  
  constructor(
    private srvModal: ModalService,
    private articuloService:ArticuloService,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre: ['',Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addArticulo() {
    Swal.fire({
      title: 'Está seguro que desea agregar este artículo?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('this.myForm.value =>', this.myForm.value);
        this.articuloService.postArticulo(this.myForm.value).subscribe((res) => {
            Swal.fire({
              title: 'Artículo agregado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.myForm.reset();
            window.location.reload();
        });
      } else if (result.isDenied) {
        this.myForm.reset();
        Swal.fire('No se agrego el artículo!', '', 'info');
      }

      this.srvModal.closeModal();
    });
  }

}
