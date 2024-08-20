const youtube = [
    {
        video: 'https://i.ytimg.com/vi/HFJr-SDNo8A/maxresdefault.jpg',
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_lhYpSTglJCJC0f6ew90EgyjMxJ2EZx3GNIgCuhjiafJJQ=s900-c-k-c0x00ffffff-no-rj',
        name: 'Berk Baysal-Zamanla Geçer',
        channel: 'Berkbaysal',
        view: '1,6 Mn Görüntüleme',
        date: '1 ay önce'
    },
    {
        video: 'https://i.ytimg.com/vi/9O_j3iv1L8c/maxresdefault.jpg',
        image: 'https://i.scdn.co/image/ab6761610000e5eb18f16c7e0df89ff5627f0797',
        name: 'Mabel Matiz-Kömür',
        channel: 'mabelmatiz',
        view: '8,7 Mn Görüntüleme',
        date: '5 ay önce'
    },
    {
        video: 'https://i.ytimg.com/vi/IeDbkrzxSZY/maxresdefault.jpg',
        image: 'https://yt3.googleusercontent.com/ol4hC642FjxSdCR4IyO-wT5Jc4tJHun05xDF-cK4SxIqnrXmzWaoedwd6sUBnyK51Y4NQdVHoA=s900-c-k-c0x00ffffff-no-rj',
        name: 'Emre Fel-Yine Beni Sev',
        channel: 'felemre',
        view: '2,1 Mn Görüntüleme',
        date: '4 yıl önce'
    },
    {
        video: 'https://i.ytimg.com/vi/83PXWOoucDU/maxresdefault.jpg',
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mShBj21garvRP0LB71w-rzz25gDEoMyLdl66gyCcrqt38=s900-c-k-c0x00ffffff-no-rj',
        name: 'Sezen Aksu-Vazgeçtim',
        channel: 'Sezenaksu',
        view: '12,9 Mn Görüntüleme',
        date: '20 yıl önce'
    },
    {
        video: 'https://i.ytimg.com/vi/FRYnMdQv85E/maxresdefault.jpg',
        image: 'https://pbs.twimg.com/media/EYywgLRX0AEWvNZ?format=jpg&name=4096x4096',
        name:  'Tom ve Jerry 18.Bölüm',
        channel: 'DisneyChannel',
        view: '495 Mn Görüntüleme',
        date: '42 yıl önce'
    },
    {
        video: 'https://i.ytimg.com/vi/MDWUyOcmN3c/maxresdefault.jpg',
        image: 'https://i.ytimg.com/vi/tirQZCH4ps0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgXChLMA8=&rs=AOn4CLB17BXVJs4c7gffteUFziPd30uJAg',
        name: 'Duman-Senden Daha Güzel',
        channel: 'Duman',
        view: '80 Mn Görüntüleme',
        date: '12 yıl önce'
    }

];


const contentsDiv = document.querySelector('.contents');

youtube.forEach((youtubes, key) => {
    const content = document.createElement("div");
    content.classList.add('content');   
    const video = document.createElement("div");
    video.classList.add('cont-video');  
    const contimage = document.createElement("img");
    contimage.classList.add('cont-img');
    contimage.src = youtubes.video; 
    const icon = document.createElement("div");
    icon.classList.add('cont-icon');
    const iconimage = document.createElement("img");
    iconimage.classList.add('cont-icon-img');
    iconimage.src = youtubes.image;
    const iconwrite = document.createElement("div");
    iconwrite.classList.add('cont-write');
    iconwrite.textContent = youtubes.name;
    const iconchannel = document.createElement("div");
    iconchannel.id = 'channel';
    const iconchannelname = document.createElement("div");
    iconchannelname.classList.add('channel-name');
    iconchannelname.textContent = youtubes.channel;
    const iconchannelview = document.createElement("div");
    iconchannelview.classList.add('view');
    iconchannelview.textContent = youtubes.view;
    const icondatetime = document.createElement("div");
    icondatetime.classList.add('view');
    icondatetime.textContent = youtubes.date;
    

    content.appendChild(video);
    content.appendChild(icon);
    video.appendChild(contimage);
    icon.appendChild(iconimage);
    icon.appendChild(iconwrite);
    iconwrite.appendChild(iconchannel);
    iconchannel.appendChild(iconchannelname);
    iconchannel.appendChild(iconchannelview);
    iconchannelview.appendChild(icondatetime)
    iconchannel.appendChild(icondatetime);

    contentsDiv.appendChild(content);
});



const mainContainer = document.querySelector('.main-contents');

const itemtop = [
    'Tümü',
    'Müzik',
    'Mix\'ler',
    'Oyun',
    'Sitcom\'lar',
    'Canlı',
    'Doğa',
    'Futbol',
    'Son Yüklenenler',
    'İzlenenler',
    'Yeni Öneriler'
];

