// src/components/Footer/FooterList.tsx
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faGithub, faFacebook, faTelegram, faGoogle} from '@fortawesome/free-brands-svg-icons';

export interface Contact {
    name: string;
    href: string;
    icon: IconDefinition;
}

export const footerList: Contact[] = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/leorjini',
    icon: faInstagram,
},
{
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/oleksii-kozyrev-106b37261',
    icon: faLinkedin,
},
{
    name: 'github',
    href: 'https://github.com/0leks11',
    icon: faGithub,
},
{
    name: 'facebook',
    href: 'https://www.facebook.com/faa.hfvptc',
    icon: faFacebook,
},
{
    name: 'telegram',
    href: 'https://t.me/Leorjini',
    icon: faTelegram,
},
{
    name: 'google',
    href: 'mailto:ak.kozyrev01@gmail.com',
    icon: faGoogle,
},
// {
//     name: 'upwork',
//     href: 'https://www.upwork.com/freelancers/~0148d6dc0e1c6905ee',
//     icon: faUpwork,
// },
];