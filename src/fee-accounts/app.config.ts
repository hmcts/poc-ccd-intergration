import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { AbstractAppConfig, CaseEditorConfig, CaseEventData } from '@hmcts/ccd-case-ui-toolkit'
// import { environment as mainConfig } from '../environments/environment'
//    'case_data_url': 'http://localhost:3001/api/data',
@Injectable()
export class AppConfig extends AbstractAppConfig {
  protected config: CaseEditorConfig = {
    'api_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/aggregated',
    'case_data_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/data',
    'document_management_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/documents',
    'login_url': 'https://idam-web-public.aat.platform.hmcts.net/login',
    'oauth2_client_id': 'ccd_gateway',
    'postcode_lookup_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/addresses?postcode=${postcode}',
    'remote_document_management_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/documents',
    'payments_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/payments',
    'activity_batch_collection_delay_ms': 1,
    'activity_next_poll_request_ms': 5000,
    'activity_retry': 5,
    'activity_url': '',
    'activity_max_request_per_batch': 25,
    'print_service_url': 'https://return-case-doc-ccd.nonprod.platform.hmcts.net/print',
    'remote_print_service_url': 'https://ccd-data-store-api-aat.service.core-compute-aat.internal/remote_print'
  };
  constructor(private http: Http) {
    super();
  }

  public load(): Promise<void> {
    return Promise.resolve();
  }

  public getLoginUrl(): string {
    return this.config.login_url;
  }

  public getApiUrl() {
    return this.config.api_url;
  }

  public getCaseDataUrl() {
    return this.config.case_data_url;
  }

  public getDocumentManagementUrl() {
    return this.config.document_management_url;
  }

  public getRemoteDocumentManagementUrl() {
    return this.config.remote_document_management_url;
  }

  public getPostcodeLookupUrl() {
    return this.config.postcode_lookup_url;
  }

  public getOAuth2ClientId() {
    return this.config.oauth2_client_id;
  }

  public getPaymentsUrl() {
    return this.config.payments_url;
  }

  public getCaseHistoryUrl(caseId: string, eventId: string) {
    return this.getCaseDataUrl()
      + `/internal`
      + `/cases/${caseId}`
      + `/events/${eventId}`;
  }

  public getCreateOrUpdateDraftsUrl(ctid: string) {
    return this.getCaseDataUrl() + `/case-types/${ctid}/drafts/`;
  }

  public getViewOrDeleteDraftsUrl(did: string) {
    return this.getCaseDataUrl() + `/drafts/${did}`;
  }

  public getActivityUrl() {
    return this.config.activity_url;
  }

  public getActivityNexPollRequestMs() {
    return this.config.activity_next_poll_request_ms;
  }

  public getActivityRetry() {
    return this.config.activity_retry;
  }

  public getActivityBatchCollectionDelayMs() {
    return this.config.activity_batch_collection_delay_ms;
  }

  public getActivityMaxRequestPerBatch() {
    return this.config.activity_max_request_per_batch;
  }

  public getPrintServiceUrl() {
    return this.config.print_service_url;
  }

  public getRemotePrintServiceUrl() {
    return this.config.remote_print_service_url;
  }

}
