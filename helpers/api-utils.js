

export async function getAllSpeakers(){
   const response = await fetch('http://pycon.fuadhabib.xyz/speakers');
   const data = response.json();

   return data;
 
}



export async function getGalleryImages(){
   const response = await fetch('http://pycon.fuadhabib.xyz/gallery');
   const data = response.json();

   return data;
 
}

const DUMMY_SPEAKERS = [
   {
      "id": 3,
      "name": "Mojo",
      "expertise": "Electronics",
      "year": 2022,
      "topic": "Improving Embedded Systems in Tanzania",
      "email": "mojo@duck.com",
      "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/Picsart_22-09-15_07-09-37-761_khcaa7",
      "status": "Pending",
      "profile": "",
      "website": ""
  },
  {
      "id": 4,
      "name": "Zephrania",
      "expertise": "Data Science",
      "year": 2022,
      "topic": "ML in Tanzania",
      "email": "zeph@gmail.com",
      "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/zephania_gcpdst",
      "status": "Pending",
      "profile": null,
      "website": null
  },
  {
      "id": 5,
      "name": "Albert",
      "expertise": "UI/UX",
      "year": 2022,
      "topic": "How to be a good Frontend Dev",
      "email": "albert@gmail.com",
      "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/66664314_thvxbi",
      "status": "Pending",
      "profile": null,
      "website": null
  },
  {
      "id": 6,
      "name": "Mtuchi",
      "expertise": "Frontend Developer",
      "year": 2022,
      "topic": "Contributing To Open Source",
      "email": "mtuchi@gmail.com",
      "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/mtuchi_ziciao",
      "status": "Pending",
      "profile": null,
      "website": null
  },
  {
      "id": 7,
      "name": "Mtuchi",
      "expertise": "Frontend Developer",
      "year": 2021,
      "topic": "Contributing To Open Source",
      "email": "mtuchi@gmail.com",
      "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/mtuchi_ziciao",
      "status": "Pending",
      "profile": null,
      "website": null
  },
  {
   "id": 8,
   "name": "Zephrania",
   "expertise": "Data Science",
   "year": 2021,
   "topic": "ML in Tanzania",
   "email": "zeph@gmail.com",
   "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/zephania_gcpdst",
   "status": "Pending",
   "profile": null,
   "website": null
},
{
   "id":9,
   "name": "Albert",
   "expertise": "UI/UX",
   "year": 2020,
   "topic": "How to be a good Frontend Dev",
   "email": "albert@gmail.com",
   "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/66664314_thvxbi",
   "status": "Pending",
   "profile": null,
   "website": null
},
{
   "id": 11,
   "name": "Mojo",
   "expertise": "Electronics",
   "year": 2020,
   "topic": "Improving Embedded Systems in Tanzania",
   "email": "mojo@duck.com",
   "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/Picsart_22-09-15_07-09-37-761_khcaa7",
   "status": "Pending",
   "profile": "",
   "website": ""
},
{
   "id": 10,
   "name": "Mojo",
   "expertise": "Electronics",
   "year": 2019,
   "topic": "Improving Embedded Systems in Tanzania",
   "email": "mojo@duck.com",
   "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/Picsart_22-09-15_07-09-37-761_khcaa7",
   "status": "Pending",
   "profile": "",
   "website": ""
},
{
   "id": 12,
   "name": "Zephrania",
   "expertise": "Data Science",
   "year": 2019,
   "topic": "ML in Tanzania",
   "email": "zeph@gmail.com",
   "image": "https://res.cloudinary.com/pycontz/image/upload/v1/media/zephania_gcpdst",
   "status": "Pending",
   "profile": null,
   "website": null
},
];


export function getSpeakersByYear(year){
   return DUMMY_SPEAKERS.filter((speaker) => speaker.year === year);
}