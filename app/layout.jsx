import "./globals.css";

export const metadata = {
  title: "ইশলাহুত তালিম ক্যাডেট মাদ্রাসা বাংলাদেশ",
  description:
    "ইশলাহুত তালিম ক্যাডেট মাদ্রাসা - আখিরাতের সফলতার কুরআনি যাত্রা এখানেই শুরু হোক।",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="bn">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
