import { Component, OnInit, Input } from "@angular/core";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: "wakeup-wakeup-confirm-dialog",
  templateUrl: "./wakeup-confirm-dialog.component.html",
  styleUrls: ["./wakeup-confirm-dialog.component.scss"]
})
export class WakeupConfirmDialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;

  constructor(public dialogRef: MdDialogRef<WakeupConfirmDialogComponent>) {}

  ngOnInit() {}
}
