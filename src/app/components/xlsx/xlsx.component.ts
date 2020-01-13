import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
    selector: "xlsx",
    templateUrl: "./xlsx.component.html",
})
export class ExportExcel implements OnInit
{
    public: string;
    status: string;

    @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
    title = 'Excel';  
    ExportTOExcel() {  
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        wb.Sheets.Sheet1 = { fill: {patternType: "none",fgColor: {rgb: "FF000000"},bgColor: {rgb: "00000000"}} };  
        XLSX.utils.book_append_sheet(wb, ws, 'Control');  
        XLSX.writeFile(wb, 'PruebaExcel.xlsx');  
    }  
    team: any = [{  
        Sno: 1,  
        Team: 'India',  
        Match: 8,  
        Win: 7,  
        Loss: 0,  
        Cancel: 1,  
        Point: 15  
      
      }, {  
        Sno: 2,  
        Team: 'NewZeland',  
        Match: 8,  
        Win: 6,  
        Loss: 1,  
        Cancel: 1,  
        Point: 13  
      
      },  
      {  
        Sno: '3',  
        Team: 'Aus',  
        Match: 8,  
        Win: 6,  
        Loss: 1,  
        Cancel: 1,  
        Point: 13  
      
      },  
      {  
        Sno: '4',  
        Team: 'England',  
        Match: 8,  
        Win: 5,  
        Loss: 2,  
        Cancel: 1,  
        Point: 11  
      },  
      {  
        Sno: '5',  
        Team: 'S.Africa',  
        Match: 8,  
        Win: 4,  
        Loss: 3,  
        Cancel: 1,  
        Point: 9  
      },  
      {  
        Sno: '6',  
        Team: 'Pak',  
        Match: 8,  
        Win: 4,  
        Loss: 4,  
        Cancel: 1,  
        Point: 9  
      
      },  
      {  
        Sno: '7',  
        Team: 'SriLanka',  
        Match: 8,  
        Win: 3,  
        Loss: 3,  
        Cancel: 2,  
        Point: 8  
      
      },  
      {  
        Sno: '8',  
        Team: 'Bdesh',  
        Match: 8,  
        Win: 2,  
        Loss: 4,  
        Cancel: 2,  
        Point: 6  
      
      }  
      ];  

    constructor()
    {
        this.public = "Exportación de datos a Excel";
    }

    ngOnInit()
    {
        console.log("Componente cargado correctamente");
    }
}