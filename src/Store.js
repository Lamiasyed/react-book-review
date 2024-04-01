 

 const ApplicationgetItem=()=>{
    const ApplicationItem=localStorage.getItem('Application-item');
    if(ApplicationItem){
        return JSON.parse(ApplicationItem)
    }return [];

 }

 const applictionId=id=>{
    const storebook=ApplicationgetItem();
    const exists=storebook.find(bookid=>bookid===id)
    if(!exists){
        storebook.push(id);
        localStorage.setItem('Application-item', JSON.stringify(storebook))
    }

 }

 export{ApplicationgetItem, applictionId}