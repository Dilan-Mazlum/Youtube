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
