import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialIconProps {
  href: string;
  icon: [string, string];
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a href={href} className="icon">
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default SocialIcon;