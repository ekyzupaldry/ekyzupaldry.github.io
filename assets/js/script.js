window.addEventListener('load', function () {
    const checkbox = document.querySelector('.hamburger-menu input');
    const ul = document.querySelector('nav ul');

    checkbox.addEventListener('click', function (){
        ul.classList.toggle('open');
    });

    if (document.getElementById('general') && document.getElementById('special')) {
        const genaral = document.getElementById('general');
        const special = document.getElementById('special');

        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                const data = JSON.parse(this.responseText);

                data.forEach(books => {
                    if (books.category == genaral.getAttribute('id')) {
                        const card = document.createElement('div');
                        card.classList.add('card');

                        const cardTitle = document.createElement('div');
                        cardTitle.classList.add('card-title');

                        const h3 = document.createElement('h3');
                        h3.classList.add('text-center');
                        h3.innerHTML = `${books.title}`;

                        cardTitle.append(h3);

                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card-body');

                        const img = document.createElement('img');
                        img.setAttribute('src', `../assets/covers/${books.cover}`);
                        img.setAttribute('alt', 'Cover Buku');
                        img.setAttribute('loading', 'lazy');

                        const price = document.createElement('div');
                        price.classList.add('price');
                        price.classList.add('text-center');
                        price.innerHTML = `Harga: ${books.price}`;

                        const h4 = document.createElement('h4');
                        h4.innerHTML = 'Ringkasan';

                        const published = document.createElement('span');
                        published.classList.add('published');
                        published.innerHTML = `${books.published}`;

                        const p =  document.createElement('p');
                        p.innerHTML = `${books.description}`;

                        cardBody.append(img, price, h4, published, p);

                        const cardFooter = document.createElement('div');
                        cardFooter.classList.add('card-footer');

                        const btnRead = document.createElement('a');
                        btnRead.setAttribute('href', `../assets/books/${books.file}`);
                        btnRead.setAttribute('target', '_blank');
                        btnRead.innerHTML = 'Baca Dulu';
                        btnRead.classList.add('btn', 'btn-read');

                        const btnDownload = document.createElement('a');
                        btnDownload.setAttribute('href', `../assets/books/${books.file}`);
                        btnDownload.setAttribute('target', '_blank');
                        btnDownload.setAttribute('download', `${books.title}`);
                        btnDownload.innerHTML = 'Unduh Sekarang';
                        btnDownload.classList.add('btn', 'btn-download');

                        cardFooter.append(btnRead, btnDownload);

                        card.append(cardTitle, cardBody, cardFooter);
                        genaral.append(card);

                    }else{
                        const card = document.createElement('div');
                        card.classList.add('card');

                        const cardTitle = document.createElement('div');
                        cardTitle.classList.add('card-title');

                        const h3 = document.createElement('h3');
                        h3.classList.add('text-center');
                        h3.innerHTML = `${books.title}`

                        cardTitle.append(h3);

                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card-body');

                        const img = document.createElement('img');
                        img.setAttribute('src', `../assets/covers/${books.cover}`);
                        img.setAttribute('alt', 'Cover Buku');
                        img.setAttribute('loading', 'lazy');

                        const price = document.createElement('div');
                        price.classList.add('price');
                        price.classList.add('text-center');
                        price.innerHTML = `Harga: ${books.price}`;

                        const h4 = document.createElement('h4');
                        h4.innerHTML = 'Ringkasan';

                        const published = document.createElement('span');
                        published.classList.add('published');
                        published.innerHTML = `${books.published}`;

                        const p =  document.createElement('p');
                        p.innerHTML = `${books.description}`;

                        cardBody.append(img, price, h4, published, p);

                        const cardFooter = document.createElement('div');
                        cardFooter.classList.add('card-footer');

                        const btnRead = document.createElement('a');
                        btnRead.setAttribute('href', `../assets/books/${books.file}`);
                        btnRead.setAttribute('target', '_blank');
                        btnRead.innerHTML = 'Baca Dulu';
                        btnRead.classList.add('btn', 'btn-read');

                        const btnDownload = document.createElement('a');
                        btnDownload.setAttribute('href', `../assets/books/${books.file}`);
                        btnDownload.setAttribute('target', '_blank');
                        btnDownload.setAttribute('download', `${books.title}`);
                        btnDownload.innerHTML = 'Unduh Sekarang';
                        btnDownload.classList.add('btn', 'btn-download');

                        cardFooter.append(btnRead, btnDownload);

                        card.append(cardTitle, cardBody, cardFooter);
                        special.append(card);
                    }
                });
            }
        }

        ajax.open('get', '../assets/json/free-books.json', true);
        ajax.send();

    }else{
        const general = document.getElementById('general');

        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                const data = JSON.parse(this.responseText);

                data.forEach(books => {
                    if (books.category == general.getAttribute('id')) {
                        const card = document.createElement('div');
                        card.classList.add('card');

                        const cardTitle = document.createElement('div');
                        cardTitle.classList.add('card-title');

                        const h3 = document.createElement('h3');
                        h3.classList.add('text-center');
                        h3.innerHTML = `${books.title}`;

                        cardTitle.append(h3);

                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card-body');

                        const img = document.createElement('img');
                        img.setAttribute('src', `../assets/covers/${books.cover}`);
                        img.setAttribute('alt', 'Cover Buku');
                        img.setAttribute('loading', 'lazy');

                        const price = document.createElement('div');
                        price.classList.add('price');
                        price.classList.add('text-center');
                        price.innerHTML = `Harga: Rp${books.price}`;

                        const h4 = document.createElement('h4');
                        h4.innerHTML = 'Ringkasan';

                        const published = document.createElement('span');
                        published.classList.add('published');
                        published.innerHTML = `${books.published}`;

                        const p =  document.createElement('p');
                        p.innerHTML = `${books.description}`;

                        cardBody.append(img, price, h4, published, p);

                        const cardFooter = document.createElement('div');
                        cardFooter.classList.add('card-footer');

                        const btnRead = document.createElement('a');
                        btnRead.setAttribute('href', `../assets/books/${books.file}`);
                        btnRead.setAttribute('target', '_blank');
                        btnRead.innerHTML = 'Pratinjau';
                        btnRead.classList.add('btn', 'btn-read');

                        const btnDownload = document.createElement('a');
                        btnDownload.setAttribute('href', `https://forms.gle/7ppoz4oKx8BQycy47`);
                        btnDownload.setAttribute('target', '_blank');
                        btnDownload.setAttribute('download', `${books.title}`);
                        btnDownload.innerHTML = 'Beli Sekarang';
                        btnDownload.classList.add('btn', 'btn-download');

                        cardFooter.append(btnRead, btnDownload);

                        card.append(cardTitle, cardBody, cardFooter);
                        general.append(card);

                    }
                });
            }
        }

        ajax.open('get', '../assets/json/paid-books.json', true);
        ajax.send();
    }
});
