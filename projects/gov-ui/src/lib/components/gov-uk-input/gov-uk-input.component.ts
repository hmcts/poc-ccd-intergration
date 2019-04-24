import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HtmlTemplatesHelper} from '../../util/helpers/html-templates.helper'
/*
* Gov UK Input component
* Responsible for displaying input, hint and error messages
* @prop errorMessages - array of messages
* @prop focusOn - passing the FormGroup
* @prop config - adding configuration
* */
@Component({
  selector: 'lib-gov-uk-input',
  template: `
    <div class="govuk-form-group" [formGroup]="group"
         [ngClass]="{'govuk-form-group--error': errorMessage?.isInvalid}">

      <lib-gov-label [config]="config"></lib-gov-label>

      <span *ngIf="config.hint" [id]="config.id +'-hint'" class="govuk-hint">
          {{config.hint}}
        </span>

      <lib-gov-uk-error-message [config]="config" [errorMessage]="errorMessage"></lib-gov-uk-error-message>

      <input class="govuk-input" [id]="config.id" [name]="config.name" [type]="config.type"
             [attr.aria-invalid]="errorMessage?.isInvalid"
             [formControlName]="config.name" [attr.aria-describedby]='setDescribedBy()'>
    </div>
  `
})
export class GovUkInputComponent implements OnInit, OnChanges {
  constructor () { }
  @Input() errorMessage: {isInvalid: boolean; mesages: string[] };
  @Input() group: FormGroup;
  @Input() config: { label: string, hint: string; name: string; id: string, type: string; isPageHeading, classes: string };

  ngOnInit(): void {
    this.config.classes = 'govuk-label--m';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // debugger
  }

  setDescribedBy(): string {
    return HtmlTemplatesHelper.setDescribedBy(this.errorMessage, this.config);
  }
}
