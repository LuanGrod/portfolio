interface PageProps {
  children: React.ReactNode
}

export default async function Page({ children }: PageProps) {
  return <>{children}</>
}
