const searchForm = document.querySelector("form");
const showsContainer = document.querySelector("#shows");
const dialog = document.querySelector("dialog");
const closeModel = document.querySelector("#closeModel");
const modalTitle = document.querySelector("#modalTitle");

closeModel.addEventListener("click", () => dialog.close());

searchForm.addEventListener("submit", async function (submitEvent) {
    submitEvent.preventDefault();
    const formData = new FormData(this);
    const search = new URLSearchParams(formData).toString();
    const fetchData = await fetch(this.action + search);
    const jsonData = await fetchData.json();

    if (jsonData.length) showsContainer.innerHTML = "";
    else showsContainer.innerHTML = "<p>No results</p>";
    jsonData.forEach(result => {
        const {show} = result;
        const showContainerElement = document.createElement("div");
        showContainerElement.classList.add("show");
        const nameElement = document.createElement("h2");
        nameElement.textContent = show.name;
        const moreDetailsElement = document.createElement("a");
        moreDetailsElement.href = show.url;
        moreDetailsElement.target = "details";
        moreDetailsElement.textContent = "More details";
        moreDetailsElement.addEventListener("click", () => {
            dialog.showModal();
            modalTitle.textContent = show.name;
        });
        const img = document.createElement("img");
        img.src = show.image?.medium ?? "./img/noimage.png";
        const genreContainer = document.createElement("div");
        genreContainer.innerHTML += "<h2>Genres</h2>"
        genreContainer.classList.add("genres");
        show.genres.forEach(genre => {
            const genreElement = document.createElement("p");
            genreElement.textContent = genre;
            genreElement.classList.add("genre");
            genreContainer.appendChild(genreElement);
        });
        const summaryElement = document.createElement("div");
        summaryElement.classList.add("summary");
        summaryElement.innerHTML = show.summary;
        showContainerElement.append(nameElement, img, summaryElement, moreDetailsElement);
        if (show.genres?.length) img.after(genreContainer)
        showsContainer.append(showContainerElement);
    });
});