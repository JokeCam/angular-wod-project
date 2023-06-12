import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExcelWindow, WindowNames } from "../../../shared/constants/window-names.constant";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as XLSX from "xlsx";
import { ExportAsConfig, ExportAsService } from "ngx-export-as";
@Component({
  selector: 'app-spreadsheet-window',
  templateUrl: './spreadsheet-window.component.html',
  styleUrls: ['./spreadsheet-window.component.sass']
})
export class SpreadsheetWindowComponent {
  ngxsWindow: WindowNames = ExcelWindow;
  html: SafeHtml = '';
  exportAsConfig: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'table',
  };
  constructor(
    private sanitizer: DomSanitizer,
    private exportAsService: ExportAsService
  ) {
  }

  @ViewChild('table') table!: ElementRef<HTMLDivElement>;
  async handleFile(event: any) {
    const file = event.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const tempHTML = XLSX.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[0]]);
    this.html = this.sanitizer.bypassSecurityTrustHtml(tempHTML);
  }

  onSave(extension: string) {
    const elt = this.table.nativeElement.getElementsByTagName("TABLE")[0];
    const wb = XLSX.utils.table_to_book(elt);

    switch (extension) {
      case 'xlsx':
        XLSX.writeFileXLSX(wb, "AngularExportAsXLSX.xlsx");
        break;
      case 'pdf':
        this.exportAsService
          .save(this.exportAsConfig, 'AngularExportAsPDF')
          .subscribe();
        break;
      default:
        XLSX.writeFileXLSX(wb, "AngularExportAsXLSX.xlsx");
        break;
    }
  }
}
