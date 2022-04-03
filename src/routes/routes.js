import express, { Router } from 'express'
import { getIndex, 
    getConnectwallet, 
    getAddnft, 
    getDetails, 
    getDelete, 
    postCriar, 
    postEditnft, 
    editNft} from '../controller/NftController.js'


export const routes = express.Router()

routes.get("/", getIndex)

routes.get("/connectwallet", getConnectwallet)

routes.get('/addnewnft', getAddnft)
routes.post('/createnft', postCriar)

routes.get('/details/:id', getDetails)

routes.get('/delete/:id', getDelete)

routes.get('/editnft/:id', editNft)
routes.post('/editnft/:id', postEditnft )

