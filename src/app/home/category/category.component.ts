import { Component, Input, OnInit } from '@angular/core';
import { ICatergory } from 'src/app/shared/models/category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories2: ICatergory[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  
}
