import { Component, Input, OnInit, Output} from '@angular/core';
import { ICatergory } from 'src/app/shared/models/category';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories2: ICatergory[]=[];
  @Output() idCategory = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  getIdFromCategory(id: number){
    console.log('idCategory', id);
    this.idCategory.emit(id);
  }
}
