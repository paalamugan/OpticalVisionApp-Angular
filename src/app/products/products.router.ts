import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FrameMaterialComponent } from './glasses/frame-material/frame-material.component';
import { FrameTypeComponent } from './glasses/frame-type/frame-type.component';
import { LensTypeComponent } from './glasses/lens-type/lens-type.component';
import { BoxModelComponent } from './boxes/box-model/box-model.component';
import { FrameMaterialAddComponent } from './glasses/frame-material-add/frame-material-add.component';
import { FrameTypeAddComponent } from './glasses/frame-type-add/frame-type-add.component';
import { LensTypeAddComponent } from './glasses/lens-type-add/lens-type-add.component';
import { BoxModelAddComponent } from './boxes/box-model-add/box-model-add.component';
import { BrandComponent } from './brands/brand/brand.component';
import { BrandAddComponent } from './brands/brand-add/brand-add.component';
import { FrameModelComponent } from './glasses/frame-model/frame-model.component';
import { FrameModelAddComponent } from './glasses/frame-model-add/frame-model-add.component';


const productroutes: Routes = [
      { path: 'glasses/frame_material', component: FrameMaterialComponent,canActivate:[AuthGuard] },
      { path: 'glasses/frame_material/add', component: FrameMaterialAddComponent,canActivate:[AuthGuard] },
      { path: 'glasses/frame_model', component: FrameModelComponent,canActivate:[AuthGuard] },
      { path: 'glasses/frame_model/add', component: FrameModelAddComponent,canActivate:[AuthGuard] },
    { path: 'glasses/frame_type', component: FrameTypeComponent,canActivate:[AuthGuard] },
    { path: 'glasses/frame_type/add', component: FrameTypeAddComponent,canActivate:[AuthGuard] },
    { path: 'glasses/lens_type', component: LensTypeComponent,canActivate:[AuthGuard] },
    { path: 'glasses/lens_type/add', component: LensTypeAddComponent,canActivate:[AuthGuard] },
    { path: 'boxes/box_model', component: BoxModelComponent,canActivate:[AuthGuard] },
    { path: 'boxes/box_model/add', component: BoxModelAddComponent,canActivate:[AuthGuard] },
    { path: 'brands/brand', component: BrandComponent,canActivate:[AuthGuard] },
    { path: 'brands/brand/add', component: BrandAddComponent,canActivate:[AuthGuard] },
  	
];

@NgModule({
  imports: [
    RouterModule.forChild(productroutes)
  	],
  exports: [
    RouterModule
  ]
})
export class ProductRouterModule {}