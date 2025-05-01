import { PostionApiService } from './../../../../../service/api-service/postionApiService/postion-api.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PostiionDto } from '../../../../../models/postion/postiion-dto';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postion-model-insert',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './postion-model-insert.component.html',
  styleUrl: './postion-model-insert.component.scss'
})
export class PostionModelInsertComponent  implements OnDestroy{
lsobservableDistory:Subscription[]=[];
message:string|null=null;
formInput:FormGroup;
@Output() callApiEvent = new EventEmitter()
constructor(private postionService:PostionApiService,private fb:FormBuilder) {
  this.formInput=fb.group(
    {
      title:[null,[Validators.required,Validators.minLength(1)]],
    }
  );
}


  ngOnDestroy(): void {
    this.lsobservableDistory.forEach(x=>x.unsubscribe())
  }
  get title()
  {
    return this.formInput.get("title")
  }
    sumbit()
    {
      if(this.formInput.invalid)
      {
        this.message="Cheack Data"
        return;
      }
      else
      {
        this.message=null;
      }

      let input:PostiionDto=this.formInput.value;

      if(input.title&&input.title.length>1)
      {
        this.lsobservableDistory.push(
          this.postionService.insert(input.title)
          .subscribe(
            {
              next:d=> {
                input=d;
                this.callApiEvent.emit();
              },
              error:()=>this.message="cheack data"
            }
          )
        )
      }
      else{
        this.message="cheack data"
      }

    }

}
