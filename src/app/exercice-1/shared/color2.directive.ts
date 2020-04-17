import { Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
	selector: '[myColor2]'
})

export class Color2Directive {

	@HostBinding('style.color') frontColor;
	@HostBinding('style.backgroundColor') backColor;

	@HostListener('window:keyup', ['$event']) windowKeyUp($event) {
	    switch ($event.keyCode) {
	      case 37: // PREV
	        this.changeColor({
	        	front: 'yellow', 
	        	back: 'purple'});
	        break;

	      case 38: // UP
	        this.changeColor({
	        	front: 'red', 
	        	back: 'yellow'});
	        break;

	      case 39: // NEXT
	        this.changeColor({
	        	front: 'green', 
	        	back: 'orange'});
	        break;
	         
	      case 40: // DOWN
	        this.changeColor({
	        	front: 'white', 
	        	back: 'black'});
	        break;
	      break;
	    }
	}

	@Input('myColor2') basicColor: any;
	
	private defaultFrontColor: string = 'yellow';
	private defaultBackColor: string = 'transparent';

	ngOnInit() {
		this.frontColor = this.basicColor.front || this.defaultFrontColor;
		this.backColor = this.basicColor.back || this.defaultBackColor;
	}

	changeColor(newColor: any) {
		this.frontColor = newColor.front ? newColor.front : this.defaultFrontColor;
		this.backColor = newColor.back ? newColor.back : this.defaultBackColor;
	}

}