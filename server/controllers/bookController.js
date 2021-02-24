import Book from "../models/Book";
import catchAsync from "../utils/catchAsync"

export const createBook = catchAsync(async (req,res,next)=>{
    let bookInfo= {};
    bookInfo.Title=req.body.Title;
    bookInfo.Description=req.body.Description;
    bookInfo.Priority=req.body.Priority;
    bookInfo.CreateDate=req.requestTime = new Date().toISOString();
    console.log(taskInfo)
    const newBook = await Book.create(bookInfo);
    res.status(201).json({
        status:"success",
        newBook
            })
        })

        export const getBook = catchAsync(async(req,res,next)=>{
            const bookInfo = await Task.findById(req.params.id)
                    res.status(200).json({
                       status:"success",
                       bookInfo
                    
                })
            })
    
    //Update controll function
    export const updateBook = catchAsync(async (req,res,next)=>{
        let bookInfo= {};
        bookInfo.title=req.body.Title;
        bookInfo.Body=req.body.Description;
        bookInfo.author=req.body.Priority;
        bookInfo. ModifiedDate=req.requestTime = new Date().toISOString();
        console.log(bookInfo)
        let query = {_id:req.params.id}
     
        const updateBook = await Book.updateOne(query, bookInfo)
                res.status(200).json({
                    status:"Updated succeed",  
                    bookInfo
                })  
            })
      //Delete controll function
      export const deleteBook = catchAsync(async (req, res, next) => {
    
        let query = {_id:req.params.id}
    
        const bookInfo= await Book.deleteOne(query)
            res.send('Deleted Successfully')      
        
    })
    
          //Get All controll function
    export const getAllBooks = catchAsync(async (req,res,next) => {
       
        const allBook = await Book.find({})
            res.send(allBook)
        })