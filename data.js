var imageData = [];
if(!localStorage.getItem('data')){
   imageData = [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://picsum.photos/200/300?random=1",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://picsum.photos/200/300?random=2",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://picsum.photos/200/300?random=3",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          "url": "https://picsum.photos/200/300?random=4",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "natus nisi omnis corporis facere molestiae rerum in",
          "url": "https://picsum.photos/200/300?random=5",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
          "albumId": 1,
          "id": 6,
          "title": "accusamus ea aliquid et amet sequi nemo",
          "url": "https://picsum.photos/200/300?random=6",
          "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
          "albumId": 1,
          "id": 7,
          "title": "officia delectus consequatur vero aut veniam explicabo molestias",
          "url": "https://picsum.photos/200/300?random=7",
          "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
          "albumId": 1,
          "id": 8,
          "title": "aut porro officiis laborum odit ea laudantium corporis",
          "url": "https://picsum.photos/200/300?random=8",
          "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
          "albumId": 1,
          "id": 9,
          "title": "qui eius qui autem sed",
          "url": "https://picsum.photos/200/300?random=9",
          "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
          "albumId": 1,
          "id": 10,
          "title": "beatae et provident et ut vel",
          "url": "https://picsum.photos/200/300?random=10",
          "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        },
        {
          "albumId": 1,
          "id": 11,
          "title": "nihil at amet non hic quia qui",
          "url": "https://picsum.photos/200/300?random=11",
          "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
        },
        {
          "albumId": 1,
          "id": 12,
          "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
          "url": "https://picsum.photos/200/300?random=12",
          "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
        },
        {
          "albumId": 1,
          "id": 13,
          "title": "repudiandae iusto deleniti rerum",
          "url": "https://picsum.photos/200/300?random=13",
          "thumbnailUrl": "https://via.placeholder.com/150/197d29"
        },
        {
          "albumId": 1,
          "id": 14,
          "title": "est necessitatibus architecto ut laborum",
          "url": "https://picsum.photos/200/300?random=14",
          "thumbnailUrl": "https://via.placeholder.com/150/61a65"
        },
        {
          "albumId": 1,
          "id": 15,
          "title": "harum dicta similique quis dolore earum ex qui",
          "url": "https://picsum.photos/200/300?random=15",
          "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
        },
        {
          "albumId": 1,
          "id": 16,
          "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
          "url": "https://picsum.photos/200/300?random=16",
          "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
        },
        {
          "albumId": 1,
          "id": 17,
          "title": "natus doloribus necessitatibus ipsa",
          "url": "https://picsum.photos/200/300?random=17",
          "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
        },
        {
          "albumId": 1,
          "id": 18,
          "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
          "url": "https://picsum.photos/200/300?random=18",
          "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
        },
        {
          "albumId": 1,
          "id": 19,
          "title": "perferendis nesciunt eveniet et optio a",
          "url": "https://picsum.photos/200/300?random=19",
          "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
        },
        {
          "albumId": 1,
          "id": 20,
          "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
          "url": "https://picsum.photos/200/300?random=20",
          "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
        },
        {
          "albumId": 1,
          "id": 21,
          "title": "ad et natus qui",
          "url": "https://picsum.photos/200/300?random=21",
          "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
        },
        {
          "albumId": 1,
          "id": 22,
          "title": "et ea illo et sit voluptas animi blanditiis porro",
          "url": "https://picsum.photos/200/300?random=22",
          "thumbnailUrl": "https://via.placeholder.com/150/45601a"
        },
        {
          "albumId": 1,
          "id": 23,
          "title": "harum velit vero totam",
          "url": "https://picsum.photos/200/300?random=23",
          "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
        },
        {
          "albumId": 1,
          "id": 24,
          "title": "beatae officiis ut aut",
          "url": "https://picsum.photos/200/300?random=24",
          "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
        },
        {
          "albumId": 1,
          "id": 25,
          "title": "facere non quis fuga fugit vitae",
          "url": "https://picsum.photos/200/300?random=25",
          "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
        },
        {
          "albumId": 1,
          "id": 26,
          "title": "asperiores nobis voluptate qui",
          "url": "https://picsum.photos/200/300?random=26",
          "thumbnailUrl": "https://via.placeholder.com/150/474645"
        },
        {
          "albumId": 1,
          "id": 27,
          "title": "sit asperiores est quos quis nisi veniam error",
          "url": "https://picsum.photos/200/300?random=27",
          "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
        },
        {
          "albumId": 1,
          "id": 28,
          "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
          "url": "https://picsum.photos/200/300?random=28",
          "thumbnailUrl": "https://via.placeholder.com/150/392537"
        },
        {
          "albumId": 1,
          "id": 29,
          "title": "aut ipsam quos ab placeat omnis",
          "url": "https://picsum.photos/200/300?random=29",
          "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
        },
        {
          "albumId": 1,
          "id": 30,
          "title": "odio enim voluptatem quidem aut nihil illum",
          "url": "https://picsum.photos/200/300?random=30",
          "thumbnailUrl": "https://via.placeholder.com/150/372c93"
        },
        {
          "albumId": 1,
          "id": 31,
          "title": "voluptate voluptates sequi",
          "url": "https://picsum.photos/200/300?random=31",
          "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
        },
        {
          "albumId": 1,
          "id": 32,
          "title": "ad enim dignissimos voluptatem similique",
          "url": "https://picsum.photos/200/300?random=32",
          "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
        },
        {
          "albumId": 1,
          "id": 33,
          "title": "culpa ipsam nobis qui fuga magni et mollitia",
          "url": "https://picsum.photos/200/300?random=33",
          "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
        },
        {
          "albumId": 1,
          "id": 34,
          "title": "vitae est facere quia itaque adipisci perferendis id maiores",
          "url": "https://picsum.photos/200/300?random=35",
          "thumbnailUrl": "https://via.placeholder.com/150/35185e"
        },
        {
          "albumId": 1,
          "id": 35,
          "title": "tenetur minus voluptatum et",
          "url": "https://picsum.photos/200/300?random=36",
          "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
        },
        {
          "albumId": 1,
          "id": 36,
          "title": "expedita rerum eaque",
          "url": "https://picsum.photos/200/300?random=37",
          "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
        },
        {
          "albumId": 1,
          "id": 37,
          "title": "totam voluptas iusto deserunt dolores",
          "url": "https://picsum.photos/200/300?random=38",
          "thumbnailUrl": "https://via.placeholder.com/150/ea51da"
        },
        {
          "albumId": 1,
          "id": 38,
          "title": "natus magnam iure rerum pariatur molestias dolore nisi",
          "url": "https://picsum.photos/200/300?random=39",
          "thumbnailUrl": "https://via.placeholder.com/150/4f5b8d"
        },
        {
          "albumId": 1,
          "id": 39,
          "title": "molestiae nam ullam et rerum doloribus",
          "url": "https://picsum.photos/200/300?random=40",
          "thumbnailUrl": "https://via.placeholder.com/150/1e71a2"
        },
        {
          "albumId": 1,
          "id": 40,
          "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
          "url": "https://picsum.photos/200/300?random=41",
          "thumbnailUrl": "https://via.placeholder.com/150/3a0b95"
        }];

}
else{
    imageData = JSON.parse(localStorage.getItem('data'));
}

localStorage.setItem('data', JSON.stringify(imageData))