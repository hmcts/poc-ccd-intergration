import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromFeeAccountsStore from '../../../fee-accounts/store';
import { GovukTableColumnConfig } from 'projects/gov-ui/src/lib/components/govuk-table/govuk-table.component';
import {Observable} from 'rxjs';
import {PbaAccountsSummary} from '../../models/pba-accounts';
import {LoadFeeAccounts} from '../../../fee-accounts/store';
import {HttpClientModule} from '@angular/common/http';
import {http} from '../../../../api/lib/http';
import config from '../../../../api/lib/config';
@Component({
  selector: 'app-prd-fee-accounts-component',
  templateUrl: './account-overview.component.html',
})

export class OrganisationAccountsComponent implements OnInit {

constructor(private httpClient: HttpClientModule){}

  ngOnInit() {
      // console.log('YES CALLING IT BABY')
    //   this.httpClient.post(
    //   `${config.services.idam.idamApiUrl}/oauth2/token?grant_type=authorization_code&code=${req.query.code}&redirect_uri=${
    //     config.protocol
    //     }://${req.headers.host}${config.services.idam.oauthCallbackUrl}`,
    //   {},
    //   options
    // )
  }

  //
  caseSelected: string;
  // caseType: object = {
  //   jurisdictionId: "DIVORCE",
  //   caseTypeId: "DIVORCE",
  //   eventTriggerId: "solicitorCreate"
  // }
  // caseType: object = {
  //   jurisdictionId: "notselected",
  //   caseTypeId: "",
  //   eventTriggerId: ""
  // }

  jurisdictionId = 'TEST';
  caseTypeId = 'TestAddressBookCase';
  eventTriggerId = 'createCase';


  caseType: object = {
    jurisdictionId: "TEST",
    caseTypeId: "TestAddressBookCase",
    eventTriggerId: "createCase"
  }

  submit(event: any): void {
    console.log('CaseCreateConsumerComponent submit event=', event)

  }

  cancel(event: any): void {
    console.log('CaseCreateConsumerComponent cancel event=', event)
  }



  chooseEvent() {
    this.caseType = JSON.parse(this.caseSelected)
    console.log(this.caseType)
  }

}
