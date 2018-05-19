import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Person {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  author: Person;
  constructor(private http: HttpClient) {}
  ngOnInit () {
    this.http.get('/api/author')
      .toPromise()
      .then((person: Person) => {
        this.author = person;
      });
  }
}
