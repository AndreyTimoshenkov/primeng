import { Component, Input } from '@angular/core';

@Component({
    selector: 'changelog-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Detailed changes included in the LTS versions are available at the main <a href="https://github.com/primefaces/primeng/blob/master/CHANGELOG.md">changelog</a> list.</p>
        </app-docsectiontext>
    </div>`
})
export class ChangelogDoc {
    @Input() id: string;

    @Input() title: string;
}
