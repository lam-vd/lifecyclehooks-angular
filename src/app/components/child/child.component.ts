import { HostListener, Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, ElementRef, ViewChild, ContentChild, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, OnInit, 
              DoCheck, AfterContentInit,
              AfterContentChecked, AfterViewInit, AfterViewChecked {
  // in order lifecicle
  // - OnChanges 
  // - OnInit 
  // - DoCheck 
  // - AfterContentInit 
  // - AfterContenChecked 
  // - AfterViewInit 
  // - AfterViewChecked
  // - OnDestroy

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  @Input() userName = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges triggered', changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === "Vu Duc") {
        this.userName = "Hello" + this.userName
      } else {
        this.userName = changes['userName'].previousValue
      }
    }
  }

  ngOnInit(): void {
    console.log("OnInit from child component");
  }

  ngDoCheck(): void {
    console.log("DoCheck from child component");
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrawpper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - wrapper');
  }

  ngAfterViewInit(): void {
    console.log('ngAterViewInit - wrapper', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - triggered');
  }

  @HostListener('window:beforeunload') // Reload the Page or Turn Off the Browser when the page is destroyed (memory will fully cleaned up)
  ngOnDestroy(): void {
    console.log('Child is destroyed!');
  }
}