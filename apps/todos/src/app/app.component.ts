import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Todo } from '@nx-tutorial/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';

export interface AppUrl {
  name: string;
  url: string;
  urlLogo?: any;
  id?: number;
  index?: number;
}

export interface ServerResponse {
  status?: boolean;
  message?: string;
  httpCode?: number;
  data: AppUrl[];
  errorCode?: string;
}
@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo2' }];

  api = 'http://192.168.20.32:9090/config/system-navigators';
  headers = { token: '3a9f2272af4b622bb8449dd90cc5e2e235ec5437f7c29689536ab47a79300071' };
  inputAppUrls: Observable<AppUrl[]>;

  constructor(private http: HttpClient, private appService: AppService) {
    this.fetch();
    this.inputAppUrls = this.getUrls();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  getUrls(): Observable<AppUrl[]> {
    return this.appService.getUrls(this.api, this.headers);
  }
}