const mainText = document.createElement("div");
mainText.classList.add('main');
const items = document.createElement("div");
items.classList.add('all-items');

itemtop.forEach(key => {
    const topitem = document.createElement("div");
    topitem.classList.add('top-items');
    topitem.textContent = key;
    items.appendChild(topitem);
});

mainText.appendChild(items);
mainContainer.appendChild(mainText);

const navigationitems = [
    {
        icon: 'home',
        text: 'Anasayfa'
    },
    {
        icon: 'smart_display',
        text: 'Shorts'
    },
    {
        icon: 'subscriptions',
        text: 'Abonelikler'
    },
    {
        icon: 'sound_sampler',
        text: 'YouTube Music'
    },

];

const navigationitems2 = [

    {
        icon: 'account_box',
        text: 'Kanalınız'
    },
    {
        icon: 'history',
        text: 'Geçmiş'
    },
    {
        icon: 'playlist_play',
        text: 'Oynatma Listeleri'
    },
    {
        icon: 'smart_display',
        text: 'Videolarınız'  
    },
    {
        icon: 'schedule',
        text: 'Daha sonra izle'
    },
    {
        icon: 'thumb_up',
        text: 'Beğendiğim videolar'
    },
    {
        icon: 'vertical_align_bottom',
        text: 'İndirilenler'
    },

];
const navigationitems3 = [
    {
        image:'https://yt3.googleusercontent.com/L0v9aNMeOlm2LoOWHEw2UjVr-MLRyNbTqUM0QRwAJDaWLmbpH8rpDA0Wo9BOD0kj9euKwfVJ=s900-c-k-c0x00ffffff-no-rj',
        itemtext:'Tarkan'
    },
    {
        image:'https://yt3.googleusercontent.com/kDz0dXEKu0_kGt4ThuOT9rkEc6lMBcIkLIzaC65XW56EXNRVeMw9vFwEBO-5pqWNww2yf18E9A=s900-c-k-c0x00ffffff-no-rj',
        itemtext:'Sıla'
    },
    {
        image:'https://yt3.googleusercontent.com/eZ_owKgcvyAUDajGic13hjoEJ5SMh__PB7v0vfxW8To1-54jaxNTJtSN1baXC_mkaLbUHy144w=s900-c-k-c0x00ffffff-no-rj',
        itemtext:'Sefo'
    }

];

const navigationitems4 = [
    {
        icon: 'local_fire_department',
        text: 'Trendler'
    },
    {
        icon: 'music_note',
        text: 'Müzik'
    },
    {
        icon: 'podcasts',
        text: 'Canlı'
    },
    {
        icon: 'sports_esports',
        text: 'Oyun'  
    },
    {
        icon: 'trophy',
        text: 'Spor'
    },
];
let result = navigationitems.concat(navigationitems2,navigationitems3,navigationitems4)

console.log(result)
const navigationcontainer = document.querySelector('.navigation');


function renderSideMenu(array) {
    const leftcontainer = document.createElement("div");
    leftcontainer.classList.add('left');
    array.forEach((navigationkey,key) => {
        const navigationhome = document.createElement("div");
        navigationhome.classList.add('navigation-item');
        let navigationhomeicon = '';
        if(navigationkey.icon){
            navigationhomeicon = document.createElement("span");
            navigationhomeicon.classList.add('material-symbols-outlined');
            navigationhomeicon.textContent = navigationkey.icon;
            navigationhomeicon.setAttribute('id','color');
        }
        if(navigationkey.image){
            navigationhomeicon = document.createElement("img");
            navigationhomeicon.classList.add('subscribe-profile');
            navigationhomeicon.src =navigationkey.image;
            navigationhomeicon.textContent = navigationkey.itemtext
        }
        const hometext = document.createElement("div")
        hometext.classList.add('deneme')
        hometext.textContent= navigationkey.text || navigationkey.itemtext
        
        navigationcontainer.appendChild(leftcontainer)
        navigationhome.appendChild(navigationhomeicon)
        navigationhomeicon.appendChild(hometext)
        navigationhome.appendChild(hometext)
        leftcontainer.appendChild(navigationhome)
    });

    
     
const index = 3; 
const itemindex = document.querySelectorAll('.navigation-item');
if (index >= 0 && index < itemindex .length) {
    itemindex [index].style.borderBottom = '1px solid #e6e6e6';
}

const index1 = 10; 
const itemindex1 = document.querySelectorAll('.navigation-item');
if (index1 >= 0 && index1 < itemindex1 .length) {
    itemindex1 [index1].style.borderBottom = '1px solid #e6e6e6';
}
const index2 = 13; 
const itemindex2 = document.querySelectorAll('.navigation-item');
if (index2 >= 0 && index2 < itemindex2 .length) {
    itemindex2 [index2].style.borderBottom = '1px solid #e6e6e6';
}
}

renderSideMenu(result)