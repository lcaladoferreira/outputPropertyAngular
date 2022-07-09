import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent {
  @Input("rate") rating: number;
  @Output() onRatingChange = new EventEmitter<number>();

  onClick(i: number) {
    this.onRatingChange.emit(i);
  }
}
