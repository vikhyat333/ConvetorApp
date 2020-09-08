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
    {id:1,name: 'Amar',city:'Mumbai',dob:'1/1/1993',sal:20000000.33},
    {id:2,name: 'Akhbar',city:'Delhi',dob:'6/3/1988',sal:110000.99},
    {id:3,name: 'Anthony',city:'Pune',dob:'5/3/1948',sal:30000},
    {id:4,name: 'John',city:'Sydney',dob:'4/3/1958',sal:50000},
    {id:5,name: 'Sathpal',city:'Nepal',dob:'7/3/1978',sal:70000},
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
