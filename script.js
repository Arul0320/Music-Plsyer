function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class CardProfile extends React.Component {
    constructor(...args) {
        super(...args);
        _defineProperty(this, "state", {
            index: 3,
            currentTime: '0:00',
            musicList: [{
                    name: 'Naan-Un',
                    author: 'ARR',
                    img: 'https://igmedia.blob.core.windows.net/igmedia/tamil/news/24_preview_252016_m.jpg',
                    audio: 'sngs/Naan-Un.mp3',
                    duration: '4:48'
                },
                {
                    name: 'Nallai Allai',
                    author: 'ARR',
                    img: 'https://m.media-amazon.com/images/M/MV5BZTg1NDk4Y2UtZjE2Yy00ZTU3LWEyMDUtMDZkMTY3Y2E4NWZkXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg',
                    audio: 'sngs/Nallai-Allai.mp3',
                    duration: '3:59'
                },
                {
                    name: 'Pathala Pathala',
                    author: 'Anirudh',
                    img: 'https://www.koimoi.com/wp-content/new-galleries/2022/05/kamal-haasan-led-vikram-is-rocking-with-its-pre-release-business-001.jpg',
                    audio: 'sngs/Pathala-Pathala-MassTamilan.so.mp3',
                    duration: '3:31'
                },
                {
                    name: 'Thoduvanandhaa',
                    author: 'Sam',
                    img: 'https://cdn.tollywood.net/wp-content/uploads/2021/12/Shyam-Singha-Roy-2-Days-Collections.jpg',
                    audio: 'sngs/Thoduvanandhaa-MassTamilan.fm.mp3',
                    duration: '4:13'
                },
                {
                    name: 'Vilambara Idaiveli',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/dsrku40uZMc/maxresdefault.jpg',
                    audio: 'sngs/Vilambara Idaiveli -- Masstamilan.In-.mp3',
                    duration: '4:33'
                },
                {
                    name: 'Adi-Penne',
                    author: 'Stephen Zechariah',
                    img: 'https://i.ytimg.com/vi/AAr5lrXUaOs/maxresdefault.jpg',
                    audio: 'sngs/Adi-Penne-MassTamilan.fm.mp3',
                    duration: '5:01'
                },
                {
                    name: 'Aga Naga',
                    author: 'ARR',
                    img: 'https://www.hindustantimes.com/ht-img/img/2023/04/29/550x309/ponniyin_selvan_2_1682741573612_1682741573722.jpeg',
                    audio: 'sngs/Aga-Naga-MassTamilan.dev.mp3',
                    duration: '4:03'
                },
                {
                    name: 'Muttu Muttu',
                    author: 'Teejay',
                    img: 'https://i.ytimg.com/vi/6D6kJdt2BrM/maxresdefault.jpg',
                    audio: 'sngs/Muttu Muttu.mp3',
                    duration: '6:32'
                },
                {
                    name: 'Pularadha Kadhale',
                    author: 'Justin Prabhakaran',
                    img: 'https://i.ytimg.com/vi/lsUVfha7IOQ/maxresdefault.jpg',
                    audio: 'sngs/Pularadha.mp3',
                    duration: '4:21'
                },
                {
                    name: 'Aanandha Yazhai',
                    author: 'Sriram Parthasarathy',
                    img: 'https://i.ytimg.com/vi/0AqW1YpIR2o/maxresdefault.jpg',
                    audio: 'sngs/Aanandha-Yazhai.mp3',
                    duration: '3:35'
                },
                {
                    name: 'Aathadi Aathadi',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/MGjBQDrtGbA/maxresdefault.jpg',
                    audio: 'sngs/Aathadi-Aathadi.mp3',
                    duration: '5:52'
                },
                {
                    name: 'Aathi',
                    author: 'Anirudh, Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/YQ6ShcAU_dQ/maxresdefault.jpg',
                    audio: 'sngs/Aathi.mp3',
                    duration: '5:53'
                },
                {
                    name: 'Aathichudi',
                    author: 'Vijay Antony',
                    img: 'https://i.ytimg.com/vi/1XWLzEKEdOs/maxresdefault.jpg',
                    audio: 'sngs/Aathichudi.mp3',
                    duration: '4:13'
                },
                {
                    name: 'Adiyea Koluthey',
                    author: 'Harris Jayaraj',
                    img: 'https://i.ytimg.com/vi/mvC09FA8IHo/maxresdefault.jpg',
                    audio: 'sngs/Adiyae-Kolluthey.mp3',
                    duration: '5:15'
                },
                {
                    name: 'Yennai Maatrum Kadhale',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/-mg_zzM-6eU/maxresdefault.jpg',
                    audio: 'sngs/Yennai Maatrum Kadhale.mp3',
                    duration: '4:13'
                },
                {
                    name: 'Yedho Maayam Saigirai',
                    author: 'Jithin Raj ',
                    img: 'https://i.ytimg.com/vi/VTmmVEBu6Gs/maxresdefault.jpg',
                    audio: 'sngs/Yedho Maayam Saeigir.mp3',
                    duration: '4:45'
                },
                {
                    name: 'Venmegam Pennaga',
                    author: 'Hariharan',
                    img: 'https://i.pinimg.com/originals/d8/40/39/d8403929f9faa3ce9c4db1bb29026bbe.jpg',
                    audio: 'sngs/Venmegam-Pennaga.mp3',
                    duration: '4:39'
                },
                {
                    name: 'Vaan Engum Nee',
                    author: 'Harris Jayaraj',
                    img: 'https://i.ytimg.com/vi/spHuoDh_zoI/maxresdefault.jpg',
                    audio: 'sngs/Vaan-Engum-Nee-Minna.mp3',
                    duration: '4:27'
                },
                {
                    name: 'Un Vizhigalil',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/8T7WQrcyE9s/maxresdefault.jpg',
                    audio: 'sngs/Un-Vizhigalil.mp3',
                    duration: '4:03'
                },
                {
                    name: 'Thozhi',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/206dnTcpKlI/maxresdefault.jpg',
                    audio: 'sngs/Thozhi.mp3',
                    duration: '4:57'
                },
                {
                    name: 'Thalli Pogathey',
                    author: 'ARR',
                    img: 'https://qqcdnpictest.mxplay.com/pic/f5b52a9bc2c401c8e750cebcd3f9d10b/en/16x9/640x360/hungama_5e1bf865192da1e830827a525cf6773b.jpg',
                    audio: 'sngs/Thalli-Pogathey.mp3',
                    duration: '4:26'
                },
                {
                    name: 'Tharame Tharame',
                    author: 'Ghibran',
                    img: 'https://i.ytimg.com/vi/azA9XXgMvcU/maxresdefault.jpg',
                    audio: 'sngs/Thaarame-Thaarame.mp3',
                    duration: '3:48'
                },
                {
                    name: 'Solitaley Ava Kadhala',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/1M4iizW9Gyw/maxresdefault.jpg',
                    audio: 'sngs/Sollitaley-Ava-Kaadhala-II.mp3',
                    duration: '4:33'
                },
                {
                    name: 'Sirikkadhey',
                    author: 'Anirudh',
                    img: 'https://tamilpadalvarigal.com/wp-content/webp-express/webp-images/uploads/2021/01/sirikkadhey-song-lyrics.jpg.webp',
                    audio: 'sngs/Sirikkadhey.mp3',
                    duration: '4:06'
                },
                {
                    name: 'Showkali',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/pfVODjDBFxU/maxresdefault.jpg',
                    audio: 'sngs/Showkali.mp3',
                    duration: '4:38'
                },
                {
                    name: 'Seramal Ponal',
                    author: 'Vivek Mervin',
                    img: 'https://i.ytimg.com/vi/pfVODjDBFxU/maxresdefault.jpg',
                    audio: 'sngs/Seramal Ponal.mp3',
                    duration: '4:51'
                },
                {
                    name: 'Satisfya',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/pfVODjDBFxU/maxresdefault.jpg',
                    audio: 'sngs/Satisfiya.mp3',
                    duration: '3:05'
                },
                {
                    name: 'Sarattu Vandiyila',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/Bw9b1LSxg-I/maxresdefault.jpg',
                    audio: 'sngs/Saarattu Vandiyila.mp3',
                    duration: '4:50'
                },
                {
                    name: 'Rail Aaraaroo',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/M_NPpyivpwk/maxresdefault.jpg',
                    audio: 'sngs/Rail Aaraaroo.mp3',
                    duration: '4:57'
                },
                {
                    name: 'Pottakaatil Poovasam',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/eJujDkKTjZc/maxresdefault.jpg',
                    audio: 'sngs/Pottakaatil Poovasam.mp3',
                    duration: '6:39'
                },
                {
                    name: 'Porada Porada',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/V4xtSXupRzc/maxresdefault.jpg',
                    audio: 'sngs/Poraada Poraada.mp3',
                    duration: '3:38'
                },
                {
                    name: 'Pookkale Satru',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/kemCPuDhEDM/maxresdefault.jpg',
                    audio: 'sngs/Pookkale-Satru.mp3',
                    duration: '5:08'
                },
                {
                    name: 'Pondatte',
                    author: 'Achu',
                    img: 'https://a10.gaanacdn.com/gn_img/song/0wrb4kNWLg/rb4jezVX3L/size_l_1520508640.jpg',
                    audio: 'sngs/Pondattee.mp3',
                    duration: '4:10'
                },
                {
                    name: 'Pakkam Vanthu',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/Zy_KwCohQd0/maxresdefault.jpg',
                    audio: 'sngs/Pakkam-Vanthu.mp3',
                    duration: '4:16'
                },
                {
                    name: 'Pachai Vanna',
                    author: 'Yuvan Shankar Raja',
                    img: 'https://i.ytimg.com/vi/4J2PR9GCad0/maxresdefault.jpg',
                    audio: 'sngs/Pachai Vanna.mp3',
                    duration: '4:15'
                },
                {
                    name: 'Paalam',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/cNrzG4Oa4-Y/maxresdefault.jpg',
                    audio: 'sngs/Paalam.mp3',
                    duration: '5:11'
                },
                {
                    name: 'Oxygen',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/gUXFiuBkPb8/maxresdefault.jpg',
                    audio: 'sngs/Oxygen.mp3',
                    duration: '4:34'
                },
                {
                    name: 'Oruthi Mele',
                    author: 'GV Prakash',
                    img: 'https://i.ytimg.com/vi/bMQNtBQIoPI/maxresdefault.jpg',
                    audio: 'sngs/Oruthi Mele.mp3',
                    duration: '4:23'
                },
                {
                    name: 'Oru Manam',
                    author: 'Harris Jayaraj',
                    img: 'https://static.toiimg.com/photo/78567728/size-131621/78567728.jpg',
                    audio: 'sngs/Oru-Manam.mp3',
                    duration: '6:08'
                },
                {
                    name: 'Oru Kal',
                    author: 'Yuvan Shankar Raja',
                    img: 'https://i.ytimg.com/vi/ULPWHeAPCQw/maxresdefault.jpg',
                    audio: 'sngs/Oru Kal.mp3',
                    duration: '5:06'
                },
                {
                    name: 'Orasaadha Usurathan',
                    author: 'Vivek Mervin',
                    img: 'https://i.ytimg.com/vi/oakNKCwMoSo/maxresdefault.jpg',
                    audio: 'sngs/Orasaadha Usurathan.mp3',
                    duration: '4:01'
                },
                {
                    name: 'Omana Penne',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/CNPtULCngsQ/maxresdefault.jpg',
                    audio: 'sngs/Omana-Penne.mp3',
                    duration: '5:32'
                },
                {
                    name: 'Nesamaguren',
                    author: 'Stephen Zechariah',
                    img: 'https://i.ytimg.com/vi/JMpTsEKkC90/maxresdefault.jpg',
                    audio: 'sngs/Nesamaguren.mp3',
                    duration: '4:23'
                },
                {
                    name: 'Nenjukkule',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/XYZwp-WAg6I/maxresdefault.jpg',
                    audio: 'sngs/Nenjukkule.mp3',
                    duration: '4:50'
                },
                {
                    name: 'Nenja Unakaga',
                    author: 'D.Imman',
                    img: '  https://www.tamil2lyrics.com/wp-content/uploads/2019/06/nenja-unakaga-song-image-sindhubaadh.webp',
                    audio: 'sngs/Nenja Unakaga.mp3',
                    duration: '3:17'
                },
                {
                    name: 'Neeyum Naanum',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/fYkQzTAx3Yo/maxresdefault.jpg',
                    audio: 'sngs/Neeyum-Naanum.mp3',
                    duration: '5:02'
                },
                {
                    name: 'Natpu',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/0p4mGx7QIU0/maxresdefault.jpg',
                    audio: 'sngs/Natpu.mp3',
                    duration: '5:40'
                },
                {
                    name: 'Nallai Allai',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/Ixiq9ysnqos/maxresdefault.jpg',
                    audio: 'sngs/Nallai-Allai.mp3',
                    duration: '4:00'
                },
                {
                    name: 'Naan Un',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/xp7fNsA1v0U/maxresdefault.jpg',
                    audio: 'sngs/Naan-Un.mp3',
                    duration: '4:48'
                },
                {
                    name: 'Naan Pizhaippeno',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/pYBIpM5mBm4/maxresdefault.jpg',
                    audio: 'sngs/Naan Pizhaippeno.mp3',
                    duration: '6:01'
                },
                {
                    name: 'Naan Nee',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/HW-o0YXmFa0/maxresdefault.jpg',
                    audio: 'sngs/Naan Nee.mp3',
                    duration: '4:13'
                },
                {
                    name: 'Mei Nigara',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/xp7fNsA1v0U/maxresdefault.jpg',
                    audio: 'sngs/Mei-Nigara.mp3',
                    duration: '5:16'
                },
                {
                    name: 'Meegam Karukatha',
                    author: 'D.Imman',
                    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzcyso4CED-uZo5L_B2OybZW0TEIrM3o9wJGZ0rcgplJG07eVndVoUn3Gc5woqfbw5PkZ3ab5Lm_wV6ULHgAhLzCjA4lJtm1MC6mPM0i1Ldw26mq4t5vyvNu36OUJxFAccaEOYGD_j6T-mty3P7GSy-v9GTP11FMVaAIilTCaSuvUZ_2YHJOOP4FAK/w1600/Copy%20of%20Copy%20of%20audio%20player%20Logo.png',
                    audio: 'sngs/Meegam-Karukatha.mp3',
                    duration: '4:50'
                },
                {
                    name: 'Mazhai Kuruvi',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/uu-dHooorcE/maxresdefault.jpg',
                    audio: 'sngs/Mazhai Kuruvi.mp3',
                    duration: '5:50'
                },
                {
                    name: 'Maruvaarthai Pesathey',
                    author: 'ARR',
                    img: 'https://www.lyricsila.com/wp-content/uploads/Maruvarthai-Pesathe-Lyrics-Enai-Noki-Paayum-Thota-700x400.jpg',
                    audio: 'sngs/Maruvaarthai Pesathey.mp3',
                    duration: '5:54'
                },
                {
                    name: 'Marudhaani Marudhaani',
                    author: 'ARR',
                    img: 'https://www.tamilpaa.com/upload/movies/sakkarakatti.jpg',
                    audio: 'sngs/Marudhaani Marudhaani.mp3',
                    duration: '6:27'
                },
                {
                    name: 'Mannipaaya',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/ed6VxAKX0Dg/maxresdefault.jpg',
                    audio: 'sngs/Mannipaaya.mp3',
                    duration: '6:56'
                },
                {
                    name: 'Macha Kanni',
                    author: 'Vijay Antony',
                    img: 'https://i.ytimg.com/vi/CtHawJAZLGg/maxresdefault.jpg',
                    audio: 'sngs/Macha-Kanni.mp3',
                    duration: '4:50'
                },
                {
                    name: 'Kona Kondakari',
                    author: 'D.Imman',
                    img: 'https://www.tamilpaa.com/upload/movies/matha-yaanai-koottam.jpg',
                    audio: 'sngs/Kona_Kondakari.mp3',
                    duration: '4:34'
                },
                {
                    name: 'Kodu Poatta',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/H_-4gcev0KE/maxresdefault.jpg',
                    audio: 'sngs/Kodu-Poatta.mp3',
                    duration: '4:33'
                },
                {
                    name: 'Karuvakkattu Karuvaya',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/LcepC4wGlc4/maxresdefault.jpg',
                    audio: 'sngs/Karuvakkattu-Karuvaya.mp3',
                    duration: '4:50'
                },
                {
                    name: 'Kannukkul Kannai',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/TD1mHl9mUN4/maxresdefault.jpg',
                    audio: 'sngs/Kannukkul-Kannai.mp3',
                    duration: '3:52'
                },
                {
                    name: 'Kannala Kannala',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/7dDeAE2V0oM/maxresdefault.jpg',
                    audio: 'sngs/Kannala Kannala.mp3',
                    duration: '3:35'
                },
                {
                    name: 'Aye Aye Aye',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/Cjb0mkUeNnA/maxresdefault.jpg',
                    audio: 'sngs/Aye Aye Aye.mp3',
                    duration: '3:21'
                },
                {
                    name: 'Azhagiye',
                    author: 'Hip Hop Tamizha',
                    img: 'https://i.ytimg.com/vi/TFUBlO-zJGg/maxresdefault.jpg',
                    audio: 'sngs/Azhagiye.mp3',
                    duration: '3:45'
                },
                {
                    name: 'Bodhai Kaname',
                    author: 'D.Imman',
                    img: 'https://i.ytimg.com/vi/jxSo0EE-D2c/maxresdefault.jpg',
                    audio: 'sngs/Bodhai-Kaname.mp3',
                    duration: '4:22'
                },
                {
                    name: 'Chennai City Gangsta',
                    author: 'Hip Hop Tamizha, Anirudh',
                    img: 'https://i.ytimg.com/vi/hAn75DAONqs/maxresdefault.jpg',
                    audio: 'sngs/Chennai City Gangsta.mp3',
                    duration: '4:18'
                },
                {
                    name: 'Danga Maari Oodhari',
                    author: 'Harris Jayaraj',
                    img: 'https://divieditz.com/wp-content/uploads/2019/11/Danga-Maari-Oodhari-Song-Lyrics-Anegan-1280x600.jpg',
                    audio: 'sngs/Danga Maari Oodhari.mp3',
                    duration: '5:42'
                },
                {
                    name: 'Dhandiya',
                    author: 'Unimenon',
                    img: 'https://i.ytimg.com/vi/ZK1be6IE83A/maxresdefault.jpg',
                    audio: 'sngs/Dhandiya.mp3',
                    duration: '7:49'
                },
                {
                    name: 'Dippam Dappam',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/j64M3CACcr4/maxresdefault.jpg',
                    audio: 'sngs/Dippam-Dappam.mp3',
                    duration: '3:29'
                },
                {
                    name: 'Enai Saaithaalae',
                    author: 'Harris Jayaraj',
                    img: 'https://i.ytimg.com/vi/_bxew-fyMno/maxresdefault.jpg',
                    audio: 'sngs/Enai-Saaithaalae.mp3',
                    duration: '5:32'
                },
                {
                    name: 'Engadi Poradha',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/JC-dyvErlNk/hqdefault.jpg',
                    audio: 'sngs/Engadi-Porandha.mp3',
                    duration: '3:25'
                },
                {
                    name: 'Enna Solla Pogirai',
                    author: 'Shankar Mahadevan',
                    img: 'https://i.ytimg.com/vi/FBjZ-wf3U2s/maxresdefault.jpg',
                    audio: 'sngs/Enna-Solla-Pogirai.mp3',
                    duration: '6:00'
                },
                {
                    name: 'Ennai Kollathey',
                    author: '',
                    img: 'https://i.ytimg.com/vi/UeRjhmDS4fk/maxresdefault.jpg',
                    audio: 'sngs/Ennai_Kollathey.mp3',
                    duration: '5:27'
                },
                {
                    name: 'Ennodu Nee Erunthal',
                    author: 'ARR',
                    img: 'https://static.toiimg.com/thumb/msid-68097709,width-1280,resizemode-4/68097709.jpg',
                    audio: 'sngs/Ennodu-Nee-Irundhal.mp3',
                    duration: '5:53'
                },
                {
                    name: 'Epodhum Unmael Nyabagam',
                    author: 'Vijay Prakash',
                    img: 'https://i.ytimg.com/vi/K-asBpbZfQw/maxresdefault.jpg',
                    audio: 'sngs/Epodhum Unmael Nyabagam.mp3',
                    duration: '4:51'
                },
                {
                    name: 'Ethir Neechal',
                    author: 'Hip Hop Tamizha, Honey Singh, Anirudh',
                    img: 'https://i.ytimg.com/vi/GrQMQZ9BwP4/maxresdefault.jpg',
                    audio: 'sngs/Ethir Neechal.mp3',
                    duration: '4:31'
                },
                {
                    name: 'High On Love',
                    author: 'Yuvan Shankar Raja',
                    img: 'https://i.ytimg.com/vi/jp0n4TPfA5A/maxresdefault.jpg',
                    audio: 'sngs/High On Love.mp3',
                    duration: '4:00'
                },
                {
                    name: 'Hosanna',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/G-efshwhE5o/maxresdefault.jpg',
                    audio: 'sngs/Hosanna.mp3',
                    duration: '5:31'
                },
                {
                    name: 'Idhazhin Oram',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/G-efshwhE5o/maxresdefault.jpg',
                    audio: 'sngs/Idhazhin Oram.mp3',
                    duration: '3:25'
                },
                {
                    name: 'Idhu Naal',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/G-efshwhE5o/maxresdefault.jpg',
                    audio: 'sngs/Idhu-Naal.mp3',
                    duration: '3:39'
                },
                {
                    name: 'Indru Netru Naalai',
                    author: 'Hip Hop Tamizha',
                    img: 'https://static.toiimg.com/photo/msid-47830888/47830888.jpg?50439',
                    audio: 'sngs/Indru-Netru-Naalai.mp3',
                    duration: '3:35'
                },
                {
                    name: 'June Pona',
                    author: 'Harris Jayaraj',
                    img: 'https://i.ytimg.com/vi/guNyGtJ8d6g/maxresdefault.jpg',
                    audio: 'sngs/June Pona.mp3',
                    duration: '6:01'
                },
                {
                    name: 'Kattu Sirukki',
                    author: 'ARR',
                    img: 'https://i.ytimg.com/vi/F-FoKUktz9k/maxresdefault.jpg',
                    audio: 'sngs/Kaattu-Sirukki.mp3',
                    duration: '5:52'
                },
                {
                    name: 'Kadhal Kappal Kanna Katti Siricha',
                    author: 'Santhosh Narayanan',
                    img: 'https://www.videosforstatus.com/wp-content/uploads/2023/04/Kadhal_Kappal_Song-1.jpeg',
                    audio: 'sngs/Kadhal Kappal Kanna Katti Siricha.mp3',
                    duration: '4:03'
                },
                {
                    name: 'Kadhal Oru Aagayam',
                    author: 'Hip Hop Tamizha, Teejay',
                    img: 'https://i.ytimg.com/vi/u_R8leZ1Pu8/maxresdefault.jpg',
                    audio: 'sngs/Kadhal Oru Aagayam.mp3',
                    duration: '2:42'
                },
                {
                    name: 'Kadhal Psycho',
                    author: 'Anirudh',
                    img: 'https://i.ytimg.com/vi/I94Bs9BSg90/maxresdefault.jpg',
                    audio: 'sngs/Kadhal Psycho.mp3',
                    duration: '2:12'
                },
                {
                    name: 'Kadhal Aasai',
                    author: 'Yuvan Shankar Raja',
                    img: 'https://www.tamil2lyrics.com/wp-content/uploads/2017/02/anjaan-songs.jpg',
                    audio: 'sngs/Kadhal-Aasai.mp3',
                    duration: '5:04'
                },
                {
                    name: 'Kakidha Kappal',
                    author: 'Santhosh Narayanan',
                    img: 'https://www.varigal.com/upload/movies/madras-2014.jpg',
                    audio: 'sngs/Kakidha Kappal.mp3',
                    duration: '3:33'
                },
                {
                    name: 'Visiri',
                    author: 'ARR',
                    img: 'https://static.toiimg.com/thumb/msid-65158904,width-1280,resizemode-4/65158904.jpg',
                    audio: 'sngs/Visiri -Masstamilan.In.mp3',
                    duration: '3:31'
                },],
            pause: false
        });
        _defineProperty(this, "changeCurrentTime",
            e => {
                const duration = this.playerRef.duration;

                const playheadWidth = this.timelineRef.offsetWidth;
                const offsetWidht = this.timelineRef.offsetLeft;
                const userClickWidht = e.clientX - offsetWidht;

                const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

                this.playheadRef.style.width = userClickWidhtInPercent + "%";
                this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
            });

        _defineProperty(this, "hoverTimeLine",

            e => {
                const duration = this.playerRef.duration;

                const playheadWidth = this.timelineRef.offsetWidth;

                const offsetWidht = this.timelineRef.offsetLeft;
                const userClickWidht = e.clientX - offsetWidht;
                const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

                if (userClickWidhtInPercent <= 100) {
                    this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
                }

                const time = duration * userClickWidhtInPercent / 100;

                if (time >= 0 && time <= duration) {
                    this.hoverPlayheadRef.dataset.content = this.formatTime(time);
                }
            });

        _defineProperty(this, "resetTimeLine",

            () => {
                this.hoverPlayheadRef.style.width = 0;
            });
        _defineProperty(this, "timeUpdate",

            () => {
                const duration = this.playerRef.duration;
                const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
                const playPercent = 100 * (this.playerRef.currentTime / duration);
                this.playheadRef.style.width = playPercent + "%";
                const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
                this.setState({
                    currentTime
                });

            });

        _defineProperty(this, "formatTime",

            currentTime => {
                const minutes = Math.floor(currentTime / 60);
                let seconds = Math.floor(currentTime % 60);

                seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

                const formatTime = minutes + ":" + seconds;

                return formatTime;
            });

        _defineProperty(this, "updatePlayer",

            () => {
                const {
                    musicList,
                    index
                } = this.state;
                const currentSong = musicList[index];
                const audio = new Audio(currentSong.audio);
                this.playerRef.load();
            });

        _defineProperty(this, "nextSong",

            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;

                this.setState({
                    index: (index + 1) % musicList.length
                });

                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });

        _defineProperty(this, "prevSong",

            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;

                this.setState({
                    index: (index + musicList.length - 1) % musicList.length
                });

                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });

        _defineProperty(this, "playOrPause",


            () => {
                const {
                    musicList,
                    index,
                    pause
                } = this.state;
                const currentSong = musicList[index];
                const audio = new Audio(currentSong.audio);
                if (!this.state.pause) {
                    this.playerRef.play();
                } else {
                    this.playerRef.pause();
                }
                this.setState({
                    pause: !pause
                });

            });

        _defineProperty(this, "clickAudio",

            key => {
                const {
                    pause
                } = this.state;

                this.setState({
                    index: key
                });


                this.updatePlayer();
                if (pause) {
                    this.playerRef.play();
                }
            });
    }
    componentDidMount() {
        this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
        this.playerRef.addEventListener("ended", this.nextSong, false);
        this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
        this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
        this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
    }
    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
    }


    render() {
        const {
            musicList,
            index,
            currentTime,
            pause
        } = this.state;
        const currentSong = musicList[index];
        return (
            React.createElement("div", {
                    className: "card"
                },
                React.createElement("div", {
                        className: "current-song"
                    },
                    React.createElement("audio", {
                            ref: ref => this.playerRef = ref
                        },
                        React.createElement("source", {
                            src: currentSong.audio,
                            type: "audio/ogg"
                        }), "Your browser does not support the audio element."),


                    React.createElement("div", {
                            className: "img-wrap"
                        },
                        React.createElement("img", {
                            src: currentSong.img
                        })),

                    React.createElement("span", {
                        className: "song-name"
                    }, currentSong.name),
                    React.createElement("span", {
                        className: "song-autor"
                    }, currentSong.author),

                    React.createElement("div", {
                            className: "time"
                        },
                        React.createElement("div", {
                            className: "current-time"
                        }, currentTime),
                        React.createElement("div", {
                            className: "end-time"
                        }, currentSong.duration)),


                    React.createElement("div", {
                            ref: ref => this.timelineRef = ref,
                            id: "timeline"
                        },
                        React.createElement("div", {
                            ref: ref => this.playheadRef = ref,
                            id: "playhead"
                        }),
                        React.createElement("div", {
                            ref: ref => this.hoverPlayheadRef = ref,
                            class: "hover-playhead",
                            "data-content": "0:00"
                        })),


                    React.createElement("div", {
                            className: "controls"
                        },
                        React.createElement("button", {
                            onClick: this.prevSong,
                            className: "prev prev-next current-btn"
                        }, React.createElement("i", {
                            className: "fas fa-backward"
                        })),

                        React.createElement("button", {
                                onClick: this.playOrPause,
                                className: "play current-btn"
                            },

                            !pause ? React.createElement("i", {
                                className: "fas fa-play"
                            }) :
                            React.createElement("i", {
                                class: "fas fa-pause"
                            })),


                        React.createElement("button", {
                            onClick: this.nextSong,
                            className: "next prev-next current-btn"
                        }, React.createElement("i", {
                            className: "fas fa-forward"
                        })))),



                React.createElement("div", {
                        className: "play-list"
                    },
                    musicList.map((music, key = 0) =>
                        React.createElement("div", {
                                key: key,
                                onClick: () => this.clickAudio(key),
                                className: "track " + (
                                    index === key && !pause ? 'current-audio' : '') + (
                                    index === key && pause ? 'play-now' : '')
                            },

                            React.createElement("img", {
                                className: "track-img",
                                src: music.img
                            }),
                            React.createElement("div", {
                                    className: "track-discr"
                                },
                                React.createElement("span", {
                                    className: "track-name"
                                }, music.name),
                                React.createElement("span", {
                                    className: "track-author"
                                }, music.author)),

                            React.createElement("span", {
                                    className: "track-duration"
                                },
                                index === key ?
                                currentTime :
                                music.duration))))));


    }
}


ReactDOM.render(
    React.createElement(CardProfile, null),
    document.getElementById('root'));
