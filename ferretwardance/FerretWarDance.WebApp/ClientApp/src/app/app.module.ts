import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HttpClientModule } from '@angular/common/http';
import { faInfoCircle, faCaretRight, faCaretLeft, faSun, faCog, faTimes, faTag, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { GreetingsComponent } from './components/home-tiles/greetings/greetings.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/home-tiles/products/products.component';
import { ReferencePreviewComponent } from './components/home-tiles/reference-preview/reference-preview.component';

// Pages
import { HomePage } from './pages/home-page/home.page';
import { TestTablePage } from './pages/test-table-page/test-table.page';
import { TodoPage } from './pages/todo-page/todo.page';

// Services
import { LoadingScreenService } from './services/loading-screen-service/loading-screen.service';
import { RouterService } from './services/router-service/router.service';
import { TestTableService } from './services/test-table-service/test-table.service';
import { BaseHttpService } from './services/base-http.service';
import { TodoService } from './services/todo-service/todo.service';

@NgModule({
    declarations: [
        // Components
        AppComponent,
        NavComponent,
        FooterComponent,
        LoadingScreenComponent,
        GreetingsComponent,
        ProductsComponent,
        ReferencePreviewComponent,
        // Pages
        HomePage,
        TestTablePage,
        TodoPage
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        InputTextareaModule, EditorModule,
        RouterModule.forRoot([
            { path: '', component: HomePage },
            { path: 'todo', component: TodoPage },
            { path: 'testtable', component: TestTablePage },
        ], { useHash: true })
    ],
    providers: [
        LoadingScreenService,
        RouterService,
        BaseHttpService,
        TestTableService,
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        library.add(faInfoCircle);
        library.add(faCog);
        library.add(faAlignJustify);
        library.add(faTag);
    }
}
