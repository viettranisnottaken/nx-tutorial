import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Todo } from '@nx-tutorial/data';

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo2' }];
  appUrls = [
    {
      name: 'admin',
      url: 'http://localhost:4201',
      image: null,
    },
    {
      name: 'olm',
      url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
    {
      name: 'lead',
      url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
    {
      name: 'slink',
      url: 'http://localhost:4200',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
    {
      name: 'verify',
      url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
    {
      name: 'chat',
      url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
    {
      name: 'notify',
      url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      image: 'https://photo-1-baomoi.zadn.vn/w1000_r1/2020_05_04_105_34923369/882279561615ff4ba604.jpg',
    },
  ];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
