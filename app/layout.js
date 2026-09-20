import './globals.css';
import { Analytics } from '@vercel/analytics/react';
export const metadata={
 title:'HÆ?! — Norwegian for Real Life',
 description:'The Norwegian Survival Guide Nobody Gave You.',
 openGraph:{title:'HÆ?! — Norwegian for Real Life',description:'The Norwegian Survival Guide Nobody Gave You.',images:[{url:'/og-image.jpg',width:1200,height:630}],type:'website'},
 twitter:{card:'summary_large_image',title:'HÆ?! — Norwegian for Real Life',description:'The Norwegian Survival Guide Nobody Gave You.',images:['/og-image.jpg']}
};
export default function RootLayout({children}){return <html lang="en"><body>{children}<Analytics/></body></html>}
