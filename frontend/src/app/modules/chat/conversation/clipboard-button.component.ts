import {ChangeDetectionStrategy, Component, Input, input, ViewEncapsulation} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
    selector: 'clipboard-button',
    template: `<button mat-icon-button
                       [matTooltip]="'Copy to clipboard'"
                       class="mat-primary clipboard-button"
                       [style]="{top:offset + 'em', right: offset + 'em'}"
                       aria-label="Copy to clipboard">
        <mat-icon [svgIcon]="'content_paste'" class="icon-size-4"></mat-icon>
    </button>`,
    styles: `button.clipboard-button {
      position: absolute;
      z-index: 1;
      opacity: 30%;
    }
    button.clipboard-button:hover {
      opacity: 100%;
    }`,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        MatTooltip
    ],
})
export class ClipboardButtonComponent {
    @Input() offset: number = -0.6
}