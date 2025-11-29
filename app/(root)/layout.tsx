import Header from "../components/nav-ui/Header";

export default function HomeLayout({ children }: {children: React.ReactNode;}) {
  return (
      <>
        <Header />
        {children}
      </>
  );
}