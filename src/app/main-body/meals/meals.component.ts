import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  foodItems = [{
    "storeID":	"KA-40-001",
    "itemName": "North Indian Thali",
    "itemDesc": "3 Rotis, Rice, Curry Salad, Sweets",
    "itemPhoto": "../../../assets/images/menu-meals/1.jpg",
    "sellingPrice": 85,
    "discountType": "fixed",
    "discountValue": 10,
    "cusineType": [ "North Indian", "Mughlai", "Non Veg" ], 
    "mealType": "Meal",
    "itemId": "KA-40-001-03"
    
    }];

    temp={
      "storeID":	"KA-40-001",
      "itemName": "North Indian Thali",
      "itemDesc": "3 Rotis, Rice, Curry Salad, Sweets",
      "itemPhoto": "../../../assets/images/menu-meals/1.jpg",
      "sellingPrice": 85,
      "discountType": "fixed",
      "discountValue": 10,
      "cusineType": [ "North Indian", "Mughlai", "Non Veg" ], 
      "mealType": "Meal",
      "itemId": "KA-40-001-03"
      
      };
  constructor() { 
   }

   fakeItems(){
     var n=10;
     while(n>0){
      this.foodItems.push(this.temp);
      n--;
     }
     
   }
  ngOnInit() {
    this.fakeItems();
  }

  methodTemp(){
    console.log("LOG>>>>>"+JSON.stringify(this.foodItems[0].storeID));
  
  }

}
