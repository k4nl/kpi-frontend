import Nav from "@/components/Nav/";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Nav>
      {children}
    </Nav>
  );
};

export default SiteLayout;