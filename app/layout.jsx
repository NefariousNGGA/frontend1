export const metadata = {
  title: "Unsaid Thoughts",
  description: "Magic ba 'yan, nanlalambot ako sa’yo ah."
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}