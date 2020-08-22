import { Component ,Input,Output,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConvetorApp';
  @Input() data:string;
  @Output() params:string;

  readme(){
    console.log('hello king');        
  }

  showMe='true';
  colorName='green';

  //@HostListener()
}
