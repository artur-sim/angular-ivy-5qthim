import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { cities,getDistrict} from '../constants';

@Component({
  selector: 'app-select-dropdown-one',
  templateUrl: './select.component.html',
})
export class SelectDropdownOneComponent implements OnInit {
  @Input() option:string ;

  cities:string[] = cities
  selectedCity:Promise<boolean>|null = null
  district:Promise<string[]>|null = null
 districts:string[]
  constructor() { }

  ngOnInit(): void {

  }
getCity(event){
  this.selectedCity = new Promise<boolean>((resolve, reject) => {
    resolve(true)
  })
  this.district= new Promise<string[]>((res,rej)=>res(this.districts=getDistrict(event.target.value)))
  console.log(this.district)
  }
}
