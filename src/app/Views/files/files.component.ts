import { Component, OnInit } from '@angular/core';
import { DataFilesLogs } from '@interfaces/responses';
import { HttpService } from '@services/http.service';
import { ToastrAlertService } from '@services/toastr-alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  load: boolean = false;
  loadFile: boolean = false;

  listFiles: string[] = [];

  data: DataFilesLogs[] = []

  subs: Subscription[] = []

  constructor(private http: HttpService, private toast: ToastrAlertService) {}

  ngOnInit(): void {
    this.load = true;
    this.subs[0] = this.http.GetFilesLogs().subscribe((res) => {
      this.load = false;
      if (res.error) { this.toast.error(res.msg); }
      if (res.data) {
        this.listFiles = res.data;
        this.onLoadDataFile(this.listFiles[0]);
      }
    })
  }

  onLoadDataFile(file: string) {
    this.loadFile = true;
    this.data = [];
    const fileName = file.replace('.log', '');
    this.subs[1] = this.http.GetDataFilesLogs(fileName).subscribe((res) => {
      if (res.error) { this.toast.error(res.msg); }
      if (res.data) {
        this.data = res.data;
      }
      this.loadFile = false;
    })
  }

}
