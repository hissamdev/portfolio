import ComponentLoader from "../components/ComponentLoader";
import Footer from "../components/nav-ui/Footer";

export default function HomeLayout({ children }: {children: React.ReactNode}) {
  return (
      <>
        <ComponentLoader />
        {children}
        <Footer />
      </>
  );
}


// Create a component loader component, it checks whether a component should be loaded.
// Use pathname to check if the pathname matches
// If it does, 