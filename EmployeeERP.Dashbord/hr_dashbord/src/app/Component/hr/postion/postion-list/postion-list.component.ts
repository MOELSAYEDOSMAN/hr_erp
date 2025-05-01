import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostiionDto } from '../../../../../models/postion/postiion-dto';
import { PostionApiService } from '../../../../../service/api-service/postionApiService/postion-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ListDataDto } from '../../../../../models/listDtos/list-data-dto';
import { EmployeeModelInsertComponent } from '../../employee/employee-model-insert/employee-model-insert.component';
import { PostionModelInsertComponent } from "../postion-model-insert/postion-model-insert.component";

@Component({
  selector: 'app-postion-list',
  imports: [CommonModule, HttpClientModule, PostionModelInsertComponent],
  templateUrl: './postion-list.component.html',
  styleUrl: './postion-list.component.scss'
})
export class PostionListComponent implements OnDestroy,OnInit {
  lsobservableDistory:Subscription[]=[];
  data!: ListDataDto<PostiionDto>;
   constructor(private postionService: PostionApiService) {
    }
    ngOnInit() {
      this.loadPostionData();
    }
    ngOnDestroy(): void {
      this.lsobservableDistory.forEach(x=>x.unsubscribe())
    }
    loadPostionData()
  {
    this.lsobservableDistory.push( this.postionService.GetAll().subscribe({
      next: d => this.data = d,
      error: err => console.error('Error loading employees:', err)
    }))
  }
}

