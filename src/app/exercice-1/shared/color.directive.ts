import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[myColor]'
})

export class ColorDirective {

	@HostListener('window:keyup', ['$event']) windowKeyUp(e) {
	    switch (e.keyCode) {
	      case 37: // PREV
	        this.changeColor('red');
	        break;

	      case 38: // UP
	        this.changeColor('cyan');
	        break;

	      case 39: // NEXT
	        this.changeColor('blue');
	        break;
	         
	      case 40: // DOWN
	        this.changeColor('green');
	        break;
	      break;
	    }
	}

	constructor(private elt: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
	}

	changeColor(newColor: string) {
		this.renderer.setStyle(this.elt.nativeElement, 'color', newColor);
	}

}