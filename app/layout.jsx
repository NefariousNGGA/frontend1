export const metadata = {
  title: "Admin Panel"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
