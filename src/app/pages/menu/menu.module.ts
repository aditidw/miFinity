import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../contact-details/contact-details.module').then(m => m.ContactDetailsPageModule)
          }
        ],
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
