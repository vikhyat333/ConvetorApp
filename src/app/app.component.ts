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

  readme(id){
    alert('hello king' + id);        
  }
  show1=false;
  show2=false;


  swithValue='six';
  //showElse='true';

  showMe=true;
  colorName='green';

  bgColor='yellow';

  users =[
    {id:1,name: 'John1'},
    {id:2,name: 'John2'},
    {id:3,name: 'John3'},
    {id:4,name: 'John4'},
    {id:5,name: 'John5'},
    {id:6,name: 'John6'}
  ];

  clsName='one';
  clsName1='two';

  Href1= 'http://localhost:4200';
  subString = 'this is just a string! binding with innner html prop - one way binding'
  updatedLink='www.google.com'
  consoleLog(){
    console.log('Hey from input of focus template to component(one way)');
  }

  firstname = '';

  readFirstname(){
    console.log(this.firstname);
  }

  //@HostListener()
}
