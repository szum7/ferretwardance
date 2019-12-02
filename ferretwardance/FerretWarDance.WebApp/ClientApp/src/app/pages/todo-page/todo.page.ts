import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service/todo.service';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo.page.html'
})
export class TodoPage {

    constructor(private todoService: TodoService) {
    }

    public getfirstall(): void {
        this.todoService.getfirstall().subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    public testCall(): void {
        this.todoService.testCall().subscribe((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}
