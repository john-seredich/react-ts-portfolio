const links = ["About", "Projects", "Contact", "Resumé"];
export const linkElements = links.map((link: string) => {
  return (
    <li key={link}>
      <a style={{ textDecoration: "none", color: "#dadada" }} href={`#${link}`}>
        {link}
      </a>
    </li>
  );
});
