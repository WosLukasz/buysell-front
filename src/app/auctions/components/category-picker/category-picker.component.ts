import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuctionsService } from 'app/auctions/auctions.service';
import { Category, CategoryRestModel } from 'app/model/auctions.model';

@Component({
  selector: 'app-category-picker',
  templateUrl: './category-picker.component.html',
  styleUrl: './category-picker.component.scss'
})
export class CategoryPickerComponent implements OnInit {

  private rootLevel: string = 'ROOT';

  @Input() canSelectGroup: boolean;

  @Output() selected = new EventEmitter<Category>();

  categories: Category[];

  selectedLevels: Category[];

  selectedCategory: Category;

  currentLevel: Category;

  currentLevelChildren: Category[];

  constructor(private auctionsService: AuctionsService){}

  ngOnInit(): void {
    this.auctionsService.getCategories().subscribe((categories: CategoryRestModel[]) => {
      this.prepareCategoriesTree(categories);
      const rootLevel = this.findCategoryByCode(this.rootLevel);
      this.openLevel(rootLevel);
    });
  }

  onSelect(level: Category): void {
    const allChildren = this.getAllChildrens(level);
    if(!allChildren || !allChildren.length) {
      this.selectedCategory = level;
      this.selected.emit(this.selectedCategory);
    } else {
      this.openLevel(level);
    }
  }

  onSelectGroup(level: Category): void {
    this.selectedCategory = level;
    this.selected.emit(this.selectedCategory);
  }

  openLevel(level: Category): void {
    this.currentLevel = level;
    this.currentLevelChildren = this.getAllChildrens(level);
    this.buildSelectedLevels();
  }

  prepareCategoriesTree(categories: CategoryRestModel[]): void {
    this.categories = categories;
  }

  findCategoryByCode(code: string): Category {
    return this.categories.find((category) => category.code === code);
  }

  findCategoryById(id: string): Category {
    return this.categories.find((category) => category.id === id);
  }

  getAllChildrens(level: Category): Category[] {
    return this.categories.filter((category) => category.parentId === level.id);
  }

  buildSelectedLevels() : void {
    const selectedLevels = [];
    let level = { ...this.currentLevel };

    while(!!level.parentId) {
      selectedLevels.push(level);
      level = this.findCategoryById(level.parentId);
    }

    this.selectedLevels = selectedLevels.reverse();
  }
}
