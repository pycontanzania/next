

export async function getAllSpeakers(){
   const response = await fetch('http://pycon.fuadhabib.xyz/speakers/');
   const data = response.json();

  return data;
 
}


export async function getCurrentSpeakers(){
   const speakers = await getAllSpeakers();
   const current_speakers = speakers.filter(speaker => speaker.year === 2022) ?? [];
   return current_speakers;
}

export async function getSpeakersByYear(year){
   const speakers = await getAllSpeakers();
   const yearSpeakers =  speakers.filter((speaker) => speaker.year === year);

   return yearSpeakers;
}


export async function getAllGalleryImages(){
   const response = await fetch('http://pycon.fuadhabib.xyz/gallery');
   const data = response.json();

   return data;
}

export async function getCurrentImages(){
   const images = await getAllGalleryImages();
   const current_images = images.filter((image) => image.year === 2021);

   return current_images;
}

export async function getImagesByYear(year){
   const images = await getAllGalleryImages();
   const yearImages =  images.filter((image) => image.year === year);

   return yearImages;
}

