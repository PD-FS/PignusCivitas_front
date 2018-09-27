import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Generated class for the SearchBarImplementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'search-bar-implement',
    templateUrl: 'search-bar-implement.html'
})
export class SearchBarImplementComponent {

    public searchInput: string;

    @Output() valueChange = new EventEmitter();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }

    public search(event): void {
        this.valueChange.emit(this.searchInput);
        this.data.searchInput = this.searchInput;
    }

    public cancelSearch(event): void {
        
    }

}
