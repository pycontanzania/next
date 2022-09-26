

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