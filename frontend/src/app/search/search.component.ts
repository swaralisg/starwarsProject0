import { Component, OnInit } from '@angular/core';
import { Starwarsdata } from '../starwarsdata.model';
import { StarwarsdataService } from '../starwarsdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title = 'frontend';
  starwarsData: Starwarsdata;
  name: string;
  id: number;
  filmInfo: any;
  speciesInfo: any;
  homeworldInfo: any;
  flag:number;
  blank:any;
  error:any;
  searchValue :any;
  check : number;
  
  constructor(public starwarsdataservice: StarwarsdataService) {}

// Funtion for displaying the data on clicking the search button of either the name or ID  
onClickSearchBtn(searchType) {
    this.searchValue = null;
    this.filmInfo = {};
    this.speciesInfo = {};
    this.homeworldInfo = {};
    if (searchType === 'id') {
      this.starwarsdataservice
        .getPeopleById(this.id)
        .subscribe(resData => {
          if(resData){
            this.starwarsData = resData[0];
            this.check = 0;
            console.log((this.starwarsData)) //Not found
            if(this.starwarsData["name"] == undefined){
              console.log("Null Values") // Null vales
            }
          }else{
            console.log('No Data');
          }
        }, error => {
          console.log(error['message']);
          if(error) {
            this.check = 1;
            console.log('Error');
          }
        });
      }
    else {
      this.starwarsdataservice.getPeopleByName(this.name).subscribe((resData) => {
        if(resData){
          this.starwarsData = resData;
          this.check = 0;
          console.log((this.starwarsData)) //Not found
          if(this.starwarsData["name"] == undefined){
            console.log("Null Values") // Null vales
          }
        }else{
          console.log('No Data');
        }
      }, error => {
        console.log(error['message']);
        if(error) {
          this.check = 1;
          console.log('Error');
        }
      });
    
    }
    
  
  }
 
  // Function for hitting nested APIs and displaying their data
  getDataForAPI(url, apitype) {
    this.starwarsdataservice.getDataForAPI(url).subscribe((data) => {
      if (apitype == 'films') {
        this.filmInfo = data;
      }
      if (apitype == 'species') {
        this.speciesInfo = data;
      }
      if (apitype == 'homeworld') {
        this.homeworldInfo = data;
      }
    });
  }

  ngOnInit(){}

}
