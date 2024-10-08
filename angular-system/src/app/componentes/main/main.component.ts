import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Seleciona todos os menus laterais
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

    allSideMenu.forEach(item => {
      const li = item.parentElement;

      this.renderer.listen(item, 'click', () => {
        allSideMenu.forEach(i => {
          i.parentElement?.classList.remove('active');
        });
        li?.classList.add('active');
      });
    });

    // TOGGLE SIDEBAR
    const menuBar = document.querySelector('#menuBar');
    const sidebar = document.getElementById('sidebar');

    this.renderer.listen(menuBar, 'click', () => {
      sidebar?.classList.toggle('hide');
    });

    // SEARCH BUTTON
    const searchButton = document.querySelector('#content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
    const searchForm = document.querySelector('#content nav form');

    this.renderer.listen(searchButton, 'click', (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList.contains('show')) {
          searchButtonIcon?.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        }
      }
    });

    // Responsividade
    if (window.innerWidth < 768) {
      sidebar?.classList.add('hide');
    } else if (window.innerWidth > 576) {
      searchButtonIcon?.classList.replace('bx-x', 'bx-search');
      searchForm?.classList.remove('show');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        searchButtonIcon?.classList.replace('bx-x', 'bx-search');
        searchForm?.classList.remove('show');
      }
    });

    // Switch de modo escuro/claro
    const switchMode = document.getElementById('switch-mode');
    this.renderer.listen(switchMode, 'change', () => {
      if ((switchMode as HTMLInputElement).checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }


  public logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
