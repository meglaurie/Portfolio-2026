
interface SocialIconProps {
  href: string;
  icon: [string, string];
}

const SocialIcon = ({ href }: SocialIconProps) => (
  <a href={href} className="icon">
  </a>
);

export default SocialIcon;