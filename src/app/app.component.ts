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
    {id:1,name: 'John1',city:'ny',dob:19/1/1996,sal:20000000.33},
    {id:1,name: 'John2',city:'my',dob:19/1/1998,sal:110000.99},
    {id:1,name: 'John3',city:'js',dob:19/1/1999,sal:30000},
    {id:1,name: 'John4',city:'aa',dob:19/1/1994,sal:50000},
    {id:1,name: 'John5i',city:'bb',dob:19/1/1993,sal:70000},
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
