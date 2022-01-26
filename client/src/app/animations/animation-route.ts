
import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const routerTransition =
    trigger('routerTransition', [
        transition('* <=> *', [

            // styles at start of transition
            style({ opacity: '0' }),

            // animation and styles at end of transition
            animate('.1s', style({ opacity: '1' }))
        ]),
    ]);