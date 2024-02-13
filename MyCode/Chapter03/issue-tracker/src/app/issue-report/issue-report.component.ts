import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueForm } from '../issue-form';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})

export class IssueReportComponent implements OnInit {

  suggestions: Issue[] = [];

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl('', { nonNullable: true, validators: Validators.required }),
    priority: new FormControl('', { nonNullable: true, validators: Validators.required }),
    type: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  @Output() formClose = new EventEmitter();

  constructor(private issueService: IssuesService) { }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issueService.creatIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }

  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issueService.getSuggestions(title);
    });
  }

}
