import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>My first attempt</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
