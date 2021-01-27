import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { ExamComponent } from './exam.component';
import { ExamRouting } from './exam.routing';
@NgModule({
  imports: [
    ExamRouting,
    FormsModule,
    CommonModule
  ],
  declarations: [ExamComponent]
})
export class ExamModule {

}
