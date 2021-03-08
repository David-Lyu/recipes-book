import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly  views = ['recipes, shoppingList']
  showView = this.views[1];

  changeShowView(view: string) {
    this.showView = view;
  }

  getViews() {
    return [...this.views];
  }
}
