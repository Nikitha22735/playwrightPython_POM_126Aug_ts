
import XLSX from 'xlsx'

export function addingNewRow(a:String,b:String){
  let filePath = "testData\\sample_creds.xlsx"
  let workbook = XLSX.readFile(filePath)
  let sheet = workbook.Sheets["Sheet2"]
  // sheet["A3"] = {v:"test123"}
 
  let data = XLSX.utils.sheet_to_json(sheet)
  data.push({"username1":a,"password2":b })
  
  workbook.Sheets["Sheet2"] = XLSX.utils.json_to_sheet(data)

   XLSX.writeFile(workbook,filePath)
}


export function redingExcel(filePath: string){
      let workbook = XLSX.readFile(filePath)
      let sheet = workbook.Sheets["Sheet2"]
    
      let data = XLSX.utils.sheet_to_json(sheet)
      return data
}
