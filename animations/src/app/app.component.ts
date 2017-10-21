import { animate, keyframes, state, style, transition, trigger, group } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('divState', [
			// Initial state
			state('normal', style({
				'background-color': 'red',
				transform: 'translateX(0)'
			})),
			// Otro estado
			state('highlighted', style({
				backgroundColor: 'blue',
				transform: 'translateX(100px)'
			})),
			// Transition from normal to highlighted or viceversa
			transition('normal <=> highlighted', animate(300)),
			// transition('highlighted => normal', animate(800))
		]),
		trigger('wildState', [
			// Initial state
			state('normal', style({
				backgroundColor: 'red',
				transform: 'translateX(0) scale(1)'
			})),
			// Otro estado
			state('highlighted', style({
				backgroundColor: 'blue',
				transform: 'translateX(100px)'
			})),
			state('shrunken', style({
				backgroundColor: 'green',
				transform: 'translateX(0) scale(0.5)'
			})),
			// Transition from normal to highlighted
			transition('normal => highlighted', animate(300)),
			transition('highlighted => normal', animate(800)),
			transition('shrunken <=> *', [
				style({
					backgroundColor: 'orange'
				}),
				animate(1000, style({
					borderRadius: '50px'
				})),
				animate(500)
			])
		]),
		trigger('list1', [
			// Initial state
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			// Transition from void (not added to the DOM yet) to any state
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateX(-100px)'
				}),
				animate(300)
			]),
			// Transition any state to void state (removed from the DOM)
			transition('* => void', [
				animate(300, style({
					transform: 'translateX(100px)',
					opacity: 0
				}))
			])
		]),
		trigger('list2', [
			// Initial state
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			// Transition from void (not added to the DOM yet) to any state
			transition('void => *', [
				animate(1000, keyframes([
					style({
						transform: 'translateX(-100px)',
						opacity: 0,
						offset: 0
					}),
					style({
						transform: 'translateX(-50px)',
						opacity: 0.5,
						offset: 0.3
					}),
					style({
						transform: 'translateX(-20px)',
						opacity: 1,
						offset: 0.8
					}),
					style({
						transform: 'translateX(0px)',
						opacity: 1,
						offset: 1
					})
				]))
			]),
			// Transition any state to void state (removed from the DOM)
			transition('* => void', [
				group([
					animate(300, style({
						color: 'red'
					})),
					animate(800, style({
						transform: 'translateX(100px)',
						opacity: 0
					}))
				])				
			])
		])
	]
})
export class AppComponent {
	state = 'normal';
	wildState = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

	onAnimate() {
		this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
		this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
	}

	onShrink() {
		this.wildState = 'shrunken';
	}

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}

	animationStarted(event) {
		console.log(event);
	}

	animationEnded(event) {
		console.log(event);
	}
	

}
