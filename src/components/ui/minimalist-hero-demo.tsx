import React from 'react';
// Note: lucide-react intentionally ships only generic icons, not
// trademarked brand logos — Facebook/Instagram/Twitter/Linkedin do not
// exist in the package, so this generic demo uses the closest neutral
// equivalents. The real site usage (HeroSection.tsx) uses actual brand
// logos from @phosphor-icons/react instead.
import { Globe, Camera, MessageCircle, Link2 } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: Globe, href: '#' },
    { icon: Camera, href: '#' },
    { icon: MessageCircle, href: '#' },
    { icon: Link2, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;
