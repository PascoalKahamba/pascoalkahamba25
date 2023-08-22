import { Box } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const footLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Página Inicial", link: "Pascoal" },
      { label: "Sobre", link: "Pascoal" },
      { label: "Jornada", link: "Pascoal" },
      { label: "Projetos", link: "Pascoal" },
      { label: "Contatos", link: "Pascoal" },
    ],
  },
  {
    title: "Tecnologias",
    links: [
      { label: "JavaScript", link: "Pascoal" },
      { label: "TypeScript", link: "Pascoal" },
      { label: "React.js", link: "Pascoal" },
      { label: "Next.js", link: "Pascoal" },
    ],
  },
  {
    title: "Jornada",
    links: [
      { label: "2023", link: "Pascoal" },
      { label: "2022", link: "Pascoal" },
      { label: "2021", link: "Pascoal" },
      { label: "2020", link: "Pascoal" },
    ],
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box component="section">
      <HeaderMegaMenu />
      {children}
      <FooterLinks data={footLinks} />
    </Box>
  );
};

export default Layout;
