import { Component , OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) { }

  public departments = [
  	{"id": 1, "name": "Angular"},
  	{"id": 2, "name": "MongoDB"},
  	{"id": 3, "name": "Bootstrap"}
  ]

  ngOnInit() {

  }
  cities = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pabradė'},
        {id: 3, name: 'Klaipėda'},
        {id: 3, name: 'Nida'}
    ];
    selectedCityId: any;

  onSelect(department){
  	this.router.navigate(['/departments', department.id]);
  }

  countries = [
       {id: 1, name: "United States"},
       {id: 2, name: "Australia"},
       {id: 3, name: "Canada"},
       {id: 4, name: "Brazil"},
       {id: 5, name: "England"}
     ];
    selectedValue = null;


	// public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
	// 'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
	// 'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
	// 'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
	// 'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
	// 'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
	// 'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
	// 'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
	// 'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
	// 'Zagreb', 'Zaragoza', 'Łódź'];
 
 //  private value:any = {};
 //  private _disabledV:string = '0';
 //  private disabled:boolean = false;
 
 //  private get disabledV():string {
 //    return this._disabledV;
 //  }
 
 //  private set disabledV(value:string) {
 //    this._disabledV = value;
 //    this.disabled = this._disabledV === '1';
 //  }
 
 //  public selected(value:any):void {
 //    console.log('Selected value is: ', value);
 //  }
 
 //  public removed(value:any):void {
 //    console.log('Removed value is: ', value);
 //  }
 
 //  public typed(value:any):void {
 //    console.log('New search input: ', value);
 //  }
 
 //  public refreshValue(value:any):void {
 //    this.value = value;
 //  }


}
