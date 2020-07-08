import { Component, OnInit } from '@angular/core';
import { Note, Scale, Midi, NoteLiteral } from "@tonaljs/tonal";

@Component({
	selector: 'ngx-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

	iStrings				:			number;
	iFrets					:			number;
	strings					:			any = [{}];

	framedFrets				:			number[] = [2,4,6,8,11,14];


	ngOnInit(){
		this.iStrings	=	4;
		this.iFrets		=	23;
		
		for ( let j = 0; j <= this.iStrings; j++ ){
			this.strings[j] = {};
		}

		this.strings[0].openString = Note.get('G2');
		this.strings[1].openString = Note.get('D2');
		this.strings[2].openString = Note.get('A2');
		this.strings[3].openString = Note.get('E2');
		this.strings[4].openString = Note.get('B2');


		for ( let j = 0; j <= this.iStrings; j++ ){

			console.log('This.strings[%s].openString: %s', j, this.strings[j].openString.name );

			this.strings[j].frets = [];

			for( let i = 0; i <= this.iFrets; i++ ){
				this.strings[j].frets[i] = {};
				this.strings[j].frets[i] = Note.get( Note.fromMidi( this.strings[j].openString.midi + i ));
				console.log('This.strings[%s].frets[%s] ==> %o', j, i, this.strings[j].frets[i] );
			}
		}
		

	}
}
