"use client";
import ResponsiveDrawer from "../../../packages/ui/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ResponsiveDrawer window={undefined} />
        {children}
      </body>
    </html>
  );
}
