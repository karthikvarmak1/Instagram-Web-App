import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import * as lodash from 'lodash';
import { ImageDetails } from '././model/instagram.interface';
import { AppService } from './app.service';
import { Instagram } from './model/instagram.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'instagram';
  instagramModel: Instagram;

  constructor(private readonly appService: AppService) {
    this.instagramModel = new Instagram();
  }

  ngOnInit() {
    this.fetchImagesList();
  }

  ngOnDestroy() {
    // unsubscription of network calls when we navigate/leave out to other pages.
    this.instagramModel.canSubscribe = false;
  }

  fetchImagesList() {
    this.appService.getImagesList().pipe(
      (takeWhile(() => this.instagramModel.canSubscribe)),
    ).subscribe((data: ImageDetails[]) => {
      this.instagramModel.imageList = data;
    });
  }

}
