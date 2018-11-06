import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouterModule } from './products.router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,
			MatNativeDateModule,
			MatDatepickerModule
		} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import {MatTableModule} from '@angular/material/table';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../guards/token-interceptor.service';
import {MatDialogModule} from '@angular/material/dialog';
import { FrameMaterialComponent } from './glasses/frame-material/frame-material.component';
import { FrameTypeComponent } from './glasses/frame-type/frame-type.component';
import { LensTypeComponent } from './glasses/lens-type/lens-type.component';
import { BoxModelComponent } from './boxes/box-model/box-model.component';
import {MatSortModule} from '@angular/material/sort';
import { BoxModelAddComponent } from './boxes/box-model-add/box-model-add.component';
import { BoxModelEditComponent } from './boxes/box-model-edit/box-model-edit.component';
import { LensTypeAddComponent } from './glasses/lens-type-add/lens-type-add.component';
import { LensTypeEditComponent } from './glasses/lens-type-edit/lens-type-edit.component';
import { FrameMaterialAddComponent } from './glasses/frame-material-add/frame-material-add.component';
import { FrameMaterialEditComponent } from './glasses/frame-material-edit/frame-material-edit.component';
import { FrameTypeAddComponent } from './glasses/frame-type-add/frame-type-add.component';
import { FrameTypeEditComponent } from './glasses/frame-type-edit/frame-type-edit.component';
import { FrameMaterialService } from '../services/frame-material.service';
@NgModule({
	imports: [
		CommonModule,
		ProductRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
		 ReactiveFormsModule,
		 FormsModule,
		 MatRadioModule,
		 MatDatepickerModule,
		 MatNativeDateModule,
		 MatTableModule,
		 MatSnackBarModule,
		 MatPaginatorModule,
         MatDialogModule,
		 MatSortModule,
		 MatSelectModule
	],
	declarations: [FrameMaterialComponent,FrameTypeComponent,LensTypeComponent,BoxModelComponent, BoxModelAddComponent, BoxModelEditComponent, LensTypeAddComponent, LensTypeEditComponent, FrameMaterialAddComponent, FrameMaterialEditComponent, FrameTypeAddComponent, FrameTypeEditComponent],
	providers:[AuthGuard
		// {
        //     provide:HTTP_INTERCEPTORS,
        //     useClass:TokenInterceptorService,
        //     multi:true
        //   }
	],
	entryComponents:[FrameMaterialEditComponent,FrameTypeEditComponent,LensTypeEditComponent,BoxModelEditComponent]
})
export class ProductModule { }
