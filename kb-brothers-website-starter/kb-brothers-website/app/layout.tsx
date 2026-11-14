import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'KB Brothers | Toyota Revo & Fortuner Parts',description:'Genuine, OEM and aftermarket Toyota Revo and Fortuner spare parts in Pakistan.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
