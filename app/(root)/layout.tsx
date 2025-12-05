import ComponentLoader from "../components/ComponentLoader";

export default function HomeLayout({ children }: {children: React.ReactNode}) {
  return (
      <>
        <ComponentLoader />
        {children}
      </>
  );
}


// Create a component loader component, it checks whether a component should be loaded.
// Use pathname to check if the pathname matches
// If it does, 