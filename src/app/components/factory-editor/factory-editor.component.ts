import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-factory-editor',
  standalone: true,
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './factory-editor.component.html',
  styleUrl: './factory-editor.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FactoryEditorComponent {

  public getColumnIndex(td: any): number {
    const row = td.parentElement.parentElement as HTMLTableRowElement;
    return Array.from(row.children).indexOf(td.parentElement);
  }

  public addTopVertical() {
    const table: any = document.getElementById("editor-table");
    if(table.rows.length >= 12){
      return;
    }
    const row1 = table.insertRow(1);
    const rowLength = table.rows[0].cells.length;
    const td = document.querySelector(".unique");
    const index = this.getColumnIndex(td);
    for(let i = 0; i < rowLength; i++){
      const td = document.createElement("td");
      if(i == index){
        const node = document.getElementById("build");
        const icon: any = node?.cloneNode(true);
        icon.classList.remove("unique");
        td.appendChild(icon);
      }
      row1.append(td);
    }
    const row2 = table.insertRow(1);
    for(let j = 0; j < rowLength; j++){
      const td = document.createElement("td");
      if(j == index){
        const line = document.createElement("div");
        line.classList.add("vertical-line");
        td.append(line);
      }
      row2.append(td);
    }
 }
 public addBottomVertical() {
  const table: any = document.getElementById("editor-table");
  if(table.rows.length >= 12){
    return;
  }
  const rowCount = table.rows.length - 2;
  const rowLength = table.rows[0].cells.length;
  const row1 = table.insertRow(rowCount);
  const td = document.querySelector(".unique");
  const index = this.getColumnIndex(td);
  for(let i = 0; i < rowLength; i++){
    const td = document.createElement("td");
    if(i == index){
      const node = document.getElementById("build");
      const icon: any = node?.cloneNode(true);
      icon.classList.remove("unique");
      td.appendChild(icon);
    }
    row1.append(td);
  }
  const row2 = table.insertRow(rowCount);
  for(let j = 0; j < rowLength; j++){
    const td = document.createElement("td");
    if(j == index){
      const line = document.createElement("div");
      line.classList.add("vertical-line");
      td.append(line);
    }
    row2.append(td);
  }
 }
 public addRightHorizontal(event: any){
  const table: any = document.getElementById("editor-table");
  if(table.rows[0].cells.length >= 16){
    return;
  }
  const target = event.target as any;
  const td = target.closest('td') as HTMLTableCellElement;
  
  if (td) {
    const tr = td.closest('tr') as HTMLTableRowElement;
    if (tr) {
      const index = Array.from(tr.children).indexOf(td);
      const newCell = tr.insertCell(index);
      const node = document.getElementById("build");
      const icon: any = node?.cloneNode(true);
      icon.classList.remove("unique");
      newCell.append(icon);

      const line = document.createElement("div");
      line.classList.add("horizontal-line");
      const cell2 = tr.insertCell(index + 1);
      cell2.append(line);
    }
  }
  for (let row of table.rows) {
    for (let i = 0; i < 2; i++) {
      if(row.id == "build-row"){
      }
      else{
        const newCell = row.insertCell();
      }
    }
  }
 }

 public addLeftHorizontal(event: any){
  // const target = event.target as HTMLElement;
  // const td = target.closest('td') as HTMLTableCellElement;

  // if (td) {
  //   const tr = td.closest('tr') as HTMLTableRowElement;

  //   if (tr) {
  //     const index = Array.from(tr.children).indexOf(td);
  //     const newCell = tr.insertCell(index + 1);
  //     const node = document.getElementById("build");
  //     const icon: any = node?.cloneNode(true);
  //     icon.style = "background-color: blue;";
  //     newCell.append(icon);

  //     const line = document.createElement("div");
  //     line.classList.add("horizontal-line");
  //     const cell2 = tr.insertCell(index + 1);
  //     cell2.append(line);
  //   }
  // }
  const table: any = document.getElementById("editor-table");
  if(table.rows[0].cells.length >= 16){
    return;
  }
  for (let row of table.rows) {
    for (let i = 0; i < 2; i++) {
      if(row.id == "build-row" && i == 0){
        const newCell = row.insertCell(2);
        const node = document.getElementById("build");
        const icon: any = node?.cloneNode(true);
        icon.classList.remove("unique");
        newCell.append(icon);
      }
      else if(row.id == "build-row" && i == 1){
        const newCell = row.insertCell(2);
        const line = document.createElement("div");
        line.classList.add("horizontal-line");
        newCell.append(line);
      }
      else {
        const newCell = row.insertCell(2);
      }
    }
  }
 }
}