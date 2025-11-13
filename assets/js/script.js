window.addEventListener('load', function () {   
    // Mode
    const modeButton = document.querySelector('#mode-button');
    if (typeof(Storage) !== "undefined") {
        const isDark = localStorage.getItem('isDark');
        
        if (isDark == 'active'){
            const bodyMode = document.body.classList.add('dark-mode');
            modeButton.setAttribute('title', 'Klik untuk mengaktifkan mode terang');
            modeButton.innerHTML = '🌞';
        }   
    }

    modeButton.addEventListener('click', function () {   
        const bodyMode = document.body.classList.toggle('dark-mode');

        if (bodyMode == true) {
            modeButton.setAttribute('title', 'Klik untuk mengaktifkan mode terang');
            modeButton.innerHTML = '🌞';
            localStorage.setItem('isDark', 'active');
        } else {
            modeButton.setAttribute('title', 'Klik untuk mengaktifkan mode gelap');
            modeButton.innerHTML = '🌚';
            localStorage.removeItem('isDark');
        }
    });

    // JSON
    if (document.getElementById('works')) {
        const works = document.getElementById('works');

        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                const datas = JSON.parse(this.responseText);
                
                const socialMediasLink =  document.createElement('ol');
                socialMediasLink.classList.add('link');
                socialMediasLink.style.textAlign = 'center';
                
                const experimentLabText =  document.createElement('h2');
                experimentLabText.innerHTML = '🤯 Lab Eksperimen';
                const experimentLabsLink =  document.createElement('ol');
                experimentLabsLink.classList.add('link');
                
                const writingPlatformText =  document.createElement('h2');
                writingPlatformText.innerHTML = '✍🏼 Platform Menulis (Esai, Artikel, dan Opini)';
                const writingPlatformsLink =  document.createElement('ol');
                writingPlatformsLink.classList.add('link');

                const academicPaperText =  document.createElement('h2');
                academicPaperText.innerHTML = '🧪 Artikel Ilmiah';
                const academicPapersLink =  document.createElement('ol');
                academicPapersLink.classList.add('link');
                
                const achievementText =  document.createElement('h2');
                achievementText.innerHTML = '🍻 Penghargaan';
                const achievementsLink =  document.createElement('ol');
                achievementsLink.classList.add('link');

                datas.forEach(data => {
                    if(data.category == 'social-medias'){
                        const socialMedia = document.createElement('li');
                        const a = document.createElement('a');
                        a.setAttribute('href', data.link);
                        a.setAttribute('target', '_blank');
                        const text = document.createTextNode(' ' + data.username);

                        const img = document.createElement('img');
                        img.setAttribute('src', data.src);
                        img.classList.add('social-media-icon');
                        
                        a.append(img, text);
                        socialMedia.append(a);
                        socialMediasLink.append(socialMedia);
                
                    }else if (data.category == 'experiment-labs') {
                        const experimentLab = document.createElement('li');
                        const a = document.createElement('a');
                        a.setAttribute('href', data.link);
                        a.setAttribute('target', '_blank');
                        const text = document.createTextNode(' ' + data.username);

                        const img = document.createElement('img');
                        img.setAttribute('src', data.src);
                        img.classList.add('social-media-icon');

                        a.append(img, text);
                        experimentLab.append(a);
                        experimentLabsLink.append(experimentLab);

                    }else if (data.category == 'writing-platforms') {
                        const writingPlatform = document.createElement('li');
                        const a = document.createElement('a');                        
                        a.innerHTML = `» ${data.platformName}`;
                        a.setAttribute('href', data.link);
                        a.setAttribute('target', '_blank');
                        writingPlatform.append(a);
                        writingPlatformsLink.append(writingPlatform);

                    }else if (data.category == 'academic-papers') {
                        const academicPaper = document.createElement('li');
                        const span = document.createElement('span');                        
                        span.innerHTML = `» ${data.citation}`;
                        const a = document.createElement('a'); 
                        a.innerHTML = "Lihat di sini";
                        a.setAttribute('href', data.link);
                        a.setAttribute('target', '_blank');
                        academicPaper.append(span, " ", a);
                        academicPapersLink.append(academicPaper);

                    }else if (data.category == 'achievements') {
                        const achievement = document.createElement('li');
                        const a = document.createElement('a');                        
                        a.innerHTML = `» ${data.raihan}`;
                        a.setAttribute('href', data.link);
                        a.setAttribute('target', '_blank');
                        achievement.append(a);
                        achievementsLink.append(achievement);

                    }else{
                        console.log(data.category);
                    }
                });

                const socialMedias = document.getElementById('social-medias');
                socialMedias.append(socialMediasLink);

                const experimentLabs = document.getElementById('experiment-labs');
                experimentLabs.append(experimentLabText);
                experimentLabs.append(experimentLabsLink);

                const writingPlatforms = document.getElementById('writing-platforms');
                writingPlatforms.append(writingPlatformText);
                writingPlatforms.append(writingPlatformsLink);

                const academicPapers = document.getElementById('academic-papers');
                academicPapers.append(academicPaperText);
                academicPapers.append(academicPapersLink);
                
                const achievements = document.getElementById('achievements');
                const achievementCautionText = document.createElement('em');
                achievementCautionText.innerHTML = "NB: Ini cuma yang bagus-bagusnya aja. Jangan salah kira, saya justru lebih sering gagal dan kalah.";
                achievements.append(achievementText);
                achievements.append(achievementCautionText);
                achievements.append(achievementsLink);
    
                works.append(experimentLabs, writingPlatforms, academicPapers, achievements);
            }
        }

        ajax.open('get', '../assets/json/data.json', true);
        ajax.send();
    }
                                
    // To Top
    const toTopButton = document.getElementById('to-top');
    toTopButton.style.visibility = 'hidden';
    
    window.addEventListener('scroll', function(){
        if (window.scrollY > 50) {
            toTopButton.style.visibility = 'visible';
        }else{
            toTopButton.style.visibility = 'hidden';
        }
    });

    toTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
