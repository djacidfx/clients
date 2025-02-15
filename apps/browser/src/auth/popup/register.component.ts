// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { Component } from "@angular/core";
import { UntypedFormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { RegisterComponent as BaseRegisterComponent } from "@bitwarden/angular/auth/components/register.component";
import { FormValidationErrorsService } from "@bitwarden/angular/platform/abstractions/form-validation-errors.service";
import { LoginStrategyServiceAbstraction } from "@bitwarden/auth/common";
import { ApiService } from "@bitwarden/common/abstractions/api.service";
import { AuditService } from "@bitwarden/common/abstractions/audit.service";
import { EnvironmentService } from "@bitwarden/common/platform/abstractions/environment.service";
import { I18nService } from "@bitwarden/common/platform/abstractions/i18n.service";
import { LogService } from "@bitwarden/common/platform/abstractions/log.service";
import { PlatformUtilsService } from "@bitwarden/common/platform/abstractions/platform-utils.service";
import { DialogService, ToastService } from "@bitwarden/components";
import { KeyService } from "@bitwarden/key-management";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
})
export class RegisterComponent extends BaseRegisterComponent {
  color: string;
  text: string;

  constructor(
    formValidationErrorService: FormValidationErrorsService,
    formBuilder: UntypedFormBuilder,
    loginStrategyService: LoginStrategyServiceAbstraction,
    router: Router,
    i18nService: I18nService,
    keyService: KeyService,
    apiService: ApiService,
    platformUtilsService: PlatformUtilsService,
    environmentService: EnvironmentService,
    logService: LogService,
    auditService: AuditService,
    dialogService: DialogService,
    toastService: ToastService,
  ) {
    super(
      formValidationErrorService,
      formBuilder,
      loginStrategyService,
      router,
      i18nService,
      keyService,
      apiService,
      platformUtilsService,
      environmentService,
      logService,
      auditService,
      dialogService,
      toastService,
    );
  }
}
