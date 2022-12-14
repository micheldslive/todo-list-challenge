import { metaConfigs } from 'mocks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { memo } from 'react'

const Metas = () => {
  const router = useRouter()
  const { description, locale, siteName, title, url } = metaConfigs

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/em.png`}
          key="apple"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          locale,
          site_name: siteName
        }}
      />
    </>
  )
}

export default memo(Metas)
