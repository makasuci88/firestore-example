
import { Component } from '@angular/core';

import { Observable } from 'rx';
// import { Song } from '../../models/song.interface';
// import { FirestoreService } from '../../services/data/firestore.service';

import {Song} from '../models/song.interface';
import {FirestoreService} from '../services/data/firestore.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public songList;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  )
  {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.songList = this.firestoreService.getSongList().valueChanges();
  }

}
