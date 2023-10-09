import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from './Views/guides/guides.component';
import { FilesComponent } from './Views/files/files.component';

const routes: Routes = [
  { path: '',   redirectTo: 'guides', pathMatch: 'full' },
  { path: 'guides', component: GuidesComponent },
  { path: 'files', component: FilesComponent },
  { path: '**', redirectTo: '/guides', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
