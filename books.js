const searchBook = () =>{
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
// ================================================clear previous search data
    searchFeild.value = '';

    
    const searchItems = document.getElementById('search-items');
    searchItems.textContent = '';
// ====================================================celar previous total results
    const resultFound = document.getElementById('total-result');
    resultFound.textContent = '';
    // search result
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
// ========================================================no result found
    if (searchText == '') {
        searchItems.innerHTML = `<h1 class="text-center mt-5 pt-5 fw-lighter fst-italic">👆</h1>
        <h1 class="text-center mt-5 pt-5 fw-lighter fst-italic">Please input your valid text <span style="color: red;">‼️</span></h1>`;
    }
    else{
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
// ====================================================display show total items
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchTotalResultFound(data.numFound));
    const displaySearchTotalResultFound = result => {
        const div = document.createElement('div');
        if(result == 0){
            div.innerHTML=`<h3 class="text-center" style="color: red;">No result found!😔!</h3>`
        }
        else{
            div.innerHTML=`<h3 class="text-center"><span style="color: rgb(19, 158, 54);">Item's found:</span> ${result} </h3>`
        }
        resultFound.appendChild(div);
    };
    };
   
};

// ========================================================display show data

const displaySearchResult = books =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    
    books.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-75 h-50 mx-auto mt-4" alt="...">
            <div class="card-body">
              <h2 class="card-title"><span style="color:rgb(14, 7, 80);">${book.title}</span></h2>
              <h4 style="color: cadetblue;" class="card-title">Athour Name: ${book.author_name[0]}</h4>
              <h6 class="card-text">Frist publisher: ${book.publisher[0]}</h6>
              <p class="card-text">Frist publish year: ${book.first_publish_year}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    });
};


