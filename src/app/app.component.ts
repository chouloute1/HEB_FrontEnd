import { Component } from '@angular/core';
import {SearchService} from './shared-service/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SearchService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
