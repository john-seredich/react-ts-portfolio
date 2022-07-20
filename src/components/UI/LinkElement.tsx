const links = ["About", "Projects", "Contact", "Resume"];
export const linkElements = links.map((link: string) => {
  return <li key={link}>{link}</li>;
});
