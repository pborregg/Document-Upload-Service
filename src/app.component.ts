import {
  Component,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject
} from "@angular/core";
import { UploaderComponent } from "@syncfusion/ej2-angular-inputs";
import { createElement } from "@syncfusion/ej2-base";

/**
 * Default Uploader Default Component
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("defaultupload")
  public uploadObj: UploaderComponent;

  public path: Object = {
    saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
    removeUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove"
  };

  public dropElement: HTMLElement;
  ngAfterViewInit(): void {
    this.dropElement = document.getElementsByClassName(
      "control_wrapper"
    )[0] as HTMLElement;
    (document.getElementsByClassName("e-btn")[0] as any).style.display = "none";
    document.getElementById("full").onclick = args => {
      this.uploadObj.upload(this.uploadObj.getFilesData());
    };
  }
  public onUploadInProgress(args) {
    // const li: HTMLElement = this.getLiElement(args.file);
  }
  public onCreate() {
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
    icon.className = "fa fa-upload";
    spanElement.appendChild(icon);
    var content = document.createElement("span");
    content.id = "content";
    content.innerHTML = "Drop document here or ";
    spanElement.appendChild(content);
    var link = document.createElement("a");
    link.id = "browse";
    link.innerHTML = "Browse";
    spanElement.appendChild(link);
    setTimeout(function() {
      document.getElementById("browse").addEventListener("click", function() {
        (document
          .getElementsByClassName("e-file-select-wrap")[0]
          .querySelector(".e-btn") as any).click();
      });
    }, 100);
    var fileType = document.createElement("span");
    fileType.id = "type";
    fileType.innerHTML = "Supports PDF, JPG, PNG, JIF";
    spanElement.appendChild(fileType);
    var button = document.createElement("button");
    button.id = "button";
    button.innerHTML = "Document Library";
    spanElement.appendChild(button);
    var documentIcon = document.createElement("i");
    documentIcon.className = "fa fa-folder";
    button.prepend(documentIcon);
    ((this.uploadObj as any).ngEle.nativeElement.querySelector(
      ".e-file-select-wrap"
    ) as any).prepend(spanElement);
  }

  constructor() {}
}
