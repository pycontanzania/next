import Image from "next/image";

// //Sample Images
// import picOne from '../../public/img/profile-picture-1.jpg';
// import picTwo from '../../public/img/profile-picture-2.jpg';
// import picThree from '../../public/img/profile-picture-3.jpg';
// import picFour from '../../public/img/profile-picture-4.jpg';
// import picFive from '../../public/img/profile-picture-5.jpg';
// import picSix from '../../public/img/profile-picture-6.jpg';
// import picSeven from '../../public/img/profile-picture-7.jpg';
// import picEight from '../../public/img/profile-picture-8.jpg';
// import picNine from '../../public/img/profile-picture-9.jpg';
// import picTen from '../../public/img/profile-picture-10.jpg';



// const speakers = [
//     {
//         id:1,
//         name:'John Doe',
//         expertise: 'Software Developer',
//         image: picOne
//     },
//     {
//         id:2,
//         name:'James Clark',
//         expertise: 'AI Enthusiast',
//         image: picTwo
//     },
//     {
//         id:3,
//         name:'Bonnie Green',
//         expertise: 'Visual Designer',
//         image: picThree
//     },
//     {
//         id:4,
//         name:'Matheus John',
//         expertise: 'Data Scientist',
//         image: picFour
//     },
//     {
//         id:5,
//         name:'Jane Doe',
//         expertise: 'Python Developer',
//         image: picFive
//     },
//     {
//         id:6,
//         name:'Andrew Nguyen',
//         expertise: 'ML & Robotics Engineer',
//         image: picSix
//     },
//     {
//         id:7,
//         name:'Steve Code',
//         expertise: 'Django Developer',
//         image: picSeven
//     },
//     {
//         id:8,
//         name:'Mary Jackson',
//         expertise: 'AI Engineer',
//         image: picEight
//     },
//     {
//         id:9,
//         name:'Jefferson Khaleed',
//         expertise: 'Senior Data Scientist',
//         image: picNine
//     },
//     {
//         id:10,
//         name:'Steve Harry',
//         expertise: 'Cyber Engineer',
//         image: picTen
//     }
//    ]


function Speakers({speakers}) {
    return (
      <section>
         <h1 className="text-4xl font-bold font-base text-center">Speakers</h1>
         <hr className="block h-px w-1/4 md:w-1/12 mt-4 mx-auto border-green-800" />

          <div className="my-20 grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {speakers.map(speaker => (
            <div key={speaker.id} className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                     <div className="relative my-8 h-24 w-24">
                     <Image className="rounded-full shadow-lg" src={speaker.speaker_image} alt={speaker.speaker_name} layout="fill" objectFit='cover'/>
                     </div>
                   
                    <h5 className="mb-1 text-xl font-medium font-base text-gray-900 dark:text-white">{speaker.speaker_name}</h5>
                    <span className="text-sm font-base text-gray-500 dark:text-gray-400">{speaker.speaker_expertise}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium font-base text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Website</a>
                        <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium font-base text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Profile</a>
                    </div>
                </div>
            </div>
         ))}
          </div>
      </section>
    );
}

export default Speakers;