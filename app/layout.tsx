import Header from '@/components/Header'
import './globals.css'
import Provider from '@/app/_trpc/Provider'
// import Footer from '@/components/Footer'

export const metadata = {
  title: 'PermitFlow Application Process',
  description: 'Start your Permit Process with PermitFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className="m-0 p-0 bg-rgb(233, 241, 249) flex justify-center">
        <div className='p-3 bg-white shadow-lg rounded-lg w-200 mt-12'>
          <Provider>
            {children}
          </Provider>
        </div>
      </body>
      {/* <Footer /> */}
    </html>
  )
}
