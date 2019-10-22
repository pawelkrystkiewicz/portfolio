import Link from 'next/link'
export default () => (
  <div>
    Hello World.{' '}
    <Link href='/about' as={'/about'}>
      <a>About</a>
    </Link>
  </div>
)
