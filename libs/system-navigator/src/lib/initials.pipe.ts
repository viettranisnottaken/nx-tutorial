import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'initials',
})
export class InitialsPipe implements PipeTransform {
    transform(name: string): string {
        return name
            .split(' ')
            .slice(0, 2)
            .map((x) => x[0])
            .join('')
            .toUpperCase();
    }
}
