import Image from 'next/image';
import React from 'react';
import { IProfilePic } from '../interfaces/about/index';


//Profile Pic Reuseable Function  - calls
export function ProfilePic_Component(src?: string, width?: number, height?: number, alt?: string) {
  return (
    <div>
      <ProfilePic src={src} width={width} height={height} alt={alt} />
    </div>
  );
}

function ProfilePic({ src, width, height, alt }: IProfilePic) {
  const resolvedSrc = src ? process.env.PUBLIC_URL + src : 'vercel.svg';

    return (
      <Image
      src={resolvedSrc}
      width={width || 100}
      height={height || 100}
      alt={alt || 'Profile Picture'}
    />
    );
  }
  // Utility function to handle constructing src
function constructSrc(src?: string): string {
  if (src) {
    if (src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    } else {
      return process.env.PUBLIC_URL + '/' + src;
    }
  }
  return 'default-profilePic.png';
}

