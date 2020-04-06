// node modules
import React from 'react';
// local modules
import { Link } from './SocialLink.styled';

interface SocialLinkProps {
  href: string;
  icon: string;
}
const SocialLink = (props: SocialLinkProps) => {
  return (
    <Link href={props.href} target="_blank" rel="noopener noreferrer">
      <span className={props.icon + ' fa-2x'} />
    </Link>
  );
};
export default SocialLink;
