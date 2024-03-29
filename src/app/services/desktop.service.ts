import { Injectable } from '@angular/core';
import { Computer } from './computer';
import { LaptopService } from './laptop.service';

@Injectable({
	providedIn: 'root',
	useExisting: LaptopService
})
export class DesktopService implements Computer {
	getComputerName() {
		return 'DESKTOP';
	}
}