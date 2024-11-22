import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Maqueta';
  breadcrumb = 'Inicio';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.activatedRoute.root;
        this.breadcrumb = this.getBreadcrumb(route);
      });
  }

  ngAfterViewInit(): void {
    const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
    const menuList = document.querySelector('.menu-list') as HTMLElement;

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
      });
    }
  }

  private getBreadcrumb(route: ActivatedRoute): string {
    let breadcrumb = '';
    route.children.forEach(child => {
      if (child.snapshot.data['breadcrumb']) {
        breadcrumb = child.snapshot.data['breadcrumb'];
      }
    });
    return breadcrumb || 'Inicio';
  }
}
