import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataFilesLogs } from '@interfaces/responses';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit, OnDestroy {

  load: boolean = false;
  loadFile: boolean = false;
  uploadedFile: string = ''

  listFiles: string[] = [];
  data: DataFilesLogs[] = []
  subs: Subscription[] = []

  constructor(private http: HttpService, private toast: ToastrAlertService) {}

  ngOnDestroy(): void {
    this.data = []
    this.listFiles = []
    this.subs.forEach(sub => sub.unsubscribe())
  }

  ngOnInit(): void {
    this.loadListLog();
  }

  loadListLog() {
    this.load = true;
    this.subs[0] = this.http.GetFilesLogs().subscribe((res) => {
      this.load = false;
      if (res.error) { this.toast.error(res.msg); }
      if (res.data) {
        this.listFiles = res.data;

        if (!this.uploadedFile) {
          this.uploadedFile = this.listFiles[0];
          this.onLoadDataFile(this.listFiles[0]);
        }
      }
    })
  }

  onLoadDataFile(file: string) {
    this.loadFile = true;
    this.data = [];
    this.uploadedFile = file;
    const fileName = file.replace('.log', '');
    this.subs[1] = this.http.GetDataFilesLogs(fileName).subscribe((res) => {
      if (res.error) { this.toast.error(res.msg); }
      if (res.data) {
        this.data = res.data;
      }
      this.loadFile = false;
    })
  }

  onDestroyFile(file: string) {

    const fileName = file.replace('.log', '');
    this.subs[2] = this.http.DeleteFileLogs(fileName).subscribe(res => {
      if (res.error) { this.toast.error(res.msg); }
      else {
        this.toast.success('Archivo Eliminado');
      }

      if (this.uploadedFile = file) {
        this.data = [];
        this.loadFile = true;
        this.uploadedFile = '';
        this.loadListLog();
      }

    })
  }

}
