import {useEffect, useState} from "react";


function UploadForm(){
/*    [loading, setLoading] = useState(false);*/
    async function onSubmit(e){
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const bookTitle = formData.get('bookTitle');
        const inputJson = await JSON.parse(await formData.get('file').text());

        let bookObj = {
            title: bookTitle,
            parts: inputJson
        }

        if (!localStorage.getItem("books")){
            localStorage.setItem("books", "[]");
        }

        let bookList = JSON.parse(localStorage.getItem("books"));
        bookList.push(JSON.stringify(bookObj));
        localStorage.setItem("books", JSON.stringify(bookList));

        console.log(bookObj);
        setLoading(false);
    }


    return  (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="book-title-input">Gebe den Buchtitel ein: </label>
                <input type="text" name="bookTitle" id="book-title-input"/>

                <label htmlFor="input-file-upload">Lade hier das Formatierte Json hoch: </label>
                <input type="File" id="input-file-upload" name="file" accept=".json"/>
                <input type="submit"/>
            </form>
        </>
    )
}
function SavedBooksList() {

    let listBooks = localStorage.getItem("books");


}


function Upload() {
    return (
        <>
            <h1>File Upload: </h1>
            <UploadForm/>
            <h1>Gespeicherte Bücher: </h1>
        </>
    )
}

export default Upload