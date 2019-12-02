import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service/todo.service';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo.page.html',
    styleUrls: ['./todo.page.scss']
})
export class TodoPage {

    public todoWrap: any;
    public text: string;
    public text2: string;

    constructor(private todoService: TodoService) {
        let self = this;
        this.getFirstAll(function (res) {
            console.log(res);
            self.todoWrap = res;
        })
    }

    public btnSave() {
        let self = this;
        this.todoService.save(self.todoWrap).subscribe((response) => {
            console.log("[" + (new Date()).toLocaleString() + "] [Save] OK.");
            self.getFirstAll(function (res) {
                self.todoWrap = res;
            });
        }, (error) => {
            console.log(error);
        });
    }

    public showTodoWrap() {
        console.log(this.todoWrap);
        console.log(this.text);
        console.log(this.text2);
    }

    public getFirstAll(callback: Function): void {
        this.todoService.getfirstall().subscribe((response) => {
            console.log("[" + (new Date()).toLocaleString() + "] [Get] OK.");
            callback(response);
        }, (error) => {
            console.log(error);
        });
    }
}
