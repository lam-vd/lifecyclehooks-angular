import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  isChildDestroyed = false;
  userName = "Lamvd";

  destroy() {
    this.isChildDestroyed = true;
  }

  ngOnInit(): void {
    console.log("onInit from parent component");
  }

  updateUser() {
    this.userName = "Vu Duc";
  }
}
