import { listnft } from "../models/model.js"

    export const getIndex = async (req,res) => {

        try{
            const nft_catalog = await listnft.findAll()
            res.status(200).render('index.ejs',{
                nft_catalog
            })
        }

        catch(err){
            res.status(500).send(err.message)
        }  

    }

    export const getConnectwallet = (req,res) => {
        res.render('connectwallet')}

    export const getAddnft = (req,res) => {
        res.status(200).render('addnewnft')
    }

    export const getDetails = async (req,res) => {
        try{
            const nft = await listnft.findByPk(req.params.id)
            res.status(200).render('details.ejs',{
                nft
            })
        }
        catch(err){
            res.status(500).send(err.message)
        }
        
    }

    export const getDelete = async (req,res) => {
        try{
            await listnft.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.status(200).redirect('/')
        }
        catch(err){
            res.status(500).send(err.message)
        }
    }

    export const postCriar = async (req,res) => {

        try{
            const {nome,autor,description,url_img,price} = req.body
                await listnft.create({
                    nome,autor,description,url_img,price
                })
                res.status(200).redirect('/')
        }
        catch(err){
        res.send(err.message)
        }
        

    
    }

export const editNft = async(req,res) => {
    try{
        const nft = await listnft.findByPk(req.params.id)
        res.status(200).render('editnft.ejs',{
            nft
        })
    }
    catch(err){
        res.send(err.message)
    }
}

export const postEditnft = async (req,res) => {
    const detnft = req.params.id
    const {nome,autor,description,url_img,price} = req.body
    try{
        await listnft.update({
            nome : nome,
            autor : autor,
            description : description,
            url_img: url_img,
            price: price  }
            ,{
                 where: {
                id: req.params.id
            }  
        })
        res.redirect(`/details/${detnft}`)

    }
    catch(err){
        res.status(500).send(err.message)
    }
}