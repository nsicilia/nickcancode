import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/header";

export default function ChromePlugin() {
  return (
    <div className="min-h-screen bg-ncc-dark pb-16 text-white">
      <Head>
        <title>Rename Anything-inator | nickcancode</title>
        <meta
          name="description"
          content="Give web page labels and Chrome tabs names that make sense to you."
        />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <Navbar />
      <article className="mx-auto w-11/12 pt-12 md:w-3/4 md:pt-16">
        <header className="mb-8 max-w-3xl space-y-4">
          <p className="font-mono font-semibold text-ncc-bakermiller">
            Chrome extension
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Rename Anything-inator
          </h1>
          <p className="font-mono leading-relaxed">
            Give buttons, labels, and browser tabs names that make sense to you.
            Your renames are saved in Chrome and reappear the next time you visit.
          </p>
        </header>

        <Image
          src="/chromeplugin/before-after.png"
          alt="The same web page before and after its text is renamed."
          width={1280}
          height={800}
          sizes="(min-width: 768px) 75vw, 92vw"
          className="h-auto w-full rounded-3xl"
          priority
        />

        <div className="mt-10 grid gap-8 font-mono leading-relaxed md:grid-cols-2">
          <section aria-labelledby="page-text">
            <h2 id="page-text" className="mb-2 font-serif text-2xl">
              Rename page text
            </h2>
            <p>
              Right-click a label and choose <strong>Edit page text…</strong>.
              Save your wording and the extension will use it whenever you
              return to that URL.
            </p>
          </section>
          <section aria-labelledby="tab-titles">
            <h2 id="tab-titles" className="mb-2 font-serif text-2xl">
              Name your tabs
            </h2>
            <p>
              Choose <strong>Rename this tab…</strong> from the extension&apos;s
              context menu. Use one title for an exact URL or apply it to an
              entire section of a site.
            </p>
          </section>
        </div>

        <Link
          href="/chromeplugin/privacy-policy"
          className="mt-10 inline-block font-mono underline underline-offset-4 hover:text-ncc-bakermiller"
        >
          Privacy policy
        </Link>
      </article>
    </div>
  );
}
