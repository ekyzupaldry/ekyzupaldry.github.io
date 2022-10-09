window.addEventListener('load', function () {
    const checkbox = document.querySelector('.hamburger-menu input');
    const ul = document.querySelector('nav ul');

    checkbox.addEventListener('click', function (){
        ul.classList.toggle('open');
    });

   if (document.getElementById('e-books') && document.getElementById('tips-and-tricks')) {
    const ebooks = document.getElementById('e-books');
    const tipsAndTricks = document.getElementById('tips-and-tricks');

    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            const data = JSON.parse(this.responseText);

            data.forEach(ebook => {
                if (ebook.category == ebooks.getAttribute('id')) {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardTitle = document.createElement('div');
                    cardTitle.classList.add('card-title');

                    const h3 = document.createElement('h3');
                    h3.classList.add('text-center');
                    h3.innerHTML = `${ebook.title}`;

                    cardTitle.append(h3);

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    const img = document.createElement('img');
                    img.setAttribute('src', `../assets/img/${ebook.img}`);
                    img.setAttribute('alt', 'Cover E-book');
                    img.setAttribute('loading', 'lazy');

                    const h4 = document.createElement('h4');
                    h4.innerHTML = 'Ringkasan';

                    const p =  document.createElement('p');
                    p.innerHTML = `${ebook.description}`;

                    cardBody.append(img, h4, p);

                    const cardFooter = document.createElement('div');
                    cardFooter.classList.add('card-footer');

                    const btnRead = document.createElement('a');
                    btnRead.setAttribute('href', `../assets/e-books/${ebook.file}`);
                    btnRead.setAttribute('target', '_blank');
                    btnRead.innerHTML = 'Baca Dulu';
                    btnRead.classList.add('btn', 'btn-read');

                    const btnDownload = document.createElement('a');
                    btnDownload.setAttribute('href', `../assets/e-books/${ebook.file}`);
                    btnDownload.setAttribute('target', '_blank');
                    btnDownload.setAttribute('download', `${ebook.title}`);
                    btnDownload.innerHTML = 'Unduh Sekarang';
                    btnDownload.classList.add('btn', 'btn-download');

                    cardFooter.append(btnRead, btnDownload);

                    card.append(cardTitle, cardBody, cardFooter);
                    ebooks.append(card);

                }else{
                    const card = document.createElement('div');
                    card.classList.add('card');

                    const cardTitle = document.createElement('div');
                    cardTitle.classList.add('card-title');

                    const h3 = document.createElement('h3');
                    h3.classList.add('text-center');
                    h3.innerHTML = `${ebook.title}`

                    cardTitle.append(h3);

                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    const img = document.createElement('img');
                    img.setAttribute('src', `../assets/img/${ebook.img}`);
                    img.setAttribute('alt', 'Cover E-book');
                    img.setAttribute('loading', 'lazy');

                    const h4 = document.createElement('h4');
                    h4.innerHTML = 'Ringkasan';

                    const p =  document.createElement('p');
                    p.innerHTML = `${ebook.description}`;

                    cardBody.append(img, h4, p);

                    const cardFooter = document.createElement('div');
                    cardFooter.classList.add('card-footer');

                    const btnRead = document.createElement('a');
                    btnRead.setAttribute('href', `../assets/e-books/${ebook.file}`);
                    btnRead.setAttribute('target', '_blank');
                    btnRead.innerHTML = 'Baca Dulu';
                    btnRead.classList.add('btn', 'btn-read');

                    const btnDownload = document.createElement('a');
                    btnDownload.setAttribute('href', `../assets/e-books/${ebook.file}`);
                    btnDownload.setAttribute('target', '_blank');
                    btnDownload.setAttribute('download', `${ebook.title}`);
                    btnDownload.innerHTML = 'Unduh Sekarang';
                    btnDownload.classList.add('btn', 'btn-download');

                    cardFooter.append(btnRead, btnDownload);

                    card.append(cardTitle, cardBody, cardFooter);
                    tipsAndTricks.append(card);
                }
            });
        }
    }

    ajax.open('get', '../assets/json/e-books.json', true);
    ajax.send();
   }
});
