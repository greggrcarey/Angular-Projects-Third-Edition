import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues as issueData } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = issueData;

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  creatIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const seletedIssue: Issue = {
      ...issue,
      completed: new Date()
    };

    const index = this.issues.findIndex(i => i === issue);
    this.issues[index] = seletedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue => issue.title.indexOf(title) !== -1);
    }
    return [];

  }


}
