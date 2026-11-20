import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/header";

export default function ChromePluginPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ncc-dark pb-16 text-white">
      <Head>
        <title>Rename Anything-inator Privacy Policy | nickcancode</title>
        <meta
          name="description"
          content="How the Rename Anything-inator Chrome extension handles and stores your rename rules."
        />
        <link rel="icon" href="/nickcancodeicon.svg" />
      </Head>
      <Navbar />
      <article className="mx-auto w-11/12 max-w-3xl space-y-8 pt-12 font-mono leading-relaxed md:pt-16">
        <header className="space-y-4">
          <Link
            href="/chromeplugin"
            className="inline-block text-ncc-bakermiller underline underline-offset-4 hover:text-white"
          >
            Rename Anything-inator
          </Link>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Privacy policy
          </h1>
          <p>
            Rename Anything-inator processes data locally in your Chrome profile
            to save and reapply the page text and tab titles you choose.
          </p>
        </header>

        <section aria-labelledby="data-used">
          <h2 id="data-used" className="mb-2 font-serif text-2xl">
            Data the extension uses
          </h2>
          <p>
            The extension checks the current page URL to match saved rules and
            reads the page title to manage tab renames. When you save a page
            text rename, it stores the page URL, the
            original text you selected, its location on the page, and your
            replacement text. A saved tab rename includes the URL, your custom
            title, and whether the rule matches an exact URL or a site path.
            The extension does not maintain a log of pages you visit.
          </p>
        </section>

        <section aria-labelledby="storage-sharing">
          <h2 id="storage-sharing" className="mb-2 font-serif text-2xl">
            Storage and sharing
          </h2>
          <p>
            Saved rules stay in your Chrome profile using local extension
            storage. The extension makes no network requests and uses no
            accounts, cloud sync, analytics, or advertising. The developer does
            not receive, sell, or share your rename data. The extension uses
            this data solely to apply and manage your renames.
          </p>
        </section>

        <section aria-labelledby="delete-data">
          <h2 id="delete-data" className="mb-2 font-serif text-2xl">
            Keeping and deleting your data
          </h2>
          <p>
            Chrome keeps saved rules until you delete them. You can remove
            individual rules in the extension popup under{" "}
            <strong>Your saved renames</strong>. Uninstalling the extension
            removes its local storage.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="mb-2 font-serif text-2xl">
            Contact
          </h2>
          <p>
            For privacy questions, contact{" "}
            <a
              href="https://www.linkedin.com/in/nicholassiciliano/"
              className="underline underline-offset-4 hover:text-ncc-bakermiller"
            >
              Nick Siciliano on LinkedIn
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
