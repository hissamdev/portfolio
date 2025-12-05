export default function ProjectsLayout({ children, slot }: {children: React.ReactNode, slot: React.ReactNode;}) {
  return (
      <>
        {children}
        {slot}
      </>
  );
}