import { test, expect } from '@playwright/test';
import fs from 'fs'

test("json handling", async()=>{
  let filePath = "testData\\creds.json"
  let stringData = fs.readFileSync(filePath)
  let data = JSON.parse(stringData)
  console.log(data["positive"]["array"][3])

})


import {parse} from 'csv-parse/sync'

test("csv handling", async()=>{
  let filePath = "testData\\credentails.csv"
  let stringData = fs.readFileSync(filePath)
  let data = parse(stringData, {columns:true, skip_empty_lines:true})
  console.log(data[2]["username"])
})

import XLSX from 'xlsx'
test("xcel handling", async()=>{
  let filePath = "testData\\sample_creds.xlsx"
  let workbook = XLSX.readFile(filePath)
  let sheet = workbook.Sheets["Sheet2"]

  let data = XLSX.utils.sheet_to_json(sheet)
  console.log(data)
 
})

test("xcel handling2", async()=>{
  let filePath = "testData\\sample_creds.xlsx"
  let workbook = XLSX.readFile(filePath)
  let sheet = workbook.Sheets["Sheet2"]
  sheet["A3"] = {v:"test123"}
  XLSX.writeFile(workbook,filePath)
  // let data = XLSX.utils.sheet_to_json(sheet)
  
 
})


test("xcel handling3 @dh", async()=>{
  let filePath = "testData\\sample_creds.xlsx"
  let workbook = XLSX.readFile(filePath)
  let sheet = workbook.Sheets["Sheet2"]
  // sheet["A3"] = {v:"test123"}
 
  let data = XLSX.utils.sheet_to_json(sheet)
  data.push({"username1":"newUser","password2":"newpw" })
  let data2=[{"username1":"newUser","password2":"newpw" }]
  workbook.Sheets["Sheet2"] = XLSX.utils.json_to_sheet(data2)

   XLSX.writeFile(workbook,filePath)
  
 
})






test("Cli handling", async()=>{ 
  let userName = process.env.cliusname
  let password = process.env.cliPw
  console.log(userName)
  console.log(password)
})

import dotenv from 'dotenv'
test(".env handling", async()=>{ 
  dotenv.config({path:process.env.filePath})
  let userName = process.env.cliusnameEnv
  let password = process.env.cliPwEnv
  console.log(userName)
  console.log(password)
})
