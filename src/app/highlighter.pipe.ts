import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(wholeText: string, searchString: string): string {
    if (!searchString) {
      return wholeText[0].toUpperCase() + wholeText.slice(1);
    }
  
    const re = new RegExp(searchString, 'gi');
    wholeText = wholeText[0].toUpperCase() + wholeText.slice(1);
    wholeText = wholeText.replace(re, '<mark class="highlighter">$&</mark>');
    
    return wholeText;
  }
}
