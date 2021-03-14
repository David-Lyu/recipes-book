import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() views: Array<string>;
  @Output("handleViews") view = new EventEmitter<string>();

  onRecipesClick() {
    this.view.emit(this.views[0]);
  }

  onShoppingListClick() {
    this.view.emit(this.views[1]);
  }
}
