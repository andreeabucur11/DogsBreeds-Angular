import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

	public transform(wholeText: string, searchString: string): string | SafeHtml {
		if (!searchString) {
		  return wholeText[0].toUpperCase() + wholeText.slice(1);
		}

		const re = new RegExp(searchString, 'gi');
		wholeText = wholeText[0].toUpperCase() + wholeText.slice(1);
		wholeText = wholeText.replace(re, '<mark class="highlighter">$&</mark>');
		
		return this.sanitizer.bypassSecurityTrustHtml(wholeText);
	}

}
