import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectedTab(this.tabs!.first);
    }
    return console.log(this.tabs);
  }

  selectedTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => {
      tab.active=false;
    });
    tab.active = true;
    return false;
  }
}
