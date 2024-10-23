import React from 'react';
import ProfileCard from '../component/ProfileCard';

export default function Profile() {
    const members = [
        {
          name: 'Wadimore',
          followers: 666,
          link: 'https://github.com/Wadimore',
          img: 'https://avatars.githubusercontent.com/u/114788071?v=4', // contoh URL gambar dari GitHub
        },
        {
            name: 'AlexBahrus',
            followers: 1945,
            link: 'https://github.com/AlexBahrus',
            img: 'https://avatars.githubusercontent.com/u/129831143?v=4', // contoh URL gambar dari GitHub
        },
        {
            name: 'Salmanars',
            followers: 69,
            link: 'https://github.com/Salmanars',
            img: 'https://avatars.githubusercontent.com/u/133742994?v=4', // contoh URL gambar dari GitHub
         },
        // Tambahkan anggota lain di sini
  ];

  return (
    <div className="profileContainer">
      {members.map((member) => (
        <ProfileCard
          key={member.name}
          name={member.name}
          followers={member.followers}
          link={member.link}
          img={member.img}
        />
      ))}
      <div className="footerSpace"></div> {/* Tambahkan ruang di bawah */}
    </div>
  );
}
