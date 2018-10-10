import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SearchBarComponent } from '../../components/search-bar/search-bar';
import { MinuteBooksProvider } from '../../providers/minute-books/minute-books';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

/**
 * Generated class for the MinuteGeneratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-minute-generate',
    templateUrl: 'minute-generate.html',
    providers: [
        File,
        FileTransfer,
        DocumentViewer
    ]
})
export class MinuteGeneratePage {

    public showSearchBar: boolean = false;

    public items: Array<any>;

    private download: boolean = false;

    @ViewChild('searchBar')
    public searchBar: SearchBarComponent;

    constructor(public navCtrl: NavController,
            public navParams: NavParams,
            private minuteBooksProvider: MinuteBooksProvider,
            private document: DocumentViewer,
            private file: File,
            private fileTransfer: FileTransfer,
            private platform: Platform) {

        this.minuteBooksProvider.minuteBooksList().subscribe(
            (data) => {
                this.items = data;
            }
        );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MinuteGeneratePage');
    }

    public cancelSearch(event: any) {
        this.showSearchBar = false;
    }

    public showSearch() {
        this.showSearchBar = true;
        this.searchBar.openDialog();
        this.searchBar.onSearch().subscribe(
            data => {
                this.searchMinutes(data);
            }
        );
    }

    private searchMinutes(filter: string) {

    }

    public itemTapped($event: any, item: any) {
        if (this.download) {
            this.download = false;
            return;
        }
        if (!item.pdf_file) {
            return;
        }
        const options: DocumentViewerOptions = {
            title: item.title
        };
        this.document.viewDocument(item.pdf_file, 'application/pdf', options);
    }

    public downloadTapped($event: any, item: any) {
        this.download = true;
        if (!item.pdf_file) {
            return;
        }
        let path: string = '';
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        } else {
            path = this.file.dataDirectory;
        }
        const transfer = this.fileTransfer.create();
        transfer.download(item.pdf_file, path + item.title + ".pdf").then(
            entry => {
                let url = entry.toURL();
                this.document.viewDocument(url, 'application/pdf', {});
            }
        );
    }
}
