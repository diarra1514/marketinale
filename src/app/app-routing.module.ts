import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './layout/article/article.component';
import { DetailComponent } from './layout/detail/detail.component';
import { GraphicComponent } from './layout/graphic/graphic.component';
import { MapsComponent } from './layout/maps/maps.component';
import { TableComponent } from './layout/table/table.component';



const routes: Routes = [
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'table', component: TableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
