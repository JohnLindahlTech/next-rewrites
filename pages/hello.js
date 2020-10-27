import {useRouter} from 'next/router';

export default function Hello() {
  const {locale} = useRouter();
  return (
    <div>
      <p>Hello in {locale}</p>
      <p><a href="/hej">Hej in sv (broken)</a></p>
      
      <p><a href="/sv/hello">Hello in sv</a></p>
      <p><a href="/en/hello">Hello in en</a></p>
    </div>
  )
}
