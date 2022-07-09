import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pods = [
    { brand: "Ignite V15", rating: 5 },
    { brand: "Zomo Go 320", rating: 3 },
    { brand: "Elf Bar 4000", rating: 4 },
    { brand: "Sampa Bar Mini", rating: 2 },
    { brand: "VapeSoul 1500", rating: 3 }
  ];
}
