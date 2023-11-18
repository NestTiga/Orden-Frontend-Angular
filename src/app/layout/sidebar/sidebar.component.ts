import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menus!: { path: string; name: string; icon?: string; children?: any }[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this.menus = [
      {
        path: '/clientes',
        name: 'Clientes',
        icon: 'person',
      },
      {
        path: '/articulos',
        name: 'Artículos',
        icon: 'shop',
      },
      {
        path: '/ordenes',
        name: 'Orden',
        icon: 'add_shopping_cart',
      },
      
    ];

    let sidebar = document.querySelector('.sidebar');
    let sidebarBtn = document.querySelector('#btn-swap-sidebar');
    if (sidebarBtn && sidebar) {
      sidebarBtn.addEventListener('click', () => {
        sidebar?.classList.toggle('close');
      });
    }
  }
  openSubMenu(e: any, path: string) {
    let arrowParentA = e.target.parentElement;
    console.log(arrowParentA.lastElementChild);
    const lastChildInMenuItem = arrowParentA.lastElementChild.tagName;
    if (lastChildInMenuItem === 'I' || lastChildInMenuItem === 'UL') {
      let arrowParentClick = arrowParentA.parentElement;
      arrowParentClick.classList.toggle('showMenu');
    } else {
      this.router.navigate([path]);
    }
  }
}
