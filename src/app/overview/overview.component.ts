import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  random!: number

  user: User = new User();
  allUsers: any[] = [];

  birthDate: Date;
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        console.log('Received changes from DB', changes);
        this.allUsers = changes;
      });
    this.newGame(10)

  }
  newGame(x: any): void {
    this.random = Math.floor((Math.random() * x))
  }
  randomInteger() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
}
