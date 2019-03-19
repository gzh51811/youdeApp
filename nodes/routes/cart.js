var express = require('express');
var router = express.Router();
let db = require('../public/javascripts/index.js');


/* GET home page. */
router.post('/', async function(req, res, next) {
    let{goodsId,username,nums}=req.body

    let list = await db.find("cart",{goodsId,username});
    if(list.length>0){
        // console.log(666)
       let qty = list[0].qty*1 + nums*1;     
        let addqty = await db.update("cart",{goodsId,username},{qty});
    }else{
        let addlist = await db.insert("cart",{goodsId,username,"qty":nums});
    }
    let list2 = await db.find("cart",{username});
    let idlist =[]
        for(let i=0;i<list2.length;i++){
            idlist.push(list2[i].goodsId);
        }

     let goods = await  db.find("goods",{});
        // console.log(goods[0]);
    // for(let i =0; i<goods.length;i++){

    // }
    let newList = goods.filter((item)=>{
        return  idlist.indexOf(item.data.id)>=0;
    })
 
            res.send(newList);

});


router.post('/cartlist',async (req,res,next)=>{
    let{username}=req.body
    let carts = await db.find("cart",{username})
//     let idlist =[]
//     for(let i=0;i<carts.length;i++){
//         idlist.push(carts[i].goodsId);
//     }

//  let goods = await  db.find("goods",{});
  
 
// let newList = goods.filter((item)=>{
//     return  idlist.indexOf(item.data.id)>=0;
// })
        // console.log(carts);
        res.send(carts);
      
})
router.post("/goodslist",async (req,res,next)=>{
    let{username}=req.body;
    let list2 = await db.find("cart",{username});
    let idlist =[]
        for(let i=0;i<list2.length;i++){
            idlist.push(list2[i].goodsId);
        }

     let goods = await  db.find("goods",{});
        // console.log(goods[0]);
    // for(let i =0; i<goods.length;i++){

    // }
    let newList = goods.filter((item)=>{
        return  idlist.indexOf(item.data.id)>=0;
    })
 
            res.send(newList);
})

router.post('/add', async function(req, res, next) {
    let{goodsId,username}=req.body

    let list = await db.find("cart",{goodsId,username});
    if(list.length>0){
       
       let qty = list[0].qty + 1;     
        let addqty = await db.update("cart",{goodsId,username},{qty});
    }else{
        let addlist = await db.insert("cart",{goodsId,username,"qty":1});
    }
    let list2 = await db.find("cart",{username});
    res.send(list2)
})

router.post('/del', async function(req, res, next) {
    let{goodsId,username}=req.body

    let list = await db.find("cart",{goodsId,username});
 
    let qty = list[0].qty - 1;     
    let addqty = await db.update("cart",{goodsId,username},{qty});

    let list2 = await db.find("cart",{username});
    res.send(list2);
})

router.post('/remove', async function(req, res, next) {
    let{username}=req.body
    let goodsList = [];
    for(item in req.body){
        if(item.includes('goods')){
            console.log(item);
            goodsList.push(req.body[item]);
        }
    }
    console.log(goodsList);
    let remove = await db.delete("cart",{
            username,
            goodsId:{$in:goodsList}
        })

        if(remove.result.ok){
             
            let goodslist = await db.find("cart",{username})
            let list = []
            for(let i=0; i<goodslist.length; i++){
                  list.push(goodslist[i].goodsId);
            }

            let list2 = await db.find("goods",{})  
            let cartlist = list2.filter((item)=>{
                return  list.indexOf(item.data.id)>=0;
            })
            // console.log(cartlist,goodslist);
            res.send({
                cartlist,
                goodslist
            })
        }else{
            res.send("no")
        }

    // res.send("123");
    
})

module.exports = router;
