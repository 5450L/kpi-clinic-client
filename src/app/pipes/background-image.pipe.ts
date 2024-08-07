import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage',
  standalone: true
})
export class BackgroundImagePipe implements PipeTransform {

  transform(imageUrl: string): string {
    return `url('${imageUrl}')`;
  }

}
