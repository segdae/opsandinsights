// Isolate the studio from the site layout by covering the full viewport.
// The root layout (Navbar + Footer) sits underneath at z-50 and below.
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[60] bg-white">
      {children}
    </div>
  );
}
