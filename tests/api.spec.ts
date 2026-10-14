import { test, request, expect } from '@playwright/test';

// test('get api', async({request})=>{
//     let response = await request.get("https://dummyjson.com/products?limit=5",{headers:{Authorization:"Bearer your_token_here"}})
//     // let response = await request.get("https://dummyjson.com/products?limit=5",{headers:{'x-api-key':"Bearer your_token_here"}})
//     console.log(response)
//     let data = await response.json()
//     expect(await response.status()).toBe(200)
//     console.log(data["products"][0]["title"])
//     expect(data["products"][0]["title"]).toBe("test")
// })


import fs from 'fs'
import jsonHndling from '../utils/dataHandling'
// test('get api2', async({})=>{
//     let context = await request.newContext({httpCredentials:{"username":"va","password":"va"}})
//     let response = await context.get("https://dummyjson.com/products?limit=5",{headers:{'x-api-key':"Bearer your_token_here"}})
//     console.log(response)
//     let data = await response.json()
//     expect(await response.status()).toBe(200)
//     console.log(data["products"][0]["title"])
//     expect(data["products"][0]["title"]).toBe("test")
// })


test('post api @api', async({request})=>{
    let req = jsonHndling("testData\\api.json")
    let response = await request.post("https://dummyjson.com/products/add",{headers:{Authorization:"Bearer your_token_here"}, data:req})
    console.log(response)
    expect(await response.status()).toBe(201)
})