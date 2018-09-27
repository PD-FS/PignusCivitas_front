import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBarImplementComponent } from '../search-bar-implement/search-bar-implement';
import { Subject } from 'rxjs';

/**
 * Generated class for the SearchBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

    public searchInput: string;

    public showSearchBar: boolean = false;

    private onSearchObservable$: Subject<string> = new Subject<string>();

    constructor(public dialog: MatDialog) {
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(SearchBarImplementComponent, {
            maxWidth: '100%',
            width: '100%',
            position: { top: '0%', left: '0%' },
            data: {searchInput: this.searchInput}
        });
        this.showSearchBar = true;
        dialogRef.afterClosed().subscribe(result => {
            const filter = result ? result : '';
            this.onSearchObservable$.next(filter);
        });
    }

    public onSearch(): Observable<string> {
        return this.onSearchObservable$.asObservable();
    }

}
