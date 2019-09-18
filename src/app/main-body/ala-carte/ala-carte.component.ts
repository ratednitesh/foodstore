import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ala-carte',
  templateUrl: './ala-carte.component.html',
  styleUrls: ['./ala-carte.component.css']
})
export class AlaCarteComponent implements OnInit {

  foodItems = [{
    "storeID":	"KA-40-001",
    "itemName": "Bhindi Masala",
    "itemDesc": "Fried Bhindi medium spices with pinch of lemon",
    "itemPhoto": "../../../assets/images/menu-meals/4.jpg",
    "sellingPrice": 35,
    "discountType": "fixed",
    "discountValue": 10,
    "cusineType": [ "North Indian", "Mughlai", "Veg" ], 
    "mealType": "Meal",
    "itemId": "KA-40-001-03"
    
    }];
    temp={
      "storeID":	"KA-40-001",
      "itemName": "Fish Fry",
      "itemDesc": "3 Rotis, Rice, Curry Salad, Sweets",
      "itemPhoto": "../../../assets/images/menu-meals/5.jpg",
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
     var n=11;
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
